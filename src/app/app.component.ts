import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndividualComponent } from './Prontuarios/individual/individual.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Core/NavBar/navbar.component';
import { ListaIndComponent } from './Lista/lista-ind/lista-ind.component';
import { NutricionistaComponent } from './Prontuarios/nutricionista/nutricionista.component';
import { ListaNutriComponent } from './Lista/lista-nutri/lista-nutri.component';
import { EnfermagemComponent } from './Prontuarios/enfermagem/enfermagem.component';
import { ListaEnfComponent } from './Lista/lista-enf/lista-enf.component';
import { FisioterapiaComponent } from './Prontuarios/fisioterapia/fisioterapia.component';
import { ListaFisioComponent } from './Lista/lista-fisio/lista-fisio.component';
import { PsicologaComponent } from './Prontuarios/psicologa/psicologa.component';
import { ListaPsicComponent } from './Lista/lista-psic/lista-psic.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, 
      IndividualComponent, 
      LoginComponent, 
      HttpClientModule, 
      ListaIndComponent, 
      NavbarComponent, 
      NutricionistaComponent, 
      ListaNutriComponent, 
      EnfermagemComponent,
      ListaEnfComponent, 
      FisioterapiaComponent, 
      ListaFisioComponent,
      PsicologaComponent, 
      ListaPsicComponent]
})
export class AppComponent {
  title = 'gepak';
}
