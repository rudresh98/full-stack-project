import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CreateComponent } from '../components/create/create.component';
import { DetailsComponent } from '../components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'create',
    component: CreateComponent,
    title: 'Create',
  },
  {
    path:'details/:id',
    component:DetailsComponent,
    title:'Details'
  }
];
export default routes;
