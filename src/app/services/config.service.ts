import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { Api } from "../models/api.model";
import { Config } from "../models/config.model";
import { Feature } from "../models/feature.model";

@Injectable()
export class ConfigService {

    app: Config = {
        loading: true
    };
    api: Config = {
        loading: true
    };
    features: Config = {
        loading: true
    };

    constructor(private _http: HttpClient) { }

    getAppConfig(): Observable<any> {
        if (!this.app.loading) {
            return of(this.app.data);
        }

        return this._http.get('/assets/app.config.json').pipe(tap((res) => {
            this.app.loading = false;
            this.app.data = res;
        }));
    }

    getApiConfig(): Observable<Api[]> {
        if (!this.api.loading) {
            return of(this.api.data);
        }

        return this._http.get<Api[]>('/assets/api.config.json').pipe(tap((res) => {
            this.api.loading = false;
            this.api.data = res;
        }));
    }

    getFeaturesConfig(): Observable<Feature[]> {
        if (!this.features.loading) {
            return of(this.features.data);
        }

        return this._http.get<Feature[]>('/assets/features.config.json').pipe(tap((res) => {
            this.features.loading = false;
            this.features.data = res;
        }));
    }

}