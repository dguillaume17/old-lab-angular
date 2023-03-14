import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouteQueryParam } from '../../../../core/enums/route-query-param.enum';
import { User } from '../../../../core/models/user.model';
import { UserApiCompliantService } from '../../../../core/services/api/user-api-compliant.service';
import { Nullable } from '../../../../shared/common/types/extended.type';

@Component({
    selector: 'app-user-detail',
    templateUrl: './reactive-form-user-detail.component.html',
    styleUrls: ['./reactive-form-user-detail.component.scss']
})
export class ReactiveFormUserDetailComponent implements OnInit {

    // Public properties

    public user: Nullable<User>;

    // Template refs

    @ViewChild(NgForm)
    public ngForm?: NgForm;

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

    public onPasswordChanged() {
        console.log('onPasswordChanged()');
    }

    public onCityChanged() {
        console.log('onCityChanged()');
    }

    public onFormSubmitted() {
        if (this.ngForm == null || this.user == null) {
            return;
        }

        this.ngForm.form.markAllAsTouched();

        if (!this.ngForm.form.valid) {
            alert('form invalid')
            return;
        }

        this._userApiService.updateUser(this.user);
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
