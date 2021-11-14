import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  productos: any[];
  isLoading;
  constructor(private productosService: ProductosService) {
    this.productos = [];
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;
      this.isLoading = false;
    });
  }
}
