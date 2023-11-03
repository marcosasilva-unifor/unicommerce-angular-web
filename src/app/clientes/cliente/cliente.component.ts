import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  @Input() id: number;

  @Input() nome: string = '';

  @Input() cpf: string = '';

  @Input() telefone: string  = '';

  @Input() rua: string  = '';

  @Input() numero: string  = '';

  @Input() complemento: string  = '';

  @Input() bairro: string  = '';

  @Input() cidade: string  = '';

  @Input() estado: string  = '';
}
