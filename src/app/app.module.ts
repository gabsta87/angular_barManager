import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandButtonColorPipe } from './pipes/command-button-color.pipe';
import { QuantityPipe } from './pipes/quantity.pipe';
import { FormatBillPipe } from './pipes/format-bill.pipe';
import { RecettesResolver } from './services/recettes.resolver';

@NgModule({
  declarations: [
    AppComponent,
    // NavigationBarComponent,
    // FooterComponent,
    // ContentComponent,
    CommandButtonColorPipe,
    QuantityPipe,
    // LoginComponent,
    // RestoComponent,
    FormatBillPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:'login',
      loadChildren:()=>import("./features/login/login.module").then(fichier=>fichier.LoginModule)
      // component:LoginComponent
    },{
      path:'resto',
      loadChildren:()=>import("./features/resto/resto.module").then(fichier=>fichier.RestoModule),
      // component:RestoComponent,
      resolve:{
        recettes:RecettesResolver
      }
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
