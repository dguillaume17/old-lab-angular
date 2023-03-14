import { Nullable } from '../../shared/common/types/extended.type';
import { SelectorItem } from '../../shared/selector/base/interfaces/selector-item.interface';
import { City } from './city.model';

interface UserFields {
    uid: Nullable<string>;
    name: Nullable<string>;
    email: Nullable<string>;
    city: Nullable<City>;
}

export class User implements SelectorItem {

    // Model properties

    public uid: Nullable<string>;

    public name: Nullable<string>;

    public email: Nullable<string>;

    public city: Nullable<City>;

    // Calculated properties

    public get identifier(): string {
        return this.name ?? '';
    }

    public get displayableValue(): string {
        return this.name ?? '';
    }

    // Lifecycle

    constructor(fields?: UserFields) {
        Object.assign(this, fields);
    }
}