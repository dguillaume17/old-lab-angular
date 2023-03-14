import { NgModule } from '@angular/core';
import { CommonModule } from '../../common/common.module';
import { NatifSelectorComponent } from './components/natif-selector.component';


@NgModule({
    declarations: [
        NatifSelectorComponent
    ],
    exports: [
        NatifSelectorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NatifSelectorModule { }
