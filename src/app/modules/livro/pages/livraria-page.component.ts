import { Component } from "@angular/core";
import { LivroService } from "../services/livro.service";
import { EMPTY_LIVRO, Livro } from "../model/livro";

@Component({
    selector: 'app-livraria-page',
    templateUrl: './livraria-page.component.html'
})
export class LivrariaPageComponent {
    livro: Livro = EMPTY_LIVRO
    
    constructor(private service: LivroService) {}
    
    adicionar() {
        this.livro.titulo = "Mudança no typescript"
        this.service.adicionar({
            titulo: "Novo livro",
            description: "Description nova",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_631895-MLB52238618958_112022-F.webp",
            authors: []
        })
    }
}