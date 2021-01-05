import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit() {

    this.db.collection('goty').valueChanges()
      .pipe(
        map( (resp: Game[]) => {
          // una forma
          // return resp.map( ({name, votos }) => ({ name, value: votos}))

          // otra forma
          return resp.map( juegos => {
            return {
              name: juegos.name,
              value: juegos.votos
            }  
          })
        })
      )
      .subscribe( juegos => {

        //console.log(juegos);
        this.juegos = juegos;

      });
  }

}
