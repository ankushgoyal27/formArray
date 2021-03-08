import { FormControl } from '@angular/forms';

export class FormValidatorFactory {
  static isdefinedValidator(code) {
    return (fc: FormControl): any => {
      return { errorCode: code };
    };
  }
}
