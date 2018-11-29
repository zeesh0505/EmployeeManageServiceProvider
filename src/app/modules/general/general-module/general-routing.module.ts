import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';
import { BranchDetailComponent } from './../component/branch-detail/branch-detail.component';
import { RegistrationPageComponent } from './../component/registration-page/registration-page.component';
import { DashboardJobSheetComponent } from './../component/dashboard-job-sheet/dashboard-job-sheet.component';

const routes: Routes = [
  { path: 'branch', component: BranchDetailComponent},
  { path: 'registration', component: RegistrationPageComponent},
  { path: 'dashJobSheet', component: DashboardJobSheetComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
]
})
export class GeneralRoutingModule { }
