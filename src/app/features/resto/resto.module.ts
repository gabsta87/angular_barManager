import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestoComponent } from './containers/resto/resto.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { FormatBillPipe } from './pipes/format-bill.pipe';
import { CommandButtonColorPipe } from './pipes/command-button-color.pipe';
import { QuantityPipe } from './pipes/quantity.pipe';
import { SharedModule } from '../../shared/shared.module';
import { RecettesResolver } from './services/recettes.resolver';
import { RecettesService } from './services/recettes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { IonicModule } from '@ionic/angular';
import { IonicButtonColorPipe } from './pipes/ionic-button-color.pipe';

@NgModule({
  declarations: [
    RestoComponent,NavigationBarComponent,FooterComponent,ContentComponent,
    FormatBillPipe,CommandButtonColorPipe, QuantityPipe, FormatDatePipe, IonicButtonColorPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild([{
      path:'',
      component:RestoComponent,
      resolve:{
        recettes:RecettesResolver
      }
    }]),
  ],
  providers:[
    RecettesResolver,
    RecettesService
  ]
})
export class RestoModule { }
