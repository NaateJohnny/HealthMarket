import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-30px)'}),
        animate('700ms 0s ease-in-out')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emmitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
