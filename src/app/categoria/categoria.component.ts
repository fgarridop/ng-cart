import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { ProductoInterface } from '../interfaces/producto-interface';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  productos: ProductoInterface[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
    this.productos = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((cat) => {
      this.productosService
        .getProductoByCat(cat['cat'])
        .subscribe((data) => (this.productos = data));
    });
  }
}
