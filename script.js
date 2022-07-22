//========================================================================================================
//Tworzenie obiektów{
//========================================================================================================
//var time;
var pole = document.querySelectorAll('.board > div');

var Gun = class{
    constructor(nr)
    {        
        this.time;
        this.zajeteI = nr;
        this.zajete = false;
        //this.again = false;
        
        this.position;
        this.lvl = 1;
        this.dmg = 1;
        this.hp = 10;
        
        this.poz;
        this.iterator = 0;
        this.nr = nr;
    }
    podajnr(nr)
    {
        return(this.nr);
    }
    strzal(nr){
        if((this.nr<0)||(this.nr>140))
        {
            clearTimeout(this.time);
        }
        else
        {
            if((this.nr%14<1)||((this.nr%14<7)&&(this.nr%14>=1)&&(field[this.nr-1] == false)))
            {
                pole[this.poz].style.background = 'rgba(0, 128, 0, 0.42)';
                this.poz +=this.iterator;
                this.iterator=0;

                if(this.nr%14<1)
                {
                    if(enemyhp>0){
                        enemyhp-=this.dmg;
                        enemyhpCont.value = enemyhp;
                    }
                    else clearTimeout(this.time);
                }
                for(let i =0; i<bombaTab.length; i++)
                {
                    if(bombaTab[i] == true)
                    {
                        pole[i].style.background = '#c4c4c4';
                    }
                }
            }
            else{
                while(this.zajeteI%14>7)
                {
                    if(field[this.zajeteI-1] == false)
                    {
                        this.zajete = true;
                        break;
                    }
                    else{
                        this.zajete = false;
                    }
                    this.zajeteI--;
                }
                //console.log(this.position + ' - ' + this.zajete);
                if(this.zajete == false)
                {
                    this.poz = this.nr;
                    this.poz--;
                    this.iterator++;

                    switch(this.dmg)
                    {
                        case 1: 
                            if(bombaTab[this.poz] == true) pole[this.poz].style.background = 'linear-gradient(#c4c4c4 45%, yellow 45%, #c4c4c4 55%)';
                            else pole[this.poz].style.background = 'linear-gradient(rgba(0, 128, 0, 0.42) 45%, yellow 45%, rgba(0, 128, 0, 0.42) 55%)';
                            break;
                        case 2: 
                            if(bombaTab[this.poz] == true) pole[this.poz].style.background = 'linear-gradient(#c4c4c4 43%, orange 43%, #c4c4c4 57%)';
                            else pole[this.poz].style.background = 'linear-gradient(rgba(0, 128, 0, 0.42) 43%, orange 43%, rgba(0, 128, 0, 0.42) 57%)';
                            break;
                        case 3: 
                            if(bombaTab[this.poz] == true) pole[this.poz].style.background = 'linear-gradient(#c4c4c4 40%, red 40%, red 50%, #c4c4c4 60%)';
                            else pole[this.poz].style.background = 'linear-gradient(rgba(0, 128, 0, 0.42) 40%, red 40%, red 50%, rgba(0, 128, 0, 0.42) 60%)';
                    }
                    if(this.poz == this.nr)pole[this.poz].style.background = 'linear-gradient(90deg, red 10%, black 15%)';
                    if(this.iterator>1)pole[this.poz+1].style.background = 'rgba(0, 128, 0, 0.42)';
                }
            }
            return this.poz; 
        }        
    }
    /*
    strzal(nr){
        if((this.nr<0)||(this.nr>140))
            {
                clearTimeout(this.time);
            }
        else{
               if((this.nr%14<1)||((this.nr%14<7)&&(field[this.nr] ==false))||(this.again == true))
                {
                    pole[this.poz].style.background = 'rgba(0, 128, 0, 0.42)';
                    this.poz +=this.iterator;
                    this.iterator=0;
                    
                    if(this.nr%14<1)
                        {
                            if(enemyhp>0){
                                enemyhp-=this.dmg;
                                enemyhpCont.value = enemyhp;
                            }
                            else clearTimeout(this.time);
                        }
                }
                else
                {
                    if(this.zajete == true)
                    {
                        if(field[this.nr-1] == true)
                        {
                            this.zajete = false;
                        }
                    }else
                    {
                        if(field[this.nr-1] == true)
                        {
                            this.poz = this.nr;
                            this.poz--;
                            this.iterator++;
                            
                            switch(this.dmg)
                            {
                                case 1: pole[this.poz].style.background = 'linear-gradient(rgba(0, 128, 0, 0.42) 45%, yellow 45%, rgba(0, 128, 0, 0.42) 55%)';
                                    break;
                                case 2: pole[this.poz].style.background = 'linear-gradient(rgba(0, 128, 0, 0.42) 43%, orange 43%, rgba(0, 128, 0, 0.42) 57%)';
                                    break;
                                case 3: pole[this.poz].style.background = 'linear-gradient(rgba(0, 128, 0, 0.42) 40%, red 40%, red 50%, rgba(0, 128, 0, 0.42) 60%)';
                            }
                            
                            if(this.poz == this.nr)pole[this.poz].style.background = 'linear-gradient(90deg, red 10%, black 15%)';
                            if(this.iterator>1)pole[this.poz+1].style.background = 'rgba(0, 128, 0, 0.42)';
                        }
                        else
                        {
                            if(this.nr%14>=7)
                            {
                                
                                if((field[this.nr] == true)&&(field[this.nr-1] == false))
                                {
                                    pole[this.nr].style.background = 'rgba(0, 128, 0, 0.42)';
                                }
                                this.zajete = true; 
                            }
                            else if(this.nr%14<7)
                                {
                                    this.again = true;
                                }
                        }
                  }
                }
                return this.poz; 
            }
        }*/
}

