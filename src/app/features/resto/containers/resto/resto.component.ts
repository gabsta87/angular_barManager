import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonRow } from '@ionic/angular';
import { ContentComponent } from '../../components/content/content.component';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent implements OnInit,AfterViewInit{
  constructor(private readonly _resolver : ActivatedRoute) {}

  content!:any;
  @ViewChild(IonContent)ionContent!: IonContent;
  @ViewChild('contentElement')contentComp!: ContentComponent;
  @ViewChild('navigationElement')navigationComp!: NavigationBarComponent;
  private _positions : any[] = [];

  async ngOnInit() {
    this.content = this._resolver.snapshot.data["recettes"];
  }

  // This happens after the HTML has been generated
  ngAfterViewInit(){
    this.navigationComp.setButtonActive(0);
  }

  scrollTo($event:number){
    const row:any = this.contentComp.ionRows.find((e:any) => "recipes_group_"+$event === e.el.id);
    // console.log("scrolling to row = ",row);
    this.ionContent.scrollToPoint(0,row.el.offsetTop,250);
  }

  onScroll(event:any) {
    this.initElemPositions();
    let actualPosition = event.detail.scrollTop;
    // this._positions.map((e:any)=> console.log(e.el.offsetTop));

    let elementToSelectIndex = 0;
    for(let i = 0;i<this._positions.length;i++){
      if(actualPosition >= this._positions[i].el.offsetTop){
        elementToSelectIndex = i;
      }else{
        break;
      }
    }
    this.navigationComp.setButtonActive(elementToSelectIndex);
  }

  initElemPositions(){
    if(this._positions.length > 0)
      return;
    this._positions = this.contentComp.ionRows.filter((e:any) => e.el.id.includes("recipes_group_"));
  }
}
