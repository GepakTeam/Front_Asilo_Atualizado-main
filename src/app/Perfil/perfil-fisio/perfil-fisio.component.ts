import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { SidebarComponent } from "../../Sidebar/sidebar/sidebar.component";

@Component({
  selector: 'app-perfil-fisio',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './perfil-fisio.component.html',
  styleUrl: './perfil-fisio.component.css'
})
export class PerfilFisioComponent {
  constructor(private router: Router){

  }

  routerFisio(){
    this.router.navigate(['/fisioterapia']);
  }
  routerFisioLista(){
    this.router.navigate(['/listaFisioterapia']);
  }
}
