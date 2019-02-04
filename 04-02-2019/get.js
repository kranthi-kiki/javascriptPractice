//using get 

$(document).ready(function(){
    $("#button").click(function(){
     var input = $("#input").val();
     //console.log(input)
     
     alert(`your name:${input}`)
     alert(`your name displayed${$("h1").text()}`)
     alert(`url of Qwipo : ${$("#qwipo").attr("href")}`)
    })
})