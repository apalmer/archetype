import { Injectable } from '@angular/core';
import { CharacterService } from 'src/app/characters/services/character.service';
import { Character } from 'src/app/characters/models/character';
import { Player } from '../classes/player';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterFirebaseService {
  player:BehaviorSubject<Player>

  constructor(private charData: CharacterService) {
    this.player = new BehaviorSubject<Player>(null)
   }

   getCharacter(characterId:string) {
      return this.charData.getCharacter(characterId).pipe(map( d => {
        let data = d.data()

        let char = new Player()
        
        char.name = data.name
        char.bio.desc = data.description
        char.hitPoints = + data.data.HitPoints
        char.maxHitPoints = + data.data.MaxHitPoints
        char.armorClass = + data.data.ArmorClass
        char.icon = data.data.Icon
        char.maxattune = + data.data.MaxAttune
        char.speed = + data.data.Speed
        char.abilities = {
          CHR: + data.data.Abilities.CHR,
          DEX: + data.data.Abilities.DEX,
          CON: + data.data.Abilities.CON,
          STR: + data.data.Abilities.STR,
          INT: + data.data.Abilities.INT,
          WIS: + data.data.Abilities.WIS
        }

        return char
      }));
   }
}
