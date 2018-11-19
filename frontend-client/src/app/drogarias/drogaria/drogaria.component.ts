import { Component, OnInit, Input } from '@angular/core';
import { Drogaria } from './drogaria.model';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'mt-drogaria',
  templateUrl: './drogaria.component.html',
  animations: [
    trigger('drogariaAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateX(30px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class DrogariaComponent implements OnInit {

  drogariaState = 'ready';

  @Input() drogaria: Drogaria;

  constructor() { }

  ngOnInit() {
  }

}
