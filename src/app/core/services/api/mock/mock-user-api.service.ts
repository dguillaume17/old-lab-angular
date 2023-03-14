import { Injectable } from '@angular/core';
import { Nullable } from '../../../../shared/common/types/extended.type';
import { User } from '../../../models/user.model';
import { TypedJsonUtils } from '../../../utils/typed-json.utils';
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
        const user = this._mockUsers.find(user => user.uid === uid);

        if (user == null) {
            return null;
        }

        return TypedJsonUtils.copyObject(user, User);
    }

    public getUsers(): User[] {
        return TypedJsonUtils.copyArray(this._mockUsers, User);
    }

    public updateUser(user: User): void {
        // TODO Obsidian
        const index = this._mockUsers.findIndex(findUser => findUser.uid === user.uid);

        if (index === -1) {
            throw new Error('User not found !');
        }

        this._mockUsers[index] = TypedJsonUtils.copyObject(user, User);
    }

}