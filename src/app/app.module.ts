import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageEnregistrementComponent } from './page-enregistrement/page-enregistrement.component';
import { PageReinitialisationMDPasseComponent } from './page-reinitialisation-mdpasse/page-reinitialisation-mdpasse.component';

@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    PageEnregistrementComponent,
    PageReinitialisationMDPasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
