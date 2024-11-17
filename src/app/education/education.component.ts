import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  EDUCATION = { title: 'EDUCATION.title', t1: 'EDUCATION.t1', t2: 'EDUCATION.t2', t3: 'EDUCATION.t3', t4: 'EDUCATION.t4' };

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
