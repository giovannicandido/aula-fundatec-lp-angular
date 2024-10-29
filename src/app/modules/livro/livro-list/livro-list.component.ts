import { Component } from "@angular/core";
import { LivroService } from "../services/livro.service";

@Component({
    selector: 'app-livro-list',
    templateUrl: './livro-list.component.html'
})
export class LivroListComponent {

    constructor(private service: LivroService) {}

    adicionar() {
        this.service.adicionar({
            titulo: "Novo livro",
            description: "Description nova",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_631895-MLB52238618958_112022-F.webp",
            authors: []
        })
    }
}