import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Character } from '../models/character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Observable<Character[]> = this.service.get();

  constructor(private router:Router, private service:CharacterService ) { 
    
  }

  newCharacter(): void {
    this.router.navigate(['characters','create']);
  }

  editCharacter(character: Character): void {
    this.router.navigate(['characters','edit', character.id ]);
  }
  
  ngOnInit(): void {
  }

}
