import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './modules/general/component/login-page/login-page.component';
import { BranchDetailComponent } from './modules/general/component/branch-detail/branch-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BranchDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
