import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteSegment } from './core/enums/route-segment.enum';
import { UserDetailComponent } from './features/user-detail/components/user-detail.component';
import { UserListComponent } from './features/user-list/components/user-list.component';

const routes: Routes = [
    {
        path: RouteSegment.User,
        children: [
            {
                path: RouteSegment.Detail,
                component: UserDetailComponent
            },
            {
                path: RouteSegment.List,
                component: UserListComponent
            }
        ]
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
