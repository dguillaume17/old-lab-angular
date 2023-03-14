// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Type } from '@angular/core';
import { CityApiCompliantService } from '../app/core/services/api/city-api-compliant.service';
import { MockCityApiService } from '../app/core/services/api/mock/mock-city-api.service';
import { MockUserApiService } from '../app/core/services/api/mock/mock-user-api.service';
import { UserApiCompliantService } from '../app/core/services/api/user-api-compliant.service';
import { ReactiveFormUserDetailComponent } from '../app/features/user-detail/reactive-form-user-detail/components/reactive-form-user-detail.component';
import { ReactiveFormUserDetailModule } from '../app/features/user-detail/reactive-form-user-detail/reactive-form-user-detail.module';
import { TemplateDrivenUserDetailComponent } from '../app/features/user-detail/template-driven-user-detail/components/template-driven-user-detail.component';
import { TemplateDrivenUserDetailModule } from '../app/features/user-detail/template-driven-user-detail/template-driven-user-detail.module';
import { NatifSelectorModule } from '../app/shared/selector/natif-selector/natif-selector.module';
import { NgxSelectorModule } from '../app/shared/selector/ngx-selector/ngx-selector.module';

interface EnvironmentCompliant {
    production: boolean;
    // userDetailModule: Type<ReactiveFormUserDetailModule | TemplateDrivenUserDetailModule>,
    // userDetailComponent: Type<ReactiveFormUserDetailComponent | TemplateDrivenUserDetailComponent>
    selectorModule: Type<NatifSelectorModule | NgxSelectorModule>,
    cityApiService: Type<CityApiCompliantService>,
    userApiService: Type<UserApiCompliantService>
}

export const environment: EnvironmentCompliant = {
    production: false,
    // userDetailModule: ReactiveFormUserDetailModule,
    // userDetailComponent: ReactiveFormUserDetailComponent,
    selectorModule: NatifSelectorModule,
    cityApiService: MockCityApiService,
    userApiService: MockUserApiService
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
