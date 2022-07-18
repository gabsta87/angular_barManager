import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path:'login',
      loadChildren:()=>import("./features/login/login.module").then(fichier=>fichier.LoginModule)
    },{
      path:'resto',
      loadChildren:()=>import("./features/resto/resto.module").then(fichier=>fichier.RestoModule)
    },{
      path:'',
      redirectTo:'resto',
      pathMatch:'full'
    },{
      path:'**',
      redirectTo:'resto',
      pathMatch:'full'
    }]),
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
