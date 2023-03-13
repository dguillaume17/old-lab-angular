import { NgModule } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '../common/common.module';
import { SelectorEntityComponent } from './components/selector-entity.component';


@NgModule({
    declarations: [
        SelectorEntityComponent
    ],
    exports: [
        SelectorEntityComponent
    ],
    imports: [
        CommonModule,
        environment.selectorModule,
    ]
})
export class SelectorEntityModule { }
