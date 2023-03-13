import { Component } from '@angular/core';
import { User } from '../../../core/models/user.model';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {

    // Public properties

    public user = new User();

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
