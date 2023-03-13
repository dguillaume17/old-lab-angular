import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '../../shared/common/common.module';
import { SelectorEntityModule } from '../../shared/selector-entity/selector-entity.module';
import { UserDetailComponent } from './components/user-detail.component';


@NgModule({
    declarations: [
        UserDetailComponent
    ],
    exports: [
        UserDetailComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        SelectorEntityModule
    ]
})
export class UserDetailModule { }
