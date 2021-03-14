import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [SignInFormComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [SignInFormComponent, SignUpFormComponent]
})
export class LoginComponentsModule { }
