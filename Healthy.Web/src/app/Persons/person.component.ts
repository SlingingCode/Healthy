import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogicService } from '../Services/logic.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../Services/data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatePipe } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {

  @Output() toolbarTitleText = new EventEmitter<string>();

  editMode = false;
  editModeAddRow = false;
  selectedPerson: PersonResponse | null;
  subscriptionSelectedPerson: Subscription;
  displayedColumns = ['date', 'weight', 'percentageMuscles', 'percentageFat', 'bmi'];

  public dataSource = [];
  public computedWeightChangeSinceBeginning: number;
  public computedBmiChangeSinceBeginning: number;
  public computedMuscleChangeSinceBeginning: number;
  public computedFatChangeSinceBeginning: number;

  constructor(private route: ActivatedRoute, private logicService: LogicService, private dataService: DataService,
  private changeDetector: ChangeDetectorRef) {
  }

  handleSliderEditModeChange(e: MatSlideToggleChange) {
    this.editMode = e.checked;
  }
  handleSliderEditModeAddRowChange(e: MatSlideToggleChange) {
   this.editModeAddRow = e.checked;
  }

  ngOnInit() {
    this.dataService.selectedPersonChanges$.subscribe(person => {
      if (person) {
        this.toolbarTitleText.emit(person.firstName);
        this.dataSource = person.scaleResults;
        this.selectedPerson = person;

        this.computedWeightChangeSinceBeginning = this.logicService
          .calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].weight, person.scaleResults[0].weight);

        this.computedFatChangeSinceBeginning = this.logicService
          .calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].percentageFat, person.scaleResults[0].percentageFat);

        this.computedMuscleChangeSinceBeginning = this.logicService
          .calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].percentageMuscles, person.scaleResults[0].percentageMuscles);

        this.computedBmiChangeSinceBeginning = this.logicService
          .calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].bmi, person.scaleResults[0].bmi);
      }
    });

    this.dataService.allPersonsChanges$.subscribe(persons => {
      if (persons) {
        this.route.params.subscribe(params => {
          this.dataService.changeSelectedPerson(params['id']);
        });
      }
    });
  }
}
