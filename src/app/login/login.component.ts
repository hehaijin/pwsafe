import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }
  sub;
  ngOnInit() {
    this.afAuth.authState.subscribe(d => console.log('auth', d));

    this.sub = this.afAuth.authState.subscribe(r => {
      if (r !== null)
        this.router.navigate(['/', 'manager']);
    }
    );
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
