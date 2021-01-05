import { Component, OnDestroy, Input } from '@angular/core';


@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent implements OnDestroy {

  @Input() results: any[] = [];
  // results: any[] = [
  //   {
  //     "name": "Juego1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego2",
  //     "value": 5
  //   },
  //   {
  //     "name": "Juego3",
  //     "value": 30
  //   },
  //   {
  //     "name": "Juego4",
  //     "value": 15
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // inrtervalo;

  constructor() { 
    // this.inrtervalo = setInterval(() => {
    //   console.log('tick');

    //   const nuevoResult = [...this.results];

    //   for( let i in nuevoResult ) {
    //     nuevoResult[i].value = Math.round( Math.random() * 500 );
    //   }

    //   this.results = [...nuevoResult];
  
    // }, 1500 );
   }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval( this.inrtervalo );
  }
  
}
