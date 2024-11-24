import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { IndividualService } from '../../_services/individual.service';

import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { IndividualRequest } from '../../Models/IndividualRequest';
import { CommonModule } from '@angular/common';

// Configuração dos formatos de data
export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-individual',
  standalone: true,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css'],
  imports: [
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterLink,
    NavbarComponent,
    FormsModule,
    CommonModule,
  ],
})
export class IndividualComponent {
  ProntuarioIndividual = {
    nome: '',
    dataNascimento: '',
    idade: '',
    localNascimento: '',
    sexo: '',
    raca: '',
    telefone: '',
    nomeMae: '',
    nomePai: '',
    nomeResponsavel: '',
    endereco: '',
    cep: '',
    pontoReferencia: '',
    rg: '',
    cpf: '',
    carteiraTrabalho: '',
    tituloEleitoral: '',
    certidaoNascimento: '',
    relacaoAmigavel: '',
    relacaoDistanciados: '',
    relacaoConflituosa: '',
    quemResideCasa: '',
    filho: '',
    qntFilho: '',
    comQuemMoraFilhos: '',
    moradia: '',
    doenca: '',
    deficiencia: '',
    quaisDeficiencias: '',
    saude: '',
    atividadesLazer: '',
    parceiros: '',
    acompanhamento: '',
    qualMedicacao: '',
    planoSaude: '',
    qualPlanoSaude: '',
    usoDroga: '',
    quaisDrogasUsou: '',
    historicoUso: '',
    atendimentoPsicologico: '',
    localAtendimentoPsicologico: '',
    tratamentoPsiquiatrico: '',
    localTratamentoPsiquiatrico: '',
    tomaAlgumTipoMedicamento: '',
    motivoEncaminhamentoPsicologico: '',
  };

  errorMessage: string = '';
  showErrorCard: boolean = false; // Controla a exibição do card de erro
  showSuccessCard: boolean = false; // Controla o card de sucesso

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private individualService: IndividualService,
    private router: Router
  ) {
    // Define o formato de data para o padrão brasileiro
    this.dateAdapter.setLocale('pt-BR');
  }

  ProntIndividual() {
    if (
      !this.ProntuarioIndividual.nome ||
      !this.ProntuarioIndividual.dataNascimento ||
      !this.ProntuarioIndividual.idade ||
      !this.ProntuarioIndividual.localNascimento ||
      !this.ProntuarioIndividual.sexo ||
      !this.ProntuarioIndividual.raca ||
      !this.ProntuarioIndividual.telefone ||
      !this.ProntuarioIndividual.nomeMae ||
      !this.ProntuarioIndividual.nomePai ||
      !this.ProntuarioIndividual.nomeResponsavel ||
      !this.ProntuarioIndividual.endereco ||
      !this.ProntuarioIndividual.cep ||
      !this.ProntuarioIndividual.pontoReferencia ||
      !this.ProntuarioIndividual.rg ||
      !this.ProntuarioIndividual.cpf ||
      !this.ProntuarioIndividual.carteiraTrabalho ||
      !this.ProntuarioIndividual.tituloEleitoral ||
      !this.ProntuarioIndividual.certidaoNascimento ||
      !this.ProntuarioIndividual.relacaoAmigavel ||
      !this.ProntuarioIndividual.relacaoDistanciados ||
      !this.ProntuarioIndividual.relacaoConflituosa ||
      !this.ProntuarioIndividual.quemResideCasa ||
      !this.ProntuarioIndividual.filho ||
      !this.ProntuarioIndividual.qntFilho ||
      !this.ProntuarioIndividual.comQuemMoraFilhos ||
      !this.ProntuarioIndividual.moradia ||
      !this.ProntuarioIndividual.doenca ||
      !this.ProntuarioIndividual.deficiencia ||
      !this.ProntuarioIndividual.quaisDeficiencias ||
      !this.ProntuarioIndividual.saude ||
      !this.ProntuarioIndividual.atividadesLazer ||
      !this.ProntuarioIndividual.parceiros ||
      !this.ProntuarioIndividual.acompanhamento ||
      !this.ProntuarioIndividual.qualMedicacao ||
      !this.ProntuarioIndividual.planoSaude ||
      !this.ProntuarioIndividual.qualPlanoSaude ||
      !this.ProntuarioIndividual.usoDroga ||
      !this.ProntuarioIndividual.quaisDrogasUsou ||
      !this.ProntuarioIndividual.historicoUso ||
      !this.ProntuarioIndividual.atendimentoPsicologico ||
      !this.ProntuarioIndividual.localAtendimentoPsicologico ||
      !this.ProntuarioIndividual.tratamentoPsiquiatrico ||
      !this.ProntuarioIndividual.localTratamentoPsiquiatrico ||
      !this.ProntuarioIndividual.tomaAlgumTipoMedicamento ||
      !this.ProntuarioIndividual.motivoEncaminhamentoPsicologico
    ) {
      this.showErrorCard = true; // Mostra o card de erro
      setTimeout(() => (this.showErrorCard = false), 5000); // Esconde o card após 5 segundos
      return;
    }

    this.individualService.salvaProntInd(this.ProntuarioIndividual).subscribe({
      next: (response) => {
        // Exibe o card de sucesso
        this.showSuccessCard = true;

        // Esconde o card após 5 segundos
        setTimeout(() => {
          this.showSuccessCard = false;

          // Redireciona após o card desaparecer
          this.router.navigateByUrl(
            'https://localhost:7292/api/ProntuarioIndividual'
          );
          this.router.navigate(['/adm']);
        }, 5000);
      },
      error: (err) => {
        console.error('Erro ao salvar prontuário:', err);

        // Mensagem de erro (opcional, se quiser adicionar)
        this.errorMessage =
          'Ocorreu um erro ao salvar o prontuário. Tente novamente.';
      },
    });
  }
}
