import { Component, OnInit } from '@angular/core';
import { LoginPageServiceService } from 'src/app/login-page/login-page-service.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  contentDisplayId;

  diningHallId = 0;
  fillerStatement;
  workoutName;

  sectionOne_rowOne_Date;
  sectionOne_rowOne_Set;
  sectionOne_rowOne_Reps;
  sectionOne_rowOne_Weight;
  sectionOne_rowTwo_Date;
  sectionOne_rowTwo_Set;
  sectionOne_rowTwo_Reps;
  sectionOne_rowTwo_Weight;
  sectionOne_rowThree_Date;
  sectionOne_rowThree_Set;
  sectionOne_rowThree_Reps;
  sectionOne_rowThree_Weight;

  WorkoutUserID;
  WorkoutUserName;

  constructor(private loginService: LoginPageServiceService) { }

  ngOnInit(): void {
    this.contentDisplayId = 0
    console.log("Content ID = " + this.contentDisplayId);
    this.WorkoutUserID = this.loginService.getUserId();
    console.log("Workout ID = " + this.WorkoutUserID);
    this.WorkoutUserName = this.loginService.getUserName();
    console.log("Workout Name = " + this.WorkoutUserName);

  }

  showAddForm() {
    this.contentDisplayId = 1;
    console.log("Content ID = " + this.contentDisplayId);
  }

  showHistory() {
    this.contentDisplayId = 2;
    console.log("Content ID = " + this.contentDisplayId);
  }

  closeContent() {
    this.contentDisplayId = 0;
    console.log("Content ID = " + this.contentDisplayId);
  }

  getResults() {
    var work = (<HTMLInputElement>document.getElementById("inputWorkout")).value;
    var set = (<HTMLInputElement>document.getElementById("inputSets")).value;
    var rep = (<HTMLInputElement>document.getElementById("inputReps")).value;
    var weight = (<HTMLInputElement>document.getElementById("inputWeight")).value;
    console.log("Workout = " + work);
    console.log("Sets = " + set);
    console.log("Reps = " + rep);
    console.log("Weight = " + weight);
  }

  tableRefresh(id) {
    this.diningHallId = id;
    console.log(this.diningHallId);
    if (id == 1) {
      this.workoutName = "Bench Press"

      this.sectionOne_rowOne_Date = "11/9/2020";
      this.sectionOne_rowOne_Set = "3";
      this.sectionOne_rowOne_Reps = "10";
      this.sectionOne_rowOne_Weight = "135";
      this.sectionOne_rowTwo_Date = "11/10/2020";
      this.sectionOne_rowTwo_Set = "3";
      this.sectionOne_rowTwo_Reps = "8";
      this.sectionOne_rowTwo_Weight = "145";
      this.sectionOne_rowThree_Date = "11/11/2020";
      this.sectionOne_rowThree_Set = "3";
      this.sectionOne_rowThree_Reps = "10";
      this.sectionOne_rowThree_Weight = "140";
    }
    else if (id == 2) {
      this.workoutName = "Squat"

      this.sectionOne_rowOne_Date = "11/9/2020";
      this.sectionOne_rowOne_Set = "5";
      this.sectionOne_rowOne_Reps = "5";
      this.sectionOne_rowOne_Weight = "180";
      this.sectionOne_rowTwo_Date = "11/10/2020";
      this.sectionOne_rowTwo_Set = "5";
      this.sectionOne_rowTwo_Reps = "5";
      this.sectionOne_rowTwo_Weight = "190";
      this.sectionOne_rowThree_Date = "11/11/2020";
      this.sectionOne_rowThree_Set = "3";
      this.sectionOne_rowThree_Reps = "10";
      this.sectionOne_rowThree_Weight = "195";
    }
    else if (id == 3) {
      this.workoutName = "Deadlift"

      this.sectionOne_rowOne_Date = "11/9/2020";
      this.sectionOne_rowOne_Set = "3";
      this.sectionOne_rowOne_Reps = "10";
      this.sectionOne_rowOne_Weight = "185";
      this.sectionOne_rowTwo_Date = "11/10/2020";
      this.sectionOne_rowTwo_Set = "3";
      this.sectionOne_rowTwo_Reps = "8";
      this.sectionOne_rowTwo_Weight = "190";
      this.sectionOne_rowThree_Date = "11/11/2020";
      this.sectionOne_rowThree_Set = "3";
      this.sectionOne_rowThree_Reps = "10";
      this.sectionOne_rowThree_Weight = "195";
    }
    else if (id == 4) {
      this.workoutName = "Bicep Curl"

      this.sectionOne_rowOne_Date = "11/9/2020";
      this.sectionOne_rowOne_Set = "5";
      this.sectionOne_rowOne_Reps = "5";
      this.sectionOne_rowOne_Weight = "35";
      this.sectionOne_rowTwo_Date = "11/10/2020";
      this.sectionOne_rowTwo_Set = "5";
      this.sectionOne_rowTwo_Reps = "5";
      this.sectionOne_rowTwo_Weight = "40";
      this.sectionOne_rowThree_Date = "11/11/2020";
      this.sectionOne_rowThree_Set = "3";
      this.sectionOne_rowThree_Reps = "8";
      this.sectionOne_rowThree_Weight = "45";
    }
    else if (id == 5) {
      this.workoutName = "Leg Press"

      this.sectionOne_rowOne_Date = "11/9/2020";
      this.sectionOne_rowOne_Set = "3";
      this.sectionOne_rowOne_Reps = "10";
      this.sectionOne_rowOne_Weight = "210";
      this.sectionOne_rowTwo_Date = "11/10/2020";
      this.sectionOne_rowTwo_Set = "3";
      this.sectionOne_rowTwo_Reps = "10";
      this.sectionOne_rowTwo_Weight = "220";
      this.sectionOne_rowThree_Date = "11/11/2020";
      this.sectionOne_rowThree_Set = "3";
      this.sectionOne_rowThree_Reps = "12";
      this.sectionOne_rowThree_Weight = "225";
    }
    else {
      this.fillerStatement = "SELECT A WORKOUT"
    }
  }

}