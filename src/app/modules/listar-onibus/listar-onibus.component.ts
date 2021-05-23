import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-onibus',
  templateUrl: './listar-onibus.component.html',
  styleUrls: ['./listar-onibus.component.scss']
})
export class ListarOnibusComponent implements OnInit {

  listaOnibus = [
    {"nome": "Jd. Angela", "placa": 123},
  ]

  constructor() { }

  ngOnInit() {
  }

}
