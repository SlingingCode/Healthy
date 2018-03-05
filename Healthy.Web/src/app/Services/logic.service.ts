import { Injectable } from '@angular/core';
import { LeaderboardRow } from '../Overview/overview.component';

@Injectable()
export class LogicService {

  constructor() { }

  calculatePercentageDifference(latestScaleValue: number, initialScaleValue: number): number {
    return ((latestScaleValue - initialScaleValue) / initialScaleValue) * 100;
  }

  // TODO: Räkna ut om positiv/negativ/netutral trend på senaste X mätningarna
  calculateTrend() {
  }

  calculateLeaderboard(persons: PersonResponse[]): LeaderboardRow[] {

    const leaderBoard: LeaderboardRow[] = [];

    let tempMuscleChange = 0;
    let tempFatChange = 0;
    let tempWeightChange = 0;

    persons.forEach(person => {

      tempMuscleChange =
        this.calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].percentageMuscles, person.scaleResults[0].percentageMuscles);

      tempFatChange =
        this.calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].percentageFat, person.scaleResults[0].percentageFat),

      tempWeightChange =
        this.calculatePercentageDifference(person.scaleResults[person.scaleResults.length - 1].weight, person.scaleResults[0].weight),

      leaderBoard.push({
        fullName: person.firstName + ' ' + person.lastName,
        points: tempMuscleChange + (tempMuscleChange * -1) + (tempFatChange * -1),
        firstDate: person.scaleResults[0].date,
        lastDate: person.scaleResults[person.scaleResults.length - 1].date
      });
    });

    console.log(leaderBoard);
    console.log(leaderBoard.sort(p => p.points));

    return leaderBoard.sort(p => -p.points);
    //return leaderBoard;
  }


}
