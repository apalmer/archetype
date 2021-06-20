import { Component, OnInit } from '@angular/core';
import { CharacterDataService} from '../services/character-data.service'

@Component({
  selector: 'app-ally-ui',
  templateUrl: './ally-ui.component.html',
  styleUrls: ['./ally-ui.component.css']
})
export class AllyUiComponent implements OnInit {
  allyanim
  allychar

  constructor(private characterservice:CharacterDataService) {
    this.allychar=this.characterservice.getCharnumber(3)
    this.allyanim=this.allychar.bio.visuals.idle
    


   }

  ngOnInit(): void {
  }

}
