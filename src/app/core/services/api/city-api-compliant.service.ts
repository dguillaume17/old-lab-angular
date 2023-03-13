import { City } from '../../models/city.model';

export abstract class CityApiCompliantService {

    // Abstract interfaces

    public abstract getCities(): City[];
    
}