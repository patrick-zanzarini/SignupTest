import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.page';

const routes: Routes = [
  { path: 'sign-up', component: LoginComponent },
  {
    path: '**',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
