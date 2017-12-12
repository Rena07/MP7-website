function decode(){
	var letters = [];
	
	letters.push((document.getElementById("topleft").value).toLowerCase());
	letters.push((document.getElementById("topcenter").value).toLowerCase());
	letters.push((document.getElementById("topright").value).toLowerCase());
	letters.push((document.getElementById("centerleft").value).toLowerCase());
	letters.push((document.getElementById("centercenter").value).toLowerCase());
	letters.push((document.getElementById("centerright").value).toLowerCase());
	letters.push((document.getElementById("bottomleft").value).toLowerCase());
	letters.push((document.getElementById("bottomcenter").value).toLowerCase());
	letters.push((document.getElementById("bottomright").value).toLowerCase());
	letters.sort();
	
	for (q = 0; q < words.length; q++)
	{
		var theWord = words[q];
		theWord.toLowerCase();
		
		var wordArray = theWord.split('');
		wordArray.sort();
		
		for (r = 0; r < wordArray.length; r++){
			
			if (wordArray[r] == letters[r]){ 
				if (r==8){
				alert (theWord);}
			}else{ 
				break;	
			}	
		}
	}
	alert("The word matching algorithm has displayed all possible matches and will now terminate. Goodbye!");	
	}

