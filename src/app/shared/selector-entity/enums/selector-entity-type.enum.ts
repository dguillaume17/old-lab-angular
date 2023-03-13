import { CityApiCompliantService } from '../../../core/services/api/city-api-compliant.service';
import { UserApiCompliantService } from '../../../core/services/api/user-api-compliant.service';
import { EnumUtils } from '../../common/utils/enum.utils';
import { SelectorItem } from '../../selector/base/interfaces/selector-item.interface';

export enum SelectorEntityType {
    City,
    User
}

export namespace SelectorEntityType {

    export function getSelectorItems(
        type: SelectorEntityType,
        cityApiService: CityApiCompliantService,
        userApiService: UserApiCompliantService
    ): SelectorItem[] {
        switch (type) {
            case SelectorEntityType.City:
                return cityApiService.getCities();
            case SelectorEntityType.User:
                return userApiService.getUsers();
            default:
                EnumUtils.assertDefaultCaseUnreachable(type);
                return [];
        }
    }

}