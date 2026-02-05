import { Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { DevloggingComponent } from './module/devlogging/devlogging.component';
import { AddNoteComponent } from './module/add-note/add-note.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        title: 'home '
    },
    {
        path: 'log',
        component: DevloggingComponent,
        title: 'log Activity'
    },
    {
        path: 'add-note',
        component: AddNoteComponent,
        title: 'Add Note'
    }
];
