import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { Fisioterapia } from '../../Models/fisioterapia';
import { FisioterapiaService } from '../../_services/fisioterapia.service';

@Component({
  selector: 'app-lista-fisio',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, NavbarComponent],
  templateUrl: './lista-fisio.component.html',
  styleUrl: './lista-fisio.component.css'
})
export class ListaFisioComponent  implements OnInit{
  
  fisioterapia?: Fisioterapia[];

  constructor(private fisioterapiaService : FisioterapiaService){

  }

  ngOnInit(): void {
    this.listaProntFisio();
    
  }

  listaProntFisio(){
    this.fisioterapiaService.listaProntFisio().subscribe(response => this.fisioterapia = response);
  }

}
