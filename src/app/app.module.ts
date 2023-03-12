import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserEditModule } from './features/user-edit/user-edit.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        UserEditModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
