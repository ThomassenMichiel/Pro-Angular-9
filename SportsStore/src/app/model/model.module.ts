import {ProductRepository} from './product.repository';
import {StaticDatasource} from './static.datasource';
import {NgModule} from '@angular/core';
import {Cart} from './cart.model';
import {Order} from './order.model';
import {OrderRepository} from './order.repository';
import {HttpClientModule} from '@angular/common/http';
import {RestDatasource} from './rest.datasource';
import {AuthService} from './auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductRepository, StaticDatasource, Cart, Order, OrderRepository,
    {provide: StaticDatasource, useClass: RestDatasource},
  RestDatasource, AuthService]
})
export class ModelModule { }
