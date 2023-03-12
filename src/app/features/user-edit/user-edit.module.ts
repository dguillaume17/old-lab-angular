import { NgModule } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '../../shared/common/common.module';
import { NatifSelectorModule } from '../../shared/selector/natif-selector/natif-selector.module';
import { NgxSelectorModule } from '../../shared/selector/ngx-selector/ngx-selector.module';
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
        environment.selectorModule
    ]
})
export class UserEditModule { }
