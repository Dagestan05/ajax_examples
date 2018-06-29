const API_URL = 'https://randomuser.me/api/';

const btn = document.getElementById('btn');

const avatar = document.querySelector("#avatar");
const fullname = document.getElementById("fullname");
const username = document.querySelector("#username");
const email = document.getElementById("email");
const city = document.querySelector("#city");

btn.addEventListener('click', ()=>{
  fetch(API_URL)
  .then((response)=>{
    if(response.ok){
      return response
    }else{
      throw Error("Error in getting data")
    }
  })
  .then(response=>{
    data = response.json()
    return data
  })
  .then(data=>{
    const user = data.results[0];
    avatar.setAttribute('src', user.picture.medium);
    fullname.innerText = user.name.first + ' ' + user.name.last;
    username.innerText = user.login.username;
    email.innerText = user.email;
    city.innerText = user.location.city;
  })
  .catch(err=>{
    console.log(err)
  })


})