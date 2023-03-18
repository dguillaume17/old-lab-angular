import { NgModule } from '@angular/core';
import { BackNavigationButtonDirective } from './directives/back-navigation-button.directive';


@NgModule({
    declarations: [
        BackNavigationButtonDirective
    ],
    exports: [
        BackNavigationButtonDirective
    ]
})
export class BackButtonNavigationModule { }
