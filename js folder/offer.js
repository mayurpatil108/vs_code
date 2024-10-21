let item =[250,654,300,900,50];

for(let i=0;i<item.length;i++){
    let offer = item[i]/10;
    item[i]-= offer;
}
console.log(item);