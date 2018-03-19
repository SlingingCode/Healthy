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
    private _latestScaleResult: BehaviorSubject<ScaleResult | null>;

    selectedPersonChanges$: Observable<PersonResponse | null>;
    addedScaleResult$: Observable<ScaleResult | null>;
    allPersonsChanges$: Observable<PersonResponse[] | null>;

    private dataStore: {
      persons: PersonResponse[];
      selectedPerson: PersonResponse | null;
      latestScaleResult: ScaleResult | null;
    };

    constructor (private httpClient: HttpClient) {
      this.dataStore = { persons: [], selectedPerson: null, latestScaleResult: null };
      this._persons = new BehaviorSubject<PersonResponse[] | null>(null);
      this._person = new BehaviorSubject<PersonResponse | null>(null);
      this._latestScaleResult = new BehaviorSubject<ScaleResult | null>(null);
      this.allPersonsChanges$ = this._persons.asObservable();
      this.selectedPersonChanges$ = this._person.asObservable();
      this.addedScaleResult$ = this._latestScaleResult.asObservable();
    }

    changeSelectedPerson(selectedPersonId: number |  null) {
      console.log('*** changeSelectedPerson');
      if (selectedPersonId) {
        const filteredPerson = this.dataStore.persons.find(p => p.id == selectedPersonId);
        this.dataStore.selectedPerson = filteredPerson;
        this._person.next(Object.assign({}, this.dataStore).selectedPerson);
      }
    }

    loadPersonsToStore(): Subscription {
      console.log('*** loadPersonsToStore - ANROPAD');
      return this.httpClient.get<PersonResponse[]>(Constants.uriBase + 'persons')
        .subscribe(data => {
          this.dataStore.persons = data;
          this._persons.next(Object.assign({}, this.dataStore).persons);
        }, error => {
          console.log('!!! ERROR !!!  - Failed to fetch persons and put them in Store');
        });
    }

    updatePersonInStore(updatedPerson: PersonResponse) {
      const personInStore = this.dataStore.persons.find(p => p.id === updatedPerson.id);
      personInStore.firstName = updatedPerson.firstName;
      personInStore.lastName = updatedPerson.lastName;
      personInStore.motto = updatedPerson.motto;
      personInStore.imageUrl = updatedPerson.imageUrl;
      personInStore.isPublic = updatedPerson.isPublic;
      this._person.next(Object.assign({}, this.dataStore).selectedPerson);
    }

    updatePerson(updatedPerson: PersonResponse): Subscription {
      return this.httpClient.put<PersonResponse>(Constants.uriBase + 'person/' + updatedPerson.id, updatedPerson, {})
        .subscribe(person => {
          this.updatePersonInStore(person);
        }, error => {
          console.log('!!! ERROR !!!  - Failed to update person');
        });
    }


    addScaleResult(scaleResult: ScaleResult, personId: number): Subscription {
      console.log('*** ADD SCALE RESULT - ANROPAD');
      return this.httpClient.post<ScaleResult>(Constants.uriBase + 'addscaleresult/person/' + personId, scaleResult, {})
        .subscribe(addedRow => {
          console.log('*** ADD SCALE RESULT - SÄTTER SCALE RESULT I STOREN');
          this.dataStore.latestScaleResult = addedRow;
          console.log('*** ADD SCALE RESULT - TRANSMITTAR FÖRÄNDRING I TILL PRENUMERANTER ');
          this._latestScaleResult.next(Object.assign({}, this.dataStore).latestScaleResult);

          // Uppdatera griden
          console.log('*** ADD SCALE RESULT - ANROPAR LOAD PERSONS TO STORE - FÖR ATT TRIGGA UPPDATERING AV GUI');
          this.loadPersonsToStore();
        }, error => {
          console.log('!!! ERROR !!!  - Failed to update person');
          return false;
        });
    }

    isPersonsInStore(): boolean {
      return this.dataStore.persons.length > 0;
    }

    getSelectedPersonData(): PersonResponse {
      return this.dataStore.selectedPerson;
    }
}
