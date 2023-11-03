export interface Produto {
    id:number;
    nome:string;
    preco:number;
    descricao:string;
    qntEmEstoque:number;
    categoriaId:number;
    categoriaAtivo:boolean;
    categoriaNome:string;
}