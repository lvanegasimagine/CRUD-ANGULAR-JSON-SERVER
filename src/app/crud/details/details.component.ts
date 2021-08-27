import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';

import { Product } from '../product.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  id: number;
  product: Product = {};

  constructor(private crudService: CrudService, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params.productId;
    console.log(this.id);
    this.obtenerData();
  }

  obtenerData(){
    console.log('aca toy');
    this.crudService.getById(this.id).subscribe((resp: Product) => {
        this.product = resp;
    })
  }

}
