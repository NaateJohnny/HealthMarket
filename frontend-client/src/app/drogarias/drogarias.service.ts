import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Drogaria } from './drogaria/drogaria.model';

import { HC_API } from '../app.api';
import { MenuItem } from '../drogaria-detail/menu-item/menu-item.model';

@Injectable()
export class DrogariasService {

    constructor(private http: HttpClient) {}

    drogarias(search?: string): Observable<Drogaria[]> {
        let params: HttpParams = undefined
        if (search) {
            params = new HttpParams().append('q', search)
        }
        return this.http.get<Drogaria[]>(`${HC_API}/drogarias`, {params: params})
    }

    drogariaById(id: string): Observable<Drogaria> {
        return this.http.get<Drogaria>(`${HC_API}/drogarias/${id}`)
    }

    reviewsOfDrogaria(id: string): Observable<any> {
        return this.http.get(`${HC_API}/drogarias/${id}/reviews`)
    }

    menuOfDrogaria(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${HC_API}/drogarias/${id}/menu`)
    }

    itemOfPrice(): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${HC_API}/menu`)
    }
}
