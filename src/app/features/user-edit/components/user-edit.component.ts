import { Component } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { SelectorItem } from '../../../shared/selector/base/interfaces/selector-item.interface';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {

    // Public properties

    public user = new User();

    public cities: SelectorItem[] = [
        {
            identifier: '1',
            displayableValue: 'Mons'
        },
        {
            identifier: '2',
            displayableValue: 'Nivelles'
        },
        {
            identifier: '3',
            displayableValue: 'Ath'
        },
        {
            identifier: '4',
            displayableValue: 'Bruxelles'
        }
    ];

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
