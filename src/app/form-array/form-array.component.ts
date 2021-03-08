import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FormArrayValidator } from './form-array.validators';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  bene = 'Beneficiary';
  content = {
    error: 'This is an error.',
  };
  form: FormGroup;
  formError: any = [];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      published: true,
      name: '',
      credentials: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.addCreds();
  }

  get credValues() {
    return this.form.get('credentials') as FormArray;
  }

  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(
      this.fb.group({
        bene: 'Beneficiary',
        username: '',
        password: '',
      })
    );

    creds.controls.forEach((control) => {
      control.valueChanges.subscribe(() => {
        const index = creds.controls.indexOf(control);
        console.log(creds.controls[index].value.username); // logs index of changed item in form array
      });
    });
  }

  removeCred(i) {
    const creds = this.form.controls.credentials as FormArray;
    creds.removeAt(i);
  }

  getContent(i) {
    const creds = this.form.controls.credentials as FormArray;
    if (creds.controls[i].value.username) {
      return creds.controls[i].value.username;
    }

    return 'Beneficiary ' + (i + 1);
  }

  next() {
    const form = this.form;
    const creds = form.controls.credentials as FormArray;

    FormArrayValidator.setValidator(form);

    if (form.valid) {
      alert('Hurry');
    } else {
      const a1 = FormArrayValidator.resolveErrorMethod(form, this.content);
      this.formError = FormArrayValidator.resolveError(creds, this.content, a1);
      //this.formError = a1.push.apply(a2);
      console.log(this.formError);
    }
  }
}
