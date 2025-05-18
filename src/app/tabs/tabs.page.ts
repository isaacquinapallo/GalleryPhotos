import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage implements OnInit {

  constructor(public photoService: PhotoService) {
    addIcons({ triangle, ellipse, square });
  }

  ngOnInit() {
    // No se llama a loadSaved aquí para evitar la carga automática
  }

  // Método para cargar las fotos manualmente
  async loadPhotos() {
    await this.photoService.loadSaved();
  }
}
