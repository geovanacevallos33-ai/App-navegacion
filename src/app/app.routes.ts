import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'presentacion', pathMatch: 'full' },
  {
    path: 'presentacion',
    loadComponent: () => import('./pages/presentacion/presentacion.page').then(m => m.PresentacionPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage),
  },
  {
    path: 'noticias',
    loadComponent: () => import('./pages/noticias/noticias.page').then(m => m.NoticiasPage),
    children: [
      { path: '', redirectTo: 'deportes', pathMatch: 'full' },
      { path: 'deportes', loadComponent: () => import('./pages/noticias/deportes/deportes.page').then(m => m.DeportesPage) },
      { path: 'sociales', loadComponent: () => import('./pages/noticias/sociales/sociales.page').then(m => m.SocialesPage) },
      { path: 'politica', loadComponent: () => import('./pages/noticias/politica/politica.page').then(m => m.PoliticaPage) },
    ],
  },
  {
    path: 'galeria',
    loadComponent: () => import('./pages/galeria/galeria.page').then(m => m.GaleriaPage),
    children: [
      { path: '', redirectTo: 'video1', pathMatch: 'full' },
      { path: 'video1', loadComponent: () => import('./pages/galeria/video1/video1.page').then(m => m.Video1Page) },
      { path: 'video2', loadComponent: () => import('./pages/galeria/video2/video2.page').then(m => m.Video2Page) },
      { path: 'video3', loadComponent: () => import('./pages/galeria/video3/video3.page').then(m => m.Video3Page) },
    ],
  },
];