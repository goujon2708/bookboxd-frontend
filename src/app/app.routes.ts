import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login-page/login-page').then(m => m.LoginPage)
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/register-page/register-page').then(m => m.RegisterPage)
    },
    {
        path: 'search',
        loadComponent: () => import('./features/books/book-search/book-search').then(m => m.BookSearch)
    },
    {
        path: 'book/:id',
        loadComponent: () => import('./features/books/book-detail/book-detail').then(m => m.BookDetail)
    },
    {
        path: 'library',
        loadComponent: () => import('./features/library/library-page/library-page').then(m => m.LibraryPage)
    },
    {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile-page/profile-page').then(m => m.ProfilePage)
    },
    {
        path: '**',
        redirectTo: 'search'
    }
];
