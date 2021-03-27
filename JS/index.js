var f=true
function Genderize_Nationalize(){
 var loader = document.getElementById("loader")
 loader.innerText='Loading ...'

 var Name = document.getElementById("Name").value;
var info = document.getElementById("info");
var countryName = document.getElementById("countryName");
var probabilityNum = document.getElementById("probabilityNum");
var probabilityNum2 = document.getElementById("probabilityNum2");
var genderName = document.getElementById("genderName");

if (Name !== "" || Name !== " ") {
  fetch(`https://api.nationalize.io/?name=${Name}`).then((res) =>
    res.json().then((data) => {
      var sorted = data.country.sort(
        (value1, value2) => value2.probability - value1.probability
      );
      countryName.innerText = sorted[0]
      ?sorted[0].country_id:"Unknown";
      probabilityNum.innerText = sorted[0]?sorted[0].probability:'Unknown';
      info.style.display = "block";
    })
  );
  fetch(`https://api.genderize.io/?name=${Name}`).then((res) =>
    res.json().then((data) => {
        genderName.innerText =data.gender?data.gender:"Unknown"
probabilityNum2.innerText=data.probability?data.probability:"Unknown";
     f=false
     loader.innerText=''
    })
    );
       
}

}

document
  .getElementById("submit")
  .addEventListener("click", Genderize_Nationalize);
