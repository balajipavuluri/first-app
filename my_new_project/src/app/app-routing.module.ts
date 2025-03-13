import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'; // Correct import of appRoutes

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Use appRoutes here
  exports: [RouterModule],
})
export class AppRoutingModule {}
