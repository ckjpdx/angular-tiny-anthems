import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor() {
  }
  ngOnInit() {
    let email = 'myemail@email.com';
    let password = 'mypassword';
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error.message);
    alert('create user&pass');
});

  }
}
