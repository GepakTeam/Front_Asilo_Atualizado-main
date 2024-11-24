import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../../Core/NavBar/navbar.component";
import { SidebarComponent } from '../../Sidebar/sidebar/sidebar.component';


@Component({
  selector: 'app-perfil-adm',
  standalone: true,
  imports: [ RouterLink, SidebarComponent],
  templateUrl: './perfil-adm.component.html',
  styleUrls: ['./perfil-adm.component.css'] // Corrigido
})
export class PerfilAdmComponent {

  constructor(private router: Router) {}

  routerInd() {
    this.router.navigate(['/individual']);
  }

  routerIndLista() {
    this.router.navigate(['/listaIndividual']);
  }
}