var myhpCont = document.getElementById('myHP');
var myhp = myhpCont.value;


//Medyk
var Healer = class{
    constructor(nr)
    {
        this.position = nr;
        
        this.hp = 1;
        this.heal = 1;
    }
    treatment()
    {
        if((myhp<100)&&(myhp>0))
            {
                myhp+=this.heal;
                myhpCont.value = myhp;
            }
    }
}


//Osłona
var Guard = class{
    constructor(nr)
    {
        this.position = nr;
        
        this.lvl = 1;
        
        this.hp = 40; //->80->200
        
        this.prizeTo2 = 2000; //To3 -> 10 000
    }
}
//}=================================================================================================================================================================================================================

//========================================================================================================
//Tworzenie planszy{
//========================================================================================================
var board = document.getElementById('board');

var field = [], bombaTab = [];
var myfield = [], enemyfield = [];

for(let i=0;i<140;i++)
    {
        if(i%10)
            {
                board.innerHTML += '<span style="clear:both"></span>';
            }
        if(i%14>6)
            {
               board.innerHTML += '<div class="mojepola" onclick="postaw('+i+')"></div>'; 
                myfield.push(true);
            }
        else{
            board.innerHTML += '<div></div>';
            enemyfield.push(true);
        }
        field.push(true);
        bombaTab.push(false);
    }
//}=================================================================================================================================================================================================================

//========================================================================================================
//Podliczanie mojej kasy{
//========================================================================================================
var mojeBanki1, mojeBanki2, mojeBanki3;
var pl1 = 1, pl2 = 5, pl3 = 10;
var przychod;
var gold = 100;
var mygold = document.getElementById("mygold");
window.onload = calculateMyGold();

function calculateMyGold()
{
    mojeBanki1 = document.querySelectorAll('#mybank > .bankBlokCont > .b1');
    mojeBanki2 = document.querySelectorAll('#mybank > .bankBlokCont > .b2');
    mojeBanki3 = document.querySelectorAll('#mybank > .bankBlokCont > .b3');
    
    przychod = mojeBanki1.length*pl1 + mojeBanki2.length*pl2 + mojeBanki3.length*pl3;
    
    gold += przychod;
    mygold.innerHTML = gold + '<img src="gold.png" alt="gold"> ';
    
    setTimeout(calculateMyGold, 1000);
}
//}=================================================================================================================================================================================================================

//========================================================================================================
//Dodawanie banków{
//========================================================================================================
var dodaj = document.getElementById('bankPlus');
var KontenerZBankami = document.getElementById('mybankBlokCont');
var ogranicznikBanku = 1;
var Bank1Prize = 150;
var banki = ['l1'];
dodaj.onclick = function()
{
    if((ogranicznikBanku<8)&&(gold>=Bank1Prize))
        {
            banki.push('l1');
            KontenerZBankami.innerHTML += '<div class="b1" onclick="upgradeBank('+ogranicznikBanku+');"></div>';
            ogranicznikBanku++;
            gold-=Bank1Prize;
        }
    else{
        KontenerZBankami.innerHTML += '';
    }
}
//}=================================================================================================================================================================================================================

//========================================================================================================
//Pojawianie się przycisku plus w banku{
//========================================================================================================
var mybankCont = document.getElementById("mybank");
var bankplus = document.querySelector("#mybank > #bankPlus");

