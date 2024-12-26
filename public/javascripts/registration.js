var genderselect = document.getElementById("gender");
var yearselect = document.getElementById("year");
var programselect = document.getElementById("program");
var hostelselect = document.querySelectorAll("#hostel option");
if(programselect.value == 0){
    console.log(1);
}

const nagavallihidden = document.getElementById('nagavalli');
const nagavallidata = nagavallihidden.textContent;
const nagavalli = JSON.parse(nagavallidata);
console.log(nagavalli);

document.addEventListener("change",function(event){
    var year = yearselect.value;
    var program = programselect.value;
    var gender = genderselect.value;
    for(var i = 1;i<14;i++){
        hostelselect[i].classList.add("hidden");
    }
    for(var i = 1;i<5;i++){

    }
    if(gender == "Male"){
        if(program == "B.Tech"){

            if(year == "1"){
                hostelselect[1].classList.remove("hidden");
            }
            else if(year == "2"){
                hostelselect[2].classList.remove("hidden");
                hostelselect[3].classList.remove("hidden");
            }
            else if(year == "3"){
                hostelselect[4].classList.remove("hidden");
                hostelselect[5].classList.remove("hidden");
            }
            else if(year == "4"){
                hostelselect[6].classList.remove("hidden");
                hostelselect[7].classList.remove("hidden");
            }
        }
        else if(program == "M.Tech"){
            if(year == "1" || year == "2" || year == "3" || year == "4"){
                hostelselect[8].classList.remove("hidden");
            }
        }
        else if(program == "PHD"){
            hostelselect[8].classList.remove("hidden");
        }
    }
    else if(gender == "Female"){
        if(program == "B.Tech"){
            if(year == "1"){
                hostelselect[9].classList.remove("hidden");
            }
            else if(year == "2"){
                hostelselect[10].classList.remove("hidden");
            }
            else if(year == "3"){
                hostelselect[11].classList.remove("hidden");
            }
            else if(year == "4"){
                hostelselect[12].classList.remove("hidden");
            }
        }
        else if(program == "M.Tech" || program == "PHD"){
            hostelselect[13].classList.remove("hidden");
        }
    }
});