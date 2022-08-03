import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private readonly _auth: Auth
  ) { }

  ngOnInit(): void {
    console.log("query params : ",this._route.snapshot.queryParams);
  }

  async loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this._auth,provider);
    console.log(this._auth.currentUser);
  }

  async logout(){
    await signOut(this._auth);
  }

}
