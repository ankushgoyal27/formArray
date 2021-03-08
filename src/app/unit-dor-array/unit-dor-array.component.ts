import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-unit-dor-array',
  templateUrl: './unit-dor-array.component.html',
  styleUrls: ['./unit-dor-array.component.scss']
})
export class UnitDorArrayComponent{

  name = 'Angular';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fdnUnitPrice: [null],
      cap_values: this.fb.array([this.fb.group({
        name: '',
        fdnTotalShare: '',
      }),
      ])
    })
    this.onValChanges();
  }

  calculate(cap) {
    cap.get('fdnVal').setValue(
      this.form.get('fdnUnitPrice').value * cap.get('fdnTotalShare').value 
    )
  }

  get capValues() {
    return this.form.get('cap_values') as FormArray;
  }

  onValChanges(): void {
    this.form.get('fdnUnitPrice').valueChanges.subscribe((val) => {
      this.capValues.controls.forEach(cap => {
        this.calculate(cap);
      })
    })
  }

  checkValue(event) {
    return String.fromCharCode(event.charCode).match(/^[a-zA-Z\s]*$/) ? event.CharCode : event.preventDefault();
  }


  onSubmit(values) {
    console.log(values);
  }

}
