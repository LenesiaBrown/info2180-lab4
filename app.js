window.onload = function(){
    //Excercise 2
    // let div1 = document.getElementById("Button1")
    // let button = document.createElement("button");
    // let textOnButton = document.createTextNode("Search");
    // button.appendChild(textOnButton);
    // div1.appendChild(button);

    // fetch("http://localhost/info2180-lab4/superheroes.php")
    //     .then(response => response.text())
    //     .then(data => {
    //         //console.log(data);


    //     div1.addEventListener("click", function(e){
    //         e.preventDefault();
    //         alert(data);
    //         });
    //     });



    //Excercise 3
    let loadbtn = document.querySelector("#Button1");

    loadbtn.addEventListener('click', function(el){
        el.preventDefault();

        fetch("http://localhost/info2180-lab4/superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject("Something went wrong...")
                }
            })
            .then(data => {
                let r = document.querySelector("#result");
                r.innerHTML = data;
            })
            .catch(error => console.log("There was an error: " + error));

        
    });


    // const searchInput = document.querySelector("[data-search]");

    // searchInput.addEventListener("input", e => {
    //     const value = e.target.value;
    //     console.log(value);
    // })

    // $(document).ready(function() {
    //     $("button").click(function() {
    //         $.get("http://localhost/info2180-lab4/superheroes.php", function(data) {
    //             $("#result").html(data);
    //         });
    //     });
    // });



    $(document).ready(function() {
        let button = $("#Button1");
    
        button.on("click", function() {
            $.ajax('superheroes.php', {
                method: "GET", dataType: "json"
            }).done(function(response) {
                let superheroResult = response.superheroResult;
                console.log(response);
    
                $("#result").append("<ul></ul>");
                $(superheroResult).each(function() {
                    $("#result ul").append("<li><h3>" + this.name + " A.K.A " + this.alias + "</h4><p>" + this.biography + "</p></li>");
                });
            }).fail(function() {
                alert("This function is not working...");
            });
        });
    });

    
    

    
}