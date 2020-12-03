var hourArray = ["9","10","11","12","13","14","15","16","17"]
var hourArrayAm = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
//var divElement

divLoop()
labelHour()
textField()
createButton()


// creating row divs and load 
function divLoop(){
    hourArray.forEach(function(hour, i){
      let divElement = $(`<div id='d${hour}'></div>`)
      divElement.addClass("row")
        $(".container").append(divElement)
        })    
}

// creating Hour Label
function labelHour(){
    hourArray.forEach(function(hour,i){
        let labelHour = $(`<t>${hourArrayAm[i]}</t>`)
        labelHour.addClass("hour")          
        $(`#d${hour}`).append(labelHour)
    })  
}

// creating Text Fields
function textField(){
    hourArray.forEach(function(hour,i){
        let textBlock = $(`<textarea id= 't${hour}'; rows= '1'; cols= '70'>`)
        textBlock.addClass("time-block")
        $(`#d${hour}`).append(textBlock)
        
    })
}

// Creating Buttons
function createButton(){
    hourArray.forEach(function(hour, i){
        var btn = $(`<button id= b${hour}>`)
        btn.addClass("saveBtn")
        btn.text("Save")
        $(`#d${hour}`).append(btn)
    })
}


//Date.now()	Get the time. ECMAScript 5.
//function myFunction() {
//    var d = new Date();
//    var n = d.getHours();
//    document.getElementById("demo").innerHTML = n;
//  }