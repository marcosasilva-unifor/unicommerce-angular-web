import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { CategoriaListResolver } from './categorias/categoria-list/categoria-list.resolver';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';

const routes: Routes = [
    /* {
        path: '',
        component: SignInComponent
    }, */
    { 
        path: 'categoria/lista', 
        component: CategoriaListComponent,
        resolve: {
            photos: CategoriaListResolver
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