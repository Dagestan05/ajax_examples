const API_URL = 'https://dog.ceo/api/breeds/image/random';

document.getElementById('btn').addEventListener('click', ()=>{
  const XHR = new XMLHttpRequest();
    
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status ==200) {
      const data = JSON.parse(XHR.responseText)
      document.getElementById("photo").setAttribute('src', data.message)
    }
  }
  XHR.open("GET", API_URL);
  XHR.send();
})