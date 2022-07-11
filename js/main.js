class Recorrido {
  constructor() {
    this.root = document.getElementById("root");
    let header = this.dibujarHeader();
    this.mainIndex = this.dibujarmainIndex();
    //   let mainContenedor = this.dibujarMain();
    //   let mainNosotros = this.mainNosotros();
    this.mainLugares;
    //= this.mainLugares();
    //   let mainContacto = this.mainContacto();
    //   let footer = this.dibujarFooter();

    this.root.appendChild(header);
    //  this.root.appendChild(mainContenedor);
    this.root.appendChild(this.mainIndex);
    //    this.root.appendChild(mainNosotros);
    //   this.root.appendChild(mainLugares);
    //    this.root.appendChild(mainContacto);
    //    this.root.appendChild(footer);
  }

  create(el) {
    return document.createElement(el);
  }

  appendContenedor(element) {
    this.borrarVentana("mainIndex");
    this.mainIndex.appendChild(element);
  }
  borrarVentana(idABorrar) {
    let div = document.getElementById(idABorrar);
    if (!div) console.log(`div null ${idABorrar}`);
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }
  // Contenedor del header y modal del nav
  dibujarHeader() {
    console.log("dibujarHeader");
    let header = document.createElement("header");
    header.className = "header";
    let nav = document.createElement("nav");
    nav.className = "header-nav";
    //Logo "Recorrio" del nav
    let logo = document.createElement("div");
    let a = this.create("a");
    a.className = "logo-recorrio";
    a.textContent = "Reco";
    let span = this.create("span");
    span.textContent = "Rio";
    a.appendChild(span);
    logo.appendChild(a);
    let modal = this.create("div");
    modal.className = "modal";
    modal.id = "modal";

    // UL - lista de enlaces
    let ulNavBar = this.create("ul");
    // ulNavBar.onclick = function (ev) {
    //   console.log(`clickn ${JSON.stringify(ev)}`);
    // }
    ulNavBar.className = "ulNavBar";
    ulNavBar.id = "ulNavBar";
    modal.appendChild(ulNavBar);
    /*menuNosotros(ul);*/
    nav.appendChild(logo);
    nav.appendChild(modal);
    header.appendChild(nav);
    console.log("anda el contenedor header");
    //Enlace que dibuja Index
    let li1 = this.create("li");
    let a1 = this.create("a");
    a1.textContent = "Inicio";
    a1.onclick = function () {
      this.dibujarmainIndex();
    }.bind(this);
    li1.appendChild(a1);
    //Enlace que dibuja Nosotros
    let li2 = this.create("li");
    let _a2 = this.create("a");
    _a2.textContent = "Nosotros";
    //  _a2.href = "#";
    _a2.id = "ida2";
    li2.onclick = (ev) => {
      console.log("entra");
      console.log(this);

      this.appendContenedor(this.mainNosotros());
    };
    li2.onclick.bind(this);
    //console.log(_a2);

    // document.getElementById("root").appendChild(_a2);
    li2.appendChild(_a2);
    let li3 = this.create("li");
    li3.onclick = (ev) => {
      console.log("entra");
      console.log(this);

      this.appendContenedor(this.mainLugares());
    };
    li3.onclick.bind(this);
    let a3 = this.create("a");
    a3.textContent = "Lugares";
    // a3.href = "./lugares.html";

    li3.appendChild(a3);
    let li4 = this.create("li");

    li4.onclick = (ev) => {
      console.log("entra");
      console.log(this);

      this.appendContenedor(this.mainContacto());
    };
    li4.onclick.bind(this);

    let a4 = this.create("a");

    a4.textContent = "Contacto";
    li4.appendChild(a4);

    let buttonMenu = this.create("button");
    buttonMenu.id = "buttonMenu";
    buttonMenu.className = "buttonMenu";
    let sp2 = this.create("span");
    sp2.className = "iconify";
    let att = document.createAttribute("data-icon");
    att.value = "dashicons:menu-alt";
    sp2.setAttributeNode(att);
    buttonMenu.appendChild(sp2);
    nav.appendChild(buttonMenu);
    ulNavBar.appendChild(li1);
    ulNavBar.appendChild(li2);
    ulNavBar.appendChild(li3);
    ulNavBar.appendChild(li4);

    return header;
  }

  dibujarMain() {
    // this.borrarTodo(this.nextEventsPlacement);
    let mainContenedor = document.createElement("main");
    mainContenedor.id = "mainContenedor";
    document.getElementById("root").appendChild(mainContenedor);
    console.log("anda dibujar main general");
    return mainContenedor;
  }
  //Trae el main de index
  dibujarmainIndex() {
    let mainIndex = this.create("section");
    mainIndex.id = "mainIndex";
    let section = this.create("section");
    section.id = "section";
    section.className = "tittle";
    let div = this.create("div");
    div.className = "tittle-text";
    let h1 = this.create("h1");
    h1.textContent = "Reco";
    let span = this.create("span");
    span.textContent = "Rio";
    h1.appendChild(span);
    let p = this.create("p");
    p.textContent = `El río de la plata está lleno de actividades y turismo, al alcance de todxs. ¡Recorramoslo!`;
    div.appendChild(h1);
    div.appendChild(p);
    section.appendChild(div);
    mainIndex.appendChild(section);

    let container = this.create("section");
    container.className = "container";
    let containerMaps = this.create("article");
    containerMaps.className = "containerMaps";
    let mapaIndex = this.create("img");
    mapaIndex.className = "mapaIndex";
    mapaIndex.src = "./img/mapa-index.png";
    containerMaps.appendChild(mapaIndex);
    // Botones de ubicación
    let locationPuente = this.create("div");
    locationPuente.className = "locationPuente";
    let botonPuente = this.create("img");
    botonPuente.className = "botonPuente";
    botonPuente.src = "./img/location.svg";

    botonPuente.onclick = function (ev) {
      mostrarPuente();
    };

    locationPuente.appendChild(botonPuente);
    containerMaps.appendChild(locationPuente);

    let locationMuseo = this.create("div");
    locationMuseo.className = "locationMuseo";
    let botonMuseo = this.create("img");
    botonMuseo.className = "botonMuseo";
    botonMuseo.src = "./img/location.svg";
    botonMuseo.onclick = function (ev) {
      mostrarMuseo();
    };

    locationMuseo.appendChild(botonMuseo);
    containerMaps.appendChild(locationMuseo);
    container.appendChild(containerMaps);

    let containerInfo = this.create("article");
    containerInfo.className = "containerInfo";
    let mensaje = this.create("div");
    mensaje.id = "mensaje";
    containerInfo.appendChild(mensaje);
    let museo = this.create("div");
    museo.id = "puente";
    containerInfo.appendChild(museo);
    let puente = this.create("div");
    puente.id = "puente";
    containerInfo.appendChild(puente);

    container.appendChild(containerInfo);

    mainIndex.appendChild(container);
    //retorna el inicio de la función: main
    return mainIndex;
  }
  //Trae el main de Nosotros

  mainNosotros() {
    /*delete (dibujarmainIndex)*/
    // this.borrarTodo(this.nextEventsPlacement);
    let mainNosotros = document.createElement("section");
    mainNosotros.id = "mainNosotros";

    let tittlePage = document.createElement("section");
    tittlePage.className = "tittlePage";

    let tittleH1 = document.createElement("h1");
    tittleH1.textContent = "Sobre nosotros";

    tittlePage.appendChild(tittleH1);
    mainNosotros.appendChild(tittlePage);

    let nosotros = document.createElement("section");
    nosotros.className = "nosotros";

    let nosotrosImgUno = document.createElement("img");
    nosotrosImgUno.className = "nosotrosImgUno";
    nosotrosImgUno.src = "../img/mural-quinquela.jpg";

    let nosotrosTxtUno = document.createElement("div");
    nosotrosTxtUno.className = "nosotrosTxtUno";
    nosotrosTxtUno.textContent = "Nuestros lugares";

    let nosotrosImgDos = document.createElement("img");
    nosotrosImgDos.className = "nosotrosImgDos";
    nosotrosImgDos.src = "../img/caminito.jpg";

    let nosotrosTxtDos = document.createElement("div");
    nosotrosTxtDos.className = "nosotrosTxtDos";
    nosotrosTxtDos.textContent = "Nuestros lugares";

    let nosotrosImgTres = document.createElement("img");
    nosotrosImgTres.className = "nosotrosImgTres";
    nosotrosImgTres.src = "../img/puente-nosotros.jpg";

    let nosotrosTxtTres = document.createElement("div");
    nosotrosTxtTres.className = "nosotrosTxtTres";
    nosotrosTxtTres.textContent = "Nuestros lugares";

    nosotros.appendChild(nosotrosTxtTres);
    nosotros.appendChild(nosotrosImgTres);
    nosotros.appendChild(nosotrosTxtDos);
    nosotros.appendChild(nosotrosImgDos);
    nosotros.appendChild(nosotrosTxtUno);
    nosotros.appendChild(nosotrosImgUno);

    mainNosotros.appendChild(nosotros);
    //retorna el inicio de la función: main

    console.log("anda el main de nosotros");
    return mainNosotros;
  }
  //Trae el main de Puntos de INteres
  mainLugares() {
    let mainLugares = document.createElement("section");
    mainLugares.id = "mainLugares";
    //titulo
    let tittlePage = document.createElement("section");
    tittlePage.className = "tittlePage";
    let tittleH1 = document.createElement("h1");
    tittleH1.textContent = "Puntos de interes";
    //lugares
    let lugaresContenedor = document.createElement("section");
    lugaresContenedor.className = "lugar";
    //caminito
    let caminito = document.createElement("article");
    caminito.id = "caminito";
    caminito.className = "lugarInfo";
    let infoImgCaminito = document.createElement("div");
    infoImgCaminito.className = "infoImg";
    let imgCaminito = document.createElement("img");
    imgCaminito.src = "../img/caminito.jpg";
    let lugarText = document.createElement("div");
    lugarText.className = "lugarText";
    let titCaminito = document.createElement("h2");
    titCaminito.className = "tituloLugares";
    titCaminito.textContent = "Caminito";
    let pCaminito = document.createElement("p");
    pCaminito.className = "descLugares";
    pCaminito.textContent =
      "El lugar adquirió significado cultural debido a que inspiró la música del famoso tango CAMINITO, compuesta por Juan de Dios Filiberto.";
    //Museo
    let museoL = document.createElement("article");
    museoL.id = "museoL";
    museoL.className = "lugarInfo";
    let infoImgMuseo = document.createElement("div");
    infoImgMuseo.className = "infoImg";
    let imgMuseo = document.createElement("img");
    imgMuseo.src = "../img/museo-benito-quinquela.jpg";
    let museoText = document.createElement("div");
    museoText.className = "lugarText";
    let titMuseo = document.createElement("h2");
    titMuseo.className = "tituloLugares";
    titMuseo.textContent = "Museo Benito Quinquela";
    let pMuseo = document.createElement("p");
    pMuseo.className = "descLugares";
    pMuseo.textContent =
      "El lugar adquirió significado cultural debido a que inspiró la música del famoso tango CAMINITO, compuesta por Juan de Dios Filiberto.";

    tittlePage.appendChild(tittleH1);
    mainLugares.appendChild(tittlePage);
    lugarText.appendChild(titCaminito);
    lugarText.appendChild(pCaminito);
    infoImgCaminito.appendChild(imgCaminito);
    caminito.appendChild(lugarText);
    caminito.appendChild(infoImgCaminito);

    museoText.appendChild(titMuseo);
    museoText.appendChild(pMuseo);
    infoImgMuseo.appendChild(imgMuseo);
    console.log("anda article");
    museoL.appendChild(museoText);
    museoL.appendChild(infoImgMuseo);
    lugaresContenedor.appendChild(museoL);
    lugaresContenedor.appendChild(caminito);
    mainLugares.appendChild(lugaresContenedor);

    console.log("anda el main de Puntes de interes");
    return mainLugares;
  }

  mainContacto() {
    let mainContacto = document.createElement("section");
    mainContacto.id = "mainContacto";
    //titulo Contacto
    let tittlePage = document.createElement("section");
    tittlePage.className = "tittlePage";
    let tittleH1 = document.createElement("h1");
    tittleH1.textContent = "Contactanos";
    //formulario
    let formulario = document.createElement("form");
    formulario.id = "formulario";
    //Nombre
    let divNombre = document.createElement("div");
    divNombre.className = "divNombre";
    let labelNombre = document.createElement("label");
    labelNombre.className = "labelForm";
    labelNombre.textContent = "Nombre";
    let inputNombre = document.createElement("input");
    inputNombre.className = "inputForm";
    inputNombre.required = true;
    inputNombre.type = "text";
    inputNombre.placeholder = "Ej: María";
    //Email
    let divEmail = document.createElement("div");
    divEmail.className = "divEmail";
    let labelEmail = document.createElement("label");
    labelEmail.className = "labelForm";
    labelEmail.textContent = "Email";
    let inputEmail = document.createElement("input");
    inputEmail.className = "inputForm";
    inputEmail.required = true;
    inputEmail.type = "text";
    inputEmail.placeholder = "Ej: maria@gmail.com";
    //TextArea
    let divTextArea = document.createElement("div");
    divTextArea.className = "divTextArea";
    let labelTextArea = document.createElement("label");
    labelTextArea.className = "labelTextArea";
    labelTextArea.textContent = "Su mensaje";
    let inputTextArea = document.createElement("input");
    inputTextArea.className = "inputText";
    inputTextArea.required = true;
    inputTextArea.type = "text";
    inputTextArea.placeholder = "Tu mensaje, sugerencia, o lo que quieras!";
    //Botón enviar
    let inputSubmit = document.createElement("input");
    inputSubmit.className = "form-button";
    inputSubmit.required = true;
    inputSubmit.type = "submit";
    inputSubmit.value = "¡Enviar!";

    tittlePage.appendChild(tittleH1);
    mainContacto.appendChild(tittlePage);
    divTextArea.appendChild(labelTextArea);
    divTextArea.appendChild(inputTextArea);
    divEmail.appendChild(labelEmail);
    divEmail.appendChild(inputEmail);
    divNombre.appendChild(labelNombre);
    divNombre.appendChild(inputNombre);
    formulario.appendChild(divNombre);
    formulario.appendChild(divEmail);
    formulario.appendChild(divTextArea);
    formulario.appendChild(inputSubmit);
    mainContacto.appendChild(formulario);
    console.log("anda el main de contacto");
    return mainContacto;
  }
  //Footer
  dibujarFooter() {
    let footer = this.create("footer");
    let socialLink = this.create("aside");
    socialLink.className = "socialLink";
    let span = this.create("span");
    span.textContent = "Redes sociales";
    //Lista de redes sociales
    let ul = this.create("ul");
    let youtubeLi = this.create("li");
    let youtubeSpan = this.create("span");
    youtubeSpan.className = "iconify";
    let attYoutube = document.createAttribute("data-icon");
    attYoutube.value = "akar-icons:youtube-fill";
    youtubeSpan.setAttributeNode(attYoutube);
    youtubeLi.appendChild(youtubeSpan);
    ul.appendChild(youtubeLi);

    let facebookLi = this.create("li");
    let facebookSpan = this.create("span");
    facebookSpan.className = "iconify";
    let attFacebook = document.createAttribute("data-icon");
    attFacebook.value = "entypo-social:facebook";
    facebookSpan.setAttributeNode(attFacebook);
    facebookLi.appendChild(facebookSpan);
    ul.appendChild(facebookLi);

    let instagramLi = this.create("li");
    let instagramSpan = this.create("span");
    instagramSpan.className = "iconify";
    let attInstagram = document.createAttribute("data-icon");
    attInstagram.value = "ant-design:instagram-filled";
    instagramSpan.setAttributeNode(attInstagram);
    instagramLi.appendChild(instagramSpan);
    ul.appendChild(instagramLi);

    let twitterLi = this.create("li");
    let twitterSpan = this.create("span");
    twitterSpan.className = "iconify";
    let attTwitter = document.createAttribute("data-icon");
    attTwitter.value = "fa:twitter-square";
    twitterSpan.setAttributeNode(attTwitter);
    twitterLi.appendChild(twitterSpan);
    ul.appendChild(twitterLi);
    socialLink.appendChild(span);
    socialLink.appendChild(ul);
    footer.appendChild(socialLink);
    let div = this.create("div");
    let p = this.create("p");
    p.textContent =
      "Los contenidos publicados en estas páginas han sido tomados por alumnos de una materia de la Universidad de Buenos Aires para la realización de un trabajo práctico. Los textos, logotipos, fotografías, tipografías, etc., pueden no ser de su autoría y sólo son utilizados a los fines prácticos del ejercicio.";
    div.appendChild(p);
    footer.appendChild(div);
    console.log("footer ok!");
    return footer;
  }
}

let recorrido = new Recorrido();

// Navbar responsive
let toggleButton = document.getElementById("buttonMenu");
let showModal = document.getElementById("modal");

/* toggleButton.addEventListener("click", () => {
  showModal.classList.toggle("show");
  toggleButton.classList.toggle("close");
});
showModal.addEventListener("click", (e) => {
  console.log("click");
  if (e.target.id === "modal") {
    showModal.classList.remove("show");
    toggleButton.classList.remove("close");
  }
}); */
console.log("navbar ok!");
