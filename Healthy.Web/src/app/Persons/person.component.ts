import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogicService } from '../Services/logic.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../Services/data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatePipe, DecimalPipe } from '@angular/common';
import { MatSlideToggleChange, MatSnackBar } from '@angular/material';

// TODO: plocka bort det jag inte använder...
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {

  @Output() toolbarTitleText = new EventEmitter<string>();

  editModePerson = false;
  editModeAddResult = false;
  selectedPerson: PersonResponse | null;
  subscriptionSelectedPerson: Subscription;
  displayedColumns = ['date', 'weight', 'percentageMuscles', 'percentageFat', 'percentageFatViscal', 'bmi'];

  personDetailsForm: FormGroup;
  addScaleResultForm: FormGroup;

  public dataSource = [];
  public computedWeightChangeSinceBeginning: number;
  public computedBmiChangeSinceBeginning: number;
  public computedMuscleChangeSinceBeginning: number;
  public computedFatChangeSinceBeginning: number;
  public computedViscalFatChangeSinceBeginning: number;

  constructor(private route: ActivatedRoute,
    private logicService: LogicService,
    private dataService: DataService,
    private changeDetector: ChangeDetectorRef,
    public snackBar: MatSnackBar,
    private decimalPipe: DecimalPipe,
    private formBuilder: FormBuilder) {
      this.createPersonDetailsForm();
      this.createScaleResultsForm();
  }

  createPersonDetailsForm() {
    this.personDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      motto: '',
      imageUrl: '',
      isPublic: ''
    });
  }

  createScaleResultsForm() {
    this.addScaleResultForm = this.formBuilder.group({
      weight: ['', Validators.required ],
      muscles: ['', Validators.required ],
      fat: ['', Validators.required ],
      viscalFat: ['', Validators.required ],
      bmi: ['', Validators.required ],
      resultsDate: ['', Validators.required ]
    });
  }

  handleButtonEditModePerson(e: MouseEvent) {
    console.log(e);
    this.editModePerson = true;
    this.editModeAddResult = false;
  }

  handleButtonEditModeAddResult(e: MouseEvent) {
    console.log(e);
    this.editModePerson = false;
    this.editModeAddResult = true;
  }

  handleButtonEditModeExit(e: MouseEvent) {
    console.log(e);
    this.editModePerson = false;
    this.editModeAddResult = false;
  }

  handleSubmitScaleResultForm() {
    console.log('*** HANDLE SUBMIT SCALE RESULT FORM - ANROPAD');
  console.log(this.addScaleResultForm.get('resultsDate').value);
    if (this.addScaleResultForm.valid) {
      const scaleResult: ScaleResult = {
        bmi: this.addScaleResultForm.get('bmi').value,
        weight: this.addScaleResultForm.get('weight').value,
        date: new Date(this.addScaleResultForm.get('resultsDate').value), // new Date(),
        percentageMuscles: this.addScaleResultForm.get('muscles').value,
        percentageFat: this.addScaleResultForm.get('fat').value,
        percentageFatViscal: this.addScaleResultForm.get('viscalFat').value,
      };

      console.log('*** HANDLE SUBMIT SCALE RESULT FORM - anropar add scale result');
      const addedPerson = this.dataService.addScaleResult(scaleResult, this.selectedPerson.id);
    }
  }

  handleButtonExitEditMode(e: MouseEvent) {
    this.editModeAddResult = this.editModePerson = false;
  }

  handleSubmitPersonDetailsForm() {
    if (this.personDetailsForm.valid) {
      const personWithNewValues: PersonResponse = JSON.parse(JSON.stringify(this.selectedPerson));
      personWithNewValues.firstName = this.personDetailsForm.get('firstName').value;
      personWithNewValues.lastName = this.personDetailsForm.get('lastName').value;
      personWithNewValues.motto = this.personDetailsForm.get('motto').value;
      personWithNewValues.imageUrl = this.personDetailsForm.get('imageUrl').value;
      personWithNewValues.isPublic = this.personDetailsForm.get('isPublic').value;
      console.log('--- SPARA ' + personWithNewValues.isPublic);
      this.dataService.updatePerson(personWithNewValues);
      this.editModePerson = false;
    }
  }

  ngOnInit() {

    this.dataService.selectedPersonChanges$.subscribe(person => {
      console.log('TRIGGAT OBS selectedPersonChanges$');
      console.log(person);
      if (person) {
        this.toolbarTitleText.emit(person.firstName);
        this.dataSource = person.scaleResults;
        this.selectedPerson = person;

        this.computedWeightChangeSinceBeginning = this.logicService
          .calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].weight, person.scaleResults[0].weight);

        this.computedFatChangeSinceBeginning = this.logicService
          .calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].percentageFat, person.scaleResults[0].percentageFat);

        this.computedViscalFatChangeSinceBeginning = this.logicService
          .calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].percentageFatViscal, person.scaleResults[0].percentageFatViscal);

        this.computedMuscleChangeSinceBeginning = this.logicService
          .calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].percentageMuscles, person.scaleResults[0].percentageMuscles);

        this.computedBmiChangeSinceBeginning = this.logicService
          .calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].bmi, person.scaleResults[0].bmi);
      }
    });

    this.dataService.allPersonsChanges$.subscribe(persons => {
      console.log('*** allPersonsChanges$ - ANROPAD');
      if (persons) {
        this.route.params.subscribe(params => {
          console.log('*** allPersonsChanges$ - LÄGGER SUBSCRIPTION PÅ dataService.changeSelectedPerson');
          this.dataService.changeSelectedPerson(params['id']);
        });
      }
    });

    this.dataService.addedScaleResult$.subscribe(newScaleResult => {
      console.log('*** addedScaleResult$ - ANROPAD');
      if (newScaleResult) {
        console.log('*** addedScaleResult$ - ÖPPNAR SNACKBAR');
        const previousScaleResult = this.selectedPerson.scaleResults[this.selectedPerson.scaleResults.length - 1];
        const weightChangeInKilograms = this.decimalPipe.transform(`${newScaleResult.weight - previousScaleResult.weight}`, '1.2-2');
        this.snackBar.open(`New values added! Weightchange: ${weightChangeInKilograms} kg`, '', {
          duration: 4000,
        });

        this.editModeAddResult = false;
        this.addScaleResultForm.reset();
        this.addScaleResultForm.clearValidators();
      }
    });
  }
}
