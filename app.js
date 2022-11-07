

window.onload = function(){
    var search = document.getElementsByClassName("btn");
    var result = document.getElementsByClassName("result")
    

    search[0].addEventListener("click", function(event){
        event.preventDefault();
        var url = "http://localhost/info2180-lab4/superheroes.php?query=";

        let query = sanitize();
        let search_request = new URL(url + query);

        fetch (search_request)
                .then(response => {
                    if (response.ok){
                        return response.text()
                    } else{
                        return Promise.reject('something went wrong')
                    }
                })
                .then (function(data){
                    result[0].innerHTML = data;
                })
                .catch (error => console.log('There was an error: ' + error))

    });

 
}

function sanitize(){
    let query = document.getElementById("search").value;
    if(query != "" && query.includes("<") || query.includes(">") || query.includes("*")){
        alert("The characters < and > are not allowed");
        window.location.reload();
    }
    else{
        return query
    }
}