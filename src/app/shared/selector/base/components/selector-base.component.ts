import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Nullable } from '../../../common/types/extended.type';
import { nameofFactory } from '../../../common/utils/standalone.utils';
import { SelectorItem } from '../interfaces/selector-item.interface';


@Directive()
export abstract class SelectorBaseComponent implements ControlValueAccessor, OnChanges {

    // Input properties

    @Input()
    public availableItems: Nullable<SelectorItem[]>;

    // Public properties

    public usableAvailableItems: Nullable<SelectorItem>[] = [];

    public disabled = false;

    public selectedItem: Nullable<SelectorItem>;

    // NG_VALUE_ACCESSOR properties

    public onChange = (selectedItem: Nullable<SelectorItem>) => { };
    public onTouched = () => { };

    // Lifecycle

    ngOnChanges(changes: SimpleChanges) {
        const nameof = nameofFactory(SelectorBaseComponent);

        if (changes[nameof('availableItems')]) {
            this.setupUsableAvailableItems();
        }
    }

    // Event listeners

    public onSelectedItemChanged() {
        this.onChange(this.selectedItem);
    }

    // NG_VALUE_ACCESSOR work

    public writeValue(selectedItem: Nullable<SelectorItem>) {
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

    // Protected work to override

    protected setupUsableAvailableItems() {
        this.usableAvailableItems = this.availableItems ?? [];
    }
}
