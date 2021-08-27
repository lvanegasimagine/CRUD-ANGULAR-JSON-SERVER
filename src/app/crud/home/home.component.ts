import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/service/crud.service';

import { Product } from '../product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(public crudService: CrudService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    this.crudService.getAll().subscribe((data: Product[])=>{
      this.products = data;
    })
  }

  eliminarProducto(id: number){
    this.crudService.delete(id).subscribe(resp => {
      this.toastr.info('Eliminado', 'Datos Eliminado');
      this.cargarData();
    })
  }

}
