import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CityApiCompliantService } from './core/services/api/city-api-compliant.service';
import { MockCityApiService } from './core/services/api/mock/mock-city-api.service';
import { MockUserApiService } from './core/services/api/mock/mock-user-api.service';
import { UserApiCompliantService } from './core/services/api/user-api-compliant.service';
import { UserEditModule } from './features/user-edit/user-edit.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        UserEditModule
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
