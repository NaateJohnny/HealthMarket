import { Component, OnInit } from '@angular/core';
import { DrogariasService } from '../../drogarias/drogarias.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  itemPrice: Observable<MenuItem[]>;

  constructor(private drogariasService: DrogariasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.drogariasService
      .menuOfDrogaria(this.route.parent.snapshot.params['id']);

      this.itemPrice = this.drogariasService.itemOfPrice();
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
