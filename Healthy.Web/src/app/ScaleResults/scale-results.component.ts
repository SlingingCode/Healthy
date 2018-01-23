import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-scale-results',
  templateUrl: './scale-results.component.html',
  styleUrls: ['./scale-results.component.scss']
})
export class ScaleResultsComponent implements OnInit {

  persons: any;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getPersons();

    // TODO: Async
    setTimeout(() => {
      this.persons = this.dataService.personData;
      console.log('this.persons');
      console.log(this.persons);
    }, 2000);

  }

}

