import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/interfaces/interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];
  constructor(private gameServices: GameService) { }

  ngOnInit(): void {
    this.gameServices.getNominado()
      .subscribe( resp => { 
        this.juegos = resp;
      })
  }
  votarJuego(juegos: Game){
    //console.log(juegos);
    this.gameServices.votarJuego( juegos.id )
      .subscribe( (resp: any) => {
        console.log(resp.ok);
        if (resp.ok){
          Swal.fire({
            icon: 'success',
            title: resp.mensaje,
            showConfirmButton: false,
            timer: 3500
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oooop!!',
            text: resp.mensaje,
            
          })
        }
      });
  }
}
