import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BranchDetailComponent } from './../component/branch-detail/branch-detail.component';



@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    BranchDetailComponent
  ],
  exports: [
    BranchDetailComponent
  ],
  providers: [
    DatePipe
  ],
})
export class GeneralModule { }
