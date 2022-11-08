window.onload = function(){
    let div1 = document.getElementById("Button1")
    let button = document.createElement("button");
    let textOnButton = document.createTextNode("Search");
    button.appendChild(textOnButton);
    div1.appendChild(button);

    fetch("http://localhost/info2180-lab4/superheroes.php")
        .then(response => response.text())
        .then(data => {
            //console.log(data);


        div1.addEventListener("click", function(e){
            e.preventDefault();
            alert(data);
            });
        });


// PLEASE EXCUSE THE COMMENTED CODE FOR THIS COMMIT
    // const httpRequest = new XMLHttpRequest();
    // let url = "http://localhost/info2180-lab4/superheroes.php";
    // httpRequest.onreadystatechange = dosom;
    // httpRequest.open('GET', url);
    // httpRequest.send();

    // function dosom() {
    //     if (httpRequest.readyState === XMLHttpRequest.DONE) {
    //         if (httpRequest.status === 200) {
    //             let response = httpRequest.responseText;
    //             alert(response);
    //         } else {
    //             alert('There was a problem.');
    //         }
    //     }
    // }


    
    // let loadbtn = document.querySelector("#Button1");

    // loadbtn.addEventListener('click', function(el){
    //     el.preventDefault();

    //     fetch("http://localhost/info2180-lab4/superheroes.php")
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.text()
    //             } else {
    //                 return Promise.reject("Something went wrong...")
    //             }
    //         })
    //         .then(data => {
    //             let r = document.querySelector("#result");
    //             r.innerHTML = data;
    //             // console.log(data);
    //         })
    //         .catch(error => console.log("There was an error: " + error));

        
    // });


    
    

    
}