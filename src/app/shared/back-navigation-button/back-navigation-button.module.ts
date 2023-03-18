import { NgModule } from '@angular/core';
import { BackNavigationButtonComponent } from './components/back-navigation-button.component';


@NgModule({
    declarations: [
        BackNavigationButtonComponent
    ],
    exports: [
        BackNavigationButtonComponent
    ]
})
export class BackButtonNavigationModule { }
