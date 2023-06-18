"use strict";
window.addEventListener('load', function() {

	document.addEventListener("keydown", function(event){
		switch(event.keyCode){
			case 27:
				closeGalery();
				break;
			case 37:
				prevPic();
				break;
			case 39:
				nextPic();
				break;
		}
	});

	let thispic;

	const pic = document.getElementsByClassName("image");
	const showcase = document.getElementById("showcase");
	const close = document.getElementById("close");

	const btn_menu = document.getElementById("menu_icon");
	const menu = document.getElementById("menu_content");

	btn_menu.addEventListener("click", function() {

		let computedStyle = window.getComputedStyle(menu);
		let display = computedStyle.getPropertyValue("display");
		let pront = document.getElementById("pront");
		let intro = document.getElementById("intro");
		let hola_mundo = document.getElementById("hola_mundo");
		if (display==="none"){
			menu.style.display = "block";
			pront.style.margin = "5vh 5vw 15vh 5vw";
			pront.style.marginTop = "auto";
			intro.style.display = "none";
			hola_mundo.style.display = "none";
		} else {
			menu.style.display = "none";
			pront.style.margin = "5vh 5vw 5vh 5vw";
			pront.style.marginTop = "0";
			intro.style.display = "block";
			hola_mundo.style.display = "block";
		}

		let menu_target = document.getElementsByClassName("menu_target");
		for (let target of menu_target) {
			target.addEventListener("click", closeTarget);
		}

		function closeTarget(event){
			menu.style.display = "none";
			pront.style.margin = "5vh 5vw 5vh 5vw";
			pront.style.marginTop = "0";
			intro.style.display = "block";
			hola_mundo.style.display = "block";
		}
	});

	for(let elemtens of pic){
		elemtens.addEventListener("click", showGalery);
	}

	function showGalery(event){
		let pic_src = event.target.getAttribute("src");
		showcase.style.visibility = "visible";
		document.getElementById("thispic").setAttribute("src", pic_src);
		actual_pic();
	}

	close.addEventListener("click", closeGalery);
	prev.addEventListener("click", prevPic);
	next.addEventListener("click", nextPic);

	function closeGalery(event){
		showcase.style.visibility = "hidden";
	}

	function actualPic(){
		let actual = document.getElementById("thispic").getAttribute("src");
		thispic = document.querySelector('[class="image"][src="'+actual+'"]');
	}

	function prevPic(){
		let prev = thispic.previousElementSibling.getAttribute("src");
		document.getElementById("thispic").setAttribute("src", prev);
		actual_pic();
	}

	function nextPic(){
		let next = thispic.nextElementSibling.getAttribute("src");
		document.getElementById("thispic").setAttribute("src", next);
		actual_pic();
	}

	const buttons = document.getElementsByClassName("proyects_titles");

	for (let button of buttons){
		button.addEventListener("click", showProyect);
	}

	function showProyect(event){
		let proyect = event.target.nextElementSibling;
		let proyect_parrafo = document.getElementById(proyect.getAttribute("id"));
		let computedStyle = window.getComputedStyle(proyect_parrafo);
		let display = computedStyle.getPropertyValue("display");
		if ((display==="none")) {
			proyect_parrafo.style.display = "block";
		} 
		if (display==="block") {
			proyect_parrafo.style.display = "none";
		}
	}

	//idiomas

	function translate(element, lenguaje){
		document.getElementById(element).textContent = lenguaje[element];
	}

	const getLenguajes = async ()=>{
		let peticion = await fetch("lenguajes.txt");
		let respuesta = await peticion.json();
		if (check.checked){
			for (let elements in respuesta.en){
				translate(elements, respuesta.en);
				document.getElementById("hola_mundo").innerHTML = respuesta.en.hola_mundo + '<span>&#160;</span>';
				document.getElementById("intro").style.fontSize = "18px";
			}
		} else {
			for (let elements in respuesta.es){
				translate(elements, respuesta.es);
				document.getElementById("hola_mundo").innerHTML = respuesta.es.hola_mundo + '<span>&#160;</span>';
				document.getElementById("intro").style.fontSize = "20px";
			}
		}
	}

	const check = document.getElementById("check");
	check.addEventListener("click", getLenguajes);

});