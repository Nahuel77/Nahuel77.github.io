import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  toggleImage(event: any) {
    const liElement = event.currentTarget;
    const imgElement = liElement.querySelector('img');

    if (imgElement) {
      if (imgElement.style.display === 'none' || imgElement.style.display === '') {
        imgElement.style.display = 'block';
      } else {
        imgElement.style.display = 'none';
      }
    }
  }
}
