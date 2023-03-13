import { Injectable } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserApiCompliantService } from '../user-api-compliant.service';

@Injectable()
export class MockUserApiService implements UserApiCompliantService {

    // Interface

    public getUsers(): User[] {
        return [
            new User({
                name: 'test',
                city: null,
                email: null
            })
        ];
    }

}