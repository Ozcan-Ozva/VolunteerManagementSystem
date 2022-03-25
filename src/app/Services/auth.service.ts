import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { API } from './api.service';

@Injectable()
export class AuthService {
    private LOCATION_KEY = 'access_token';

    constructor(private api: API, private jwt: JwtHelperService) {}

    checkEmail(email: string): Promise<boolean> {
        return this.api
            .get<{ isExisting: boolean }>(`users/checkExistingEmail?email=${email}`, {})
            .toPromise()
            .then(({ isExisting }) => isExisting);
    }

    signIn(email: string, password: string) {
        return this.api
            .post<TokenPayload>('users/login', {}, { email, password })
            .toPromise()
            .then((token) => {
                this.Token = token;
                return token;
            });
    }

    signUp(input: SignUpInput): void {
        let response = this.api.post('users/signUp', {}, { data: input }).toPromise();
        response
            .then(() => this.signIn(input.email, input.password))
            .then(() => {
                return this.initialize().toPromise();
            })
            .catch(() => console.log('failed login'));
    }

    initialize(): Observable<void> {
        return this.api.post<void>('accounts/initAccount', {}, {});
    }

    /**
     * @todo
     */
    get isExpired(): boolean {
        let token = this.Token;
        return false/* Check is Expired */;
    }

    get isAuthenticated(): boolean {
        if (!this.Token) return false;
        if (this.isExpired) return false;
        return true;
    }

    get Token(): TokenPayload {
        const keyJson = localStorage.getItem(this.LOCATION_KEY);
        return keyJson !== null ? JSON.parse(keyJson) : null;
    }

    set Token(token: TokenPayload) {
        /* Confirm Token Validity */
        localStorage.setItem(this.LOCATION_KEY, JSON.stringify(token));
    }
}

export type SignUpInput = {
    name: string;
    imageId: number;
    email: string;
    username: string;
    password: string;
    jobCategoryId: number;
    jobSubCategoryId: number;
};

export type TokenPayload = {
    id: string;
    ttl: number;
    created: Date;
    userId: number;
    principalType: string /* FIX */;
};
