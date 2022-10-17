import { Component, OnInit } from '@angular/core';
import { Product } from '@prisma/client';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'nestjs-angular-setup-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(public productService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
