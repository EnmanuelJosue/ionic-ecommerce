import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class FormValidatorService {

  public isValidField( form: FormGroup, field: string):boolean | null{
    return form.controls[field]!.errors && form.controls[field]!.touched;
  }

  getFieldError(form: FormGroup, field: string): string | null{
    if ( !form.controls[field]!   ) {
      return null;
    }
    const errors = form.controls[field]!.errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `Min ${errors['minlength'].requiredLength} characters`;
      }
    }
    return null;
  }

}
