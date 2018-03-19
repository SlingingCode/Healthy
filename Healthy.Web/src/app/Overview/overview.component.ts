import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../Services/data.service';
import { LogicService } from '../Services/logic.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OverviewComponent implements OnInit {

  personSelectedIndex = 0;
  public dataSource: LeaderboardRow[] = [];
  displayedColumns = ['fullName', 'points', 'firstDate', 'lastDate'];

  fullName: string;
  percentageWeightChange: number;
  percentageMusclesChange: number;
  percentageFatChange: number;
  viscalFat: number;
  points: number;

  constructor(private dataService: DataService, private logicService: LogicService) { }

  ngOnInit() {
    this.dataService.allPersonsChanges$.subscribe(persons => {
      if (persons) {
        this.dataSource = this.logicService.calculateLeaderboard(persons);
      }
    });
  }

  selectPerson(index: number) {
    console.log(index);
    this.personSelectedIndex = index;
  }

  goToPerson(person: PersonResponse) {
    console.log(person);
  }
}

export interface LeaderboardRow {
  fullName: string;
  points: number;
  firstDate: Date;
  lastDate: Date;
}
