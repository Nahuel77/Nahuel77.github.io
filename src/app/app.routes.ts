import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'proyects',
        component: ProyectsComponent
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
