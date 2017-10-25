import { Component } from '@angular/core';
import {Iproduct} from './interface/Iproduct';
import { ProductService } from './shared/product.service';
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
