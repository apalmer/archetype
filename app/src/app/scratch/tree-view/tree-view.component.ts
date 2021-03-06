import { CdkTree, CdkTreeNode, NestedTreeControl, TreeControl, CdkTreeNodeDef } from '@angular/cdk/tree';
import { Component, Injectable, OnInit } from '@angular/core';
import { CollectionViewer, DataSource} from '@angular/cdk/collections';
import { BehaviorSubject, merge, Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
  children: FileNode[];
  filename: string;
  type: any;
}

/**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 */
export class TreeNestedDataSource<T> extends DataSource<T> {
  _data = new BehaviorSubject<T[]>([]);

  /**
   * Data for the nested treee
   */
  get data() { return this._data.value; }
  set data(value: T[]) { this._data.next(value); }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return merge(...[collectionViewer.viewChange, this._data])
      .pipe(map(() => {
        return this.data;
      }));
  }

  disconnect() {
    // no op
  }
}

/**
 * The Json tree data in string. The data could be parsed into Json object
 */
const TREE_DATA = `
  {
    "Documents": {
      "angular": {
        "src": {
          "core": "ts",
          "compiler": "ts"
        }
      },
      "material2": {
        "src": {
          "button": "ts",
          "checkbox": "ts",
          "input": "ts"
        }
      },
      "Tutorial": "html"
    },
    "Downloads": {
        "Tutorial": "html",
        "November": "pdf",
        "October": "pdf"
    },
    "Pictures": {
        "Sun": "png",
        "Woods": "jpg",
        "Photo Booth Library": {
          "Contents": "dir",
          "Pictures": "dir"
        }
    },
    "Applications": {
        "Chrome": "app",
        "Calendar": "app",
        "Webstorm": "app"
    }
  }`;

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(value: any, level: number): FileNode[] {
    const data: any[] = [];
    for (const k in value) {
      if (true) {
        const v = value[k];
        const node = new FileNode();
        node.filename = `${k}`;
        if (v === null || v === undefined) {
          // no action
        } else if (typeof v === 'object') {
          node.children = this.buildFileTree(v, level + 1);
        } else {
          node.type = v;
        }
        data.push(node);
      }
    }
    return data;
  }

  insertFile(node: FileNode) {
    const child = <FileNode>{filename : "foo", type: "bar"};
    node.children.push(child);
    this.dataChange.next(this.data);
  }
}
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  providers: [FileDatabase]
})
export class TreeViewComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: TreeNestedDataSource<FileNode>;

  constructor(private database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new TreeNestedDataSource();

    database.dataChange.subscribe(data => {
      console.log('caught a change');
      this.nestedDataSource.data = data;
    });
  }

  private _getChildren = (node: FileNode) => observableOf(node.children);

  hasNestedChild = (_: number, nodeData: FileNode) => !(nodeData.type);

  addNewItem(node) {
    console.log(node);
    this.database.insertFile(node);
    this.nestedTreeControl.expand(node);
  }
  ngOnInit() {
  }

}
