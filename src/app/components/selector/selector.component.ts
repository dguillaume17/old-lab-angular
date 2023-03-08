import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectorItem, SelectorItemNullable } from '../../interfaces/selector-item.interface';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectorComponent),
            multi: true
        }
    ]
})
export class SelectorComponent implements ControlValueAccessor {

    // Input properties

    @Input()
    public availableItems?: SelectorItem[];

    // Public properties

    public disabled = false;

    public selectedItem: SelectorItemNullable;

    // NG_VALUE_ACCESSOR properties

    public onChange = (selectedItem: SelectorItemNullable) => { };
    public onTouched = () => { };

    // Event listeners

    public onSelectedItemChanged() {
        this.onChange(this.selectedItem);
    }

    // NG_VALUE_ACCESSOR work

    public writeValue(selectedItem: SelectorItemNullable) {
        this.selectedItem = selectedItem;
    }

    public registerOnChange(fn: any) {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    public setDisabledState(disabled: boolean) {
        this.disabled = disabled;
    }
}
