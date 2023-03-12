// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Type } from '@angular/core';
import { NatifSelectorModule } from '../app/shared/selector/natif-selector/natif-selector.module';
import { NgxSelectorModule } from '../app/shared/selector/ngx-selector/ngx-selector.module';

interface EnvironmentCompliant {
    production: boolean;
    selectorModule: Type<NatifSelectorModule | NgxSelectorModule>
}

export const environment: EnvironmentCompliant = {
    production: false,
    selectorModule: NatifSelectorModule
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
