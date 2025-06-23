import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloService} from './services/hello.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Salut'

  private helloService = inject(HelloService);

  ngOnInit() {
    this.helloService.getHello().subscribe({
      next: res => this.title = res,
      error: err => this.title = 'Erreur : ' + err.message
    });
  }
}
