import { Product } from './../Models/product';
import { ListProductService } from './../Services/list-product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listproduct',
  templateUrl: './Listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListproductComponent implements OnInit {
  filter:string="Noms";

  constructor(private listProductService : ListProductService){}

  ngOnInit(): void {
    this.listProductService.getCats().subscribe((cats)=>{console.log(cats)});
  }

  addCats():void{
    let productPut:Product = {name:"name1",quantity:23,price:500};
    this.listProductService.addCats(productPut).subscribe();
  }
}


