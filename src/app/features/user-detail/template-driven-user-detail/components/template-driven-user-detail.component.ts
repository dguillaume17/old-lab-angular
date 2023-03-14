import { Component, OnInit } from '@angular/core';
import { UserDetailBaseComponent } from '../../base/components/user-detail-base.component';

@Component({
    selector: 'app-user-detail',
    templateUrl: './template-driven-user-detail.component.html',
    styleUrls: [
        '../../base/components/user-detail-base.component.scss', // TODO Obsidian
        './template-driven-user-detail.component.scss'
    ]
})
export class TemplateDrivenUserDetailComponent extends UserDetailBaseComponent implements OnInit {}
