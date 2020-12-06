// Hour Range 
var hourArray = ["9","10","11","12","13","14","15","16","17"]
var hourArrayAm = [" 9AM ","10AM ","11AM ","12PM "," 1PM "," 2PM "," 3PM "," 4PM "," 5PM "]


// Allow for automatic formatting for hourly fields checked every minute
// and initilzation of variables reuse in functions
var timer = setInterval(checkTime, 1000)
var dateTime = new Date()
var hourNow = dateTime.getHours()
var oldHour = Number

// execute dynamic loading of page
divLoop()
labelHour()
textField()
createButton()
checkTime()
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
        let labelHour = $(`<pre>${hourArrayAm[i]}</pre>`)
        labelHour.addClass("hour")             
        $(`#d${hour}`).append(labelHour)
    })  
}


// creating Text Fields
function textField(){
    hourArray.forEach(function(hour){
    // let textBlock = $(`<textarea id= 't${hour}'; rows= '2'; cols= '50'>`)
     //  let textBlock = $(`<textarea id='t${hour}'class=' col-xs-4 col-sm-8'>`)   
       let textBlock = $(`<textarea id='t${hour}'class=' col-xs-2' col-sm-10 col-lg-10>`)
        $(`#d${hour}`).append(textBlock)
    })
}


// Creating Buttons
function createButton(){
    hourArray.forEach(function(hour){
        var btn = $(`<button id='b${hour}'class=' col-xs-1 col-sm1'>`)
        btn.addClass("saveBtn")
        btn.text("Save")
        $(`#d${hour}`).append(btn)
    })
}


// Controls time window and dynamic format updates 
function formatField(){
    
    // display time adjsutment for continued functionality testing regardless of instructor time window view     
     
    oldHour = hourNow
      
    // clears classes first for refresh
    hourArray.forEach(function(hour){
       
        let textBlock = $(`#t${hour}`)
        
        if (textBlock.hasClass("past")) {
            $(textBlock).removeClass("past")
        }
        else if (textBlock.hasClass("present")) {
            $(textBlock).removeClass("present")
        }
        else if (textBlock.hasClass("future")) {
            $(textBlock).removeClass("future")
        }
    })
   
    // assigns new classes based on time 
    hourArray.forEach(function(hour){
       
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

// Local storage solution for calendar details
function fillContent(){

    hourArray.forEach(function(hour){
        let textCont = localStorage.getItem(`text${hour}`)
        $(`#t${hour}`).text(textCont)
    })
}

// the time adjustment needs to be repated here to keep variable hourNow consistently offset for comparison
function checkTime(){
    
    let dateTime = new Date()
    $("#currentDay").html(dateTime)

    hourNow = dateTime.getHours()
    let offSet = 0
    if (hourNow > 17){offSet = 8}
    else if (hourNow < 9) {offSet = -8}
    hourNow = hourNow - offSet 
    
    if (oldHour < hourNow){
        formatField()
    }
}



// this code below is for me to work out with tutor block I ran across 

//var dayEl = $("<input type= 'number'; onchange= 'adjustTime()'>")
//$("#currentDay").append(dayEl)
//$("#currentDay").prepend("Select Hours to adjust for testing:")
//var numAdjChoice = $("#hourAdj").value