import { Component, OnInit } from '@angular/core';
import { Profile } from './../profile.model';
import { ProfileService } from './../profile.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  providers: [ProfileService]
})
export class QuestionnaireComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  submitForm(
    name: string,
    birthDate: string,
    birthLocation: string,
    favoriteAnimal: string,
    profession: string){
    let newProfile: Profile = new Profile(name, birthDate, birthLocation, favoriteAnimal, profession);
    this.profileService.addProfile(newProfile);
  }

  ngOnInit() {
  }

}
