import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './composants/header/header.component';
import { AuthComponent } from './composants/auth/auth.component';
import { ConditionsGeneralesComponent } from './composants/conditions-generales/conditions-generales.component';
import { PolitiquesConfidentialitesComponent } from './composants/politiques-confidentialites/politiques-confidentialites.component';
// import { HeaderConnecteComponent } from './composants/header-connecte/header-connecte.component';
import { HeaderConnecteComponent } from './composants/header-connecte/header-connecte.component';
import { PageaccueilComponent } from './composants/pageaccueil/pageaccueil.component';
import { AproposComponent } from './composants/apropos/apropos.component';
import { ProjetsComponent } from './composants/projets/projets.component';

const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'login', component: AuthComponent },
   { path: 'home', component: HeaderComponent },
   { path: 'accueil', component: HeaderConnecteComponent },
  { path: 'politiqueConfidenialite', component: PolitiquesConfidentialitesComponent },
  { path: 'conditionUtilisation', component: ConditionsGeneralesComponent },
  { path: 'pageacceuil', component: PageaccueilComponent },
  { path: 'apropos', component: AproposComponent },
  { path:'projets', component: ProjetsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
