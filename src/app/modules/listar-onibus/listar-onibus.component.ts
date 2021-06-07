import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { io } from 'socket.io-client';
import { OnibusService } from 'src/app/core/services/onibus.service';
import { OnibusStatus } from 'src/app/shared/enums/onibus-status.enum';
import { Onibus } from 'src/app/shared/models/onibus.model';

const SOCKET_ENDPOINT = 'http://localhost:3000';

@Component({
  selector: 'app-listar-onibus',
  templateUrl: './listar-onibus.component.html',
  styleUrls: ['./listar-onibus.component.scss']
})
export class ListarOnibusComponent implements OnInit {

  public listaOnibus: Array<Onibus>;
  private uf: string;
  public socket;


  constructor(private readonly onibusService: OnibusService,
    private readonly route: ActivatedRoute) { }

  ngOnInit() {

    this.setupSocketConnection();

    this.route.params.subscribe(params => {
      this.uf = params['estado'];
      this.onibusService.listarOnibusPorEstadoEStatus(this.uf, OnibusStatus.ativo).subscribe({
        next: response => {
          this.listaOnibus = response;
        }
      })
   });
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-alteracao-onibus', (data: Onibus) => {
      if (data) {
        const element = document.getElementById(data.placa);
        const elementAlter = document.createElement('p');
        elementAlter.classList.add("paragrafo");
        elementAlter.style.marginLeft = "10px";
        elementAlter.id = data.placa;
        
        const elementCreatedTemVaga = document.createElement('b');
        elementCreatedTemVaga.innerHTML = "Tem vaga? ";
        elementCreatedTemVaga.classList.add("espacamento");
        elementCreatedTemVaga.style.marginLeft = "5px";
        elementCreatedTemVaga.style.marginRight = "5px";
        elementAlter.appendChild(elementCreatedTemVaga);
       
        const elementCreatedTemVagaData = document.createElement('label');
        elementCreatedTemVagaData.innerHTML = (data.estaLotado ? "Não" : "Sim") + " - ";
        elementAlter.appendChild(elementCreatedTemVagaData);
        
        const elementCreatedLinha = document.createElement('b');
        elementCreatedLinha.innerHTML = "Linha: ";
        elementCreatedLinha.classList.add("espacamento");
        elementCreatedLinha.style.marginLeft = "5px";
        elementCreatedLinha.style.marginRight = "5px";
        elementAlter.appendChild(elementCreatedLinha);
       
        const elementCreatedLinhaData = document.createElement('label');
        elementCreatedLinhaData.innerHTML = data.identificacao + " - ";
        elementAlter.appendChild(elementCreatedLinhaData);
        
        const elementCreatedSentidoIda = document.createElement('b');
        elementCreatedSentidoIda.innerHTML = "Sentido de ida: ";
        elementCreatedSentidoIda.classList.add("espacamento");
        elementCreatedSentidoIda.style.marginLeft = "5px";
        elementCreatedSentidoIda.style.marginRight = "5px";
        elementAlter.appendChild(elementCreatedSentidoIda);
        
        const elementCreatedSentidoIdaData = document.createElement('label');
        elementCreatedSentidoIdaData.innerHTML = data.sentidoIda;
        elementAlter.appendChild(elementCreatedSentidoIdaData);
        
        const elementCreatedSentidoVolta = document.createElement('b');
        elementCreatedSentidoVolta.innerHTML = " com Sentido de volta: ";
        elementCreatedSentidoVolta.style.marginLeft = "5px";
        elementCreatedSentidoVolta.style.marginRight = "5px";
        elementAlter.appendChild(elementCreatedSentidoVolta);

        const elementCreatedSentidoVoltaData = document.createElement('label');
        elementCreatedSentidoVoltaData.innerHTML = data.sentidoVolta;
        elementAlter.appendChild(elementCreatedSentidoVoltaData);

        element.parentNode.replaceChild(elementAlter, element);
       }
     });
    }
}
