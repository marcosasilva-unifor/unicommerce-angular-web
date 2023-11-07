export interface Cliente {
    nome:string;
    cpf:string;
    telefone:string;
    endereco: Endereco;
    usuario: Usuario;   
}

export interface Endereco {
    rua:string;
    numero:string;
    complemento:string;
    bairro:string;
    cidade:string;
    estado:string;
}

export interface Usuario {
    id:string;
}