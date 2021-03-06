import { getModuleFactory, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../classes/player';
import { Weapon } from '../classes/weapon';
import { cant, spellcode } from "../services/spellist.service";
import {getMod} from '../classes/dice'
import {brutalcrit, ki, martial, rage, recklessAttack, stunstrike,bready, fsDuel} from '../classes/features'
import { charc } from '../char-ui/char-ui.component';
import { armo1, blows, itemray} from '../classes/items';
//import { itemray, Items } from '../classes/items';


///////////////////////////////////////////////
// Data Access for Characters
///////////////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  private _characters:Player[];

  constructor() { 
    this._characters = this.getMockPlayers();
  }

  getCharacter(characterId:string):Observable<Player> {
    return of(this._characters[5]);
  }
  getCharnumber(num){
    return (this._characters[num])
  }

  get(): Observable<Player[]> {
    return of(this._characters);
  }

  private getMockPlayers(): Player[] {

    function dweapon(type: string, flar?: string, iconfile?: string) {
      let varname = new Weapon(type)
      varname.flare = flar
      varname.icon = '("assets/images/' + iconfile + '")'
      return varname
    }

    let dugery = dweapon('Barbed Dagger', 'Dugerous Blade', 'barbs.svg');
    let thugery = new Weapon('Quarterstaff')
    let axe = dweapon('Greataxe', "Garruks's Rages", 'gaxe.jpg')
    let dag= new Weapon('Dagger')
    let emc= new Weapon('Flail')
    emc.flare='Engine Knuckles';
    emc.magic=2
    let enbox= new Weapon('Maul')
    enbox.flare="Heavy Flame Combo"
    enbox.magic=0
    enbox.xtradice=[]
    enbox.xtradice.push({dice:2,sides:6,type:'fire',source:'weapon'})
    enbox.xtradice.push({dice:1, sides:4,type:enbox.damageType, source:'enlarge'})

    class Dndchar {
      stats: any =
        {
          abscores: {
            str: 0, dex: 0, con: 0,
            int: 0,
            wis: 0,
            chr: 0
          }
          ,
          skills:
          {
            athletics: 0,
            acrobatics: 0,
            sleightofhand: 0,
            stealth: 0,
            arcana: 0,
            history: 0,
            investigation: 0,
            nature: 0,
            religion: 0,
            animalhandling: 0,
            insight: 0,
            medecine: 0,
            perception: 0,
            survival: 0,
            deception: 0,
            intimidation: 0,
            perform: 0,
            persuasion: 0
          }

        };
      bio: any = {
        name: 'Nom',
        profile: '("assets/images/bil.svg")',
        class: [{ class: 'none', lvl: 0 }]
      };
      resources: any =
        [{ name: 'HP', max: 10, min: 9, bonus: 0 }];
      items: Array<any> = [thugery, dugery];

      constructor(nom?: string, clas?: string, clevel?: number) {
        this.bio.name = nom
        this.bio.class[0] = { class: clas, lvl: clevel }

      }
    }

    function dndAb(char: Dndchar, s: number, d: number, co: number, i: number, w: number, ch: number) {
      char.stats.abscores = { str: s, dex: d, con: co, int: i, wis: w, chr: ch }
    }

    let balco = new Dndchar("Balco", "Cleric", 5)
    balco.resources[0] = { name: 'HP', max: 10, min: 8, bonus: 0 }
    balco.resources.push({ name: "ki", max: 4, min: 2, });
    balco.stats.skills.acrobatics = 4

    let sol = new Dndchar
    sol.bio.class.push({ class: 'Fighter', lvl: 6 })
    sol.bio.class[0] = { class: 'Barbarian', lvl: 14 }
    sol.bio.name = 'Sol Bad'
    sol.bio.profile = '("assets/images/sol.svg")'
    sol.stats.abscores = { str: 20, dex: 16, con: 20, int: 10, wis: 10, chr: 9 }
    sol.bio.history = 'Future rat'
    sol.stats.skills.acrobatics = 5
    sol.stats.skills.athletics = 7
    sol.stats.skills.intimidation = 4
    sol.resources.push({ name: 'Rage', max: 5, min: 5 })
    sol.resources[0] = { name: 'HP', max: 223, min: 183 }
    sol.bio.idlava = "assets/images/solidl.gif"
    sol.bio.idlrag = "assets/images/solrg.gif"
    sol.bio.atkan = "assets/images/sol-a4.gif"
    sol.items.push(axe)

    let jam = new Dndchar('Jam', 'Monk', 10)
    dndAb(jam, 11, 16, 13, 8, 18, 12)
    jam.bio.profile = '("assets/images/jam.gif")'
    jam.bio.idlava = "assets/images/jamid.gif"
    jam.bio.atkan = "assets/images/ocused_v3.gif"

    let apbot = new Dndchar('Sarah Applebottom', 'Bard', 12)
    dndAb(apbot, 8, 18, 10, 12, 14, 16)
    apbot.bio.profile = '("assets/images/apbot.jpg")'
    apbot.bio.idlava = "assets/images/apbotful.jpg"

    let rlet = new Dndchar('RathLethal', 'Sorcerer', 14)
    dndAb(rlet, 8, 16, 10, 12, 14, 20)
    rlet.bio.profile = '("assets/images/rleth.svg")'
    rlet.bio.idlava = 'assets/images/rletidl2.gif'
    rlet.bio.atkan = 'assets/images/rletatk.gif'
    rlet.bio.spells = []
    rlet.bio.spells.push(cant[2], cant[0], cant[5], cant[40], cant[23], cant[3], cant[15], cant[11],
      spellcode[0], spellcode[10], spellcode[8], spellcode[5], spellcode[70], spellcode[55], spellcode[45],
      spellcode[120], spellcode[150], spellcode[170], spellcode[200], spellcode[210], spellcode[220],
    )

    let gio = new Player();
    gio.name = 'Gio Vanna'
    gio.abilities = { STR: 10, DEX: 14, CON: 16, INT: 9, WIS: 18, CHR: 9 }
    gio.hitPoints = gio.maxHitPoints = 54
    gio.armorClass=gio.armorClas
    gio.icon = '("assets/images/gioicon.png")'
    gio.classes = [{ class: 'Monk', lvl: 6 }]
    gio.proficiencies.weapon.push('Shortsword')
    gio.proficiencies.weapontype.push('Simple', 'Martial')
    gio.proficiencies.skills.push('athletics', 'stealth', 'acrobatics', 'perception')
    gio.proficiencies.saves.push('STR', 'DEX')
    gio.resources.push({ name: 'Ki', min: 6, max: 6 })
    gio.bio = { visuals: { idle: 'assets/images/gio.gif' } }
    gio.bio.visuals.atk1 = 'assets/images/gio2.gif'
    gio.weapons.push(thugery)
    gio.features = []
    //gio.features.push(martial)

    let alo= new Player
    alo.name='Sense Allon'
    alo.abilities={STR:12, DEX:12, CON:12, INT:20, WIS:15, CHR:10}
    alo.hitPoints=alo.maxHitPoints=59
    alo.armorClass=10
    alo.proficiencies.weapontype.push('Simple', 'Martial')
    alo.proficiencies.skills.push('investigation','arcana')
    alo.proficiencies.saves.push('CON', 'INT')
    alo.proficiencies.armor.push('light', 'medium', 'shield')
    alo.resources.push({name:'1stSpell', min:4, max:4},{name:'2ndSpell', min:3,max:3},{name:'3rdSpell',min:2, max:2})
    alo.weapons.push(emc, enbox)
    alo.features=[]
    alo.bio={visuals:{idle:'assets/images/hayidle.png'}}
    alo.icon='("assets/images/hayicon.png")'
    alo.classes=[{class:'Artificer', lvl:9},{class:'Fighter', lvl:1}]
    alo.features.push(bready, fsDuel)
    alo.equipment.push(armo1,itemray[1],itemray[2],itemray[3])





    let butter= new Player
    butter.name='Buttercup'
    butter.abilities={STR:14,DEX:16,CON:10, INT:10, WIS:10,CHR:16}
    butter.hitPoints=butter.maxHitPoints=25
    butter.armorClass=15
    butter.classes=[{class:'Bard', lvl:4}]
    butter.proficiencies.weapon.push('Longsword','Shortsword','Rapier','Hand Crossbow')
    butter.proficiencies.weapontype.push('Simple')
    butter.proficiencies.saves.push('DEX','CHR')
    butter.proficiencies.skills.push('athletics','acrobatics','deception','intimidation','perform','persuasion')
    butter.resources.push({name:'Bardic Inspiration',min:1,max:getMod(butter,'CHR')})
    butter.weapons.push(dag)
    butter.features=[]


    function dndPlayerform(dman: Dndchar) {
      let person = new Player();
      person.name = dman.bio.name
      person.abilities = {
        STR: dman.stats.abscores.str,
        DEX: dman.stats.abscores.dex,
        CON: dman.stats.abscores.con,
        INT: dman.stats.abscores.int,
        WIS: dman.stats.abscores.wis,
        CHR: dman.stats.abscores.chr
      }
      person.hitPoints = person.maxHitPoints = dman.resources[0].max
      person.armorClass = 10
      person.icon = dman.bio.profile
      person.classes = dman.bio.class
      person.resources = []
      if (dman.resources[1]) {
        person.resources.push(dman.resources[1])
      }
      person.bio = { visuals: { idle: dman.bio.idlava } }
      person.bio.visuals.atk1 = dman.bio.atkan
      person.bio.visuals.rage = dman.bio.idlrag
      person.weapons = []
      person.weapons.push(dman.items[1])
      person.features=[]

      return person
    }

    let solplay = dndPlayerform(sol)
    solplay.weapons.push(axe)
    let jamplay = dndPlayerform(jam)
    let applay = dndPlayerform(apbot)
    let rathpl = dndPlayerform(rlet)
    solplay.armorClass=solplay.armorClas
    solplay.features=[rage]
    solplay.bio.visuals.rage='assets/images/solrg.gif'
    solplay.features.push(brutalcrit,recklessAttack)
    solplay.proficiencies.saves.push("STR","CON")
    applay.bio.visuals.atk1='assets/images/apbotful.jpg'
    gio.armorClass=gio.armorClas
    gio.features.push(martial,ki,stunstrike)

    

    this._characters = [solplay, jamplay, applay, rathpl, gio, alo];

    function impfeats(chararray){
    var j
    for (j=0;j<chararray.length;j++){

    var ipsos=0
      for (ipsos=0;ipsos<chararray[j].features.length;ipsos++)
        {chararray[j].features[ipsos].start(chararray[j])}
    }
  }
  impfeats(this._characters)

    return this._characters;
  }
}
