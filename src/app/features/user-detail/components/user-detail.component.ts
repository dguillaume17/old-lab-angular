import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteQueryParam } from '../../../core/enums/route-query-param.enum';
import { User } from '../../../core/models/user.model';
import { UserApiCompliantService } from '../../../core/services/api/user-api-compliant.service';
import { Nullable } from '../../../shared/common/types/extended.type';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

    // Public properties

    public user: Nullable<User>;

    // Lifecycle

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _userApiService: UserApiCompliantService
    ) {}

    ngOnInit(): void {
        this.setupActivateRouteListener();
    }

    // Event listeners

    public onNameChanged() {
        console.log('onNameChanged()');
    }

    public onEmailChanged() {
        console.log('onEmailChanged()');
    }

    public onCityChanged() {
        console.log('onCityChanged()');
    }

    // Setup listeners

    private setupActivateRouteListener() {
        this._activatedRoute.queryParams
            .subscribe(queryParams => {
                const userUid = queryParams[RouteQueryParam.Uid];
                this.user = this._userApiService.getUser(userUid);
            });
    }
}
