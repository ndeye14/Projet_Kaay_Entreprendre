import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HeaderConnecteComponent } from '../header-connecte/header-connecte.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  // On fait appel au constructeur
  constructor(private route: Router) { }


   isUserConnected: boolean = false;


 // Méthode pour simuler la connexion/déconnexion
  // toggleUserConnection() {
  //   this.isUserConnected = !this.isUserConnected;
  // }


  loginUser() {

// Logique de connexion

    // Redirection après connexion réussie


    this.route.navigate(['home']);
  }
  // choix formulaire
showFrmConnexion: boolean=true;

afficherFrmConnexion(){
  this.showFrmConnexion=!this.showFrmConnexion;

  // OpÃ©ration ternaire qui prend la premiere valeur aprÃ¨s le ? si la condition est vrai
  // ou la deuxiÃ¨me aprÃ¨s les : si la condition est fausse
  // this.showFrmConnexion == false ?  this.titleFrm="Connectez-Vous" :  this.titleFrm="Inscrivez-Vous";
}


}



