import { Component, OnInit, OnDestroy, ViewEncapsulation, NgZone } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

  const SMALL_WIDHT_BREAKPOINT = 720;

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']

  // encapsulation: ViewEncapsulation.Emulated
})
export class SideNavigationComponent implements OnInit, OnDestroy {
  selectedPerson: PersonResponse | null;
  subscriptionSelectedPerson: Subscription;

  allPersons: PersonResponse[] | null;
  subscriptionAllPersons: Subscription;

  toolbarTitleText = 'Leaderboard';

  private mediaMatcher: MediaQueryList  = matchMedia(`(max-width: ${SMALL_WIDHT_BREAKPOINT}px)`);

  constructor(zone: NgZone,
    private dataService: DataService) { // private dataService: DataService) {

      this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  ngOnDestroy(): void {
    this.subscriptionSelectedPerson.unsubscribe();
  }

  ngOnInit() {
    this.dataService.selectedPersonChanges$.subscribe(person => {
      console.log('SideNavigactionComponent - SUBSCRIPTION on selectedPersonChanges  returned: ' + person);
      if (person) {
        this.selectedPerson = person;
        this.toolbarTitleText = person.firstName + ' ' + person.lastName;
      }
    });

    this.dataService.allPersonsChanges$.subscribe(persons => {
      console.log('SideNavigactionComponent - SUBSCRIPTION on allPersonsChanges returned: ' + persons);
      if (persons) {
        this.allPersons = persons;
      }
    });

    this.dataService.loadPersonsToStore();
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
