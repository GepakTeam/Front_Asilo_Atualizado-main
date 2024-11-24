import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Fisioterapia } from '../../Models/fisioterapia';
import { FisioterapiaService } from '../../_services/fisioterapia.service';
import { FisioterapiaRequest } from '../../Models/FisioterapiaRequest';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fisioterapia',
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
    CommonModule
  ],
  templateUrl: './fisioterapia.component.html',
  styleUrls: ['./fisioterapia.component.css'],
})
export class FisioterapiaComponent {
  ProntuarioFisioterapeuta = {
    dataAvaliacao: '',
    nome: '',
    sexo: '',
    idade: '',
    dataNascimento: '',
    estadoCivil: '',
    telefone: '',
    endereco: '',
    examesComplementares: '',
    medicamentos: '',
    diagnosticoClinicoPatologico: '',
    queixaPrincipal: '',
    hma: '',
    avd: '',
    aparelhoLocomotor: '',
    aparelhoCardioRespiratorio: '',
    aparelhoCardioVascular: '',
    ginecologico: '',
    outros: '',
    dificuldadeComunicacao: '',
    tipoMedicamento: '',
    dosagem: '',
    frequencia: '',
    remedioSemPrescricao: '',
    habilidadeManusear: '',
    frequenciaRefeicoes: '',
    dietaEspecial: '',
    ingestaoAlcool: '',
    ingestaoHidrica: '',
    usaProtese: '',
    apetite: '',
    porqueApetite: '',
    demencia: '',
    escalaDepressao: '',
    estadoEmocional: '',
    peso: '',
    altura: '',
    pa: '',
    auscultaCardiaca: '',
    frequenciaCardiaca: '',
    auscultaPulmonar: '',
    frequenciaRespiratoria: '',
    padraoRespiratorio: '',
    ombroFlexaoVR: '',
    ombroFlexaoAdmDireito: '',
    ombroFlexaoAdmEsquerdo: '',
    ombroExtensaoVR: '',
    ombroExtensaoAdmDireito: '',
    ombroExtensaoAdmEsquerdo: '',
    ombroAducaoVR: '',
    ombroAducaoAdmDireito: '',
    ombroAducaoAdmEsquerdo: '',
    ombroAbducaoVR: '',
    ombroAbducaoAdmDireito: '',
    ombroAbducaoAdmEsquerdo: '',
    ombroRotInternaVR: '',
    ombroRotInternaAdmDireito: '',
    ombroRotInternaAdmEsquerdo: '',
    ombroRotExternaVR: '',
    ombroRotExternaAdmDireito: '',
    ombroRotExternaAdmEsquerdo: '',
    cotoveloFlexaoVR: '',
    cotoveloFlexaoAdmDireito: '',
    cotoveloFlexaoAdmEsquerdo: '',
    cotoveloExtensaoVR: '',
    cotoveloExtensaoAdmDireito: '',
    cotoveloExtensaoAdmEsquerdo: '',
    punhoExtensaoVR: '',
    punhoExtensaoAdmDireito: '',
    punhoExtensaoAdmEsquerdo: '',
    punhoFlexaoVR: '',
    punhoFlexaoAdmDireito: '',
    punhoFlexaoAdmEsquerdo: '',
    punhoDesvioUlnarVR: '',
    punhoDesvioUlnarAdmDireito: '',
    punhoDesvioUlnarAdmEsquerdo: '',
    punhoDesvioRadialVR: '',
    punhoDesvioRadialAdmDireito: '',
    punhoDesvioRadialAdmEsquerdo: '',
    quadrilFlexaoVR: '',
    quadrilFlexaoAdmDireito: '',
    quadrilFlexaoAdmEsquerdo: '',
    quadrilExtensaoVR: '',
    quadrilExtensaoAdmDireito: '',
    quadrilExtensaoAdmEsquerdo: '',
    quadrilAducaoVR: '',
    quadrilAducaoAdmDireito: '',
    quadrilAducaoAdmEsquerdo: '',
    quadrilAbducaoVR: '',
    quadrilAbducaoAdmDireito: '',
    quadrilAbducaoAdmEsquerdo: '',
    quadrilRotInternaVR: '',
    quadrilRotInternaAdmDireito: '',
    quadrilRotInternaAdmEsquerdo: '',
    quadrilRotExternaVR: '',
    quadrilRotExternaAdmDireito: '',
    quadrilRotExternaAdmEsquerdo: '',
    joelhoFlexaoVR: '',
    joelhoFlexaoAdmDireito: '',
    joelhoFlexaoAdmEsquerdo: '',
    joelhoExtensaoVR: '',
    joelhoExtensaoAdmDireito: '',
    joelhoExtensaoAdmEsquerdo: '',
    tornozeloEversaoVR: '',
    tornozeloEversaoAdmDireito: '',
    tornozeloEversaoAdmEsquerdo: '',
    tornozeloDorsiflexaoVR: '',
    tornozeloDorsiflexaoAdmDireito: '',
    tornozeloDorsiflexaoAdmEsquerdo: '',
    tornozeloFlexaoPlantarVR: '',
    tornozeloFlexaoPlantarAdmDireito: '',
    tornozeloFlexaoPlantarAdmEsquerdo: '',
    tornozeloInversaoVR: '',
    tornozeloInversaoAdmDireito: '',
    tornozeloInversaoAdmEsquerdo: '',
    tempoQuedas: '',
    frequenciaQuedas: '',
    localQuedas: '',
    reflexo: '',
    equilibrioSentado: '',
    equilibrioEmPe: '',
    equilibrioSinalRosemberg: '',
    atividadeVidaDiaria: '',
    escalaDor: '',
    regiaoDor: '',
    peSagital: '',
    peFrontal: '',
    joelhoSagital: '',
    joelhoFrontal: '',
    cinturaPelvicaSagital: '',
    cinturaPelvicaFrontal: '',
    colunaSagital: '',
    colunaFrontal: '',
    cinturaEscapularSagital: '',
    cinturaEscapularFrontal: '',
    cabecaSagital: '',
    cabecaFrontal: '',
    avaliacaoMarcha: '',
    observacoes: '',
    diagnosticoFuncional: '',
    objetivosFisioterapicos: '',
  };

