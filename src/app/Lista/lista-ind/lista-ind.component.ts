// import { Component, OnInit } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/card';
// import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../../Core/NavBar/navbar.component';
// import { Individual } from '../../Models/individual';
// import { IndividualService } from '../../_services/individual.service';

// @Component({
//     selector: 'app-lista-ind',
//     standalone: true,
//     templateUrl: './lista-ind.component.html',
//     styleUrl: './lista-ind.component.css',
//     imports: [MatCardModule, MatButtonModule, CommonModule, NavbarComponent]
// })
// export class ListaIndComponent implements OnInit{

//   individual?: Individual[];

//   constructor(private individualService : IndividualService){

//   }

//   ngOnInit(): void {
//     //listarProntuarioIndividual();
//     this.listaProntInd();

//   }

//   listaProntInd(){
//     this.individualService.listaProntInd().subscribe(response => this.individual = response);
//   }
// }

// listarProntuarioIndividual(): any {

// this.individualService.listarProntuarioIndividual()
// .subscribe({
//   next: (response) => {
//       this.individual = response;
//   }
// });

//////////////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Individual } from '../../Models/individual';
import { IndividualService } from '../../_services/individual.service';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';

@Component({
  selector: 'app-lista-ind',
  standalone: true,
  templateUrl: './lista-ind.component.html',
  styleUrls: ['./lista-ind.component.css'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    NavbarComponent,
  ],
})
export class ListaIndComponent implements OnInit {
  displayedColumns: string[] = [
    'nome',
    'dataNascimento',
    'idade',
    'localNascimento',
    'sexo',
    'raca',
    'telefone',
    'nomeMae',
    'nomePai',
    'nomeResponsavel',
    'endereco',
    'cep',
    'pontoReferencia',
    'rg',
    'cpf',
    'carteiraTrabalho',
    'tituloEleitoral',
    'certidaoNascimento',
    'relacaoAmigavel',
    'relacaoDistanciados',
    'relacaoConflituosa',
    'quemResideCasa',
    'filho',
    'qntFilho',
    'comQuemMoraFilhos',
    'moradia',
    'doenca',
    'deficiencia',
    'quaisDeficiencias',
    'saude',
    'atividadesLazer',
    'parceiros',
    'acompanhamento',
    'qualMedicacao',
    'planoSaude',
    'qualPlanoSaude',
    'usoDroga',
    'quaisDrogasUsou',
    'historicoUso',
    'atendimentoPsicologico',
    'localAtendimentoPsicologico',
    'tratamentoPsiquiatrico',
    'localTratamentoPsiquiatrico',
    'tomaAlgumTipoMedicamento',
    'motivoEncaminhamentoPsicologico'
  ]; // As colunas da tabela
  dataSource = new MatTableDataSource<Individual>(); // Fonte de dados da tabela

  constructor(private individualService: IndividualService) {}

  ngOnInit(): void {
    this.listaProntInd(); // Chama o método para buscar os dados no início
  }

  listaProntInd() {
    // Obtém a lista de indivíduos do serviço
    this.individualService.listaProntInd().subscribe((response) => {
      this.dataSource.data = response; // Define os dados da tabela com a resposta
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Aplica o filtro
  }
}
