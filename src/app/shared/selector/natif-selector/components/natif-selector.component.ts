import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectorBaseComponent } from '../../base/components/selector-base.component';

@Component({
    selector: 'app-selector',
    templateUrl: './natif-selector.component.html',
    styleUrls: ['./natif-selector.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NatifSelectorComponent),
            multi: true
        }
    ]
})
export class NatifSelectorComponent extends SelectorBaseComponent {

    // Overriden protected work

    protected override setupUsableAvailableItems() {
        this.usableAvailableItems = [
            null,
            ...(this.availableItems ?? [])
        ];
    }
}