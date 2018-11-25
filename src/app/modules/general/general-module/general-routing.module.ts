import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';
import { LoginPageComponent } from './../component/login-page/login-page.component';

const routes: Routes = [
  { path: 'dashboard', component: LoginPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
]
})
export class GeneralRoutingModule { }
