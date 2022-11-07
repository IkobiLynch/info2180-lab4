

window.onload = function(){
    var search = document.getElementsByClassName("btn");
    var results = document.getElementsByClassName("results")
    var corsProxy = "https://cors-anywhere.herokuapp.com/";

    search[0].addEventListener("click", function(event){
        event.preventDefault();
        var url = "http://localhost/info2180-lab4/superheroes.php";
        // fetch (url)
        //     .then(Result => Result.json())
        //     .then(string => {
        //         console.log(string);
    
        //     })
        //     .catch(errorMsg => { console.log(errorMsg); })

        fetch (url)
                .then(response => {
                    if (response.ok){
                        return response.text()
                    } else{
                        return Promise.reject('something went wrong')
                    }
                })
                .then (function(data){
                    window.alert(data);
                })
                .catch (error => console.log('There was an error: ' + error))

    });

 
}