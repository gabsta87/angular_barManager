import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent implements OnInit {

  constructor(private readonly _service : RecettesService,
              private readonly _router : Router) { }

  items ! : any;
  content ! : [{title:string,description:string,price:number}];
  form! : FormGroup;
  totalBill : number = 0;

  async ngOnInit() {
    this.items = await this._service.getData();

    this.form = new FormGroup({
      name : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ])),
      email : new FormControl(),
      receipe : new FormArray([]),
      bill : new FormControl(0)
    });
  }

  navigateToLogin(){
    // this._router.navigateByUrl("login");
    // this._router.navigate(["login","test"])
    this._router.navigate(["login"],{queryParams:{lastname:'Maret',firstname:"Gabriel"}})
  }

  chooseMenu(chosenMenu:string){
    this.content = this.items.data.find((e:any) => e.title === chosenMenu).recipes;
  }

  addReceipe(name:string){
    const liste = this.form.get("receipe") as FormArray;
    // const bill = this.form.get("bill") as FormControl<number>;
    const bill = this.form.get("bill") as FormControl;
    bill.setValue(0);
    console.log("bill1= ",bill);

    const elem = this.content.find(e => e.title === name);
    let price = 0;
    if(elem)
      price = elem.price;
    console.log("elem = ",elem);

    // If the receipe already exists
    let i = liste.value.findIndex((e:any) => e.name === name);
    if(i >= 0){
      const elemToIncrease = liste.at(i);
      const quantity = elemToIncrease.value.quantity;
      elemToIncrease.patchValue({
        quantity : quantity + 1
      });
    }else{
      // else (the receipe must be added)
      const group = new FormGroup({
          name : new FormControl(name,Validators.required),
          quantity : new FormControl(1,Validators.compose([
            Validators.required,
            Validators.min(1)])),
          price : new FormControl(price)
        })
        liste.push(group);
      };

      console.log("liste = ",liste);

      console.log("raw bill=",bill.value);

      // bill.setValue(
      //   {
      //     bill : bill + liste.at(i).value.price,
      //   }
      // )
      console.log("form = ",this.form);

      bill.patchValue(
        {
          bill : bill.value.price + liste.at(i).value.price,
        }
      )
      console.log("raw bill=",bill.value.price);

      console.log("price = ",price);

      this.totalBill += price;
      console.log("var bill:",this.totalBill);
      console.log("form:",this.form.value);
    }
}
