import { Component } from '@angular/core';
import { User } from '../../../core/models/user.model';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

    // Public properties

    public user = new User({
        name: 'gder',
        email: 'gder@easi.net',
        city: null
    });

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
}
