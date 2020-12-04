Project update Jeff Woda 03 Dec 2020 - updated files:

1. JavaScript using Jquery mainly
2. CSS properties and classes 

Functionality Fix:
1. Lines 62 to 66 check for the hour window and adjust so that one can view the file 24/7 to check for functionality - note the actual time window will only be accurate during a 9-5 viewing - otherwise it has an 8 hour offset to keep the screen changes releveant.

Known bugs:

1. Resizing lower then tablet results in display failure at moment can only use down to tablet. Text fields dynamically generated would need to be resized for smaller layout potential - solution unlcear at the moment. 
2. Display for the life of me of hourly schedule will not center within the div for display, trying multiple options.
3. For some reason the hour focus on the cycle of rolling past the hour does not automatically reformat the text block moving the active hour = it only works on re-fresh - should work just as is... 

Layout Functionality:

1. The main control is based on the hourArray with translation to US code via the AM sister.(line 3) To expand fiels simply expand or adjust array for desired hour window display.
2. Timer function on line 6 updates every second this can be adjusted to fewer cycles if desired. This controls the main formatting of the hourly fields and clock/time display.
3. Each hourly slot is set in a corresponding div created for that purose with all matching hourly labels, so div9 div10 etc, text field t9, t10 and corresponding button b9, b10 etc.
4. The save button saves the text to local storage - it does not have a day roll feature so yesterday's menu will be on display once we roll into the new day.

Functions:

1. divLoop():
creates div corresponding with the hour of the hour array and using the hour label (24 hour format) for future expansion or identifier possibilities.
2. labelHour():
 places the hour lable off the array for US it is in 12 hour format.
3. textField():
 uses text block input fields for hourly comments - this requires the assignement of size currently 50 cols = which also represent this issue for dynamically adjusting - this input format likely woudl have to change to make the colum input more dynamic for cellphone usage.
4. createButtons():
creates button array
5. formatField():
applies display fix to check functionality outside 9-5, assigns various css classes to display past, present and future hour blocks. ***Known bug is listed under item 3 of it not automaticaly refreshing under the  set interval which is firing the clock update but not the re-formattting loop***
6. updateBox():
this writes items to local storage when saved teh on line 85 preceeding event listener allows this to fire on any button clicked within the container element class "button"
7. fillContent():
this utilizes localStorage to hardcode and safe guard the entries made in the planner.

Green remmed out code was a challenge I want to pick up with tutor to see as it was returning an object and I was unable to pull the numeric value (that was the inital user input fix for the clock adjustment testing feature now automated with the +/- 8 hour interval hardcoded under teh formatField() function)
