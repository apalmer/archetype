import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellistService {

  constructor() { }
}

  function newspell(
    name:string,
    slvl:number,
    casttime: string,
    range:number,
    duration:string,
    damage?:Array<string>,
    compo?:Array<string>,
    descrip?:string,
    type?:string,
  ){
    this.name=name;
    this.slvl=slvl;
    this.casttime=casttime;
    this.range=range;
    this.duration=duration;
    this.compo=compo;
    this.descrip=descrip;
    this.dmg=damage;
    this.typ=type;
    
    
  }

var acdspla=new newspell('Acid Splash',0,'1 action',60,'instant',['1d6'],['V','S'],
'You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.'
,'conj')


var bward=new newspell('Blade Ward',0,'1 action',0,'1 round',[''],['V','S'],
'You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.',
'abj'
)

var bblade= new newspell('Booming Blade',0,'1 action',5, '1 round',['1d8','0d8'],['V','S','Weapon'],
'As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spells range, otherwise the spell fails.On a hit, the target suffers the attacks normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves be- fore then, it immediately takes 1d8 thunder damage, and the spell ends This spells damage increases when you reach higher levels.',
'evoc')

var iknif= new newspell('Ice Knife',1,'1 action',60, 'instant',['1d10','2d6'],['S','M'],
"(a drop of water or piece of ice) <br>You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of the point where the ice exploded must succeed on a Dexterity saving throw or take 2d6 cold damage At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.",
'elem evil')