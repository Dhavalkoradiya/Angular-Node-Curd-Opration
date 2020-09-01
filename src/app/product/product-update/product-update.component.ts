import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
// tslint:disable: variable-name
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  // our angular form
  update_product_form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    // build angular form
    this.update_product_form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
   }

   // user clicks 'create' button
  updateProduct() {
    // const product_id = this.route.snapshot.paramMap.get('id');

    // add product_id in the object so it can be updated
    // this.update_product_form.value._id = this.product._id;
    // send data to server
    this.productService.productUpdate(this.update_product_form.value, this.product.id)
      .subscribe(
        product => {
          // responce console.log(product);
          // go back to list of products
          this.router.navigate(['/products']);
        },
        error => console.log(error)
      );
  }

   // call the record when 'productID' was changed
  ngOnInit() {
    const productID = this.route.snapshot.paramMap.get('id');
    // read one product record
    this.productService.productDetail(productID)
      .subscribe(product => {
        // put values in the form
        this.product = product;
        this.update_product_form.patchValue({
          name: product.name,
          price: product.price
        });
      });
  }

}
