Known bugs:

1. Columns will not expand to wider size for full desktop application but the centering and mobile responsive dipslay bug has been fixed.


Project update Jeff Woda 03 Dec 2020 - updated files:

1. JavaScript using Jquery mainly
2. CSS properties and classes 

Functionality Fix:
1. Lines 68 to 72 check for the hour window and adjust so that one can view the file 24/7 to check for functionality - note the actual time window will only be accurate during a 9-5 viewing - otherwise it has an 8 hour offset to keep the screen changes releveant. (this is repeated now in new function update checkTime)


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
 uses text block input fields for hourly comments - reformatted to be more resonsive with sm and xs screen attributes but still fails to align. ***Nown bug not screen responsive down to iphone or centered in display - adding additional divs does not do the trick***
4. createButtons():
creates button array
5. formatField():
applies display fix to check functionality outside 9-5, clears class for rolling assignemt feature, assigns various css classes to display past, present and future hour blocks. Now controlled by checkTime function so this doesn't continoulsy unecssarily loop affecting preformance - latest update.
6. updateBox():
this writes items to local storage when saved teh on line 85 preceeding event listener allows this to fire on any button clicked within the container element class "button"
7. fillContent():
this utilizes localStorage to hardcode and safe guard the entries made in the planner.
8. checkTime():
this updates time on screen is looped with the interval function every second - it also has to replicate the hour adjustment and then fires the formatField() update once (before it fired every second)

Green remmed out code was a challenge I want to pick up with tutor to see as it was returning an object and I was unable to pull the numeric value (that was the inital user input fix for the clock adjustment testing feature now automated with the +/- 8 hour interval hardcoded under teh formatField() function)
