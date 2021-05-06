import { RtlScrollAxisType } from "@angular/cdk/platform";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "node:constants";

function rolldice(side: number) {
  return Math.floor((Math.random() * side)+1)
};

function advantage(side:number) {
    let roll1=rolldice(side);
    let roll2=rolldice(side);

    if (roll1>= roll2){return roll1}
    else {return roll2}

};

function disadvantage(side:number) {
    let roll1=rolldice(side);
    let roll2=rolldice(side);
    if (roll1<= roll2) {return roll1}
    else {return roll2}
};

function damage(num: number, side:number, bonus:number, crit:boolean) {
    if (crit=true) {num=num*2}
    return ((num*rolldice(side))+bonus);
};

function abcheck(profic:number,adv:string) {
    if (adv ="advantage") {var roll:number=advantage(20);}
    else if (adv = "disadvantage") {var roll:number=disadvantage(20);}
    else {var roll:number=rolldice(20)}

    return (roll+profic);

}

function attack(profic:number,adv:string,mod:number){
    return abcheck(profic,adv)+mod;
}

function skillcheck(profic:number,adv:string,mod:number,skill:number) {
    return abcheck(profic,adv)+mod+skill;

}

class Charachters {
    stats:any;
    resources:any;
    items:any;
    bio:any;
    constructor(prime:any,skill:any,
        int:number,str:number,vit:number,wis:number,chr:number,dex:number, 
        hpmax:number, spslot:number,
        athletics:number,acrobatics:number,
        portrait:string,name:string,background:string){
        this.stats=[prime,skill];
        this.stats.prime=[int,str,dex,vit,wis,chr];
        this.stats.skill=[athletics,acrobatics]
        this.resources=[hpmax,spslot];
        this.bio=[portrait,name,background];
    }
    

};

const mars= new Charachters(null,null,10,11,10,16,10,16,15,4,3,2,"me.png","Mars God","Born in Brook, 1120");


const enemars= new Charachters(null,null,10,16,18,10,8,10,20,0,4,0,"ene.png","En Gro", "Killa");

var hpmin= mars.resources.hpmax -3

console.log( "current HP is"+hpmin);