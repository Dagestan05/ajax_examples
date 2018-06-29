const XHR = new XMLHttpRequest();

const API_URL = 'https://api.github.com/zen'

XHR.onreadystatechange = function(){
  // console.log("ready state is: ", XHR.readyState)
  if (XHR.readyState == 4) {
    if (XHR.status == 200){
    console.log("Response text is: ", XHR.responseText)
    }else{
      console.log("there was a problem")
    }
  }
}

XHR.open("GET", API_URL);
XHR.send()

