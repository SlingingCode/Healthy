import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleResultsComponent } from './scale-results.component';

describe('ScaleResultsComponent', () => {
  let component: ScaleResultsComponent;
  let fixture: ComponentFixture<ScaleResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
