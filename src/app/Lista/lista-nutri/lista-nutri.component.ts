import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { Nutricionista } from '../../Models/nutricionista';
import { NutricionistaService } from '../../_services/nutricionista.service';

@Component({
  selector: 'app-lista-nutri',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, NavbarComponent],
  templateUrl: './lista-nutri.component.html',
  styleUrl: './lista-nutri.component.css'
})

export class ListaNutriComponent implements OnInit{

  nutricionista?: Nutricionista[];

  constructor(private nutricionistaService : NutricionistaService){

  }

  ngOnInit(): void {
    this.listaProntNutri();
    
  }

  listaProntNutri(){
    this.nutricionistaService.listaProntNutri().subscribe(response => this.nutricionista = response);
  }
}

