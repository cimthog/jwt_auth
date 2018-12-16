
var div = document.getElementsByClassName('users')[0],
frag = document.createDocumentFragment();
document.getElementById('btn_search').addEventListener('click',getUser);
document.getElementById('btn_login').addEventListener('click',userLogin);

function getUser(){
  
  fetch("http://localhost:4000/user",{
    method: 'GET',
    mode: 'cors',
    withCredentials: true,
    credentials: 'include',
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
  .then((response) => response.json())
  .then((json) => {
    
    for(var i=0; i<json.user.length; i++){
        
        frag.appendChild(document.createElement('IMG')).src = 'default_profile_img.png'
        frag.appendChild( document.createElement('h5') ).innerHTML =json.user[i].username;
        frag.appendChild( document.createElement('p') ).innerHTML = json.user[i].email
        frag.appendChild( document.createElement('p') ).innerHTML = json.user[i].address
        frag.appendChild(document.createElement('hr'))
        
     }
     div.appendChild(frag)
    console.log(json)
  })
  .catch((err) => console.log("Oops, error:"+err));
}

function userLogin(){

  fetch("http://localhost:4000/login" , {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  }
  })
.then((res) => res.json())
  .then((json) => {
    if(!json.token){
      console.log('Null token')
    }
    localStorage.setItem('token',JSON.stringify(json.token))
    console.log(localStorage.getItem('token'));
    window.location.replace = 'dashboard.html';
  })
  .catch(err =>{
    console.log(err.message)
  })
}

