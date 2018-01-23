import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'os';
import { Constants } from './constants';

@Injectable()
export class DataService {

    personData: PersonResponse[]; // = [];

    constructor (private httpClient: HttpClient) { }

    // TODO: Async and uri in const
    getPersons() {
        this.httpClient.get<PersonResponse[]>(Constants.uriPersons)
            .subscribe(data => {
                this.personData = data;
            });
    }
}
