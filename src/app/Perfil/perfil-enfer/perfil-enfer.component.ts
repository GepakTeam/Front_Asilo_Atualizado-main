import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { SidebarComponent } from "../../Sidebar/sidebar/sidebar.component";


@Component({
  selector: 'app-perfil-enfer',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './perfil-enfer.component.html',
  styleUrl: './perfil-enfer.component.css'
})
export class PerfilEnferComponent {
currentUserType: string | undefined;
  constructor(private router: Router){

  }

  routerEnf(){
    this.router.navigate(['/enfermagem']);
  }
  routerEnfLista(){
    this.router.navigate(['/listaEnfermagem']);
  }

  logout(){
    this.router.navigate(['/']);
  }

  @Input() userType: string = '';


  

}
