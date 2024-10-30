import { Component, Input, OnInit } from "@angular/core";
import { LivroService } from "../services/livro.service";
import { Livro } from "../model/livro";

@Component({
    selector: 'app-livro-list',
    templateUrl: './livro-list.component.html'
})
export class LivroListComponent {
    @Input()
    livros: Livro[] = []

    constructor(private service: LivroService) {
    }

}