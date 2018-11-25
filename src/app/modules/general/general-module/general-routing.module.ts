import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';
import { BranchDetailComponent } from './../component/branch-detail/branch-detail.component';

const routes: Routes = [
  { path: 'branch', component: BranchDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
]
})
export class GeneralRoutingModule { }
