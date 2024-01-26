import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Modulo2Service } from './modulo2.service'
import { Coctel } from './coctel.interface'

@Component({
  selector: 'app-modulo2',
  templateUrl: './modulo2.component.html',
  styleUrls: ['./modulo2.component.css'], // Importa los estilos aquí
})
export class Modulo2Component implements OnInit {
  categoria: string = '';
  cocteles: Coctel[] = [];

  constructor(
    private route: ActivatedRoute,
    private modulo2Service: Modulo2Service
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.categoria = params.get('categoria')
      this.modulo2Service
        .getCoctelesPorCategoria(this.categoria)
        .subscribe((data) => {
          this.cocteles = data
        })
    })
  }
}
