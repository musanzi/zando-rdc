import { Component } from '@angular/core';

@Component({
  selector: 'landing-features',
  templateUrl: './features.html'
})
export class LandingFeatures {
  protected readonly features = [
    {
      title: 'Trouver un fournisseur',
      description: 'La recherche permettra de parcourir les profils par ville, catégorie, nom ou offre.'
    },
    {
      title: 'Consulter un profil vérifié',
      description:
        'Chaque publication sera précédée de contrôles sur l’identité, la localisation et l’activité du fournisseur.'
    },
    {
      title: 'Contacter l’équipe Zando',
      description:
        'Les demandes passeront par notre équipe sur WhatsApp. Les prix et les disponibilités seront discutés hors de la plateforme.'
    }
  ];
}
