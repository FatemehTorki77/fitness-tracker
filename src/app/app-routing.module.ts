import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WellcomeComponent } from './wellcome/wellcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TraningComponent } from './traning/traning.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component:WellcomeComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'training', component:TraningComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
