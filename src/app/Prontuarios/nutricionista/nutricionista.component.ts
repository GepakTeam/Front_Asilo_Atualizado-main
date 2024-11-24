import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { Nutricionista } from '../../Models/nutricionista';
import { DateAdapter, MatDateFormats, MatNativeDateModule } from '@angular/material/core';
import { NutricionistaService } from '../../_services/nutricionista.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { NutricionistaRequest } from '../../Models/NutricionistaRequest';
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
  selector: 'app-nutricionista',
  standalone: true,
  imports: [MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterLink,
    NavbarComponent,
    FormsModule, 
    CommonModule],
  templateUrl: './nutricionista.component.html',
  styleUrl: './nutricionista.component.css'
})
export class NutricionistaComponent {
  ProntuarioNutricionista = {
    nome: '',
    dataAvaliacao: '',
    idade: '',
    dataNascimento: '',
    motivoConsulta:   '',
    encaminhadoPor:   '',
    convenio:   '',
    telefone:   '',
    endereco:   '',
    escolaridade:   '',
    profissao:  '',
    numeroPessoasCasa: '',
    numeroAdulto: '',
    numeroCrianca: '',
    estadoCivil:  '',
    problemaSaude: '',
    qualProblemaSaude:  '',
    diabetes: '',
    hipertensao: '',
    obesidade: '',
    dislipidemia: '',
    outrosProblemas:  '',
    antecedenteDiabetes: '',
    antecedenteHipertensao: '',
    antecedenteObesidade: '',
    antecedenteDislipidemia: '',
    outrosAntecedentes:   '',
    habitoIntestinal:   '',
    caracteristicaFezes:  '',
    habitoUrinario:   '',
    horasSono: '',
    atividadeFisica: '',
    frequenciaAtividadeFisica:  '',
    fuma: '',
    quantoFuma:   '',
    haQuantoTempoFuma:  '',
    fazUsoBebidaAlcoolica: '',
    tipoBebida:   '',
    haQuantoTempoBebida:  '',
    fazUsoLaxante: '',
    porQuantoTempoLaxante:  '',
    fazUsoMedicamento: '',
    haQuantoTempoMedicamento:   '',
    quaisMedicamentos:  '',
    intoleranciaOuAversaoAlimentar: '',
    qualIntolerancia:   '',
    haQuantoTempoIntolerancia:  '',
    controleAlimentacao: '',
    qualControleAlimentacao:  '',
    alteracaoPeso: '',
    emQuantoTempo:  '',
    consumoAgua:  '',
    consumoCafe:  '',
    consumoMensalSal:   '',
    consumoAcucar:  '',
    consumoOleoBanha:   '',
    ondeFazRefeicoes:   '',
    quemPreparaRefeicoes:   '',
    velocidadeRefeicao:   '',
    acompanhamentoRefeicao:   '',
    preferenciasAlimentares:  '',
    restricoesAlimentares:  '',
  };

  errorMessage: string = '';
  showErrorCard: boolean = false; // Controla a exibição do card de erro
  showSuccessCard: boolean = false; // Controla o card de sucesso

