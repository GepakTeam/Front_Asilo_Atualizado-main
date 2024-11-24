import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { SidebarComponent } from "../../Sidebar/sidebar/sidebar.component";

@Component({
  selector: 'app-perfil-nutri',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './perfil-nutri.component.html',
  styleUrl: './perfil-nutri.component.css'
})
export class PerfilNutriComponent {
  constructor(private router: Router){

  }

  routerNutri(){
    this.router.navigate(['/nutricionista']);
  }
  routerNutriLista(){
    this.router.navigate(['/listaNutricionista']);
  }
}
