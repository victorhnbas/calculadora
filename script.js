$("img").attr("draggable","false")

function commentMode(){
    $(".comment-icon").css("display","none")
    $(".calc-icon").css("display","flex")
    $("main").css("display","none")
    $(".comment-page").css("display","flex")
}

function calcMode(){
    $(".comment-icon").css("display","flex")
    $(".calc-icon").css("display","none")
    $("main").css("display","flex")
    $(".comment-page").css("display","none")
}

var num1In = document.getElementById("num1")
var num2In = document.getElementById("num2")
var res = document.getElementById("result")

function add(){
    var num1 = parseFloat(num1In.value)
    var num2 = parseFloat(num2In.value)
    var soma = num1+num2
    res.textContent = soma
}
function sub(){
    var num1 = parseFloat(num1In.value)
    var num2 = parseFloat(num2In.value)
    var sub = num1-num2
    res.textContent = sub
}
function div(){
    var num1 = parseFloat(num1In.value)
    var num2 = parseFloat(num2In.value)
    var div = num1/num2
    res.textContent = div
}
function vez(){
    var num1 = parseFloat(num1In.value)
    var num2 = parseFloat(num2In.value)
    var vez = num1*num2
    res.textContent = vez
}