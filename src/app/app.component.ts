import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LivroModule } from './modules/livro/livro.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LivroModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'introducao-angular';
}
