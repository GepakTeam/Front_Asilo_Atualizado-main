import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { IndividualComponent } from './Prontuarios/individual/individual.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaIndComponent } from './Lista/lista-ind/lista-ind.component';
import { PsicologaComponent } from './Prontuarios/psicologa/psicologa.component';
import { FisioterapiaComponent } from './Prontuarios/fisioterapia/fisioterapia.component';
import { ListaPsicComponent } from './Lista/lista-psic/lista-psic.component';
import { ListaFisioComponent } from './Lista/lista-fisio/lista-fisio.component';
import { ListaEnfComponent } from './Lista/lista-enf/lista-enf.component';
import { NutricionistaComponent } from './Prontuarios/nutricionista/nutricionista.component';
import { ListaNutriComponent } from './Lista/lista-nutri/lista-nutri.component';
import { EnfermagemComponent } from './Prontuarios/enfermagem/enfermagem.component';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideClientHydration(),
      LoginComponent, 
      IndividualComponent, 
      ListaIndComponent, 
      PsicologaComponent, 
      ListaPsicComponent, 
      FisioterapiaComponent,
      ListaFisioComponent,
      NutricionistaComponent, 
      ListaNutriComponent,
      EnfermagemComponent, 
      ListaEnfComponent, 
      HttpClient, 
      provideHttpClient(), 
      provideAnimationsAsync(), 
      provideAnimationsAsync()]
};
