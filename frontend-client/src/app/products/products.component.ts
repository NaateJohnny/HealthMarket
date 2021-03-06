import { Component, OnInit } from '@angular/core';
import { Drogaria } from 'app/drogarias/drogaria/drogaria.model';
import { DrogariasService } from 'app/drogarias/drogarias.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'app/drogaria-detail/menu-item/menu-item.model';

@Component({
  selector: 'mt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  drogarias: Drogaria[];
  itemPrice: Observable<MenuItem[]>;

  constructor(private drogariasService: DrogariasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.drogariasService.drogarias()
      .subscribe(drogarias => this.drogarias = drogarias);

      this.itemPrice = this.drogariasService.itemOfPrice();
  }

}
