// tab1.page.ts

import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab1Page implements OnInit {
  showGallery = false;  // Controla si mostrar las fotos

  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    // No cargamos fotos aquí para evitar carga automática
  }

  // Cargar fotos guardadas al presionar el botón
  async loadPhotos() {
    await this.photoService.loadSaved();
    this.showGallery = true;  // Mostrar galería solo después de cargar fotos
  }

  // Opcional: para ocultar galería y limpiar fotos
  closeGallery() {
    this.showGallery = false;
    this.photoService.photos = [];
  }
}
