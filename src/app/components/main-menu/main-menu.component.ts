import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonToolbar, IonButtons, IonButton } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, IonToolbar, IonButtons, IonButton, RouterLink, RouterLinkActive]
})
export class MainMenuComponent {
  paginas = [
    { texto: 'Inicio', ruta: '/inicio' },
    { texto: 'Presentación', ruta: '/presentacion' },
    { texto: 'Login', ruta: '/login' },
    { texto: 'Noticias', ruta: '/noticias' },
    { texto: 'Galería', ruta: '/galeria' }
  ];
}