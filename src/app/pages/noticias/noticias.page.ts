import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    NavMenuComponent
  ]
})
export class NoticiasPage {
  botones = [
    { texto: 'Deportes', ruta: '/noticias/deportes' },
    { texto: 'Sociales', ruta: '/noticias/sociales' },
    { texto: 'Política', ruta: '/noticias/politica' }
  ];
}