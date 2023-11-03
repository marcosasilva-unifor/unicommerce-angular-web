import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { CategoriasModule } from './categorias/categorias.module';
import { ClientesModule } from './clientes/clientes.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { ProdutosModule } from './produtos/produtos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CategoriasModule,
    ClientesModule,
    ProdutosModule,
    HttpClientModule,
    AppRoutingModule,
    ErrorsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
