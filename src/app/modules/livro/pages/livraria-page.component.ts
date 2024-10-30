import { Component } from "@angular/core";
import { LivroService } from "../services/livro.service";
import { EMPTY_LIVRO, Livro } from "../model/livro";

@Component({
    selector: 'app-livraria-page',
    templateUrl: './livraria-page.component.html'
})
export class LivrariaPageComponent {
    livro: Livro = EMPTY_LIVRO
    livros: Livro[] = []
    constructor(private service: LivroService) {}
    
    adicionar() {
        this.service.adicionar(this.livro)
        this.load()
        this.livro = EMPTY_LIVRO
    }

    // ciclo de vida do angular, executa pouco antes que o componente existir na tela
    // rotas, navegação, injeção e binding já estão prontos quando esse metodo é chamado
    ngOnInit(): void {
        this.load()
    }

    load() {
        this.livros = this.service.listarTodosPorLivraria("1")
    }
}