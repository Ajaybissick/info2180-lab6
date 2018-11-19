const httprequest = new XMLHttpREquest();
const search = document.getElementById("searchfield")
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