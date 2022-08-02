import { Injectable, OnInit } from '@angular/core';
import { collectionData, Firestore, query, DocumentData, doc, setDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbaccessService{

  private _myData!:Observable<DocumentData[]>;
  private _dbName:string = "resto";

  constructor(private readonly _db: Firestore) {}

  getOrders(){
    const myCollection = collection(this._db,this._dbName);
    const q = query(myCollection);
    this._myData = collectionData(q,{idField:'id'});
    return this._myData;
  }

  addOrder(newValue:number){
    const id = Date.now();
    const docRef = doc(this._db,this._dbName+'/'+id);
    setDoc(docRef,{orderValue:newValue});
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
