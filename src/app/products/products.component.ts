import {Iproduct} from '../interface/Iproduct';
import {DateService} from '../shared/date.service';
import {ProductService} from '../shared/product.service';
import {Component, OnInit, Provider} from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  _searchBox: string;
  showImage: boolean = false;
  // show day of date using date Service
  date: string;
  filteredProducts: Iproduct[];
  errorMsg:string;

  get searchBox() {
    return this._searchBox;
  }

  set searchBox(value: string) {
    this._searchBox = value;
    this.filteredProducts = this.searchBox ? this.performFilter(this._searchBox) : this.products;
  }


  products: Iproduct[] = [];

  constructor(private _productService: ProductService, private _date: DateService) {
  }

  /** Using Service **/
  ngOnInit() {
    console.log('Inside oninit !!');
    this._productService.getProducts().subscribe(products => {this.products = products 
      this.filteredProducts = this.products;
    }, error => this.errorMsg = <any>error ) ;
    console.log(this.products);

    this.date = this._date.getDate();
  }

  public showToggle() {
    this.showImage = !this.showImage;
  }

  /* Implementation of method performFilter to filter elements according to input box*/
  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  /** Listening to notify event by child component */
  onNotify(message: string): void {
    console.log(message);
  }

  /** Listening toi On Mouse Hover Event */
  onMouse(event: string) {
    console.log(`the message is ${event}`);
  }



}
