import {ProductRepository} from './product.repository';
import {StaticDatasource} from './static.datasource';
import {NgModule} from '@angular/core';
import {Cart} from './cart.model';

@NgModule({
  providers: [ProductRepository, StaticDatasource, Cart]
})
export class ModelModule { }
