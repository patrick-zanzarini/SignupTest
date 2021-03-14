import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateFormFields } from 'src/core/utils/form-helper';
import { SignInModel } from '../../models/sign-in.model';

@Component({
  selector: 'iv-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.less'],
})
export class SignInFormComponent {
  @Output() signIn = new EventEmitter<SignInModel>();
  @Output() signInGoogle = new EventEmitter();

  signInForm: FormGroup = this.fb.group({
    email: [{ value: '', disabled: false }, [Validators.email, Validators.required]],
    password: [{ value: '', disabled: false }, [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  trySignIn() {
    validateFormFields(this.signInForm);

    if (this.signInForm.valid) {
      var event: SignInModel = {
        email: this.signInForm.get('email').value,
        password: this.signInForm.get('password').value
      }

      this.signIn.emit(event);
    }
  }
}
