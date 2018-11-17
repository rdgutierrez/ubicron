import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallepost',
  templateUrl: './detallepost.page.html',
  styleUrls: ['./detallepost.page.scss'],
})
export class DetallepostPage implements OnInit {

  imagen = null;

  constructor(
  	private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.imagen = this.activatedRoute.snapshot.paramMap.get('img');
  }

}
