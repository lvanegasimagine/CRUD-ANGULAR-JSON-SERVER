import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  productForm: FormGroup;

  constructor(public fb: FormBuilder, private router: Router, public crudService: CrudService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    })
  }

  submitForm() {

    this.crudService.create(this.productForm.value).subscribe(res => {
      this.toastr.success('Guardado', 'Datos Guardado Exitosamente');
      this.router.navigateByUrl('/')
    })

  }
}
