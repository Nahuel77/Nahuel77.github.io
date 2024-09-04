import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() img: string[] = [];
  @Output() cardClick = new EventEmitter<{img: string[], title: string}>()

  onCardClick(){
    this.cardClick.emit({ img: this.img, title: this.title});
  }

}
