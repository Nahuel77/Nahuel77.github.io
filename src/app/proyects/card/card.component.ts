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
  @Input() img: string[] = [];
  @Input() title: string = '';
  @Input() repo: string = '';
  @Input() youtube?: string;
  @Output() cardClick = new EventEmitter<{img: string[], title: string, repo: string, youtube?: string}>();


  onCardClick(){
    this.cardClick.emit({ img: this.img, title: this.title, repo: this.repo, youtube: this.youtube });
  }

}
