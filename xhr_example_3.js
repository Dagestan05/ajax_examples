const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';



document.getElementById('btn').addEventListener("click", ()=>{
  const XHR = new XMLHttpRequest();
  XHR.onreadystatechange = ()=>{
    if(XHR.readyState == 4 && XHR.status == 200){
      const data = JSON.parse(XHR.responseText);
      const priceUSD = data.bpi.USD;
      document.getElementById('price').innerHTML = priceUSD.symbol + priceUSD.rate;
      
    }
  }



  XHR.open("GET", API_URL);
  XHR.send();
})