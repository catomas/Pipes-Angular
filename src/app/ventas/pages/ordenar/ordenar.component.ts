import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayusculas: boolean = false;

  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  heroesList: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Iron Man',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Capitan America',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Spider Man',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Dr Strange',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Thor',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Mujer Maravilla',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: '4 Fantasticos',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Black Widow',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Capitan Marvel',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Ant man',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Black Panter',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Groot',
      vuela: false,
      color: Color.verde
    }

  ]

  mayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string ){
    this.ordenarPor = valor;
  }

}
