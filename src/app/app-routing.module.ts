import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './composants/header/header.component';
import { AuthComponent } from './composants/auth/auth.component';
import { ConditionsGeneralesComponent } from './composants/conditions-generales/conditions-generales.component';
import { PolitiquesConfidentialitesComponent } from './composants/politiques-confidentialites/politiques-confidentialites.component';
// import { HeaderConnecteComponent } from './composants/header-connecte/header-connecte.component';
import { HeaderConnecteComponent } from './composants/header-connecte/header-connecte.component';

const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HeaderComponent },
   { path: 'login', component: AuthComponent },
   { path: 'accueil', component: HeaderConnecteComponent },
  { path: 'politiqueConfidenialite', component: PolitiquesConfidentialitesComponent },
  { path: 'conditionUtilisation', component: ConditionsGeneralesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
