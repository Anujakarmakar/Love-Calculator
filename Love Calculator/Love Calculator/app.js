// var input = document.getElementsByClassName("name");

document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
    var percentage = Math.floor((Math.random() * 100)+1);
    document.getElementById("percentage").innerHTML = percentage + "%";


    // if (isEmpty(input)) {
    //     document.getElementById("percentage").innerHTML = "Enter the names"; 
    // } else {
    //     var percentage = Math.floor((Math.random() * 100)+1);
    //     document.getElementById("percentage").innerHTML = percentage + "%";
    // }
}