mybankCont.onmouseout = function()
{
    bankplus.style.animation = 'disppearance ease .3s';
}
mybankCont.onmouseover = function()
{
    if(ogranicznikBanku<8)
        {
            bankplus.style.animation = 'appearance ease .3s';
        }
    else{
        bankplus.style.display = 'none';
        KontenerZBankami.style.height = '100%';
    }
}
//}=================================================================================================================================================================================================================

//========================================================================================================
//Upgrade Banków{
//========================================================================================================
var bank;
var Bank2Prize = 300;
var Bank3Prize = 1000;

function upgradeBank(nr)
{
    bank = document.querySelectorAll('#mybankBlokCont *');
    switch(banki[nr])
        {
            case 'l1': 
                       if(gold >= Bank2Prize)
                           {
                               banki[nr] = 'l2';
                               bank[nr].classList.add('b2');
                               bank[nr].classList.remove('b1');
                               gold-= Bank2Prize;
                           }
                break;
            case 'l2':
                      if(gold>=Bank3Prize)
                          {
                              banki[nr] = 'l3';
                              bank[nr].classList.add('b3');
                              bank[nr].classList.remove('b2');
                              gold-= Bank3Prize;
                          }
                break;
        }
}
//}=================================================================================================================================================================================================================

//========================================================================================================
//Stawianie wieżyczek{
//========================================================================================================
var radia;
var pole = document.querySelectorAll('.board > div');
var time;
var s = 0;
var dzialoPrize = 40;
var oslonaPrize = 60;
var healerPrize = 1000;
var tablicaZNr = [];
var poz = [], iterator = [], time = [];

var GunsTab = [], HealerTab = [], GuardTab = [];

function postaw(nr)
{
    radia = document.querySelectorAll('input[name=tower]');
    //Wybrano dzialo
    if(radia[0].checked)
        {
            if(nr%14!=13)
            {
                if((field[nr] == true)&&(field[nr+1]==true))
                {
                    if(gold>=dzialoPrize)
                    {
                        field[nr] = false;
                        field[nr+1] = false;
                       
                        GunsTab.push(new Gun(nr));
                        GunsTab[GunsTab.length-1].position = nr;
                        
                        pole[nr].classList.add('dzialo1');
                        pole[nr].classList.remove('mojepola');
                        pole[nr].style.background = 'linear-gradient(90deg, red 10%, black 15%)';
                        pole[nr].innerHTML = '<div style="background: transparent;" onclick="upgradeGun('+nr+','+GunsTab[GunsTab.length-1].lvl+')"></div>';
                        pole[nr+1].classList.add('dzialo1');
                        pole[nr+1].classList.remove('mojepola');
                        pole[nr+1].style.background = 'black';
                        pole[nr+1].innerText = '200';
                        pole[nr+1].innerHTML = '<div style="background: transparent;" onclick="upgradeGun('+nr+','+GunsTab[GunsTab.length-1].lvl+')">200</div>';
                        
                        gold-=dzialoPrize;
                        clearTimeout(salwa);
                        
                        oddajStrzal();                        
                    } 
                }
            }
        }
    //Wybrano osłone
    else if(radia[1].checked)
        {
            if(nr<=111)
                {
                    if((field[nr] == true)&&(field[nr+14]==true)&&(field[nr+28]==true))
                    {
                        if(gold>=oslonaPrize)
                        {
                           field[nr] = false;
                           field[nr+14] = false; 
                           field[nr+28] = false; 
                            
                            GuardTab.push(new Guard(nr));

                           pole[nr].classList.remove('mojepola');
                           pole[nr+14].classList.remove('mojepola');
                           pole[nr+28].classList.remove('mojepola');
                           pole[nr].style.background = 'linear-gradient( #7c7c0d 10%, #4e4b4b 15%)';
                           pole[nr+14].style.background = '#4e4b4b';
                           pole[nr+28].style.background = 'linear-gradient( #4e4b4b 85%, #7c7c0d 90%)';
                           pole[nr].style.cursor = 'pointer';
                           pole[nr+14].style.cursor = 'pointer';
                           pole[nr+28].style.cursor = 'pointer';
                           pole[nr].innerHTML = '<span onclick="upgradeGuard('+nr+','+GuardTab[GuardTab.length-1].lvl+')" class="oslona1" style="background:transparent";></span>'; 
                           pole[nr+14].innerHTML = '<span onclick="upgradeGuard('+nr+','+GuardTab[GuardTab.length-1].lvl+')" class="oslona1" style="background:transparent;">2000</span>'; 
                           pole[nr+28].innerHTML = '<span onclick="upgradeGuard('+nr+','+GuardTab[GuardTab.length-1].lvl+')" class="oslona1" style="background:transparent";></span>'; 
                           

                           gold-=oslonaPrize;
                        }
                    }
                }
        }
    //Wybrano medyka
    else if(radia[2].checked)
        {
            if(nr%14==13)
                {
                    if(field[nr] == true)
                        {
                            if(gold >= healerPrize)
                                {
                                    field[nr] = false;
                                    pole[nr].classList.remove('mojepola');
                                    pole[nr].style.background = 'pink';
                                    pole[nr].style.border = '3px solid #b72727';
                                    
                                    HealerTab.push(new Healer(nr));
                                    clearTimeout(treat);
                                    clearTimeout(trt);
                                    lecz(nr);
                                    
                                    gold-=healerPrize;
                                }
                        }
                }
        }
}
//}=================================================================================================================================================================================================================

