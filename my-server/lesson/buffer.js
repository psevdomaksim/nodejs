const buf = Buffer.alloc(10,"A");
const man = {name:"Dobryak",surname:"Doof"}
const bufFrom= Buffer.from(JSON.stringify(man));
console.log(buf)