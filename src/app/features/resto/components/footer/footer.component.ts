import { Component } from '@angular/core';
import { collectionData, deleteDoc, doc, Firestore, query, setDoc, updateDoc } from '@angular/fire/firestore';
import { collection, DocumentData } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { DbaccessService } from '../../services/dbaccess.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  // constructor(private readonly _db: DbaccessService,private readonly _db: Firestore){
  constructor(private readonly _db: Firestore){}

  billValue : number = 0;

  now : Date = new Date();

  updateBill(param:number){
    this.billValue = param;
  }

  // sendOrder(){
  //   this._db.addOrder(this.billValue);
  // }

  _myData!:Observable<DocumentData[]>;
  _dbName:string = "resto";

  getOrders(){
    const myCollection = collection(this._db,this._dbName);
    const q = query(myCollection);
    this._myData = collectionData(q,{idField:'id'});
  }

  async addOrder(newValue:number){
    const id = Date.now();
    const docRef = doc(this._db,this._dbName+'/'+id);
    // debugger;
    console.log("docRef : ",docRef);
    await setDoc(docRef,{orderValue:newValue}).catch(err => {
      console.log("Error : ",err);
    });
    console.log("value written");
  }

  async updateOrder(id:string){
    const docRef = doc(this._db, `${this._dbName}/${id}`);
    updateDoc(docRef,{done:true});
  }

  async deleteOrder(id:string){
    const docRef = doc(this._db,`${this._dbName}/${id}`);
    deleteDoc(docRef);
  }
}
