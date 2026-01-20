import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiConfig } from "../config/api.config";

@Injectable()
export class ApiService {

    constructor(private _apiConfig: ApiConfig) {}

    example(): Observable<any> {
        return this._apiConfig.send('example', { params: { id: '123' }, queryParams: { section: 'info' } });
    }

}