  errorMessage: string = '';
  showErrorCard: boolean = false; // Controla a exibição do card de erro
  showSuccessCard: boolean = false; // Controla o card de sucesso

  constructor(
    private fisioterapiaService: FisioterapiaService,
    private router: Router
  ) {}

  ProntFisioterapia() {
    if (
      !this.ProntuarioFisioterapeuta.dataAvaliacao ||
      !this.ProntuarioFisioterapeuta.nome ||
      !this.ProntuarioFisioterapeuta.sexo ||
      !this.ProntuarioFisioterapeuta.idade ||
      !this.ProntuarioFisioterapeuta.dataNascimento ||
      !this.ProntuarioFisioterapeuta.estadoCivil ||
      !this.ProntuarioFisioterapeuta.telefone ||
      !this.ProntuarioFisioterapeuta.endereco ||
      !this.ProntuarioFisioterapeuta.examesComplementares ||
      !this.ProntuarioFisioterapeuta.medicamentos ||
      !this.ProntuarioFisioterapeuta.diagnosticoClinicoPatologico ||
      !this.ProntuarioFisioterapeuta.queixaPrincipal ||
      !this.ProntuarioFisioterapeuta.hma ||
      !this.ProntuarioFisioterapeuta.avd ||
      !this.ProntuarioFisioterapeuta.aparelhoLocomotor ||
      !this.ProntuarioFisioterapeuta.aparelhoCardioRespiratorio ||
      !this.ProntuarioFisioterapeuta.aparelhoCardioVascular ||
      !this.ProntuarioFisioterapeuta.ginecologico ||
      !this.ProntuarioFisioterapeuta.outros ||
      !this.ProntuarioFisioterapeuta.dificuldadeComunicacao ||
      !this.ProntuarioFisioterapeuta.tipoMedicamento ||
      !this.ProntuarioFisioterapeuta.dosagem ||
      !this.ProntuarioFisioterapeuta.frequencia ||
      !this.ProntuarioFisioterapeuta.remedioSemPrescricao ||
      !this.ProntuarioFisioterapeuta.habilidadeManusear ||
      !this.ProntuarioFisioterapeuta.frequenciaRefeicoes ||
      !this.ProntuarioFisioterapeuta.dietaEspecial ||
      !this.ProntuarioFisioterapeuta.ingestaoAlcool ||
      !this.ProntuarioFisioterapeuta.ingestaoHidrica ||
      !this.ProntuarioFisioterapeuta.usaProtese ||
      !this.ProntuarioFisioterapeuta.apetite ||
      !this.ProntuarioFisioterapeuta.porqueApetite ||
      !this.ProntuarioFisioterapeuta.demencia ||
      !this.ProntuarioFisioterapeuta.escalaDepressao ||
      !this.ProntuarioFisioterapeuta.estadoEmocional ||
      !this.ProntuarioFisioterapeuta.peso ||
      !this.ProntuarioFisioterapeuta.altura ||
      !this.ProntuarioFisioterapeuta.pa ||
      !this.ProntuarioFisioterapeuta.auscultaCardiaca ||
      !this.ProntuarioFisioterapeuta.frequenciaCardiaca ||
      !this.ProntuarioFisioterapeuta.auscultaPulmonar ||
      !this.ProntuarioFisioterapeuta.frequenciaRespiratoria ||
      !this.ProntuarioFisioterapeuta.padraoRespiratorio ||
      !this.ProntuarioFisioterapeuta.ombroFlexaoVR ||
      !this.ProntuarioFisioterapeuta.ombroFlexaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.ombroFlexaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.ombroExtensaoVR ||
      !this.ProntuarioFisioterapeuta.ombroExtensaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.ombroExtensaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.ombroAducaoVR ||
      !this.ProntuarioFisioterapeuta.ombroAducaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.ombroAducaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.ombroAbducaoVR ||
      !this.ProntuarioFisioterapeuta.ombroAbducaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.ombroAbducaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.ombroRotInternaVR ||
      !this.ProntuarioFisioterapeuta.ombroRotInternaAdmDireito ||
      !this.ProntuarioFisioterapeuta.ombroRotInternaAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.ombroRotExternaVR ||
      !this.ProntuarioFisioterapeuta.ombroRotExternaAdmDireito ||
      !this.ProntuarioFisioterapeuta.ombroRotExternaAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.cotoveloFlexaoVR ||
      !this.ProntuarioFisioterapeuta.cotoveloFlexaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.cotoveloFlexaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.cotoveloExtensaoVR ||
      !this.ProntuarioFisioterapeuta.cotoveloExtensaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.cotoveloExtensaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.punhoExtensaoVR ||
      !this.ProntuarioFisioterapeuta.punhoExtensaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.punhoExtensaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.punhoFlexaoVR ||
      !this.ProntuarioFisioterapeuta.punhoFlexaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.punhoFlexaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.punhoDesvioUlnarVR ||
      !this.ProntuarioFisioterapeuta.punhoDesvioUlnarAdmDireito ||
      !this.ProntuarioFisioterapeuta.punhoDesvioUlnarAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.punhoDesvioRadialVR ||
      !this.ProntuarioFisioterapeuta.punhoDesvioRadialAdmDireito ||
      !this.ProntuarioFisioterapeuta.punhoDesvioRadialAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.quadrilFlexaoVR ||
      !this.ProntuarioFisioterapeuta.quadrilFlexaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.quadrilFlexaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.quadrilExtensaoVR ||
      !this.ProntuarioFisioterapeuta.quadrilExtensaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.quadrilExtensaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.quadrilAducaoVR ||
      !this.ProntuarioFisioterapeuta.quadrilAducaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.quadrilAducaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.quadrilAbducaoVR ||
      !this.ProntuarioFisioterapeuta.quadrilAbducaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.quadrilAbducaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.quadrilRotInternaVR ||
      !this.ProntuarioFisioterapeuta.quadrilRotInternaAdmDireito ||
      !this.ProntuarioFisioterapeuta.quadrilRotInternaAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.quadrilRotExternaVR ||
      !this.ProntuarioFisioterapeuta.quadrilRotExternaAdmDireito ||
      !this.ProntuarioFisioterapeuta.quadrilRotExternaAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.joelhoFlexaoVR ||
      !this.ProntuarioFisioterapeuta.joelhoFlexaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.joelhoFlexaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.joelhoExtensaoVR ||
      !this.ProntuarioFisioterapeuta.joelhoExtensaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.joelhoExtensaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.tornozeloEversaoVR ||
      !this.ProntuarioFisioterapeuta.tornozeloEversaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.tornozeloEversaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.tornozeloDorsiflexaoVR ||
      !this.ProntuarioFisioterapeuta.tornozeloDorsiflexaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.tornozeloDorsiflexaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.tornozeloFlexaoPlantarVR ||
      !this.ProntuarioFisioterapeuta.tornozeloFlexaoPlantarAdmDireito ||
      !this.ProntuarioFisioterapeuta.tornozeloFlexaoPlantarAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.tornozeloInversaoVR ||
      !this.ProntuarioFisioterapeuta.tornozeloInversaoAdmDireito ||
      !this.ProntuarioFisioterapeuta.tornozeloInversaoAdmEsquerdo ||
      !this.ProntuarioFisioterapeuta.tempoQuedas ||
      !this.ProntuarioFisioterapeuta.frequenciaQuedas ||
      !this.ProntuarioFisioterapeuta.localQuedas ||
      !this.ProntuarioFisioterapeuta.reflexo ||
      !this.ProntuarioFisioterapeuta.equilibrioSentado ||
      !this.ProntuarioFisioterapeuta.equilibrioEmPe ||
      !this.ProntuarioFisioterapeuta.equilibrioSinalRosemberg ||
      !this.ProntuarioFisioterapeuta.atividadeVidaDiaria ||
      !this.ProntuarioFisioterapeuta.escalaDor ||
      !this.ProntuarioFisioterapeuta.regiaoDor ||
      !this.ProntuarioFisioterapeuta.peSagital ||
      !this.ProntuarioFisioterapeuta.peFrontal ||
      !this.ProntuarioFisioterapeuta.joelhoSagital ||
      !this.ProntuarioFisioterapeuta.joelhoFrontal ||
      !this.ProntuarioFisioterapeuta.cinturaPelvicaSagital ||
      !this.ProntuarioFisioterapeuta.cinturaPelvicaFrontal ||
      !this.ProntuarioFisioterapeuta.colunaSagital ||
      !this.ProntuarioFisioterapeuta.colunaFrontal ||
      !this.ProntuarioFisioterapeuta.cinturaEscapularSagital ||
      !this.ProntuarioFisioterapeuta.cinturaEscapularFrontal ||
      !this.ProntuarioFisioterapeuta.cabecaSagital ||
      !this.ProntuarioFisioterapeuta.cabecaFrontal ||
      !this.ProntuarioFisioterapeuta.avaliacaoMarcha ||
      !this.ProntuarioFisioterapeuta.observacoes ||
      !this.ProntuarioFisioterapeuta.diagnosticoFuncional ||
      !this.ProntuarioFisioterapeuta.objetivosFisioterapicos
    ) {
      this.showErrorCard = true; // Mostra o card de erro
      setTimeout(() => (this.showErrorCard = false), 5000); // Esconde o card após 5 segundos
      return;
    }

    this.fisioterapiaService
      .salvaProntFisio(this.ProntuarioFisioterapeuta)
      .subscribe({
        next: (response) => {
          // Exibe o card de sucesso
          this.showSuccessCard = true;

          // Esconde o card após 5 segundos
          setTimeout(() => {
            this.showSuccessCard = false;

            // Redireciona após o card desaparecer
            this.router.navigateByUrl(
              'https://localhost:7292/api/ProntuarioFisioterapeuta'
            );
            this.router.navigate(['/PerfFisio']);
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
