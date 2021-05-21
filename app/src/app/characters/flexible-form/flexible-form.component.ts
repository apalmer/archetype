import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-flexible-form',
  templateUrl: './flexible-form.component.html',
  styleUrls: ['./flexible-form.component.css']
})
export class FlexibleFormComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() controlName: string;
  formGroup: FormGroup;
  keys: string[];

  constructor() { }

  ngOnInit(): void {

    this.control.valueChanges.subscribe(
      x => {
        let root = this.control as FormGroup;
        let childRoot = root.get(this.controlName);
        if (childRoot && childRoot instanceof FormGroup) {
          this.formGroup = childRoot as FormGroup;
        }
        else {
          this.formGroup = root;
        }


      });
  }

  iterate(form: FormGroup) {
    let controls: any[] = [];
    if (this.formGroup) {
      Object.keys(this.formGroup.controls).forEach(key => {
        let control: AbstractControl = this.formGroup.controls[key];
        let isFormGroup: boolean = control instanceof FormGroup;
        controls.push({ name: key, isFormGroup: isFormGroup, control: control })
      });
    }
    return controls;
  }
}
