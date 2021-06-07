import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service'

@Component({
  selector: 'app-savethro',
  templateUrl: './savethro.component.html',
  styleUrls: ['./savethro.component.css']
})
export class SavethroComponent implements OnInit {
  rollin = 'rotate(-180deg)'
  elbow = '500px'
  dcsizer = '50px'
  dcena = 1
  testi = 'succeed'
  badtest = ''
  kurt = 'skewX(0deg)'
  rcena = 0
  rocena = 0
  rosize = '40px'
  rotop = '0px'
  dcwid = 'scale(.1,2.5)'
  dcfall = '-170px'
  xo = 0
  nowdc
  nowroll
  nowtest

  constructor(private game: GameService) {
    this.game.eventFeed.subscribe(zoom => {
      if (zoom.payload.dc) {
        this.gosave(zoom.payload.dc, zoom.payload.roll, zoom.payload.test)
      }
    })










  }

  gosave(nowdc?, nowroll?, nowtest?) {

    this.nowdc = nowdc
    this.nowroll = nowroll
    this.nowtest = nowtest
    this.dcfall = '-10px'
    this.xo = 1

    this.rollin = 'rotate(1800deg)'
    this.dcwid = 'scale(2.5,.2)'
    this.elbow = '-20px'
    this.rocena = 1

    setTimeout(() => {
      this.dcwid = 'scale(1,1)'
    }, 120);


    if (this.nowtest === 'succeeded') {

      setTimeout(() => {
        this.dcena = 0
        this.dcsizer = '150px'
        this.elbow = '-30px'
        this.badtest = '-0px'
        this.kurt = 'skewX(-45deg)'
        this.rcena = 1
        this.rosize = '60px'


      }, 900);
    }
    else {
      setTimeout(() => {
        this.elbow = '388px'
        this.rocena = 0
        this.rotop = '-30px'
        this.rollin = 'rotate(-1475deg)'
        this.kurt = 'skewX(20deg)'
        this.rcena = 1
        this.rosize = '100px'
        this.badtest = '0px'
        this.dcsizer = '65px'

      }, 900);
    }

    setTimeout(() => {
      this.rollin = 'rotate(-180deg)'
      this.elbow = '500px'
      this.dcsizer = '50px'
      this.dcena = 1
      this.badtest = ''
      this.kurt = 'skewX(0deg)'
      this.rcena = 0
      this.rocena = 0
      this.rosize = '40px'
      this.rotop = '0px'
      this.dcwid = 'scale(.1,2.5)'
      this.dcfall = '-170px'
      this.xo = 0

    }, 2600);
  }




  ngOnInit(): void {
  }

}
