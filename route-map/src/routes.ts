import { Routes } from '@angular/router';
import { ListComponent } from './app/list.component/list.component';
import { MapComponent } from './app/map.component/map.component';


export const appRoutes: Routes = [
    { path: 'runs', component: ListComponent },
    { path: 'run/:id', component: MapComponent },
    { path: '', redirectTo: '/runs', pathMatch: 'full'}
];

