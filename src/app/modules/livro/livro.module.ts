import { NgModule } from "@angular/core";
import { LivroListComponent } from "./livro-list/livro-list.component";
import { LivroCommentsComponent } from "./livro-comments/livro-comments.component";
import { LivrariaPageComponent } from "./pages/livraria-page.component";
import { LivroComponent } from "./livro/livro.component";
import { CommonModule } from "@angular/common";
import { LivroService } from "./services/livro.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule(
    {
        imports: [CommonModule, FormsModule],
        declarations: [
            LivroListComponent,
            LivroCommentsComponent,
            LivrariaPageComponent,
            LivroComponent
        ],
        exports: [LivrariaPageComponent],
        providers: [LivroService]
    }
)
export class LivroModule {

}