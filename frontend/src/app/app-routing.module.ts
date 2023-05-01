import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import routes from './routes/routes';

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: `reload`})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
