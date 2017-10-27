import { Component } from '@angular/core';
import {Iproduct} from './interface/Iproduct';
import { DateService } from './shared/date.service';
import { ProductService } from './shared/product.service';
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, DateService]
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
