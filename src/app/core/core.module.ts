import { NgModule } from '@angular/core';
import { ValueAccessorStatusDirective } from './directives/value-accessor-status.directive';


@NgModule({
    declarations: [
        ValueAccessorStatusDirective
    ],
    exports: [
        ValueAccessorStatusDirective
    ]
})
export class CoreModule { }
