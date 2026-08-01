function toCase(text) {
  // write your code here
	if(/^[A-Za-z]+$/.test(text))
	{
		return text.toLowerCase()+"-"+text.toUpperCase();
    }
	return "-";
}

// DO not change the code below

//const text = prompt("Enter text:");
alert(toCase(text));
