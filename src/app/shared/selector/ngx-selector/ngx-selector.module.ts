import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
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
        CommonModule,
        NgSelectModule
    ]
})
export class NgxSelectorModule { }
