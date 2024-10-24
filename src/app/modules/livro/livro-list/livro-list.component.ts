import { Component } from "@angular/core";

@Component({
    selector: 'app-livro-list',
    templateUrl: './livro-list.component.html'
})
export class LivroListComponent {
    livros = [
        {
            titulo: "Livro tudo que pode mudar",
            description: "Livro de auto ajuda",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_790449-MLB52163196861_102022-O.webp",
            authors: [
                "Autor 1",
                "Autor 2",
                "Autor 3"
            ]
        }, {
            titulo: "O Homem E A Comunicação - O Livro Das Tintas",
            description: "",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_635886-MLB50079000871_052022-F.webp",
            authors: [
                "Autor 3",
                "Autor 2",
            ]
        }
    ]

    adicionar() {
        this.livros.push({
            titulo: "Novo livro",
            description: "Description nova",
            imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_631895-MLB52238618958_112022-F.webp",
            authors: []
        })
    }
}