window.onload = function(){
    // let div1 = document.getElementById("Button1")
    // let button = document.createElement("button");
    // let textOnButton = document.createTextNode("Search");
    // button.appendChild(textOnButton);
    // div1.appendChild(button);

    
    // const get = document.querySelector("ul");
    // fetch('superheroes.php')
    //     .then(response => response.text())
    //     .then(data => {
    //         //console.log(data);


    //     div1.addEventListener("click", function(e){
    //         e.preventDefault();
    //         alert(data);
    //         });
    //     });


    let searchwords = [];
    let loadbtn = document.querySelector("#Button1");

    loadbtn.addEventListener('click', function(el){
        el.preventDefault();

        fetch("superheroes.php")
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
                // console.log(data);
            })
            .catch(error => console.log("There was an error: " + error));

        
    });

    let searchbar = document.getElementById("searchfield");
    searchbar.addEventListener("keyup", e => {
        const searches = e.target.value;
        console.log(searches);
    });

    const filteredsearch = searchwords.filter(search1 => {
        return (search1.alias.includes(searches))
    })

    
    

    
}