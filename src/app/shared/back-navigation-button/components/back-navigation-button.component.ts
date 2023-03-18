import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteSegment } from '../../../core/enums/route-segment.enum';

@Component({
    selector: 'app-back-navigation-button',
    templateUrl: './back-navigation-button.component.html',
    styleUrls: ['./back-navigation-button.component.scss']
})
export class BackNavigationButtonComponent {
    
    // Lifecycle

    constructor(
        private _router: Router
    ) {}

    // Event listeners

    public onBackNavigationButtonClicked() {
        this._router.navigate(
            [
                RouteSegment.User,
                RouteSegment.List
            ]
        )
    }
}