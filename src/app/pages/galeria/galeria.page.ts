import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { NavMenuComponent } from '../../components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
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
export class GaleriaPage {
  botones = [
    { texto: 'Video 1', ruta: '/galeria/video1' },
    { texto: 'Video 2', ruta: '/galeria/video2' },
    { texto: 'Video 3', ruta: '/galeria/video3' }  // <--- ¡Agregamos esta línea!
  ];
}