import { TestBed } from '@angular/core/testing';

import { SchemaEditorService } from './schema-editor.service';

describe('SchemaEditorService', () => {
  let service: SchemaEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemaEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
