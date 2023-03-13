import { Injectable } from '@angular/core';
import { City } from '../../../models/city.model';
import { CityApiCompliantService } from '../city-api-compliant.service';

@Injectable()
export class MockCityApiService implements CityApiCompliantService {

    // Interface

    public getCities(): City[] {
        return [
            new City({
                name: 'Mons'
            }),
            new City({
                name: 'Nivelles'
            }),
            new City({
                name: 'Ath'
            }),
            new City({
                name: 'Bruxelles'
            })
        ];
    }

}
