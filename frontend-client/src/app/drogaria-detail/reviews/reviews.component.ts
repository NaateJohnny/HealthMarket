import { Component, OnInit } from '@angular/core';
import { DrogariasService } from '../../drogarias/drogarias.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  animations: [
    trigger('reviewAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateX(30px)'}),
        animate('700ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {

  reviewState = 'ready';

  reviews: Observable<any>;

  constructor(private drogariasService: DrogariasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.drogariasService
      .reviewsOfDrogaria(this.route.parent.snapshot.params['id']);
  }

}
