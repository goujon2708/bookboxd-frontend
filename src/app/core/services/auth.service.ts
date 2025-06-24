import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environment/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private httpClient = inject(HttpClient);
    private router = inject(Router);

    login(username: string, password: string) {
        return this.httpClient.post<{ token: string }>(`${environment.apiUrl}/auth/login`, {
            username,
            password
        });
    }

    register(username: string, password: string, email: string) {
        return this.httpClient.post(`${environment.apiUrl}/auth/register`, {
            username,
            password,
            email
        });
    }

    saveToken(token: string) {
        localStorage.setItem('jwt_token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('jwt_token');
    }

    logout() {
        localStorage.removeItem('jwt_token');
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
}
