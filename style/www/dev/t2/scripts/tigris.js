// $Id: tigris.js,v 1.2 2002/11/21 01:20:10 tfahrner Exp $

/*
 * menuExpandable2.js - implements an expandable menu based on a HTML list
 * Author: Dave Lindquist (dave@gazingus.org)
 */

if (!document.getElementById)
    document.getElementById = function() { return null; }

function initializeMenu(menuId, actuatorId) {
    var menu = document.getElementById(menuId);
    var actuator = document.getElementById(actuatorId);

    if (menu == null || actuator == null) return;

    if (window.opera) return; // I'm too tired

    actuator.parentNode.style.backgroundImage = "url(../images/icon_sortright.gif)";
    actuator.onclick = function() {
        var display = menu.style.display;
        this.parentNode.style.backgroundImage =
            (display == "block") ? "url(/images/plus.gif)" : "url(../images/icon_sortdown.gif)";
        menu.style.display = (display == "block") ? "none" : "block";

        return false;
    }
}


// focus on username field; filched from google

function focus() {
if (document.loginform) {
document.loginform.loginID.focus();
 }
}

/* open windows smart/friendly way; thanks glish!

theURL -- the URL to load in the new window
type -- the type of window to launch.
	acceptable values for type:
	1: a help window
	2: a 400x400 window
	3: issuezilla assignable users popup window
	... and you can create others yourself
atts -- optional -- if the window you wish to create is unique and you do
	not want to set up a "type" for it, or if you want to pass additional
	attributes for a certain "type", you can pass attributes
	directly to the function with the atts parameter
*/

var w = 0;
function launch(theURL, type, atts){
	w+=1;
	var theName = 'SourceCast'+type;
	if (atts) theName += w
	var theAttributes;
	if (type==1) {
		theAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,height=485,width=724,status=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes'
	} else if (type==2) {
		theAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,height=400,width=400';
        } else if (type==3) {
   theAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,height=400,width=600,scrollbars=yes'; 
	} else if (type==4) {
		theAttributes = 'whatever you want';
		}
	if (atts) {
		theAttributes+= ',' + atts;
		}
	WindowObj = window.open(theURL,theName,theAttributes);
	if (WindowObj) return false;
	return true;
	}
	
