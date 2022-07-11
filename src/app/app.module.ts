import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { CommandButtonColorPipe } from './pipes/command-button-color.pipe';
import { QuantityPipe } from './pipes/quantity.pipe';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RestoComponent } from './components/resto/resto.component';
import { FormatBillPipe } from './pipes/format-bill.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    ContentComponent,
    CommandButtonColorPipe,
    QuantityPipe,
    LoginComponent,
    RestoComponent,
    FormatBillPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:'login',
      component:LoginComponent
    },{
      path:'resto',
      component:RestoComponent
    },{
      path:'',
      redirectTo:'resto',
      pathMatch:'full'
    },{
      path:'**',
      redirectTo:'resto',
      pathMatch:'full'
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
