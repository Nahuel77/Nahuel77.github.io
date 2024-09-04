import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  @Input() img: string[] = [];
  @Input() dato: string = '';
  @Output() close = new EventEmitter<void>();
  currentIndex: number = 0;

  nextImage() {
    if (this.currentIndex < this.img.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.img.length - 1;
    }
  }

  closeGallery() {
    this.close.emit();
  }

}
