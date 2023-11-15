import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  @Input() id:number;

  @Input() login:string = '';

}
