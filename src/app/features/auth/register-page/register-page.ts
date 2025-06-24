import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-register-page',
    imports: [
        FormsModule
    ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage {

    username = '';
    email = '';
    password = '';
    error = '';

    private authService = inject(AuthService);
    private router = inject(Router);

    onSubmit() {
        this.authService.register(this.username, this.password, this.email).subscribe({
            next: () => this.router.navigate(['/login']),
            error: () => this.error = 'Erreur lors de l’inscription'
        });
    }

}
