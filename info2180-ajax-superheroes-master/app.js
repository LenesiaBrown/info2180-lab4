window.onload = function(){
    let div1 = document.getElementById("Button1")
    // let button = document.createElement("button");
    // let textOnButton = document.createTextNode("Search");
    // button.appendChild(textOnButton);
    // div1.appendChild(button);

    
    //const get = document.querySelector("ul");
    fetch('superheroes.php')
        .then(response => response.text())
        .then(data => {
            //console.log(data);


        div1.addEventListener("click", function(e){
            e.preventDefault();
            alert(data);
            });
        });








    
}