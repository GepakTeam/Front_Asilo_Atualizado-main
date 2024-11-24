import { Component } from '@angular/core';
import { Enfermagem } from '../../Models/enfermagem';
import { EnfermagemService } from '../../_services/enfermagem.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';

@Component({
  selector: 'app-lista-enf',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, NavbarComponent],
  templateUrl: './lista-enf.component.html',
  styleUrl: './lista-enf.component.css'
})
export class ListaEnfComponent {

  enfermagem!: Enfermagem[];

  constructor(private enfermagemService : EnfermagemService){

  }

  ngOnInit(): void {
    this.listaProntEnf();
    
  }

  listaProntEnf(){
    this.enfermagemService.listaProntEnf().subscribe(response => this.enfermagem = response);
  }
}
