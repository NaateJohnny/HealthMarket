import { Component, OnInit } from '@angular/core';
import { Drogaria } from './drogaria/drogaria.model';
import { DrogariasService } from './drogarias.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/from';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-drogarias',
  templateUrl: './drogarias.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', [
        animate('250ms 0s ease-in-out')
      ])
    ])
  ]
})
export class DrogariasComponent implements OnInit {

  searchBarState = 'hidden';
  drogarias: Drogaria[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private drogariasService: DrogariasService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
        .debounceTime(600)
        .distinctUntilChanged()
        .switchMap(searchTerm =>
           this.drogariasService
              .drogarias(searchTerm)
              .catch(error => Observable.from([])))
        .subscribe(drogarias => this.drogarias = drogarias);

    this.drogariasService.drogarias()
      .subscribe(drogarias => this.drogarias = drogarias);
  }

  toogleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
