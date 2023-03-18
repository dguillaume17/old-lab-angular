import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteSegment } from './core/enums/route-segment.enum';
import { TouchedFormDeactivateChecker } from './core/guards/touched-form-checker.guard';
import { ReactiveFormUserDetailComponent } from './features/user-detail/reactive-form-user-detail/components/reactive-form-user-detail.component';
import { UserListComponent } from './features/user-list/components/user-list.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: `/${RouteSegment.User}/${RouteSegment.List}`
    },
    {
        path: RouteSegment.User,
        children: [
            {
                path: RouteSegment.Detail,
                component: ReactiveFormUserDetailComponent,
                canDeactivate: [
                    TouchedFormDeactivateChecker
                ]
            },
            {
                path: RouteSegment.List,
                component: UserListComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/user/list'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        TouchedFormDeactivateChecker
    ]
})
export class AppRoutingModule { }
