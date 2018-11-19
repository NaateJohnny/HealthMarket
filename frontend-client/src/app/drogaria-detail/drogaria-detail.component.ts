import { Component, OnInit } from '@angular/core';
import { DrogariasService } from '../drogarias/drogarias.service';
import { Drogaria } from '../drogarias/drogaria/drogaria.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-drogaria-detail',
  templateUrl: './drogaria-detail.component.html'
})
export class DrogariaDetailComponent implements OnInit {

  drogaria: Drogaria;

  constructor(private drogariasService: DrogariasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.drogariasService.drogariaById(this.route.snapshot.params['id'])
      .subscribe(drogaria => this.drogaria = drogaria);
  }

}
