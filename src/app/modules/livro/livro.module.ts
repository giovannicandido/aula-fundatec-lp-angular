import { NgModule } from "@angular/core";
import { LivroListComponent } from "./livro-list/livro-list.component";
import { LivroCommentsComponent } from "./livro-comments/livro-comments.component";
import { LivrariaPageComponent } from "./pages/livraria-page.component";
import { LivroComponent } from "./livro/livro.component";
import { CommonModule } from "@angular/common";

@NgModule(
    {
        imports: [CommonModule],
        declarations: [
            LivroListComponent,
            LivroCommentsComponent,
            LivrariaPageComponent,
            LivroComponent
        ],
        exports: [LivrariaPageComponent]
    }
)
export class LivroModule {

}