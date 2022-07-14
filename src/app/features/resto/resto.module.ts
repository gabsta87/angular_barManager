import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RestoComponent } from './components/resto/resto.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { FormatBillPipe } from './pipes/format-bill.pipe';
import { CommandButtonColorPipe } from './pipes/command-button-color.pipe';
import { QuantityPipe } from './pipes/quantity.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RestoComponent,NavigationBarComponent,FooterComponent,ContentComponent,
    FormatBillPipe,CommandButtonColorPipe, QuantityPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path:'',
      component:RestoComponent,
      // resolve:{
      //   recettes:RecettesResolver
      // }
    }]),
  ]
})
export class RestoModule { }
