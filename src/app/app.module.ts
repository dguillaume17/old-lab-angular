import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CityApiCompliantService } from './core/services/api/city-api-compliant.service';
import { UserApiCompliantService } from './core/services/api/user-api-compliant.service';
import { UserDetailModule } from './features/user-detail/user-detail.module';
import { UserListModule } from './features/user-list/user-list.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        UserDetailModule,
        UserListModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {
            provide: CityApiCompliantService,
            useClass: environment.cityApiService
        },
        {
            provide: UserApiCompliantService,
            useClass: environment.userApiService
        }
    ]
})
export class AppModule { }
