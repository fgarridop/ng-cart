import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { ProductoInterface } from '../interfaces/producto-interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
})
export class CategoriaComponent implements OnInit {
  productos: ProductoInterface[];
  isLoading: boolean;
  category: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
    this.productos = [];
    this.isLoading = true;
    this.category = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((cat) => {
      this.category = cat['cat'];
      this.productosService.getProductoByCat(cat['cat']).subscribe((data) => {
        this.productos = data;
        this.isLoading = false;
      });
    });
  }
}
