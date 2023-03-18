import { Component, OnInit } from '@angular/core';
import { UserDetailBaseComponent } from '../../base/components/user-detail-base.component';

@Component({
    selector: 'app-user-detail',
    templateUrl: './reactive-form-user-detail.component.html',
    styleUrls: [
        '../../base/components/user-detail-base.component.scss',
        './reactive-form-user-detail.component.scss'
    ]
})
export class ReactiveFormUserDetailComponent extends UserDetailBaseComponent implements OnInit {

    // Form control properties
}
