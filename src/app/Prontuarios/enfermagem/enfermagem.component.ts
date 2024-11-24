import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { MatDateFormats, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { EnfermagemService } from '../../_services/enfermagem.service';
import { CommonModule, formatDate } from '@angular/common';

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
  selector: 'app-enfermagem',
  standalone: true,
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
  templateUrl: './enfermagem.component.html',
  styleUrl: './enfermagem.component.css',
})
export class EnfermagemComponent {
  ProntuarioEnfermagem = {
    nome: '',
    dataNascimento: '',
    dataExame: '',
    nivelConciencia: '',
    pupilasSituacao: '',
    pupilaPD: '',
    pupilaPE: '',
    fotorreacao: '',
    sistemaCardioCirculatorio: '',
    carotideosEsquerdo: '',
    carotideosDireito: '',
    braquiaisEsquerdo: '',
    braquiaisDireito: '',
    radiaisEsquerdo: '',
    radiaisDireito: '',
    femoraisEsquerdo: '',
    femoraisDireito: '',
    pediososEsquerdo: '',
    pediososDireito: '',
    popliteosEsquerdo: '',
    popliteosDireito: '',
    perfusaoPeriferica: '',
    edema: '',
    padrao: '',
    murmurioVesicular: '',
    expansaoTorax: '',
    ruidosAdventicios: '',
    aceitacaoDieta: '',
    denticao: '',
    abdome: '',
    rha: '',
    massa: '',
    evacuacao: '',
    genito: '',
    urina: '',
    vesical: '',
    cutanea: '',
    sensorial: '',
    umidade: '',
    atividade: '',
    mobilidade: '',
    nutricao: '',
    friccao: '',
    diagnosticosEnfermagem: '',
    controleSinaisVitaisData: '',
    controleSinaisVitaisHorario: '',
    controleSinaisVitaisPa: '',
    controleSinaisVitaisFc: '',
    controleSinaisVitaisFr: '',
    controleSinaisVitaisTemp: '',
    controleSinaisVitaisPvc: '',
    controleSinaisVitaisGlicemia: '',
    controleSinaisVitaisAnotacoes: '',
  };

  errorMessage: string = '';
  showErrorCard: boolean = false; // Controla a exibição do card de erro
  showSuccessCard: boolean = false; // Controla o card de sucesso

  constructor(
    private enfermagemService: EnfermagemService,
    private router: Router
  ) {}

  ProntEnfermagem() {
    if (
      !this.ProntuarioEnfermagem.nome ||
      !this.ProntuarioEnfermagem.dataNascimento ||
      !this.ProntuarioEnfermagem.dataExame ||
      !this.ProntuarioEnfermagem.nivelConciencia ||
      !this.ProntuarioEnfermagem.pupilasSituacao ||
      !this.ProntuarioEnfermagem.pupilaPD ||
      !this.ProntuarioEnfermagem.pupilaPE ||
      !this.ProntuarioEnfermagem.fotorreacao ||
      !this.ProntuarioEnfermagem.sistemaCardioCirculatorio ||
      !this.ProntuarioEnfermagem.carotideosEsquerdo ||
      !this.ProntuarioEnfermagem.carotideosDireito ||
      !this.ProntuarioEnfermagem.braquiaisEsquerdo ||
      !this.ProntuarioEnfermagem.braquiaisDireito ||
      !this.ProntuarioEnfermagem.radiaisEsquerdo ||
      !this.ProntuarioEnfermagem.radiaisDireito ||
      !this.ProntuarioEnfermagem.femoraisEsquerdo ||
      !this.ProntuarioEnfermagem.femoraisDireito ||
      !this.ProntuarioEnfermagem.pediososEsquerdo ||
      !this.ProntuarioEnfermagem.pediososDireito ||
      !this.ProntuarioEnfermagem.popliteosEsquerdo ||
      !this.ProntuarioEnfermagem.popliteosDireito ||
      !this.ProntuarioEnfermagem.perfusaoPeriferica ||
      !this.ProntuarioEnfermagem.edema ||
      !this.ProntuarioEnfermagem.padrao ||
      !this.ProntuarioEnfermagem.murmurioVesicular ||
      !this.ProntuarioEnfermagem.expansaoTorax ||
      !this.ProntuarioEnfermagem.ruidosAdventicios ||
      !this.ProntuarioEnfermagem.aceitacaoDieta ||
      !this.ProntuarioEnfermagem.denticao ||
      !this.ProntuarioEnfermagem.abdome ||
      !this.ProntuarioEnfermagem.rha ||
      !this.ProntuarioEnfermagem.massa ||
      !this.ProntuarioEnfermagem.evacuacao ||
      !this.ProntuarioEnfermagem.genito ||
      !this.ProntuarioEnfermagem.urina ||
      !this.ProntuarioEnfermagem.vesical ||
      !this.ProntuarioEnfermagem.cutanea ||
      !this.ProntuarioEnfermagem.sensorial ||
      !this.ProntuarioEnfermagem.umidade ||
      !this.ProntuarioEnfermagem.atividade ||
      !this.ProntuarioEnfermagem.mobilidade ||
      !this.ProntuarioEnfermagem.nutricao ||
      !this.ProntuarioEnfermagem.friccao ||
      !this.ProntuarioEnfermagem.diagnosticosEnfermagem ||
      !this.ProntuarioEnfermagem.controleSinaisVitaisData ||
      !this.ProntuarioEnfermagem.controleSinaisVitaisHorario ||
      !this.ProntuarioEnfermagem.controleSinaisVitaisPa ||
      !this.ProntuarioEnfermagem.controleSinaisVitaisFc ||
      !this.ProntuarioEnfermagem.controleSinaisVitaisFr ||
      !this.ProntuarioEnfermagem.controleSinaisVitaisTemp ||
      !this.ProntuarioEnfermagem.controleSinaisVitaisPvc ||
      !this.ProntuarioEnfermagem.controleSinaisVitaisGlicemia ||
      !this.ProntuarioEnfermagem.controleSinaisVitaisAnotacoes
    ) {
      this.showErrorCard = true; // Mostra o card de erro
      setTimeout(() => (this.showErrorCard = false), 5000); // Esconde o card após 5 segundos
      return;
    }

    this.enfermagemService.salvaProntEnf(this.ProntuarioEnfermagem).subscribe({
      next: (response) => {
        // Exibe o card de sucesso
        this.showSuccessCard = true;

        // Esconde o card após 5 segundos
        setTimeout(() => {
          this.showSuccessCard = false;

          // Redireciona após o card desaparecer
          this.router.navigateByUrl(
            'https://localhost:7292/api/ProntuarioEnfermagem'
          );
          this.router.navigate(['/PerfEnf']);
        }, 5000);
      },
      error: (err) => {
        console.error('Erro ao salvar prontuário:', err);
        this.errorMessage =
          'Ocorreu um erro ao salvar o prontuário. Tente novamente.';
      },
    });
  }
}
