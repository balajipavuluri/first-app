import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add AppRoutingModule to imports to enable routing
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap the root component
})
export class AppModule {}
