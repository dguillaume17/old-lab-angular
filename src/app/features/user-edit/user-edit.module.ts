import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '../../shared/common/common.module';
import { SelectorEntityModule } from '../../shared/selector-entity/selector-entity.module';
import { UserEditComponent } from './components/user-edit.component';


@NgModule({
    declarations: [
        UserEditComponent
    ],
    exports: [
        UserEditComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        SelectorEntityModule
    ]
})
export class UserEditModule { }
