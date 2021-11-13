import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { ProductoInterface } from '../interfaces/producto-interface';
import { ProductosService } from '../services/productos.service';
import Swal from 'sweetalert2';
import { Helpers } from '../services/helpers.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnDestroy, OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  productos: ProductoInterface[] = [];
  isVisible: boolean;

  constructor(
    private productosService: ProductosService,
    private helpers: Helpers
  ) {
    this.dtOptions = this.helpers.dataTableOptions;
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.reloadProductos();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  reloadProductos(): void {
    if (this.dtElement) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.load();
      });
    } else {
      this.load();
    }
  }

  private load() {
    this.helpers
      .customSwal({
        html: '<div class="spinner-border spinner-border-sm" role="status"><span class="sr-only"></span></div> <small>Cargando</small>',
        showConfirmButton: false,
        showCancelButton: false,
      })
      .fire();

    this.productosService.getProductos().subscribe((res) => {
      this.productos = res;
      this.dtTrigger.next('');
      this.helpers.customSwal().close();
      this.isVisible = true;
    });
  }
}
