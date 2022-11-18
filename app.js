var translateButton = document.querySelector("#btn")
translateButton.addEventListener("click", buttonClickHandler)

var translateInput = document.querySelector("#input")

var translateOutput = document.querySelector("#output")

var url = "https://api.funtranslations.com/translate/minion.json"

function buttonClickHandler(event){
    var input = translateInput.value
    var finalURL = `${url}?text=${input}`
    console.log(finalURL);

    fetch(finalURL)
    .then(response => response.json())
    .then(json =>{
        translateOutput.innerText = json.contents.translated;
    })
    .catch(() => alert("error"))

}


