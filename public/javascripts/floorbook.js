var floor = document.querySelectorAll("#floor option");
var room = document.querySelectorAll("#Room option");
var floorselect = document.getElementById("floor");

const hostelhidden = document.getElementById('nagavalli');
const hosteldata = hostelhidden.textContent;
const hostel = JSON.parse(hosteldata);
for (let i = 0; i < 5; i++) {
    for(let j = 0; j < 3;j++){
        if(hostel[i][j].length != 0){
            floor[i+1].classList.remove("hidden");
        }
    }
}

document.addEventListener("change",function(event){
    f = floorselect.value;
    for(let i = 0;i<3;i++){
        if(hostel[f-1][i].length != 0){
            // console.log(hostel[f][i].length);
            room[i+1].classList.remove("hidden");
        }
    }
});