  constructor(private dateAdapter: DateAdapter<Date>, 
    private nutricionistaService: NutricionistaService, 
    private router: Router
  ) {
    // Define o formato de data para o padrão brasileiro
    this.dateAdapter.setLocale('pt-BR'); 
  }
     ProntNutricionista(){
      if (
        !this.ProntuarioNutricionista.nome ||
        !this.ProntuarioNutricionista.dataAvaliacao ||
        !this.ProntuarioNutricionista.idade ||
        !this.ProntuarioNutricionista.dataNascimento ||
        !this.ProntuarioNutricionista.motivoConsulta ||
        !this.ProntuarioNutricionista.encaminhadoPor ||
        !this.ProntuarioNutricionista.convenio ||
        !this.ProntuarioNutricionista.telefone ||
        !this.ProntuarioNutricionista.endereco ||
        !this.ProntuarioNutricionista.escolaridade ||
        !this.ProntuarioNutricionista.profissao ||
        !this.ProntuarioNutricionista.numeroPessoasCasa ||
        !this.ProntuarioNutricionista.numeroAdulto ||
        !this.ProntuarioNutricionista.numeroCrianca ||
        !this.ProntuarioNutricionista.estadoCivil ||
        !this.ProntuarioNutricionista.problemaSaude ||
        !this.ProntuarioNutricionista.qualProblemaSaude ||
        !this.ProntuarioNutricionista.diabetes ||
        !this.ProntuarioNutricionista.hipertensao ||
        !this.ProntuarioNutricionista.obesidade ||
        !this.ProntuarioNutricionista.dislipidemia ||
        !this.ProntuarioNutricionista.outrosProblemas ||
        !this.ProntuarioNutricionista.antecedenteDiabetes ||
        !this.ProntuarioNutricionista.antecedenteHipertensao ||
        !this.ProntuarioNutricionista.antecedenteObesidade ||
        !this.ProntuarioNutricionista.antecedenteDislipidemia ||
        !this.ProntuarioNutricionista.outrosAntecedentes ||
        !this.ProntuarioNutricionista.habitoIntestinal ||
        !this.ProntuarioNutricionista.caracteristicaFezes ||
        !this.ProntuarioNutricionista.habitoUrinario ||
        !this.ProntuarioNutricionista.horasSono ||
        !this.ProntuarioNutricionista.atividadeFisica ||
        !this.ProntuarioNutricionista.frequenciaAtividadeFisica ||
        !this.ProntuarioNutricionista.fuma ||
        !this.ProntuarioNutricionista.quantoFuma ||
        !this.ProntuarioNutricionista.haQuantoTempoFuma ||
        !this.ProntuarioNutricionista.fazUsoBebidaAlcoolica ||
        !this.ProntuarioNutricionista.tipoBebida ||
        !this.ProntuarioNutricionista.haQuantoTempoBebida ||
        !this.ProntuarioNutricionista.fazUsoLaxante ||
        !this.ProntuarioNutricionista.porQuantoTempoLaxante ||
        !this.ProntuarioNutricionista.fazUsoMedicamento ||
        !this.ProntuarioNutricionista.haQuantoTempoMedicamento ||
        !this.ProntuarioNutricionista.quaisMedicamentos ||
        !this.ProntuarioNutricionista.intoleranciaOuAversaoAlimentar ||
        !this.ProntuarioNutricionista.qualIntolerancia ||
        !this.ProntuarioNutricionista.haQuantoTempoIntolerancia ||
        !this.ProntuarioNutricionista.controleAlimentacao ||
        !this.ProntuarioNutricionista.qualControleAlimentacao ||
        !this.ProntuarioNutricionista.alteracaoPeso ||
        !this.ProntuarioNutricionista.emQuantoTempo ||
        !this.ProntuarioNutricionista.consumoAgua ||
        !this.ProntuarioNutricionista.consumoCafe ||
        !this.ProntuarioNutricionista.consumoMensalSal ||
        !this.ProntuarioNutricionista.consumoAcucar ||
        !this.ProntuarioNutricionista.consumoOleoBanha ||
        !this.ProntuarioNutricionista.ondeFazRefeicoes ||
        !this.ProntuarioNutricionista.quemPreparaRefeicoes ||
        !this.ProntuarioNutricionista.velocidadeRefeicao ||
        !this.ProntuarioNutricionista.acompanhamentoRefeicao ||
        !this.ProntuarioNutricionista.preferenciasAlimentares ||
        !this.ProntuarioNutricionista.restricoesAlimentares
      ){
        this.showErrorCard = true; // Mostra o card de erro
        setTimeout(() => (this.showErrorCard = false), 5000); // Esconde o card após 5 segundos
        return;
      }
  
      this.nutricionistaService.salvaProntNutri(this.ProntuarioNutricionista).subscribe({
      next: (response) => {
        // Exibe o card de sucesso
        this.showSuccessCard = true;

        // Esconde o card após 5 segundos
        setTimeout(() => {
          this.showSuccessCard = false;

          // Redireciona após o card desaparecer
          this.router.navigateByUrl('https://localhost:7292/api/ProntuarioNutricionista');
          this.router.navigate(['/PerfNutri']);
        }, 5000);
      },
      error: (err) => {
        console.error('Erro ao salvar prontuário:', err);

        // Mensagem de erro (opcional, se quiser adicionar)
        this.errorMessage = 'Ocorreu um erro ao salvar o prontuário. Tente novamente.';
      }
    });
  }
}