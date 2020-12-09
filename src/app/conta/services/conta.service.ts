import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";


@Injectable()
export class ContaService  {

    constructor(private http: HttpClient) {  }

    registrarUsuario(usuario: Usuario): Observable<Usuario> {

        return null;
    }

    login(usuario: Usuario): Observable<Usuario> {


        return null;
    }
}
