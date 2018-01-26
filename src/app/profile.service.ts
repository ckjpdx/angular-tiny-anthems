import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class ProfileService {
  profiles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.profiles = database.list('profiles');
  }

  addProfile(newProfile: Profile) {
    this.profiles.push(newProfile);
  }
}
