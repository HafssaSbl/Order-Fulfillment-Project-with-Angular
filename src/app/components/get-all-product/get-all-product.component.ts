import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-get-all-product',
  templateUrl: './get-all-product.component.html',
  styleUrls: ['./get-all-product.component.css']
})
export class GetAllProductComponent {
products:any=[];
nom : String="";
constructor(private productService: ProductService) { }

ngOnInit(){

this.getALlProducts();}

getALlProducts() {

this.productService.getAllProduct().subscribe((res) => {

console.log(res);
this.products=res;

})

}
deleteProduct(id: number) {

this.productService.deleteProduct(id).subscribe((res) => {

console.log(res);
this.getALlProducts();
})
}
search(){
this.products = this.products.filter((res : any) => {
return res.name.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());})
}
}
