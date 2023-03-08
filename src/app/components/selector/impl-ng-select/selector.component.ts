import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectorBaseComponent } from '../base/selector-base.component';
import { COMPUTED_SELECTOR_IMPL_NG_SELECT_ANNOTATION } from '../base/selector-impl-type.constants';

@Component({
    selector: COMPUTED_SELECTOR_IMPL_NG_SELECT_ANNOTATION,
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectorImplNgSelectComponent),
            multi: true
        }
    ]
})
export class SelectorImplNgSelectComponent extends SelectorBaseComponent {}