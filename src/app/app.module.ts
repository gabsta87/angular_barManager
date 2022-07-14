import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
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
      loadChildren:()=>import("./features/resto/resto.module").then(fichier=>fichier.RestoModule)
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