//========================================================================================================
//Animacja strału{
//========================================================================================================
//var poz;
//var iterator = 0;

var d1Damage = 1;
var enemyhpCont = document.getElementById('enemyHP');
var enemyhp = document.getElementById('enemyHP').value;

var actualcPoz;
var salwa;
var delay;

function oddajStrzal()
{
    for(let i=0; i<GunsTab.length; i++)
        {
            //delay = (i+1)*500;
            delay = 500;
            GunsTab[i].time = setTimeout(function(){
                actualcPoz = GunsTab[i].strzal();
                GunsTab[i].nr = actualcPoz;
            },delay);
            if(enemyhp<=0)
                {
                    clearTimeout(GunsTab[i].time);
                }
        }
    salwa = setTimeout(oddajStrzal, delay);
}
//}=================================================================================================================================================================================================================

//========================================================================================================
//Upgrade dziala{
//========================================================================================================

var gunToLvl2Prize = 200;
var gunToLvl3Prize = 2000;

function upgradeGun(nr, lvl)
{
    switch(lvl)
    {
        case 1:
            if(gold >= gunToLvl2Prize)
            {
                for(let i=0; i<GunsTab.length; i++)
                {
                    if(nr == GunsTab[i].position)
                    {
                        GunsTab[i].lvl = 2;
                        GunsTab[i].dmg = 2;
                        pole[nr].innerHTML = '<div style="background: transparent;" onclick="upgradeGun('+nr+','+GunsTab[i].lvl+')"></div>';
                        pole[nr+1].innerHTML = '<div style="background: transparent;" onclick="upgradeGun('+nr+','+GunsTab[i].lvl+')">2000</div>';
                    }
                }
                pole[nr].style.background = 'linear-gradient(90deg, red 10%, orange 20%, black 25%)';
                pole[nr+1].style.background = 'black';
                gold -= gunToLvl2Prize;
            }
            break;
        case 2:
            if(gold >= gunToLvl3Prize)
            {
                for(let i=0; i<GunsTab.length; i++)
                {
                    if(nr == GunsTab[i].position)
                    {
                        GunsTab[i].lvl = 3;
                        GunsTab[i].dmg = 3;
                    }
                }
                pole[nr].style.background = 'linear-gradient(90deg, red 10%, orange 20%,  yellow 25%, black 35%)';
                pole[nr+1].style.background = 'linear-gradient(90deg, black 20%, #171a34 70%)';
                pole[nr+1].style.cursor = 'default';
                pole[nr].innerHTML = '';
                pole[nr+1].innerHTML = '';
                gold -= gunToLvl3Prize;
            }
            break;
    }
}
//}=================================================================================================================================================================================================================


