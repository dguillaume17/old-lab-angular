import { Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CityApiCompliantService } from '../../../core/services/api/city-api-compliant.service';
import { UserApiCompliantService } from '../../../core/services/api/user-api-compliant.service';
import { Nullable } from '../../common/types/extended.type';
import { nameofFactory } from '../../common/utils/standalone.utils';
import { SelectorItem } from '../../selector/base/interfaces/selector-item.interface';
import { SelectorEntityType } from '../enums/selector-entity-type.enum';

@Component({
    selector: 'app-selector-entity',
    templateUrl: './selector-entity.component.html',
    styleUrls: ['./selector-entity.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectorEntityComponent),
            multi: true
        }
    ]
})
export class SelectorEntityComponent implements OnChanges {

    // Input properties

    @Input()
    public entityType: Nullable<SelectorEntityType>;

    // Public properties

    public availableItems: SelectorItem[] = [];

    // Public properties

    public disabled = false;

    public selectedItem: Nullable<SelectorItem>;

    // Public enums

    public entityTypeEnum = SelectorEntityType;

    // NG_VALUE_ACCESSOR properties

    public onChange = (selectedItem: Nullable<SelectorItem>) => { };
    public onTouched = () => { };

    // Event listeners

    public onSelectedItemChanged() {
        this.onChange(this.selectedItem);
    }

    // Lifecycle

    constructor(
        private _cityApiService: CityApiCompliantService,
        private _userApiService: UserApiCompliantService
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        const nameof = nameofFactory(SelectorEntityComponent);

        if (changes[nameof('entityType')]) {
            this.setupAvailableItems();
        }
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

    // Inner work

    private setupAvailableItems() {
        if (this.entityType == null) {
            this.availableItems = [];
            return;
        }

        this.availableItems = SelectorEntityType.getSelectorItems(
            this.entityType,
            this._cityApiService,
            this._userApiService
        );
    }
}