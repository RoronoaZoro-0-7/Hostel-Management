var genderselect = document.getElementById("gender");
var yearselect = document.getElementById("year");
var programselect = document.getElementById("program");
var hostelselect = document.querySelectorAll("#hostel option");
var hostelno = document.getElementById("hostel");
var yearno = document.querySelectorAll("#year option");
var floorselect = document.getElementById("Floor");
var floorno = document.querySelectorAll("#Floor option");
var roomselect = document.getElementById("Room");
var roomno = document.querySelectorAll("#Room option");
var cotselect = document.getElementById("Cot");
var cotno = document.querySelectorAll("#Cot option");

document.addEventListener("change",function(event){
    console.log(hostels);
    var program = programselect.value;
    var gender = genderselect.value;
    for(var i = 1;i<4;i++){
        floorno[i].classList.add("hidden");
    }
    for(var i = 1;i < 4 ;i++){
        roomno[i].classList.add("hidden");
    }
    for(var i = 1;i < 3;i++){
        cotno[i].classList.add("hidden");
    }
    for(var i = 1; i<5;i++){
        yearno[i].classList.add("hidden");
    }
    for(var i = 1;i<=14;i++){
        hostelselect[i].classList.add("hidden");
    }
    if(gender == "Male"){
        if(program == "B.Tech"){
          for(var i = 1;i<5;i++){
                yearno[i].classList.remove("hidden");
            }
            var year = yearselect.value;
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
            for(var i = 1;i<3;i++){
                yearno[i].classList.remove("hidden");
            }
            hostelselect[8].classList.remove("hidden");
        }
        else if(program == "PHD"){
          for(var i = 1;i<5;i++){
            yearno[i].classList.remove("hidden");
            }
            hostelselect[8].classList.remove("hidden");
        }
    }
    else if(gender == "Female"){
        if(program == "B.Tech"){
            for(var i = 1;i<5;i++){
            yearno[i].classList.remove("hidden");
            }
            var year = yearselect.value;
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
        else if(program == "M.Tech"){
            for(var i = 1;i<3;i++){
                yearno[i].classList.remove("hidden");
            }
            hostelselect[13].classList.remove("hidden");
        }
        else if(program == "PHD"){
            for(var i = 1;i<5;i++){
                yearno[i].classList.remove("hidden");
            }
            hostelselect[13].classList.remove("hidden");
        }
    }
//     var hostel = hostelno.value;
//     if(hostel == "Nagavlli"){
//         for(var i = 0;i < 5;i++){
//             if(hostels[i].length != 3){
//                 hostelselect[i+1].classList.remove("hidden");
//             }
//         }
//     }
//     var floor = floorselect.value;
//     for(var i = 0;i < 3 ; i++){
//         if(hostels[floor][i].length != 0){
//             floorno[i+1].classList.remove("hidden");
//         }
//     }
//   var room = roomselect.value;
//   for(var i = 0; i < hostels[floor][room].length;i++){
//         roomno[hostels[floor][room][i]].classList.remove("hidden");
//     }
});