import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PageEnregistrementComponent } from './page-enregistrement/page-enregistrement.component';
import { PageReinitialisationMDPasseComponent } from './page-reinitialisation-mdpasse/page-reinitialisation-mdpasse.component';

const routes: Routes = [
  {path: 'Enregistrement' ,component: PageEnregistrementComponent },
  {path: 'Connexion' ,component: PageConnexionComponent },
  {path: 'Mot de passe oublié?' ,component: PageReinitialisationMDPasseComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
