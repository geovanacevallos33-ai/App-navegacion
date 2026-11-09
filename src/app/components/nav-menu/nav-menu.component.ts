import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonToolbar, IonButtons, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  imports: [NgFor, RouterLink, IonToolbar, IonButtons, IonButton],
})
export class NavMenuComponent {
  @Input() botones: { texto: string; ruta: string }[] = [];
}