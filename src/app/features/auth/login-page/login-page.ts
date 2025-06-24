import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-page',
    imports: [
        FormsModule
    ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {

    username = '';
    password = '';
    error = '';

    private authService = inject(AuthService);
    private router = inject(Router);

    onSubmit() {
        this.authService.login(this.username, this.password).subscribe({
            next: (res) => {
                this.authService.saveToken(res.token);
                this.router.navigate(['/home']);
            },
            error: () => {
                this.error = 'Identifiants incorrects';
            }
        });
    }
}
