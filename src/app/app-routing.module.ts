import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './features/user-detail/components/user-detail.component';
import { UserListComponent } from './features/user-list/components/user-list.component';

const routes: Routes = [
    {
        path: 'user-detail',
        component: UserDetailComponent
    },
    {
        path: 'user-list',
        component: UserListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
