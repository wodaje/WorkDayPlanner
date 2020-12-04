// Hour Range 
var hourArray = ["9","10","11","12","13","14","15","16","17"]
var hourArrayAm = ["9 AM","10AM","11AM","12PM","1 PM","2 PM","3 PM","4 PM","5 PM"]

// Allow for automatic formatting for hourly fields checked every minute
var timer = setInterval(formatField, 1000)

// execute dynamic loading of page
divLoop()
labelHour()
textField()
createButton()
formatField()
fillContent()

// creating row divs and load 
function divLoop(){

    hourArray.forEach(function(hour){
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

    hourArray.forEach(function(hour){
        let textBlock = $(`<textarea id= 't${hour}'; rows= '2'; cols= '50'>`)   
        $(`#d${hour}`).append(textBlock)
    })
}

// Creating Buttons
function createButton(){
    hourArray.forEach(function(hour){
        var btn = $(`<button id= b${hour}>`)
        btn.addClass("saveBtn")
        btn.text("Save")
        $(`#d${hour}`).append(btn)
    })
}

// Grabs time and allows calendar adjusting to test 
// It will distort current hour by 8 hours if you are outside the window of 9-5
function formatField(){

    var dateTime = new Date()
    $("#currentDay").html(dateTime)

    let offSet = 0
    let hourNow = dateTime.getHours()
    if (hourNow > 17){offSet = 8}
    else if (hourNow < 9) {offSet = -8}
    hourNow = hourNow - offSet 

    hourArray.forEach(function(hour,i){
       
        let textBlock = $(`#t${hour}`)

        if (parseInt(hour) < hourNow) {
            textBlock.addClass("past")       
        }
        else if (parseInt(hour) === hourNow) {
            textBlock.addClass("present")       
        }
        else if (parseInt(hour) > hourNow) {
            textBlock.addClass("future")       
        }  
    })
}          

// Add event for button functionality
$(".container").on("click","button", updateBox)

//Button control in hourly view for local storage
function updateBox(){
    
    let btnEl = this.id  
    var textId = btnEl.replace("b","t")
    var idNum = btnEl.slice(1)
    let textCont = $(`#${textId}`).val()
    localStorage.setItem(`text${idNum}`,textCont)  
}

function fillContent(){

    hourArray.forEach(function(hour){
        let textCont = localStorage.getItem(`text${hour}`)
        $(`#t${hour}`).text(textCont)
    })
}
//var dayEl = $("<input type= 'number'; onchange= 'adjustTime()'>")
//$("#currentDay").append(dayEl)
//$("#currentDay").prepend("Select Hours to adjust for testing:")
//var numAdjChoice = $("#hourAdj").value