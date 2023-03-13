import { SelectorItem } from '../../shared/selector/base/interfaces/selector-item.interface';
import { Nullable } from '../../shared/common/types/extended.type';

interface CityFields {
    name: Nullable<string>;
}

export class City implements CityFields, SelectorItem {

    // Model properties

    public name: Nullable<string>;

    // Calculated properties

    public get identifier(): string {
        return this.name ?? '';
    }

    public get displayableValue(): string {
        return this.name ?? '';
    }

    // Lifecycle

    constructor(fields: CityFields) {
        Object.assign(this, fields);
    }

}