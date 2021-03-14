import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { validateFormFields } from 'src/core/utils/form-helper';
import { SignInModel } from '../../models/sign-in.model';

@Component({
  selector: 'iv-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.less'],
})
export class SignUpFormComponent {
  @Output() signUp = new EventEmitter<SignInModel>();
  @Output() signUpGoogle = new EventEmitter();

  signUpForm: FormGroup = this.fb.group({
    fullname: [
      { value: '', disabled: false },
      [Validators.required],
    ],
    email: [
      { value: '', disabled: false },
      [Validators.email, Validators.required],
    ],
    password: [{ value: '', disabled: false }, [Validators.required, Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  trySignIn() {
    validateFormFields(this.signUpForm);

    if (this.signUpForm.valid) {
      var event: SignInModel = {
        email: this.signUpForm.get('email').value,
        password: this.signUpForm.get('password').value,
      };

      this.signUp.emit(event);
    }
  }

  isInvalid(propertyName: string) {
    const control = this.signUpForm.get(propertyName);
    if (!control.touched) return false;

    return control.invalid;
  }

  hasError(propertyName: string, error: string) {
    const control = this.signUpForm.get(propertyName);
    if (!control.touched)
      return false;
    return control.hasError(error);
  }
}
