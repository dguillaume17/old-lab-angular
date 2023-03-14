import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { InputTextComponent } from './components/input-text.component';
import { InputTextPasswordChecker } from './directives/input-text-password-checker.directive';


@NgModule({
    declarations: [
        InputTextComponent,
        InputTextPasswordChecker
    ],
    exports: [
        InputTextComponent,
        InputTextPasswordChecker
    ],
    imports: [
        CommonModule
    ]
})
export class InputTextModule { }
