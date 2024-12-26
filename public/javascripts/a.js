program = document.getElementById("program");
year = document.querySelectorAll("#year option");
if(program.value == "M.Tech"){
    year[3].classList.add("hidden");
    year[4].classList.add("hidden");
}