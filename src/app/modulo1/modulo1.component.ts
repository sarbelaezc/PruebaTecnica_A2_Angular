import { Component, OnInit } from '@angular/core'
import { Modulo1Service } from './modulo1.service'

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.component.html',
  styleUrls: ['./modulo1.component.css'], // Importa los estilos aquí
})
export class Modulo1Component implements OnInit {
  categorias: any[] = [];

  constructor(private modulo1Service: Modulo1Service) { }

  ngOnInit(): void {
    this.modulo1Service.getCategorias().subscribe((data: any) => {
      this.categorias = data.drinks
      console.log(data)
    })
  }
}
