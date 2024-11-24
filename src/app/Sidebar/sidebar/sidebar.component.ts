import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router){

  }
  @Input() userType: string = ''; // Tipo de usuário para personalização
  menus: Array<{ title: string; route: string }> = []; // Menus principais
  menos: Array<{ title: string; route: string }> = []; // Menos (listas ou secundários)

  ngOnInit() {
    this.setupMenus();
    this.setupMenos();
  }

  // Configuração dos menus principais
  setupMenus() {
    if (this.userType === 'Admin') {
      this.menus = [
        { title: 'Prontuário de Enfermagem', route: '/enfermagem' },
        { title: 'Prontuário de Nutricionista', route: '/nutricionista' },
        { title: 'Prontuário de Psicóloga', route: '/psicologa' },
        { title: 'Prontuário de Fisioterapia', route: '/fisioterapia' },
      ];
    }
     
    else {
    }
  }

  // Configuração dos menus secundários
  setupMenos() {
    if (this.userType === 'Admin') {
      this.menos = [
        { title: 'Lista de Enfermagem', route: '/listaEnfermagem' },
        { title: 'Lista de Nutricionista', route: '/listaNutricionista' },
        { title: 'Lista de Psicóloga', route: '/listaPsicologa' },
        { title: 'Lista de Fisioterapia', route: '/listaFisioterapia' }
      ];
    } 
    
    else {
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
