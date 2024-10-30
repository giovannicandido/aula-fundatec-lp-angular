export interface Livro {
    titulo: string,
    description: string
    imagem: string,
    authors: string[]
}

export const EMPTY_LIVRO: Livro = {
    titulo: "",
    description: "",
    imagem: "",
    authors: []
} 