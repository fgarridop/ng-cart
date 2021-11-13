import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  productos: any[];
  constructor(private productosService: ProductosService) {
    this.productos = [];
  }

  ngOnInit(): void {
    this.productosService
      .getProductos()
      .subscribe((data) => (this.productos = data));
  }
}
