import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

const redirectToRestoPage = () => redirectLoggedInTo("resto");
const redirectToLoginPage = () =>  redirectUnauthorizedTo("login");

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path:'login',
      loadChildren:()=>import("./features/login/login.module").then(fichier=>fichier.LoginModule),
      // ...canActivate(redirectToRestoPage)
    },{
      path:'resto',
      loadChildren:()=>import("./features/resto/resto.module").then(fichier=>fichier.RestoModule),
      ...canActivate(redirectToLoginPage)
    },{
      path:'',
      redirectTo:'resto',
      pathMatch:'full'
    },{
      path:'**',
      redirectTo:'resto',
      pathMatch:'full'
    }]),
    IonicModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
    // IonicModule.forRoot({mode:'md'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
