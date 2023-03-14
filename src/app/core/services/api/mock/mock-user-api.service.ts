import { Injectable } from '@angular/core';
import { Nullable } from '../../../../shared/common/types/extended.type';
import { User } from '../../../models/user.model';
import { UserApiCompliantService } from '../user-api-compliant.service';

@Injectable()
export class MockUserApiService extends UserApiCompliantService {

    // Inner properties

    private _mockUsers = [...Array(10).keys()].map(key => { // TODO : Obsidian
        return new User({
            uid: key.toString(),
            name: `User Name ${key}`,
            city: null,
            email: null
        })
    });

    // Interface

    public getUser(uid: string): Nullable<User> {
        return this._mockUsers.find(user => user.uid === uid);
    }

    public getUsers(): User[] {
        return this._mockUsers;
    }

}