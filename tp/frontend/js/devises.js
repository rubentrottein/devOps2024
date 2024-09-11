function fetchDevises(){
	//V1 (sans appel de WS REST)
	let deviseListe =  [
		{ code : "EUR" , nom : "Euro" , change : 1},
		{ code : "USD" , nom : "Dollar" , change : 1.1}
	];
	affDeviseListe(deviseListe);
}

function affDeviseListe(deviseListe){
	let tb = document.getElementById("tb");
	tb.innerHTML="";
	for(d of deviseListe){
		let newRow = tb.insertRow(-1) ;
		newRow.insertCell(0).innerHTML = d.code;
		newRow.insertCell(1).innerHTML = d.nom;
		newRow.insertCell(2).innerHTML = d.change;
	}
}

window.onload =()=>{

	document.getElementById("btn_get_all").addEventListener("click",
	()=>{
		fetchDevises();
	});
}