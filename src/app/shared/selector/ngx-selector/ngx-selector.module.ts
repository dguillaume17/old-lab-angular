import { NgModule } from '@angular/core';
import { CommonModule } from '../../common/common.module';
import { NgxSelectorComponent } from './components/ngx-selector.component';


@NgModule({
    declarations: [
        NgxSelectorComponent
    ],
    exports: [
        NgxSelectorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NgxSelectorModule { }
