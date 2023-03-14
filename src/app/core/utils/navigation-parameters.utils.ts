import { RouteSegment } from '../enums/route-segment.enum';
import { RouteQueryParam } from '../enums/route-query-param.enum';
import { NavigationParameters } from '../interfaces/navigation-parameters.interface';

export namespace NavigationParametersUtils {

    export function getUserListParameters(userUid: string): NavigationParameters {
        return {
            commands: [
                RouteSegment.User,
                RouteSegment.List
            ]
        };
    }

    export function getUserDetailParameters(userUid: string): NavigationParameters {
        return {
            commands: [
                RouteSegment.User,
                RouteSegment.Detail
            ],
            navigationExtras: {
                queryParams: {
                    [RouteQueryParam.Uid]: userUid
                }
            }
        };
    }

}