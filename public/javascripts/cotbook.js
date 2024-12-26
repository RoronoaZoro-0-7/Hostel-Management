var floor = document.getElementById("floor");
var room = document.getElementById("room");
var cot = document.querySelectorAll("#Cot option");

const hostelhidden = document.getElementById("hostel");
const hosteldata = hostelhidden.textContent;
const h = JSON.parse(hosteldata);

console.log(floor.textContent);
console.log(room.textContent);
var floorno = floor.textContent;
var roomno = room.textContent;
var f = parseInt(floorno);
var r = parseInt(roomno);
var a = parseInt(r);
const b = h[f][r];
console.log(b);
const size = b.length;
console.log(size);
for(let i = 0;i < size ;i++){
    cot[i+1].classList.remove("hidden");
}