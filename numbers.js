var store1=0;
var store2=0;


function processClick(tileId){

	if (store1==0){
		store1=document.getElementById(tileId).id;
		document.getElementById(tileId).style.backgroundColor = "#1ba3c2";
	
	}else{
		store2= document.getElementById(tileId).id;
		document.getElementById(tileId).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
		document.getElementById(store1.toString()).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }
	
	var sth = document.getElementById(store1.toString()).innerHTML;
	document.getElementById(store1.toString()).innerHTML = document.getElementById(store2.toString()).innerHTML;
	document.getElementById(store2.toString()).innerHTML = sth;
	
	store1 = 0;
	store2 = 0;
	
	if (document.getElementById("topleft").innerHTML==1 &&
	document.getElementById("topcenter").innerHTML==2 &&
	document.getElementById("topright").innerHTML==3 &&
	document.getElementById("centerleft").innerHTML==4 &&
	document.getElementById("centercenter").innerHTML==5 &&
	document.getElementById("centerright").innerHTML==6 &&
	document.getElementById("bottomleft").innerHTML==7 &&
	document.getElementById("bottomcenter").innerHTML==8 &&
	document.getElementById("bottomright").innerHTML==9){
        alert ("Well Done!")
    
	}
	
}

