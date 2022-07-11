import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecettesService } from '../../services/recettes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private readonly _service : RecettesService)
  { }

  contentItemsObj!: any;

  form! : FormGroup;

  async ngOnInit(){
    this.contentItemsObj = await this._service.getData();
    this.form = new FormGroup({
      name : new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ])),
      email : new FormControl(),
      receipe : new FormArray([]),
    });
  }

  addReceipe(name:string){
    const liste = this.form.get("receipe") as FormArray;

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
            Validators.min(1)]))
        })
        liste.push(group);

      };
    }
}
