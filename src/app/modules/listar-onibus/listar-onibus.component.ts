import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnibusService } from 'src/app/core/services/onibus.service';
import { OnibusStatus } from 'src/app/shared/enums/onibus-status.enum';
import { Onibus } from 'src/app/shared/models/onibus.model';

@Component({
  selector: 'app-listar-onibus',
  templateUrl: './listar-onibus.component.html',
  styleUrls: ['./listar-onibus.component.scss']
})
export class ListarOnibusComponent implements OnInit {

  private listaOnibus: Array<Onibus>;
  private uf: string;

  constructor(private readonly onibusService: OnibusService,
    private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.uf = params['estado'];
      console.log(this.uf);
      this.onibusService.listarOnibusPorEstadoEStatus(this.uf, OnibusStatus.ativo).subscribe({
        next: response => {
          this.listaOnibus = response;
          console.log(this.listaOnibus);
        }
      })
   });
  }

}
