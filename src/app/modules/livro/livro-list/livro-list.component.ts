import { Component, OnInit } from "@angular/core";
import { LivroService } from "../services/livro.service";
import { Livro } from "../model/livro";

@Component({
    selector: 'app-livro-list',
    templateUrl: './livro-list.component.html'
})
export class LivroListComponent implements OnInit {
    
    livros: Livro[] = []

    constructor(private service: LivroService) {
    }

    // ciclo de vida do angular, executa pouco antes que o componente existir na tela
    // rotas, navegação, injeção e binding já estão prontos quando esse metodo é chamado
    ngOnInit(): void {
        this.livros = this.service.listarTodosPorLivraria("1")
    }

    adicionar() {
        this.service.adicionar({
            titulo: "Novo livro",
            description: "Description nova",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_631895-MLB52238618958_112022-F.webp",
            authors: []
        })
    }
}