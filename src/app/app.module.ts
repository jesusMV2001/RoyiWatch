import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { IndexComponent } from './components/index/index.component';
import { FormComponent } from './components/form/form.component';
import { DetailsComponent } from './components/details/details.component';
import { ErrorComponent } from './components/error/error.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasService } from './services/peliculas.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CabeceraComponent,
    IndexComponent,
    FormComponent,
    DetailsComponent,
    ErrorComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CarouselModule,
    MultiSelectModule,
    HttpClientModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
