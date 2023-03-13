import { NgModule } from '@angular/core';
import { CommonModule } from '../../shared/common/common.module';
import { UserListComponent } from './components/user-list.component';


@NgModule({
    declarations: [
        UserListComponent
    ],
    exports: [
        UserListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UserListModule { }
