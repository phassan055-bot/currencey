let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');
let euoro = document.getElementById('euoro');
let sar = document.getElementById('sar');
let ee = document.getElementsByClassName('ee')[0];
let dd = document.getElementsByClassName('dd')[0];
let ss = document.getElementsByClassName('ss')[0];



onload=function(){
    sar.style.display="none";
    euoro.style.display="none";
};




dollar.oninput= function(){
    pound.value = dollar.value*46.95;
}
pound.oninput= function(){
    dollar.value = pound.value/46.95;
}




ee.onclick= function(){

sar.style.display="none";
dollar.style.display="none";
euoro.style.display="inline-block";

euoro.oninput= function(){
    pound.value = euoro.value*45.33;
}
pound.oninput= function(){
    euoro.value = pound.value/45.33;
}
};


ss.onclick= function(){

euoro.style.display="none";
dollar.style.display="none";
sar.style.display="inline-block";

sar.oninput= function(){
    pound.value = sar.value*12.52;
}
pound.oninput= function(){
    sar.value = pound.value/12.52;
}
};


dd.onclick= function(){

sar.style.display="none";
euoro.style.display="none";
dollar.style.display="inline-block";


};
