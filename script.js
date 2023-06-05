window.addEventListener('load', function() {

	document.addEventListener("keydown", function(event){
		switch(event.keyCode){
			case 27:
				close_galery();
				break;
			case 37:
				prev_pic();
				break;
			case 39:
				next_pic();
				break;
		}
	});

	let thispic;

	let pic = document.getElementsByClassName("image");
	let showcase = document.getElementById("showcase");
	let close = document.getElementById("close");

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
			target.addEventListener("click", close_target);
		}

		function close_target(event){
			menu.style.display = "none";
			pront.style.margin = "5vh 5vw 5vh 5vw";
			pront.style.marginTop = "0";
			intro.style.display = "block";
			hola_mundo.style.display = "block";
		}

	});

	for(let elemtens of pic){
		elemtens.addEventListener("click", show_galery);
	}

	function show_galery(event){
		let pic_src = event.target.getAttribute("src");
		showcase.style.visibility = "visible";
		document.getElementById("thispic").setAttribute("src", pic_src);
		actual_pic();
	}

	close.addEventListener("click", close_galery);
	prev.addEventListener("click", prev_pic);
	next.addEventListener("click", next_pic);

	function close_galery(event){
		showcase.style.visibility = "hidden";
	}

	function actual_pic(){
		let actual = document.getElementById("thispic").getAttribute("src");
		thispic = document.querySelector('[class="image"][src="'+actual+'"]');
	}

	function prev_pic(){
		let prev = thispic.previousElementSibling.getAttribute("src");
		document.getElementById("thispic").setAttribute("src", prev);
		actual_pic();
	}

	function next_pic(){
		let next = thispic.nextElementSibling.getAttribute("src");
		document.getElementById("thispic").setAttribute("src", next);
		actual_pic();
	}

	let buttons = document.getElementsByClassName("proyects_titles");

	for (let button of buttons){
		button.addEventListener("click", show_proyect);
	}

	function show_proyect(event){
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

	var idiomas = {
		es:{
			sobre_mi: "Sobre mi",
			portafolios: "Proyectos",
			formacion: "Formacion",
			contacto: "Contacto",
			hola_mundo: '"¡Hola Mundo!"..',
			intro: "Soy Nahuel Calcara, desarrollador web y de software.",
			sobre: "SOBRE MI",
			sobre_mi_texto_1: "Soy un desarrollador de software apasionado y músico.",
			sobre_mi_texto_2: "Mi experiencia musical me ha enseñado la importancia de la colaboración y la capacidad de adaptarme a diferentes estilos y géneros, lo cual me ayuda a acoplarme fácilmente a cualquier equipo.",
			sobre_mi_texto_3: "Además, mi interés por el arte y el dibujo me hace extremadamente consciente de los detalles estéticos y busco combinar la funcionalidad con una experiencia visual agradable en mis proyectos.",
			sobre_mi_texto_4: "Como programador, cuento con una sólida formación en desarrollo web y experiencia en desarrollo fullstack. Me enorgullece ofrecer soluciones eficientes y de calidad que cumplan con las necesidades de mis clientes. Siempre estoy buscando aprender y mantenerme actualizado con las últimas tendencias y tecnologías.",
			porta_entrada: "Aquí encontrarás una selección de mis trabajos más recientes.",
			proyect_1_1: "Kiosco es una aplicación para el seguimiento de ingresos en locales de venta al público. Su objetivo es proporcionar una herramienta eficiente para registrar transacciones diarias. Los usuarios pueden ingresar el monto de las ventas realizadas, y tienen la opción de añadir detalles de cada venta si lo desean. La app captura automáticamente el horario exacto de la venta, brindando información precisa.",
			proyect_1_2: "Una característica destacada es el historial completo de ventas, que permite revisar transacciones pasadas en un calendario. Kiosco también ofrece una sección para cuentas de clientes, donde se registran saldos pendientes.",
			proyect_1_3: "Asi mismo, la aplicación permite conectar un perfil de Gmail para enviar copias de seguridad diarias de la base de datos al email, brindando la prevención de pérdida de datos.",
			proyect_1_4: "En resumen, Kiosco es una aplicación eficiente y versátil para la gestión de ingresos en locales de venta al público.",
			proyect_2_1: "Un tilemap es una técnica utilizada en el desarrollo de videojuegos para representar y organizar los elementos gráficos de un nivel o mapa.",
			proyect_2_2: "Este programa diseñado en Python genera automáticamente tilemaps en estilo pixel art.",
			proyect_2_3: "Permite dibujar mosaicos de fondo y de detalles en dos lienzos separados, para combinarlos luego. Con unos pocos clics, construye y guarda el tilemap resultante.",
			proyect_2_4: "La interfaz es simple, pero no pretende ser de uso comercial. Ademas proporciona herramientas como pintado por relleno (donde implemente un algoritmo de grafos BFS, para reconocer a los pixeles vecinos del mismo color.), herramienta de borrar y selector de color por click.",
			proyect_3_1: "Durante mi participación en el curso 'Codo a Codo', se me asignó la tarea de replicar una página web como trabajo práctico integrador. Como parte de este desafío, he desarrollado una versión propia de la web, aplicando mis conocimientos y habilidades adquiridas en el curso.",
			formacion_1: "Inicié mi camino en la programación a los 15 años, explorando lenguajes como Pascal y luego Visual Basic. Durante ese tiempo, tuve la oportunidad de tomar clases en el instituto Hilet para fortalecer mis fundamentos. Sin embargo, gran parte de mi formación ha sido autodidacta, lo cual me ha permitido adquirir habilidades de manera independiente y explorar diversas tecnologías.",
			formacion_2: "Poseo un nivel intermedio en el idioma inglés, aunque mi enfoque principal de mejora se encuentra en la pronunciación. Además, tengo conocimientos intermedios de portugués.",
			formacion_3: "En la actualidad, estoy cursando la carrera de Ingeniería Informática en la Universidad Nacional de Mar del Plata. Paralelamente, formo parte del programa 'Codo a Codo', donde estoy cursando el programa de Full Stack con Java. Tengo planes de seguir ampliando mi formación a través de la participación en cursos y programas educativos en el futuro.",
			formacion_4: "No dudes en explorar mi portafolio y descubrir más sobre mi experiencia y habilidades en el mundo de la programación. Si tienes alguna pregunta o necesitas más información, no dudes en contactarme.",
			title_sobre_mi: "FORMACIÓN",
			habilidades: "Habilidades",
			contact_title: "CONTACTO",
			nota: "* Esta web fue creada usando JavasCript puro. ;)",
		},
		en:{
			sobre_mi: "About me",
			portafolios: "Proyects",
			formacion: "Education",
			contacto: "Contact",
			hola_mundo: '"Hello World!"..',
			intro: "I am Nahuel Calcara, a web and software developer",
			sobre: "ABOUT ME",
			sobre_mi_texto_1: "I am a passionate software developer and musician.",
			sobre_mi_texto_2: "My musical background has taught me the importance of collaboration and the ability to adapt to different styles and genres, which helps me easily fit into any team.",
			sobre_mi_texto_3: "Additionally, my interest in art and drawing makes me highly aware of aesthetic details and I strive to combine functionality with a pleasing visual experience in my projects.",
			sobre_mi_texto_4: "As a programmer, I have a strong background in web development and experience in full-stack development. I take pride in delivering efficient and high-quality solutions that meet my clients' needs. I am always seeking to learn and stay up-to-date with the latest trends and technologies.",
			porta_entrada: "Here you will find a selection of my most recent works.",
			proyect_1_1: "Kiosco is an application for tracking income in retail establishments. Its goal is to provide an efficient tool for recording daily transactions. Users can input the amount of sales made and have the option to add details for each sale if desired. The app automatically captures the exact time of the sale, providing accurate information.",
			proyect_1_2: "A standout feature is the comprehensive sales history, which allows users to review past transactions on a calendar. Kiosco also offers a section for customer accounts, where pending balances are recorded.",
			proyect_1_3: "Furthermore, the application allows users to connect a Gmail profile to send daily backups of the database to the email, providing data loss prevention.",
			proyect_1_4: "In summary, Kiosco is an efficient and versatile application for managing income in retail establishments.",
			proyect_2_1: "A tilemap is a technique used in video game development to represent and organize the graphical elements of a level or map.",
			proyect_2_2: "This Python program automatically generates tilemaps in pixel art style.",
			proyect_2_3: "It allows you to draw background and detail tiles on separate canvases and then combine them. With just a few clicks, it builds and saves the resulting tilemap.",
			proyect_2_4: "The interface is simple, although it is not intended for commercial use. Additionally, it provides tools such as fill painting (where I implemented a BFS graph algorithm to recognize neighboring pixels of the same color), an eraser tool, and color selection by clicking.",
			proyect_3_1: "During my participation in the 'Codo a Codo' course, I was assigned the task of replicating a web page as an integrative practical assignment. As part of this challenge, I have developed my own version of the website, applying the knowledge and skills I acquired during the course.",
			formacion_1: "I started my journey in programming at the age of 15, exploring languages like Pascal and later Visual Basic. During that time, I had the opportunity to take classes at Hilet Institute to strengthen my foundations. However, a significant part of my education has been self-taught, allowing me to acquire skills independently and explore various technologies.",
			formacion_2: "I have an intermediate level of proficiency in the English language, although my primary focus for improvement lies in pronunciation. Additionally, I have intermediate knowledge of Portuguese.",
			formacion_3: "Currently, I am pursuing a degree in Computer Engineering at the National University of Mar del Plata. Concurrently, I am enrolled in the 'Codo a Codo' program, where I am studying Full Stack with Java. I have plans to further expand my education through participation in future courses and educational programs.",
			formacion_4: "Feel free to explore my portfolio and discover more about my experience and skills in the world of programming. If you have any questions or need further information, please do not hesitate to contact me.",
			title_sobre_mi: "EDUCATION",
			habilidades: "Skills",
			contact_title: "CONTACT",
			nota: "* This website was created using pure JavaScript. ;)",
		}
	};

	var check = document.getElementById("check");
	check.addEventListener("click", idioma);

	function idioma(){
		if (check.checked){
			document.getElementById("sobre_mi").textContent = idiomas.en.sobre_mi;
			document.getElementById("portafolios").textContent = idiomas.en.portafolios;
			document.getElementById("formacion").textContent = idiomas.en.formacion;
			document.getElementById("contacto").textContent = idiomas.en.contacto;
			document.getElementById("hola_mundo").innerHTML = idiomas.en.hola_mundo + '<span>&#160;</span>';
			document.getElementById("intro").textContent = idiomas.en.intro;
			document.getElementById("intro").style.fontSize = "18px";
			document.getElementById("sobre").textContent = idiomas.en.sobre;
			document.getElementById("sobre_mi_texto_1").textContent = idiomas.en.sobre_mi_texto_1;
			document.getElementById("sobre_mi_texto_2").textContent = idiomas.en.sobre_mi_texto_2;
			document.getElementById("sobre_mi_texto_3").textContent = idiomas.en.sobre_mi_texto_3;
			document.getElementById("sobre_mi_texto_4").textContent = idiomas.en.sobre_mi_texto_4;
			document.getElementById("porta_entrada").textContent = idiomas.en.porta_entrada;
			document.getElementById("proyect_1_1").textContent = idiomas.en.proyect_1_1;
			document.getElementById("proyect_1_2").textContent = idiomas.en.proyect_1_2;
			document.getElementById("proyect_1_3").textContent = idiomas.en.proyect_1_3;
			document.getElementById("proyect_1_4").textContent = idiomas.en.proyect_1_4;
			document.getElementById("proyect_2_1").textContent = idiomas.en.proyect_2_1;
			document.getElementById("proyect_2_2").textContent = idiomas.en.proyect_2_2;
			document.getElementById("proyect_2_3").textContent = idiomas.en.proyect_2_3;
			document.getElementById("proyect_2_4").textContent = idiomas.en.proyect_2_4;
			document.getElementById("proyect_3_1").textContent = idiomas.en.proyect_3_1;
			document.getElementById("formacion_1").textContent = idiomas.en.formacion_1;
			document.getElementById("formacion_2").textContent = idiomas.en.formacion_2;
			document.getElementById("formacion_3").textContent = idiomas.en.formacion_3;
			document.getElementById("formacion_4").textContent = idiomas.en.formacion_4;
			document.getElementById("title_sobre_mi").textContent = idiomas.en.title_sobre_mi;
			document.getElementById("habilidades").textContent = idiomas.en.habilidades;
			document.getElementById("contact_title").textContent = idiomas.en.contact_title;
			document.getElementById("nota").textContent = idiomas.en.nota;
		} else {
			document.getElementById("sobre_mi").textContent = idiomas.es.sobre_mi;
			document.getElementById("portafolios").textContent = idiomas.es.portafolios;
			document.getElementById("formacion").textContent = idiomas.es.formacion;
			document.getElementById("contacto").textContent = idiomas.es.contacto;
			document.getElementById("hola_mundo").innerHTML = idiomas.es.hola_mundo + '<span>&#160;</span>';
			document.getElementById("intro").textContent = idiomas.es.intro;
			document.getElementById("intro").style.fontSize = "20px";
			document.getElementById("sobre").textContent = idiomas.es.sobre;
			document.getElementById("sobre_mi_texto_1").textContent = idiomas.es.sobre_mi_texto_1;
			document.getElementById("sobre_mi_texto_2").textContent = idiomas.es.sobre_mi_texto_2;
			document.getElementById("sobre_mi_texto_3").textContent = idiomas.es.sobre_mi_texto_3;
			document.getElementById("sobre_mi_texto_4").textContent = idiomas.es.sobre_mi_texto_4;
			document.getElementById("porta_entrada").textContent = idiomas.es.porta_entrada;
			document.getElementById("proyect_1_1").textContent = idiomas.es.proyect_1_1;
			document.getElementById("proyect_1_2").textContent = idiomas.es.proyect_1_2;
			document.getElementById("proyect_1_3").textContent = idiomas.es.proyect_1_3;
			document.getElementById("proyect_1_4").textContent = idiomas.es.proyect_1_4;
			document.getElementById("proyect_2_1").textContent = idiomas.es.proyect_2_1;
			document.getElementById("proyect_2_2").textContent = idiomas.es.proyect_2_2;
			document.getElementById("proyect_2_3").textContent = idiomas.es.proyect_2_3;
			document.getElementById("proyect_2_4").textContent = idiomas.es.proyect_2_4;
			document.getElementById("proyect_3_1").textContent = idiomas.es.proyect_3_1;
			document.getElementById("formacion_1").textContent = idiomas.es.formacion_1;
			document.getElementById("formacion_2").textContent = idiomas.es.formacion_2;
			document.getElementById("formacion_3").textContent = idiomas.es.formacion_3;
			document.getElementById("formacion_4").textContent = idiomas.es.formacion_4;
			document.getElementById("title_sobre_mi").textContent = idiomas.es.title_sobre_mi;
			document.getElementById("habilidades").textContent = idiomas.es.habilidades;
			document.getElementById("contact_title").textContent = idiomas.es.contact_title;
			document.getElementById("nota").textContent = idiomas.es.nota;
		}
	}
});