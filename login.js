function abc()
{
    var name = document.getElementById("uname").value;
    var pwd = document.getElementById("pass").value;

    
  if(!name || !pwd){
      alert("Incomplete Login Details"+","+" "+ "Fill out the form");
  }
  else{
    document.getElementById("uname").style.backgroundColor="transparent";
    document.getElementById("pass").style.backgroundColor="transparent";
    alert("User" +" "+ "'"+ name +"'" +" "+ "successfully logged-in");
    
  }
}




