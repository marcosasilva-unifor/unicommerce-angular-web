import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { CategoriaListResolver } from './categorias/categoria-list/categoria-list.resolver';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClienteListResolver } from './clientes/cliente-list/cliente-list.resolver';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoListResolver } from './produtos/produto-list/produto-list.resolver';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';

const routes: Routes = [
    /* {
        path: '',
        component: SignInComponent
    }, */
    { 
        path: 'categoria/lista', 
        component: CategoriaListComponent,
        resolve: {
            categorias: CategoriaListResolver
        } 
    },
    { 
        path: 'categoria', 
        component: CategoriaFormComponent
    },
    { 
        path: 'cliente', 
        component: ClienteFormComponent
    },
    { 
        path: 'cliente/lista', 
        component: ClienteListComponent,
        resolve: {
            clientes: ClienteListResolver
        } 
    },
      
    { 
        path: 'produto/lista', 
        component: ProdutoListComponent,
        resolve: {
            produtos: ProdutoListResolver
        } 
    },
    { 
        path: 'produto', 
        component: ProdutoFormComponent
    },
    
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}