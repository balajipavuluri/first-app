import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes'; // Import routes from app.routes.ts

@NgModule({
  imports: [
    provideRouter(appRoutes), // Register the routes with the router
  ],
})
export class AppConfigModule {} // Export the module
