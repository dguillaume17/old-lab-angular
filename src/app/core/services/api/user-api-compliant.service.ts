import { Nullable } from '../../../shared/common/types/extended.type';
import { User } from '../../models/user.model';

export abstract class UserApiCompliantService {

    // Abstract interfaces

    public abstract getUser(uid: string): Nullable<User>;
    public abstract getUsers(): User[];
    
    public abstract updateUser(user: User): void;

}