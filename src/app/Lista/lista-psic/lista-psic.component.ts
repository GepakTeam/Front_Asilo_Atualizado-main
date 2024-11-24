import { Component, OnInit } from '@angular/core';
import { Psicologa } from '../../Models/psicologa';
import { PsicologaService } from '../../_services/psicologa.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';

@Component({
  selector: 'app-lista-psic',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, NavbarComponent],
  templateUrl: './lista-psic.component.html',
  styleUrl: './lista-psic.component.css'
})
export class ListaPsicComponent implements OnInit {

  psicologa?: Psicologa[];

  constructor(private psicologaService : PsicologaService){

  }

  ngOnInit(): void {
    //listarProntuarioIndividual();  
    this.listaProntPsic();
    
  }

  listaProntPsic(){
    this.psicologaService.listaProntPsic().subscribe(response => this.psicologa = response);
  }
}
