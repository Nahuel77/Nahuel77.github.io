import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  copyToClipboard(event: Event): void {
    event.preventDefault();

    const direccion = 'calcara.nahuel@gmail.com';
    navigator.clipboard.writeText(direccion).then(() => {
      const tooltip = document.getElementById('tooltip');
      if (tooltip) {
        tooltip.classList.add('show');
        setTimeout(() => {
          tooltip.classList.remove('show');
        }, 2000);
      }
    }).catch(err => {
      console.error('No se pudo copiar: ', err);
    });
  }
}
