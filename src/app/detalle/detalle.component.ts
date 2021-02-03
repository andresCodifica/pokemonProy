import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {



  constructor(rutaActiva: ActivatedRoute) {
    console.log("aca "+rutaActiva.snapshot.params.item)
  }

  ngOnInit(): void {
  }

}
