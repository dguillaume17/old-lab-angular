import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        BrowserModule, // TODO
        FormsModule, // Avoid "Can't bind to 'ngModel' since it isn't a known property of 'input'"
        RouterModule // Avoid "Can't bind to 'routerLink' since it isn't a known property of 'a'"
    ]
})
export class CommonModule { }
