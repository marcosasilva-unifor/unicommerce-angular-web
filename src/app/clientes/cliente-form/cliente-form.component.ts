import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

import { Cliente } from '../cliente/cliente';
import { ClienteService } from '../cliente/cliente.service';

@Component({
  selector: 'ap-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup;
  @ViewChild('clienteNomeInput') clienteNomeInput: ElementRef<HTMLInputElement>;
  cliente: Cliente;

  constructor(
      private formBuilder: FormBuilder,
      private clienteService: ClienteService,
      private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit(): void {
      this.clienteForm = this.formBuilder.group({
          nome: ['', Validators.required],
          cpf: ['', Validators.required],
          telefone: ['', Validators.required],
          rua: ['', Validators.required],
          numero: ['', Validators.required],
          complemento: [''],
          bairro: ['', Validators.required],
          cidade: ['', Validators.required],
          estado: ['', Validators.required],
          usuarioId: ['', Validators.required]
      });
  }

  addCliente() {
       let cliente: Cliente = {
        nome:  this.clienteForm.get('nome').value,
        cpf: this.clienteForm.get('cpf').value,
        telefone: this.clienteForm.get('telefone').value,
        endereco: {
          rua: this.clienteForm.get('rua').value,
          numero: this.clienteForm.get('numero').value,
          complemento: this.clienteForm.get('complemento').value,
          bairro: this.clienteForm.get('bairro').value,
          cidade: this.clienteForm.get('cidade').value,
          estado: this.clienteForm.get('estado').value,
        },
        usuario: {
          id: this.clienteForm.get('usuarioId').value,
        }
      }

    this.clienteService
          .adicionarCliente(cliente)
          .subscribe(() => {}, 
            err => {
            console.log(err);
            this.clienteForm.reset();
            this.platformDetectorService.isPlatformBrowser() &&
            this.clienteNomeInput.nativeElement.focus();
            alert('Dados invalidos para o cliente')
      }); 

  }
}
