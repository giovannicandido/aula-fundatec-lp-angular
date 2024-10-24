import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  @Input()
  title: string = ""

  @Input()
  description = ""
  
  @Input()
  image = ""

  @Input()
  authors: any[] = []
}
