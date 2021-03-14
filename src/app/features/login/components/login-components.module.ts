import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [SignInFormComponent]
})
export class LoginComponentsModule { }
