import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        SelectorComponent,
        UserEditComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule // Avoid "Can't bind to 'ngModel' since it isn't a known property of 'input'"
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
