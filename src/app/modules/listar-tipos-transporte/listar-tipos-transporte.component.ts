import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tipos-transporte',
  templateUrl: './listar-tipos-transporte.component.html',
  styleUrls: ['./listar-tipos-transporte.component.scss']
})
export class ListarTiposTransporteComponent implements OnInit {

  transportes = [
    {"nome": "Ônibus", "sigla": "onibus"},
    {"nome": "Trem/Metro", "sigla": "trem-metro"},
    {"nome": "Mini Ônibus", "sigla": "mini-oni"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
