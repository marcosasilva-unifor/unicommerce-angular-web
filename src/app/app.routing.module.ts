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
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioListResolver } from './usuarios/usuario-list/usuario-list.resolver';

import { AuthGuard } from './core/auth/auth.guard';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    { 
        path: 'categoria/lista', 
        component: CategoriaListComponent,
        canActivate: [AuthGuard],
        resolve: {
            categorias: CategoriaListResolver
        },
        data: { 
            title: 'Lista categorias'
        }            
    },
    { 
        path: 'categoria', 
        component: CategoriaFormComponent,
        canActivate: [AuthGuard],
        data: { 
            title: 'Cadastra categoria'
        } 
    },
    { 
        path: 'cliente', 
        component: ClienteFormComponent,
        canActivate: [AuthGuard],
        data: { 
            title: 'Cadastra Cliente'
        } 
    },
    { 
        path: 'cliente/lista', 
        component: ClienteListComponent,
        resolve: {
            clientes: ClienteListResolver
        },
        canActivate: [AuthGuard],
        data: { 
            title: 'Lista clientes'
        }  
    },   
    { 
        path: 'produto/lista', 
        component: ProdutoListComponent,
        canActivate: [AuthGuard],  
        resolve: {
            produtos: ProdutoListResolver
        },
        data: { 
            title: 'Lista produtos'
        }
    },
    { 
        path: 'produto', 
        component: ProdutoFormComponent,
        canActivate: [AuthGuard],
        data: { 
            title: 'Cadastra produto'
        } 
    }, 
    { 
        path: 'usuario/lista', 
        component: UsuarioListComponent,
        canActivate: [AuthGuard],  
        resolve: {
            usuarios: UsuarioListResolver
        },
        data: { 
            title: 'Lista usuários'
        }
    },
    /* { 
        path: 'usuario', 
        component: UsuarioFormComponent,
        canActivate: [AuthGuard] 
    }, */
    {
        path: 'error',
        component: GlobalErrorComponent,
        data: { 
            title: 'Error'
        }
    },

    { 
        path: 'not-found',
        component: NotFoundComponent,
        data: { 
            title: 'Página não encontrada'
        }
    },
    { 
        path: '**', 
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true} ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

//Angular se encontra na versão 15.x.x
/* const routes: Routes = [
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    }
  ]; */