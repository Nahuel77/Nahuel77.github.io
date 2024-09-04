import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { GalleryComponent } from "./gallery/gallery.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CardComponent, GalleryComponent, CommonModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {
  isGalleryOpen = false;
  selectedImg: string[] = [];
  selectedTitle: string = '';

  openGallery(data: {img: string[], title: string}){
    this.selectedImg = data.img;
    this.selectedTitle = data.title;
    this.isGalleryOpen = true;
  }

  closeGallery(){
    this.isGalleryOpen = false;
  }

}
