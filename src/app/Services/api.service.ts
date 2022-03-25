import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class API {
    private domain_url: string;

    constructor(private readonly http: HttpClient) {
        const base_urlJson = localStorage.getItem("base-url");
        const base_url = base_urlJson !== null ?  JSON.parse(base_urlJson) : null;
        this.domain_url = environment.base_url;
        if (base_url && base_url !== "") {
            this.domain_url = base_url;
        }
    }

    get<T>(
        url: string,
        variables: Object,
        filter?: Object,
        where?: Object,
        queryParmas?: Object,
        changeRoute?: boolean
    ): Observable<T> {
        url = this.createUrlString(
            url,
            variables,
            filter,
            where,
            queryParmas,
            changeRoute
        );
        return this.http.get<T>(url);
    }

    post<T>(
        url: string,
        variables: Object,
        data: Object,
        include?: string
    ): Observable<T> {
        url = this.createUrlString(
            url,
            variables,
            null,
            null,
            null,
            false,
            include
        );
        return this.http.post<T>(url, data);
    }

    put<T>(url: string, variables: Object, data: Object): Observable<T> {
        url = this.createUrlString(url, variables, null, null, null, false);
        return this.http.put<T>(url, data);
    }

    delete<T>(url: string, variables: Object): Observable<T> {
        url = this.createUrlString(url, variables, null, null, null, false);
        return this.http.delete<T>(url);
    }

    private createUrlString(
        url: string,
        variables?: any,
        filter?: any,
        where?: any,
        queryParmas?: any,
        changeRoute?: boolean,
        include?: string
    ): string {
        for (var variableKey in variables) {
            url = url.replace(
                new RegExp('{{' + variableKey + '}}', 'g'),
                variables[variableKey]
            );
        }

        if (filter || where || queryParmas || include) {
            url += '?';
        }
        if (filter && Object.keys(filter).length > 0) {
            url += `filter=${JSON.stringify(filter)}&`;
        }
        if (where) {
            url += `where=${JSON.stringify(where)}&`;
        }
        if (queryParmas) {
            for (const key in queryParmas) {
                if (queryParmas.hasOwnProperty(key)) {
                    const element = queryParmas[key];
                    url += key + '=' + element + '&';
                }
            }
        }
        if (include) {
            url += `include=${include}&`;
        }
        url = encodeURI(url);
        return [this.domain_url, url].join('');
    }
}
