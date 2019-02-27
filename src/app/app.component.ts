import { Component } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwsafe';

  users;
  constructor(db: AngularFirestore){
 
    this.users= db.collection('/users').valueChanges()
  }

}
