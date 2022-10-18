import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@prisma/client';
import { APP_CONFIG } from '@nestjs-angular-setup/app-config';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // private API_URL: string = 'http://localhost:3333/api';

  constructor(
    public http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: any
  ) {}

  public getProducts(): Observable<Product[]> {
    // return this.http.get<Product[]>(`${this.API_URL}/products`);
    return this.http.get<Product[]>(`${this.appConfig.API_URL}/products`);
  }
}
