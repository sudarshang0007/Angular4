import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvertToSpace } from './interface/Converttospace';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './interface/filter.pipe';
import { StarComponent } from './star/star.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpace,
    FilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
