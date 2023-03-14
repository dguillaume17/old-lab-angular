import { jsonMember, jsonObject } from 'typedjson';
import { Nullable } from '../../shared/common/types/extended.type';
import { SelectorItem } from '../../shared/selector/base/interfaces/selector-item.interface';
import { City } from './city.model';

interface UserFields {
    uid: Nullable<string>;
    name: Nullable<string>;
    email: Nullable<string>;
    city: Nullable<City>;
}

@jsonObject
export class User implements SelectorItem {

    // Model properties

    @jsonMember
    public uid?: string;

    @jsonMember
    public name?: string;

    @jsonMember
    public email?: string;

    @jsonMember
    public password?: string;

    @jsonMember
    public city?: City;

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