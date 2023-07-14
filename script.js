function changecolor() {
    var hexCode = "";
    var hexDigits = [];
  
    for (var i = 0; i < 16; i++) {
      hexDigits.push(i.toString(16).toUpperCase());
    }
  
    for (var j = 0; j < 6; j++) {
      var randomIndex = Math.floor(Math.random() * hexDigits.length);
      hexCode += hexDigits[randomIndex];
    }
    document.getElementById("hex-code").innerHTML=hexCode;
    document.getElementsByTagName("body")[0].style.background="#" + hexCode;
  }