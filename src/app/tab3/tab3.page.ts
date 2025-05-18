import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab3Page implements OnInit {
  constructor(public photoService: PhotoService) {}

  ngOnInit() {
    // No se realiza carga de fotos automáticamente al inicializar
  }

  // Método para cargar las fotos al presionar el botón
  async loadPhotos() {
    await this.photoService.loadSaved();
  }
}
