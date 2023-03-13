import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectorBaseComponent } from '../../base/components/selector-base.component';;

@Component({
    selector: 'app-selector',
    templateUrl: './ngx-selector.component.html',
    styleUrls: ['./ngx-selector.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxSelectorComponent),
            multi: true
        }
    ]
})
export class NgxSelectorComponent extends SelectorBaseComponent {}