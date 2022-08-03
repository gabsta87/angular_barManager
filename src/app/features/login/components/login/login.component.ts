import { Component, OnInit } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authState = authState(this._auth);

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

  isLogged(){
    return this._auth.currentUser;
  }
}
