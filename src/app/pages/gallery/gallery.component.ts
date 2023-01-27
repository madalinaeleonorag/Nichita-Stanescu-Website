import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  public PHOTOS_LINKS = [
    '../../../assets/images/3846221.jpg',
    '../../../assets/images/61805348.jpg',
    '../../../assets/images/intrare-ext-3-1-525x300.jpg',
    '../../../assets/images/maxresdefault.jpg',
    '../../../assets/images/Nichita-Stanescu.jpg',
    '../../../assets/images/NichitaStanescu2.jpg',
  ];
}
