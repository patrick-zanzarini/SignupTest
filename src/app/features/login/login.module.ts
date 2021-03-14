import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponentsModule } from './components/login-components.module';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';


@NgModule({
  declarations: [SignInPage, SignUpPage],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginComponentsModule
  ]
})
export class LoginModule { }