//========================================================================================================
//Upgrade Osłony{
//========================================================================================================
var guardToLvl2Prize = 2000;
var guardToLvl3Prize = 5000;
function upgradeGuard(nr, lvl)
{
    switch(lvl)
        {
            case 1: 
                if(gold  >= guardToLvl2Prize)
                    {
                        for(let i=0; i<GuardTab.length; i++)
                            {
                                if(nr == GuardTab[i].position)
                                    {
                                        GuardTab[i].lvl = 2;
                                        GuardTab[i].hp = 80;
                                        
                                        pole[nr].innerHTML = '<span onclick="upgradeGuard('+nr+','+GuardTab[i].lvl+')" class="oslona1" style="background:transparent";></span>'; 
                                        pole[nr+14].innerHTML = '<span onclick="upgradeGuard('+nr+','+GuardTab[i].lvl+')" class="oslona1" style="background:transparent";>5000</span>'; 
                                        pole[nr+28].innerHTML = '<span onclick="upgradeGuard('+nr+','+GuardTab[i].lvl+')" class="oslona1" style="background:transparent";></span>'; 
                                    }
                                pole[nr].style.background = 'linear-gradient(#7c7c0d 10%, white 15%, #4e4b4b 40%)';
                                pole[nr+28].style.background =  'linear-gradient( #4e4b4b 60%, white 85%, #7c7c0d 90%)';
                                gold -= guardToLvl2Prize;
                            }
                    }
                break;
            case 2: 
                if(gold  >= guardToLvl3Prize)
                    {
                        for(let i=0; i<GuardTab.length; i++)
                            {
                                if(nr == GuardTab[i].position)
                                    {
                                        GuardTab[i].lvl = 3;
                                        GuardTab[i].hp = 200;
                                        
                                        pole[nr].innerHTML = ''; 
                                        pole[nr+14].innerHTML = ''; 
                                        pole[nr+28].innerHTML = ''; 
                                        pole[nr].style.cursor = 'default';
                                        pole[nr+14].style.cursor = 'default';
                                        pole[nr+28].style.cursor = 'default';
                                    }
                                pole[nr].style.background = 'linear-gradient(#7c7c0d 10%, white 15%, #4e4b4b 40%)';
                                pole[nr+14].style.background = '#4e4b4b';
                                pole[nr+14].style.backgroundImage = 'radial-gradient(5px ,white, #4e4b4b)';
                                pole[nr+28].style.background =  'linear-gradient( #4e4b4b 60%, white 85%, #7c7c0d 90%)';
                                gold -= guardToLvl2Prize;
                            }
                    }
                break;
        }
}
//}=================================================================================================================================================================================================================


//========================================================================================================
//Leczenie Bazy{
//========================================================================================================
var treat, trt;
function lecz(nr)
{
    trt = setTimeout(function(){
        for(let i=0; i<HealerTab.length; i++)
        {
            HealerTab[i].treatment(nr);
        }},5000);
    treat = setTimeout(lecz, 5000);
}
//}=================================================================================================================================================================================================================

//========================================================================================================
//Nalot Gracza - Skill{
//========================================================================================================
var nalotSkill = document.getElementById('wywolajNalot');
//var nalotPrize = 10000;
var nalotPrize = 100;
var n = 0;

nalotSkill.onclick = function()
{
    if(gold >= nalotPrize)
    {
        if(n<1)
        {
            nalotSkill.innerHTML = '<div class="disavaible"></div>';
            nalotSkill.style.border = '0';
            nalotSkill.title = '';

            gold -= nalotPrize;
            n++;
            animacjaNalotu(100);
        }
    }
}
var samolot = document.querySelector('#nalot img');
var klatakNalotu;
function animacjaNalotu(x)
{
    if(x<(-30))
    {
        clearTimeout(klatakNalotu);
        postawBombe();
    }
    else{
        samolot.style.left = x+'%';
        x--;
        klatakNalotu = setTimeout(function(){animacjaNalotu(x)}, 20);
    }
}
var losujPole;
var bombaPos;
function postawBombe()
{
    losujPole = Math.floor(Math.random()*8);
    switch(losujPole)
        {
            case 0: bombaPos  = 0; break;
            case 1: bombaPos  = 14; break;
            case 2: bombaPos  = 28; break;
            case 3: bombaPos  = 42; break;
            case 4: bombaPos  = 56; break;
            case 5: bombaPos  = 70; break;
            case 6: bombaPos  = 84; break;
            case 7: bombaPos  = 98; break;
        }
    
    bombaTab[bombaPos] = true;
    bombaTab[bombaPos+14] = true;
    bombaTab[bombaPos+15] = true;
    bombaTab[bombaPos+28] = true;
    
    pole[bombaPos].style.background = '#c4c4c4';
    pole[bombaPos+14].style.background = '#c4c4c4';
    pole[bombaPos+15].style.background = '#c4c4c4';
    pole[bombaPos+28].style.background = '#c4c4c4';
    
    enemyhp-=20;
    enemyhpCont.value = enemyhp;
}
//}=================================================================================================================================================================================================================



//------------------------------------KOMPUTER------------------------------------------------------------
//=================================================================================================================================================================================================================//================||====|||=======|||||=======||=========||=====||||||||====================================================||==|||=======||=====||=====||||=====||||=====||======||==============================//==================|||||=========||=====||=====||=||===||=||=====||======||==================================================||||==========||=====||=====||==||=||==||=====||||||||=================================//=================||=|||========||=====||=====||===|||===||=====||==========================================================||==|||=======||=====||=====||====|====||=====||=======================================//=================||===|||======||=====||=====||=========||=====||==========================================================||====|||=======|||||=======||=========||=====||=======================================//====================================================================================================================================================================================================================
//------------------------------------KOMPUTER------------------------------------------------------------
