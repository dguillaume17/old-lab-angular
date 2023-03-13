import { NgModule } from '@angular/core';
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
        SelectorEntityModule
    ]
})
export class UserEditModule { }
