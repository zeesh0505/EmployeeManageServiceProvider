import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginPageComponent } from './../modules/general/component/login-page/login-page.component';

    const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        {
            path: 'general',
            loadChildren: '../modules/general/general-module/general.module#GeneralModule'
        },
        { path: 'dashboard', component: LoginPageComponent },
    ];

    @NgModule({
        imports: [
            CommonModule,
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [
            RouterModule
        ],
        providers: [
        ],
        declarations: []
    })
    export class AppRoutingModule { }
