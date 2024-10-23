import { NgModule } from "@angular/core";
import { LivroListComponent } from "./livro-list/livro-list.component";
import { LivroCommentsComponent } from "./livro-comments/livro-comments.component";
import { LivrariaPageComponent } from "./pages/livraria-page.component";

@NgModule(
    {
       declarations: [LivroListComponent, LivroCommentsComponent, LivrariaPageComponent],
       exports: [LivrariaPageComponent]
    }
)
export class LivroModule {

}