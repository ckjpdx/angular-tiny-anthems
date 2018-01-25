import { Component, OnInit } from '@angular/core';
import { Profile } from './../profile.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  constructor() { }

  submitForm(name: string, dateOfBirth: string, locaitonOfBirth: string, favoriteAnimal: string, profession: string){
    let newProfile: Profile = new Profile(name, dateOfBirth, locaitonOfBirth, favoriteAnimal, profession);
  }

  ngOnInit() {
  }

}
