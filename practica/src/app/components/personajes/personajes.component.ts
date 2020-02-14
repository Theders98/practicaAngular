import { Component, OnInit } from '@angular/core';
import { getPersonajes, PersonajesService } from 'src/app/services/personajes.service';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor() {
  
    let personajes = getPersonajes()
   }

  ngOnInit() {
  }

}
