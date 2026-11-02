import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { PageLoader } from '@web/shared/ui';

@Component({
  selector: 'auth-layout',
  imports: [RouterOutlet, PageLoader],
  templateUrl: './layout.html'
})
export class AuthLayout {
  private readonly route = inject(ActivatedRoute);

  protected readonly content = signal({
    asideTitle: 'Votre espace Zando RDC',
    asideDescription: 'Connectez-vous pour retrouver votre compte Zando RDC.',
    asideFootnote: 'La découverte de fournisseurs locaux, avec l’équipe Zando.'
  });

  protected updateContent(): void {
    this.content.set(this.route.firstChild?.snapshot.data['authContent'] ?? this.content());
  }
}
