import { Component, OnInit } from '@angular/core';
import { NavigationParameters } from '../../../core/interfaces/navigation-parameters.interface';
import { User } from '../../../core/models/user.model';
import { UserApiCompliantService } from '../../../core/services/api/user-api-compliant.service';
import { NavigationParametersUtils } from '../../../core/utils/navigation-parameters.utils';
import { Nullable } from '../../../shared/common/types/extended.type';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    // Public properties

    public users: User[] = [];

    public routeDetailByUserUid = new Map<Nullable<string>, NavigationParameters>();

    // Lifecycle

    constructor(
        private _userApiService: UserApiCompliantService
    ) {}

    ngOnInit(): void {
        this.setupComponent();
    }

    // Setup component

    private setupComponent() {
        this.setupUsers();
        this.setupUrlTreesByUserUid();
    }

    private setupUsers() {
        this.users = this._userApiService.getUsers();
    }

    private setupUrlTreesByUserUid() {
        this.routeDetailByUserUid.clear();

        this.users.forEach(user => {
            this.routeDetailByUserUid.set(
                user.uid,
                NavigationParametersUtils.getUserDetailParameters(user.uid ?? '')
            );
        });
    }

}
