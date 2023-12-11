import { Component } from '@angular/core';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {
// Attribut pour la pagination
userParPage = 3; // Nombre d'articles par page
pageActuelle = 1; // Page actuelle

recupUsers: any;
tabUsers: any[] = [];
searchInput = '';

inputPremon: string = '';
inputNom: string = '';
inputEmail: string = '';
inputPassWord: string = '';
// Attribut pour la pagination
userParPagesSearch= 3; // Nombre d'articles par page
pageActuelleSearch = 1; // Page actuelle


// Méthode pour déterminer les articles à afficher sur la page actuelle
getUserPage(): any[] {
const indexDebut = (this.pageActuelle - 1) * this.userParPage;
const indexFin = indexDebut + this.userParPage;
return this.recupUsers.slice(indexDebut, indexFin);
}
// Méthode pour générer la liste des pages
get pages(): number[] {
const totalPages = Math.ceil(this.recupUsers.length / this.userParPage);
return Array(totalPages).fill(0).map((_, index) => index + 1);
}

// Méthode pour obtenir le nombre total de pages
get totalPages(): number {
return Math.ceil(this.recupUsers.length / this.userParPage);
}

 // Méthode pour déterminer les articles à afficher sur la page actuelle
getUserPageSearch(): any[] {
 const indexDebut = (this.pageActuelleSearch - 1) * this. userParPagesSearch;
 const indexFin = indexDebut + this. userParPagesSearch;
 return this.tabUsers.slice(indexDebut, indexFin);
}
// Méthode pour générer la liste des pages
get pagesSearch(): number[] {
 const totalPages = Math.ceil(this.tabUsers.length / this. userParPagesSearch);
 return Array(totalPages).fill(0).map((_, index) => index + 1);
}

// Méthode pour obtenir le nombre total de pages
get totalPagesSearch(): number {
 return Math.ceil(this.tabUsers.length / this.userParPagesSearch);
}


}
