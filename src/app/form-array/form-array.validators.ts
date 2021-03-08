import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormValidatorFactory } from '../app.validator.factory';

export class FormArrayValidator {
  static setValidator(form) {
    const creds = form.controls.credentials as FormArray;

    creds.controls.forEach((control) => {
      control
        .get('username')
        .setValidators(FormValidatorFactory.isdefinedValidator('error'));
    });

    form.controls.name.setValidators(
      FormValidatorFactory.isdefinedValidator('error')
    );
    this.validate(form);
  }

  static validate(form) {
    Object.keys(form.controls).forEach((field) => {
      const ctrl = form.controls[field];
      if (ctrl instanceof FormControl) {
        ctrl.updateValueAndValidity();
      } else if (ctrl instanceof FormGroup) {
        this.validate(ctrl);
      } else if (ctrl instanceof FormArray) {
        this.validate(ctrl);
      }
    });
  }

  static resolveError(form, errorContent, a1) {
    const message = [];
    form.controls.forEach((key) => {
      const messageArray = [];
      Object.keys(key.controls).forEach((prop) => {
        const field = key.controls[prop];
        if (field instanceof FormControl) {
          messageArray.push({
            ctrlName: prop,
            code: key.controls[prop].errors,
          });
        }
      });
      message.push(messageArray);
    });
    return this.setErrorMessage(message, errorContent, a1);
  }

  static setErrorMessage(results, errCOntent, a1) {
    //const error = [];
    results.forEach((result) => {
      const errorres = [];
      result.forEach((res) => {
        if (res.code) {
          errorres[res.ctrlName] = errCOntent[res.code.errorCode];
        }
        console.log(res);
      });
      a1.push(errorres);
    });
    return a1;
  }

  static resolveErrorMethod(form, errorContent) {
    const message = [];
    Object.keys(form.controls).forEach((key) => {
      const field = form.controls[key];
      message.push({
        ctrlName: key,
        code: form.controls[key].errors,
      });
    });
    return this.setErrorMessageMethod(message, errorContent);
  }

  static setErrorMessageMethod(results, errorContent) {
    const error = [];
    results.forEach((result) => {
      if (result.code) {
        error[result.ctrlName] = errorContent[result.code.errorCode];
      }
      console.log(error);
    });
    return error;
  }
}
