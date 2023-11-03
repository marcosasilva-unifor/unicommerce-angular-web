import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  @Input() id:number;

  @Input() nome:string = '';

  @Input() preco:number;

  @Input() descricao:string = '';

  @Input() qntEmEstoque:number;

  @Input() categoriaId:number;

  @Input() categoriaAtivo:boolean;

  @Input() categoriaNome:string = '';
}
