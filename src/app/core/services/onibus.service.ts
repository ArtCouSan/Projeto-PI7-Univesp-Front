import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Onibus } from 'src/app/shared/models/onibus.model';

@Injectable({
    providedIn: 'root'
})
export class OnibusService {

    private urlApi = 'http://localhost:3000/onibus';

    constructor(private httpClient: HttpClient) { }

    listarOnibusPorEstadoEStatus(uf: string, status: string): Observable<Array<Onibus>> {
        return this.httpClient.get(`${this.urlApi}?uf=${uf}&status=${status}`).pipe(
            tap({
                error: error => {
                    console.log(error);
                }
            }),
            delay(200),
            map(response => response as Array<Onibus>)
        )
    }

}