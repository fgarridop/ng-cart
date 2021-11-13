import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categorias: string[];

  constructor(private productosService: ProductosService) {
    this.categorias = [];
  }

  ngOnInit(): void {
    this.productosService
      .getCategories()
      .subscribe((data) => (this.categorias = data));
  }
}
