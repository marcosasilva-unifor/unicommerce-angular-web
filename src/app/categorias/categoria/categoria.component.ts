import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-categoria',
    templateUrl: 'categoria.component.html'
})
export class CategoriaComponent{

    @Input() id: number;

    @Input() nome: string = '';

    @Input() ativo: boolean;
    
}