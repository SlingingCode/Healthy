import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './../constants';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DataService {

    private _persons: BehaviorSubject<PersonResponse[] | null>;
    private _person: BehaviorSubject<PersonResponse | null>;

    selectedPersonChanges$: Observable<PersonResponse | null>;
    allPersonsChanges$: Observable<PersonResponse[] | null>;

    private dataStore: {
      persons: PersonResponse[];
      selectedPerson: PersonResponse | null;
    };

    constructor (private httpClient: HttpClient) {
      this.dataStore = { persons: [], selectedPerson: null };
      this._persons = new BehaviorSubject<PersonResponse[] | null>(null);
      this._person = new BehaviorSubject<PersonResponse | null>(null);
      this.allPersonsChanges$ = this._persons.asObservable();
      this.selectedPersonChanges$ = this._person.asObservable();
    }

    changeSelectedPerson(selectedPersonId: number |  null) {
      if (selectedPersonId) {
        const filteredPerson = this.dataStore.persons.find(p => p.id == selectedPersonId);
        this.dataStore.selectedPerson = filteredPerson;
        this._person.next(Object.assign({}, this.dataStore).selectedPerson);
      }
    }

    loadPersonsToStore(): Subscription {
      return this.httpClient.get<PersonResponse[]>(Constants.uriPersons)
        .subscribe(data => {
          this.dataStore.persons = data;
          this._persons.next(Object.assign({}, this.dataStore).persons);
        }, error => {
          console.log('Failed to fetch persons');
        });
    }

    isPersonsInStore(): boolean {
      return this.dataStore.persons.length > 0;
    }
}
