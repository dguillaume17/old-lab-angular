import { User } from '../../models/user.model';

export abstract class UserApiCompliantService {

    // Abstract interfaces

    public abstract getUsers(): User[];

}