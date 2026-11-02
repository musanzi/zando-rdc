import { INavigationLink } from '@web/domains/website/shared/interfaces';

export const NAVIGATION_LINKS: readonly INavigationLink[] = [
  { label: 'Accueil', path: '/', icon: 'house' },
  { label: 'Le projet', path: '/', fragment: 'features', icon: 'blocks' },
  { label: 'Espace équipe', path: '/', fragment: 'get-started', icon: 'rocket' }
];
