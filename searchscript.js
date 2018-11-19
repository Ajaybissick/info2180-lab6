const httprequest = new XMLHttpREquest();
const search = document.getElementById("searchfield")
const searchall = document.getElementById("searchAlldefs")
const def_result = document.getElementById("result")

document.getElementById("searchbutton").addEventListener("click", function(){
    httprequest.open("GET", "request.php?q=$(search.value)", true)
    httprequest.send()
    
    httprequest.onreadystatechange = function(){

        if (httprequest.readyState=== XMLHttpRequest.DONE){
            if(httprequest.status===200){
                def_result.innerHTML=httprequest.responseText
            }
        }
    }
});

searchall.addEventListener("click", function(){
    httprequest.open("GET", "request.php?q=$(search.value)", true)
    httprequest.send()
    
    httprequest.onreadystatechange = function(){
        if (httprequest.readyState=== XMLHttpRequest.DONE){
            if(httprequest.status===200){
                const response = httprequest.responseXML;
                const definitions = response.getElementsByTagName("definition");
                const dictionary = document.createElement("ol");
                for(let i=0; i < definitions.length; i++){
                    const word = document.createElement("li");
                    const title = definitions[i].getAttribute('name');
                    const author = definitions[i].getAttribute('author');
                    const definition = definitions[i].innerHTML;
                    word.innerHTML='<h3>${title}</h3><p>${definition}</p><p>${author}</p>';
                    dictionary.appendChild(word);
                }
                def_result.appendChild(dictionary);
            }
        }
    }
});

