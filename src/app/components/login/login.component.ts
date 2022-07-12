import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.queryParams);
  }

}
