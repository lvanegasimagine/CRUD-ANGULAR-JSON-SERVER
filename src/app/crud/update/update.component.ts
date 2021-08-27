import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { Product } from '../product.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  productForm: FormGroup;
  id: number;

  constructor(private route: ActivatedRoute, private rutas: Router, private crudService: CrudService, private fb: FormBuilder, private toastr: ToastrService) { 
    this.productForm = this.fb.group({
      name: '',
      description: '',
      price: '',
      quantity: ''
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.productId;
    console.log(this.id);
    this.getData();
  }

  getData() {
    this.crudService.getById(this.id).subscribe((item: Product) => {
      this.productForm.setValue({
        name: item.name,
        description: item.description,
        price: item.price,
        quantity: item.quantity,
      });
    })
  }

  submitForm(){
    this.crudService.update(this.id, this.productForm.value).subscribe(resp => {
      this.toastr.warning('Actualizado', 'Datos Guardado');
      this.rutas.navigateByUrl('/');
    })
  }

}
