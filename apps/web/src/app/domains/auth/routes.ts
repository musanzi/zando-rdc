import { Routes } from '@angular/router';

import { AuthLayout } from './layout/layout';

const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'sign-in',
        title: 'Sign In',
        data: {
          authContent: {
            asideTitle: 'Votre espace Zando RDC',
            asideDescription: 'Connectez-vous pour retrouver votre compte Zando RDC.',
            asideFootnote: 'La découverte de fournisseurs locaux, avec l’équipe Zando.'
          }
        },
        loadComponent: () => import('./modules/sign-in/features/sign-in/sign-in').then((c) => c.AuthSignIn)
      },
      {
        path: 'sign-up',
        title: 'Sign Up',
        data: {
          authContent: {
            asideTitle: 'Votre compte Zando RDC',
            asideDescription: 'Créez un compte pour accéder à votre espace Zando RDC.',
            asideFootnote: 'Retrouvez vos informations dans votre profil.'
          }
        },
        loadComponent: () => import('./modules/sign-up/features/sign-up/sign-up').then((c) => c.AuthSignUp)
      },
      {
        path: 'forgot-password',
        title: 'Forgot Password',
        data: {
          authContent: {
            asideTitle: 'Recover your access',
            asideDescription: 'Receive a secure link to regain access to your account and continue your work.',
            asideFootnote: 'Utilisez l’adresse e-mail associée à votre compte Zando RDC.'
          }
        },
        loadComponent: () =>
          import('./modules/forgot-password/features/forgot-password/forgot-password').then((c) => c.AuthForgotPassword)
      },
      {
        path: 'forgot-password-sent',
        title: 'Forgot Password Link Sent',
        data: {
          authContent: {
            asideTitle: 'Check your inbox',
            asideDescription: 'Open the link sent to your email address before it expires to set a new password.',
            asideFootnote: 'Si votre compte existe, vous recevrez un lien de réinitialisation.'
          }
        },
        loadComponent: () =>
          import('./modules/forgot-password-sent/features/forgot-password-sent/forgot-password-sent').then(
            (c) => c.AuthForgotPasswordSent
          )
      },
      {
        path: 'reset-password',
        title: 'Reset Password',
        data: {
          authContent: {
            asideTitle: 'Secure your account',
            asideDescription: 'Choose a new password and finish recovery in a familiar interface.',
            asideFootnote: 'Choisissez un mot de passe que vous n’utilisez pas sur un autre site.'
          }
        },
        loadComponent: () =>
          import('./modules/reset-password/features/reset-password/reset-password').then((c) => c.AuthResetPassword)
      }
    ]
  }
];

export default routes;
