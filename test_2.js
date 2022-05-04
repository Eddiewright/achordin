// JavaScript Document
alert("js is attached");

  // Import the functions you need from the SDKs you need
  import {initializeApp} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDiafyoRRURq_dy2XCV-iqb2yRnlLO4bsc",
    authDomain: "sams-sandwhichs.firebaseapp.com",
    databaseURL: "https://sams-sandwhichs-default-rtdb.firebaseio.com",
    projectId: "sams-sandwhichs",
    storageBucket: "sams-sandwhichs.appspot.com",
    messagingSenderId: "1066555452872",
    appId: "1:1066555452872:web:beadad034656ad792b24fd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
import {getDatabase, ref, set,push} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";
const db = getDatabase


var addCost = 0;
var sandwhichOrder; //global variable
function loopForm() {
	alert("Check your order please"); //test alert
	var addItems = document.getElementsByClassName("addCheck");
	sandwhichOrder = []; //defines an empty list
	for (var i = 0; i < addItems.length; i++) { //for loop through the form
		if (addItems[i].type == "radio") {
			if (addItems[i].checked) {
				sandwhichOrder.push(addItems[i].value);
				alert(sandwhichOrder);
				//finds the selected item and adds on the price
				addCost += Number( addItems[ i ].dataset.price);
				alert(addCost);	//test alert
				var num = addCost;
	        	var n = num.toFixed(2);
			}
		}
		if (addItems[i].type == "checkbox") {
			if (addItems[i].checked) {
				sandwhichOrder.push(addItems[i].value + " ");
				alert(sandwhichOrder);
			}
		}
		document.getElementById("radioResults").innerHTML = sandwhichOrder;
	}
}


function checkInputs() {
	var firstName = document.getElementById("name").value;
	var cellPhone = document.getElementById("cellphone").value;
	if (document.getElementById("name").validity.patternMismatch) {
		alert("Please fix your name error!");
		return;
	}else{
		alert("else block is now running");
	} //else write your inline error message here - Task 9
		alert(firstName + cellPhone);
		push(ref(db, 'order/'), {
			name: firstName,
			cellphone: cellPhone,
			order: sandwhichOrder
		});
		
		alert("Data has been pushed"); //test alert to ensure it has worked!
		setTimeout(function() { //sets a timer of 3 seconds will then refresh the page
			location.reload();
		}, 3000);
}
//if a number if entered it will call the updateOutput function 
var tiles = document.getElementsByClassName("addCheck");
for (var i = 0; i < tiles.length; i++) {
	tiles[i].addEventListener("input", loopForm);
}
document.getElementById("submit_button").addEventListener("click", checkInputs);
