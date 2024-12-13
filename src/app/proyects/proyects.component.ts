import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { GalleryComponent } from "./gallery/gallery.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CardComponent, GalleryComponent, CommonModule, TranslateModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {
  PROYECTS = { title: 'PROYECTS.title', title2: 'PROYECTS.title2' };
  isGalleryOpen = false;
  selectedImg: string[] = [];
  selectedTitle: string = '';
  selectedRepo: string = '';

  openGallery(data: {img: string[], title: string, repo: string}){
    console.log(data.repo);
    this.isGalleryOpen = true;
    this.selectedImg = data.img;
    this.selectedTitle = data.title;
    this.selectedRepo = data.repo;
  }

  closeGallery(){
    this.isGalleryOpen = false;
  }

}
