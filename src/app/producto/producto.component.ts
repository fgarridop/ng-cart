import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoInterface } from '../interfaces/producto-interface';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
})
export class ProductoComponent implements OnInit {
  producto: ProductoInterface;
  isLoading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((id) => {
      console.log(id);

      this.productosService.getProductoById(id['id']).subscribe((data) => {
        console.log(data);
        this.producto = data;
        this.isLoading = false;
      });
    });
  }
}
