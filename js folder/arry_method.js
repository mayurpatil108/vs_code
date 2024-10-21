//arry push(add element end) and pop(delet end element) methed

let fooditem =["potatos","tomatos","bhandi","chile"]
fooditem.push("kobi","chips");
let deletitem =fooditem.pop();
console.log(fooditem);
console.log(deletitem);

//arry to string
let marks =[10,20,30,40,50];
console.log(marks.toString());

//concat = atach tow string.
let m_hero=["hulk","spademan","thor"];
let dc_hero=["betman","superman",];
let inden_hero=["shaktiman","hero"]
let hero =m_hero.concat(dc_hero,inden_hero);
console.log(hero);

//unshepd metod = add elmant to start
//shpt = delet stating eliment
let cook=["shvebaji","panierbaji"];
cook.unshift("kobibaji");
cook.shift();
console.log(cook);

//slice(start,end) 
let number=[10,20,30,40,50,60,70,];
console.log(number.slice(2,4));

//splice(strt_point,delit_number,reples_number)=add,replace,delet element
let num=[1,2,3,4,5,6,7];
num.splice(2,0,55);//add
num.splice(1,1,);//delete
num.splice(5,1,66);//replec

 