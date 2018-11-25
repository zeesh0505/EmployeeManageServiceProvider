import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { LoginPageComponent } from '../component/login-page/login-page.component';


@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [
    DatePipe
  ],
})
export class GeneralModule { }
