import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BranchDetailComponent } from './../component/branch-detail/branch-detail.component';
import { RegistrationPageComponent } from './../component/registration-page/registration-page.component';
import { DashboardJobSheetComponent } from './../component/dashboard-job-sheet/dashboard-job-sheet.component';



@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    BranchDetailComponent,
    RegistrationPageComponent,
    DashboardJobSheetComponent
  ],
  exports: [
    BranchDetailComponent
  ],
  providers: [
    DatePipe
  ],
})
export class GeneralModule { }
