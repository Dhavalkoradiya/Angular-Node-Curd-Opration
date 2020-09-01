import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // our angular form
  createproductform: FormGroup;

  constructor(
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    // based on our html form, build our angular form
    this.createproductform = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  // user clicks 'create' button
  saveProduct() {
    // send data to server
    this.productService.productCreate(this.createproductform.value)
      .subscribe(
        product => {
          // show an alert to tell the user if product was created or not
          // console.log(product);
          this.router.navigate(['/products']);
        },
        error => console.log(error)
      );
  }

  ngOnInit() {

  }

}
