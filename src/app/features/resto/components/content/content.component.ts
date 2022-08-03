import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonRow } from '@ionic/angular';
import { DbaccessService } from '../../services/dbaccess.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private readonly _router : Router, private readonly _dbAccess: DbaccessService){ }

  @Input() items ! : any;
  @Output() recipeSelected : EventEmitter<number> = new EventEmitter();
  @ViewChildren(IonRow) ionRows!:QueryList<IonRow>;

  form! : FormGroup;
  fullMenu! : any;
  clickDate = 0;
  releaseDate = 0;
  delay = 400;

  ngOnInit() {
    this.form = new FormGroup({
      name : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ])),
      email : new FormControl(),
      recipe : new FormArray([]),
      bill : new FormControl(0)
    });
    this.fullMenu = [...this.items.data];
  }

  navigateToLogin(){
    this._router.navigate(["login"],{queryParams:{lastname:'Maret',firstname:"Gabriel"}})
  }

  addRecipe(name:string){
    const recipesList = this.form.get("recipe") as FormArray;
    const bill = this.form.get("bill") as FormControl;

    let elem;

    for(let i = 0;i<this.items.data.length && elem===undefined;i++){
      elem = this.items.data[i].recipes.find((e:{title:String,price:Number}) => e.title === name);
    }

    let price = 0;
    if(elem)
      price = elem.price;

    // If the recipe already exists
    let i = recipesList.value.findIndex((e:any) => e.name === name);
    if(i >= 0){
      const elemToIncrease = recipesList.at(i);
      const quantity = elemToIncrease.value.quantity;
      elemToIncrease.patchValue({
        quantity : quantity + 1
      });
    }else{
      // else (the recipe must be added)
      const group = new FormGroup({
        name : new FormControl(name,Validators.required),
        quantity : new FormControl(1,Validators.compose([
          Validators.required,
          Validators.min(1)])),
        price : new FormControl(price)
      })
      recipesList.push(group);
    };

    bill.patchValue(
      bill.value + recipesList.at(i).value.price
    )
    this.recipeSelected.emit(bill.value);
  }

  removeRecipe(name:string){
    const recipesList = this.form.get("recipe") as FormArray;
    const bill = this.form.get("bill") as FormControl;

    let elem;

    for(let i = 0;i<this.items.data.length && elem===undefined;i++){
      elem = this.items.data[i].recipes.find((e:{title:String,price:Number}) => e.title === name);
    }

    let price = 0;
    if(elem)
      price = elem.price;

    // If the recipe exists we remove it from order
    let i = recipesList.value.findIndex((e:any) => e.name === name);
    if(i >= 0 && recipesList.at(i).value.quantity > 0){
      const elemToIncrease = recipesList.at(i);
      const quantity = elemToIncrease.value.quantity;
      elemToIncrease.patchValue({
        quantity : quantity - 1
      });
      bill.patchValue(
        bill.value - recipesList.at(i).value.price
      )
    }

    this.recipeSelected.emit(bill.value);
  }

  emptyForm(){
    const recipesList = this.form.get("recipe") as FormArray;
    this.form.reset();
    const bill = this.form.get("bill") as FormControl;

    this.recipeSelected.emit(bill.value);
  }

  buttonClicked(){
    this.clickDate = Date.now().valueOf();
  }

  buttonRelease(element:string){
    this.releaseDate = Date.now().valueOf();

    if(this.releaseDate-this.clickDate < this.delay){
      this.addRecipe(element);
    }else{
      this.removeRecipe(element);
    }
  }

  action(event:string){
    console.log("event : ",event);
    switch(event){
      case 'save':
        this._dbAccess.addOrder(this.form.value.recipe);
        this.emptyForm();
        break;
      case 'empty':
        this.emptyForm();
        break;
    }
  }
}
