import { NgModule } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { BackButtonNavigationModule } from '../../../shared/back-navigation-button/back-navigation-button.module';
import { CommonModule } from '../../../shared/common/common.module';
import { InputTextModule } from '../../../shared/input-text/input-text.module';
import { SelectorEntityModule } from '../../../shared/selector-entity/selector-entity.module';
import { TemplateDrivenUserDetailComponent } from './components/template-driven-user-detail.component';


@NgModule({
    declarations: [
        TemplateDrivenUserDetailComponent
    ],
    exports: [
        TemplateDrivenUserDetailComponent
    ],
    imports: [
        BackButtonNavigationModule,
        CommonModule,
        CoreModule,
        InputTextModule,
        SelectorEntityModule
    ]
})
export class TemplateDrivenUserDetailModule { }
