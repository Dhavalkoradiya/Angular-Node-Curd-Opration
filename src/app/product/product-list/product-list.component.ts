import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product'; 
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // store list of products
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  // user clicks 'yes' button
  deleteProduct(productID: any, index: any) {
    if (confirm('Are you sure to delete?')) {
    // delete data from database
    this.productService.productDelete(productID).subscribe(
      res => {
        // show an alert to tell the user if product was created or not
        console.log(res);
        // [1 approch] go back to list of products
        // location.href = '/products';
        // [2 approch] reload new set of data
        // this.productService.productList().subscribe(products =>
        //   this.products = products
        // );
        // [3 approch] filter data
        // this.products = this.products.filter(products => products.id !== productID);
        // [4 approch] remove from list
        // const item = this.products.find(products => products.id === productID);
        // this.products.splice(this.products.indexOf(item));
        // [5 approch {BEST WAY}] remove from list
        this.products.splice(index, 1);
      },
      error => console.log(error)
    );
    }
  }

  ngOnInit() {
    this.productService.productList().subscribe(products =>
      this.products = products
    );
  }

}
