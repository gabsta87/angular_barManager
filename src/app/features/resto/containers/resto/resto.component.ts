import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ContentComponent } from '../../components/content/content.component';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent implements OnInit{
  constructor(private readonly _resolver : ActivatedRoute) {}

  content!:any;
  @ViewChild(IonContent)ionContent!: IonContent;
  @ViewChild('contentElement')contentComp!: ContentComponent;

  async ngOnInit() {
    this.content = this._resolver.snapshot.data["recettes"];
  }

  scrollTo($event:number){
    const row:any = this.contentComp.ionRows.find((e:any) => "recipes_group_"+$event === e.el.id);
    // console.log("scrolling to row = ",row);
    this.ionContent.scrollToPoint(0,row.el.offsetTop,250);
  }
}
