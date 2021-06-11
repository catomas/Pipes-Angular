import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  // i18nSlect
  nombre: string = 'Camilo';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }
  
  cambiarNombre() {
    if (this.nombre == 'Camilo'){
      this.nombre = 'Mariana',
      this.genero = 'femenino'
    } else {
      this.nombre = 'Camilo',
      this.genero = 'masculino'
    }
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Luis', 'Juan', 'Camilo', 'Pedro'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando '
  }


  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue pipe 
  persona = {
    nombre: 'Camilo',
    edad: 23,
    direccion: 'Medellin, Colombia'
  }

  // JsonPipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
  ]

  // Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  });
 
}
