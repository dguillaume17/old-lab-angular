import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        BrowserModule, // TODO
        FormsModule // Avoid "Can't bind to 'ngModel' since it isn't a known property of 'input'"
    ]
})
export class CommonModule { }
