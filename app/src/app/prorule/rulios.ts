
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
        this.stats=[prime=[int,str,vit,wis,chr,dex],skill=[athletics,acrobatics]];
        this.stats.prime=[int=9,str=9,dex=9,vit=9,wis=9,chr=9];
        this.stats.skill=[athletics=0,acrobatics=0]
        this.resources=[hpmax=9,spslot=4];
        this.bio=[portrait="default.png",name="Brave Default",background="Stuff."];
    }
};

const mars= new Charachters(null,null,10,11,10,16,10,16,15,4,3,2,"me.png","Mars God","Born in Brook, 1120");

const enemars= new Charachters(null,null,10,16,18,10,8,10,20,0,4,0,"ene.png","En Gro", "Killa");

var b =skillcheck(2,"bo",(mars.stats.prime.str-10)/2,mars.stats.skill.acrobatics)



var hpmin= mars.resources.hpmax -3

console.log( "current HP is"+hpmin+"lo"+b);