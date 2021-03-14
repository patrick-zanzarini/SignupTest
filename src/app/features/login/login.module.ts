import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponentsModule } from './components/login-components.module';
import { LoginComponent } from './pages/login/login.page';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginComponentsModule
  ]
})
export class LoginModule { }
