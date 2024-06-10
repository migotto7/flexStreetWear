let jsonSnk = [
    {
        name: "Sneaker LV Trainer",
        img: "./img/lvShoe.avif",
        price: "8.100,00",
        tam: ["38", "40", "42", "44"]
    },
    {
        name: "NOCTA x Nike Hot Step 2",
        img: "./img/noctaHotStep.webp",
        price: "1.950,00",
        tam: ["36", "37", "40", "44"]
    },
    {
        name: "Nike Lebron 21 Aragonite",
        img: "./img/lebron.webp",
        price: "2.282,00",
        tam: ["38", "40", "42", "44"]
    },
    {
        name: "Puma MB.01 LaMelo Red Blast",
        img: "./img/lamelo.webp",
        price: "999,00",
        tam: ["38", "40", "42", "44"]
    }
];

let jsonClt = [
    {
        name: "Oakley x Piet Camiseta",
        img: "./img/pietXoakley.webp",
        price: "500,00",
        tam: ["M", "G"]
    },
    {
        name: "Camiseta BAPE ABC Big Ape",
        img: "./img/bape.webp",
        price: "450,00",
        tam: ["P", "M", "G", "GG"]
    },
    {
        name: "Camiseta Sufgang Basic 5.4 Azul",
        img: "./img/sufgang.webp",
        price: "120,00",
        tam: ["P", "G", "XL"]
    },
    {
        name: "Camiseta em Degradé Monogram LVSE",
        img: "./img/lvCamisa.webp",
        price: "6.750,00",
        tam: ["P", "G"]
    },
];

let jsonJkt = [
    {
        name: "Jaqueta Jordan Jumpman Classics Black Red",
        img: "./img/jordanJkt.webp",
        price: "500,00",
        tam: ["M", "G", "GG"]
    },
    {
        name: "Parka Esportiva com Color Blocking e Zíper",
        img: "./img/lvJkt.png",
        price: "23.000,00",
        tam: ["P", "M"]
    },
    {
        name: "The North Face x Supreme Jaqueta Split Nuptse Black",
        img: "./img/tnfJkt.webp",
        price: "3.200,00",
        tam: ["P", "G", "XL"]
    },
    {
        name: "Supreme x Nike Jaqueta Pullover Ripstop White",
        img: "./img/nikeJkt.webp",
        price: "3.800,00",
        tam: ["P","M", "G"]
    },
];

function createMainPage(){
    let mainContainer = document.getElementById("mainContainer");
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }

    let nav = document.createElement("nav");
    nav.classList.add("nav");
    mainContainer.appendChild(nav);

    let titleNav = document.createElement("p");
    titleNav.innerText = "Flex";
    titleNav.classList.add("titleNav");
    nav.appendChild(titleNav);

    let divAncor = document.createElement("div");
    divAncor.classList.add("divAncor");
    nav.appendChild(divAncor);

    let aSneakers = document.createElement("a");
    aSneakers.classList.add("aNav");
    aSneakers.href = "emDesenvolvimento.html";
    aSneakers.target = "_blank";
    aSneakers.innerText = "Sneakers";
    divAncor.appendChild(aSneakers);

    let aClothes = document.createElement("a");
    aClothes.classList.add("aNav");
    aClothes.innerText = "Clothes";
    divAncor.appendChild(aClothes);

    let aJackets = document.createElement("a");
    aJackets.classList.add("aNav");
    aJackets.innerText = "Jackets";
    divAncor.appendChild(aJackets);

    let aDesafios = document.createElement("a");
    aDesafios.classList.add("aNav");
    aDesafios.innerText = "Cores";
    divAncor.appendChild(aDesafios);
    aDesafios.addEventListener("click", desafios);

    let aGaleria = document.createElement("a");
    aGaleria.classList.add("aNav");
    aGaleria.innerText = "Galeria";
    divAncor.appendChild(aGaleria);
    aGaleria.addEventListener("click", galeria);

    let iCart = document.createElement("i");
    iCart.classList.add("bi", "bi-bag", "iNav");
    nav.appendChild(iCart);
    iCart.addEventListener("click", openCart);

    let divCarousel = document.createElement("header");
    divCarousel.classList.add("carousel");
    document.getElementById("mainContainer").appendChild(divCarousel);

    let divCarouselImgs = document.createElement("div");
    divCarouselImgs.classList.add("carousel-images");
    divCarousel.appendChild(divCarouselImgs);

    let img1 = document.createElement("img");
    img1.src = "./img/img1.jpg";
    img1.alt = "Image 1";
    img1.classList.add("active", "imgCarousel");
    divCarouselImgs.appendChild(img1);

    let img2 = document.createElement("img");
    img2.src = "./img/img2.jpg";
    img2.alt = "Image 2";
    img2.classList.add("imgCarousel");
    divCarouselImgs.appendChild(img2);

    let img3 = document.createElement("img");
    img3.src = "./img/img3.jpg";
    img3.alt = "Image 3";
    img3.classList.add("imgCarousel");
    divCarouselImgs.appendChild(img3);

    let iArrowLeft = document.createElement("i");
    iArrowLeft.classList.add("bi", "bi-chevron-left", "iSlideshow", "prev");
    divCarousel.appendChild(iArrowLeft);
    iArrowLeft.addEventListener("click", function(){
        changeSlide(-1);
    });

    let iArrowRight = document.createElement("i");
    iArrowRight.classList.add("bi", "bi-chevron-right", "iSlideshow", "next");
    divCarousel.appendChild(iArrowRight);
    iArrowRight.addEventListener("click", function(){
        changeSlide(1);
    });

    let divDots = document.createElement("div");
    divDots.classList.add("dots");
    divCarousel.appendChild(divDots);

    let dot1 = document.createElement("span");
    dot1.classList.add("bi", "bi-dot", "iDots");
    dot1.setAttribute("id", "dot");
    divDots.appendChild(dot1);
    dot1.addEventListener("change", currentSlide(0));

    let dot2 = document.createElement("span");
    dot2.classList.add("bi", "bi-dot", "iDots");
    dot2.setAttribute("id", "dot");
    divDots.appendChild(dot2);
    dot2.addEventListener("change", currentSlide(1));

    let dot3 = document.createElement("span");
    dot3.classList.add("bi", "bi-dot", "iDots");
    dot3.setAttribute("id", "dot");
    divDots.appendChild(dot3);
    dot3.addEventListener("change", currentSlide(2));

    var currentIndex = 0;
    const images = document.querySelectorAll(".imgCarousel");
    console.log("images2", images)

    function showSlide(index) {
        const imgs = document.querySelectorAll(".imgCarousel");
        const dots = document.querySelectorAll("#dot");
        console.log("dots", dots);
        imgs.forEach((img, i) => {
            img.classList.toggle('active', i === index);  
            //dots[i].classList.toggle('active', i === index);
        });
    }

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        showSlide(currentIndex);
    }

    function currentSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    let divInfos = document.createElement("div");
    divInfos.classList.add("divInfos");
    mainContainer.appendChild(divInfos);

    let divCoin = document.createElement("div");
    divCoin.classList.add("divInfo");
    divInfos.appendChild(divCoin);

    let iCoin = document.createElement("i");
    iCoin.classList.add("bi", "bi-coin", "iconInfo");
    divCoin.appendChild(iCoin);

    let divPCoin = document.createElement("div");
    divPCoin.classList.add("divP");
    divCoin.appendChild(divPCoin);

    let pCoin1 = document.createElement("p");
    pCoin1.innerText = "Parcelamento";
    pCoin1.classList.add("pInfoFirst");
    divPCoin.appendChild(pCoin1);

    let pCoin2 = document.createElement("p");
    pCoin2.classList.add("pInfoSecond");
    pCoin2.innerText = "No cartão em até 6x sem juros";
    divPCoin.appendChild(pCoin2);

    let divFrete = document.createElement("div");
    divFrete.classList.add("divInfo");
    divFrete.setAttribute("id", "divFrete");
    divInfos.appendChild(divFrete);

    let iFrete = document.createElement("i");
    iFrete.classList.add("bi", "bi-box", "iconInfo");
    divFrete.appendChild(iFrete);

    let divPFrete = document.createElement("div");
    divPFrete.classList.add("divP");
    divFrete.appendChild(divPFrete);

    let pFrete1 = document.createElement("p");
    pFrete1.innerText = "Frete Grátis";
    pFrete1.classList.add("pInfoFirst");
    divPFrete.appendChild(pFrete1);

    let pFrete2 = document.createElement("p");
    pFrete2.classList.add("pInfoSecond");
    pFrete2.innerText = "A partir de R$ 499,90";
    divPFrete.appendChild(pFrete2);

    let divTroca = document.createElement("div");
    divTroca.classList.add("divInfo");
    divInfos.appendChild(divTroca);

    let iTroca = document.createElement("i");
    iTroca.classList.add("bi", "bi-truck", "iconInfo");
    divTroca.appendChild(iTroca);

    let divPTroca = document.createElement("div");
    divPTroca.classList.add("divP");
    divTroca.appendChild(divPTroca);

    let pTroca1 = document.createElement("p");
    pTroca1.innerText = "Garantia de troca";
    pTroca1.classList.add("pInfoFirst");
    divPTroca.appendChild(pTroca1);

    let pTroca2 = document.createElement("p");
    pTroca2.classList.add("pInfoSecond");
    pTroca2.innerText = "Até 7 dias para entregar";
    divPTroca.appendChild(pTroca2);

    let divProducts = document.createElement("div");
    divProducts.classList.add("divProducts");
    mainContainer.appendChild(divProducts);

    let divSneakers = document.createElement("div");
    divSneakers.classList.add("divTypeProd");
    divProducts.appendChild(divSneakers);

    let pSneaker = document.createElement("p");
    pSneaker.classList.add("titleProds");
    pSneaker.innerText = "Sneakers";
    divSneakers.appendChild(pSneaker);

    let divProdsSnk = document.createElement("div");
    divProdsSnk.classList.add("divProdsCate");
    divSneakers.appendChild(divProdsSnk)

    for(let i = 0; i < jsonSnk.length; i++){
        let divSneaker = document.createElement("div");
        divSneaker.classList.add("divProd");
        divProdsSnk.appendChild(divSneaker);

        let img = document.createElement("img");
        img.classList.add("imgProd");
        img.src = jsonSnk[i].img;
        divSneaker.appendChild(img);

        let pTitle = document.createElement("p");
        pTitle.innerText = jsonSnk[i].name;
        pTitle.classList.add("pTitleProd");
        divSneaker.appendChild(pTitle);

        let pPrice = document.createElement("p");
        pPrice.innerText = "R$ " + jsonSnk[i].price;
        pPrice.classList.add("pPriceProd");
        divSneaker.appendChild(pPrice);

        let divTams = document.createElement("div");
        divTams.classList.add("divTams");
        divSneaker.appendChild(divTams);

        for(let j in jsonSnk[i].tam){
            let divTam = document.createElement("div");
            divTam.classList.add("divTam");
            divTam.innerText = jsonSnk[i].tam[j];
            divTams.appendChild(divTam);
        }

        let divAddCart = document.createElement("div");
        divAddCart.classList.add("divAddProd");
        divAddCart.innerText = "Adicionar ao carrinho";
        divSneaker.appendChild(divAddCart);
    }

    let pVerMais = document.createElement("p");
    pVerMais.classList.add("pVerMais");
    pVerMais.innerText = "Ver mais";
    divSneakers.appendChild(pVerMais);

    let divClothes = document.createElement("div");
    divClothes.classList.add("divTypeProd");
    divProducts.appendChild(divClothes);

    let pCloth = document.createElement("p");
    pCloth.classList.add("titleProds");
    pCloth.innerText = "Clothes";
    divClothes.appendChild(pCloth);

    let divProdsClt = document.createElement("div");
    divProdsClt.classList.add("divProdsCate");
    divClothes.appendChild(divProdsClt);

    for(let i = 0; i < jsonClt.length; i++){
        let divCloth = document.createElement("div");
        divCloth.classList.add("divProd");
        divProdsClt.appendChild(divCloth);

        let img = document.createElement("img");
        img.classList.add("imgProd");
        img.src = jsonClt[i].img;
        divCloth.appendChild(img);

        let pTitle = document.createElement("p");
        pTitle.innerText = jsonClt[i].name;
        pTitle.classList.add("pTitleProd");
        divCloth.appendChild(pTitle);

        let pPrice = document.createElement("p");
        pPrice.innerText = "R$ " + jsonClt[i].price;
        pPrice.classList.add("pPriceProd");
        divCloth.appendChild(pPrice);

        let divTams = document.createElement("div");
        divTams.classList.add("divTams");
        divCloth.appendChild(divTams);

        for(let j in jsonClt[i].tam){
            let divTam = document.createElement("div");
            divTam.classList.add("divTam");
            divTam.innerText = jsonClt[i].tam[j];
            divTams.appendChild(divTam);
        }

        let divAddCart = document.createElement("div");
        divAddCart.classList.add("divAddProd");
        divAddCart.innerText = "Adicionar ao carrinho";
        divCloth.appendChild(divAddCart);
    }

    let pVerMaisClothes = document.createElement("p");
    pVerMaisClothes.classList.add("pVerMais");
    pVerMaisClothes.innerText = "Ver mais";
    divClothes.appendChild(pVerMaisClothes);

    let divJkts = document.createElement("div");
    divJkts.classList.add("divTypeProd");
    divProducts.appendChild(divJkts);

    let pJkt = document.createElement("p");
    pJkt.classList.add("titleProds");
    pJkt.innerText = "Jackets";
    divJkts.appendChild(pJkt);

    let divProdsJkt = document.createElement("div");
    divProdsJkt.classList.add("divProdsCate");
    divJkts.appendChild(divProdsJkt);

    for(let i = 0; i < jsonJkt.length; i++){
        let divJkt = document.createElement("div");
        divJkt.classList.add("divProd");
        divProdsJkt.appendChild(divJkt);

        let img = document.createElement("img");
        img.classList.add("imgProd");
        img.src = jsonJkt[i].img;
        divJkt.appendChild(img);

        let pTitle = document.createElement("p");
        pTitle.innerText = jsonJkt[i].name;
        pTitle.classList.add("pTitleProd");
        divJkt.appendChild(pTitle);

        let pPrice = document.createElement("p");
        pPrice.innerText = "R$ " + jsonJkt[i].price;
        pPrice.classList.add("pPriceProd");
        divJkt.appendChild(pPrice);

        let divTams = document.createElement("div");
        divTams.classList.add("divTams");
        divJkt.appendChild(divTams);

        for(let j in jsonJkt[i].tam){
            let divTam = document.createElement("div");
            divTam.classList.add("divTam");
            divTam.innerText = jsonJkt[i].tam[j];
            divTams.appendChild(divTam);
        }

        let divAddCart = document.createElement("div");
        divAddCart.classList.add("divAddProd");
        divAddCart.innerText = "Adicionar ao carrinho";
        divJkt.appendChild(divAddCart);
    }

    let pVerMaisJkt = document.createElement("p");
    pVerMaisJkt.classList.add("pVerMais");
    pVerMaisJkt.innerText = "Ver mais";
    divJkts.appendChild(pVerMaisJkt);

    let footer = document.createElement("footer");
    footer.classList.add("footer");
    mainContainer.appendChild(footer);

    let divMap = document.createElement("div");
    divMap.classList.add("divMap");
    footer.appendChild(divMap);

    let map = document.createElement("iframe");
    map.classList.add("map");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5933462228386!2d-47.03062732382715!3d-22.891475779265882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf35a258f845%3A0x3d9e25cf5971b76b!2sThe%20Game%20Collective!5e0!3m2!1spt-BR!2sbr!4v1712583850787!5m2!1spt-BR!2sbr"
    divMap.appendChild(map);

    let video = document.createElement("iframe");
    video.classList.add("video");
    video.src = "https://www.youtube.com/embed/6oRDzFMfKVk?si=fL3XhDyFydeoulnm";
    divMap.appendChild(video);

    let divBottom = document.createElement("div");
    divBottom.classList.add("divBottomFooter");
    footer.appendChild(divBottom);

    let pFlex = document.createElement("p");
    pFlex.innerText = "Flex";
    pFlex.classList.add("pFlexFooter");
    divBottom.appendChild(pFlex);

    let divIcons = document.createElement("div");
    divIcons.classList.add("divIcons");
    divBottom.appendChild(divIcons);

    let aInsta = document.createElement("a");
    aInsta.href = "https://www.instagram.com/";
    aInsta.target = "_blank";
    aInsta.classList.add("aInsta");
    divIcons.appendChild(aInsta);

    let iInsta = document.createElement("i");
    iInsta.classList.add("bi", "bi-instagram", "iSocial");
    aInsta.appendChild(iInsta);

    let iWhats = document.createElement("i");
    iWhats.classList.add("bi", "bi-whatsapp", "iSocial");
    divIcons.appendChild(iWhats);

    let iTiktok = document.createElement("i");
    iTiktok.classList.add("bi", "bi-tiktok", "iSocial");
    divIcons.appendChild(iTiktok);

}

createMainPage();

function openCart() {
    let divCart = document.createElement("div");
    divCart.classList.add("divCart");
    document.getElementById("mainContainer").appendChild(divCart);

    let header = document.createElement("header");
    divCart.appendChild(header);

    let pCart = document.createElement("p");
    pCart.innerText = "Carrinho";
    pCart.classList.add("pCart");
    header.appendChild(pCart);

    let iconX = document.createElement("i");
    iconX.classList.add("bi", "bi-x", "iconX");
    header.appendChild(iconX);
    iconX.addEventListener("click", function(){
        if(divCart){
            divCart.remove();
        }
    });
}

function desafios(){
    const mainContainer = document.getElementById("mainContainer");
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
    let nav = document.createElement("nav");
    nav.classList.add("nav");
    mainContainer.appendChild(nav);

    let titleNav = document.createElement("p");
    titleNav.innerText = "Flex";
    titleNav.classList.add("titleNav");
    nav.appendChild(titleNav);
    titleNav.addEventListener("click", createMainPage);

    let divAncor = document.createElement("div");
    divAncor.classList.add("divAncor");
    nav.appendChild(divAncor);

    let aSneakers = document.createElement("a");
    aSneakers.classList.add("aNav");
    aSneakers.href = "emDesenvolvimento.html";
    aSneakers.target = "_blank";
    aSneakers.innerText = "Sneakers";
    divAncor.appendChild(aSneakers);

    let aClothes = document.createElement("a");
    aClothes.classList.add("aNav");
    aClothes.innerText = "Clothes";
    divAncor.appendChild(aClothes);

    let aJackets = document.createElement("a");
    aJackets.classList.add("aNav");
    aJackets.innerText = "Jackets";
    divAncor.appendChild(aJackets);

    let aDesafios = document.createElement("a");
    aDesafios.classList.add("aNav");
    aDesafios.innerText = "Cores";
    divAncor.appendChild(aDesafios);
    aDesafios.addEventListener("click", desafios);

    let aGaleria = document.createElement("a");
    aGaleria.classList.add("aNav");
    aGaleria.innerText = "Galeria";
    divAncor.appendChild(aGaleria);
    aGaleria.addEventListener("click", galeria);

    let iCart = document.createElement("i");
    iCart.classList.add("bi", "bi-bag", "iNav");
    nav.appendChild(iCart);
    iCart.addEventListener("click", openCart);

    let jsonCores = [
        {
            color: "vermelho",
            background: "red",
            textColor: "#FFF" 
        },
        {
            color: "azul",
            background: "blue",
            textColor: "#000" 
        },
        {
            color: "branco",
            background: "white",
            textColor: "#000" 
        },
        {
            color: "verde",
            background: "green",
            textColor: "#FFF" 
        },
        {
            color: "preto",
            background: "#000",
            textColor: "#FFF" 
        },
        {
            color: "rosa",
            background: "pink",
            textColor: "#FFF" 
        }
    ];

    let divBtns = document.createElement("div");
    divBtns.classList.add("divBtns");
    mainContainer.appendChild(divBtns);

    for(let i = 0; i < jsonCores.length; i++){
        let btn = document.createElement("button");
        btn.innerText = jsonCores[i].color;
        btn.style.backgroundColor = jsonCores[i].background;
        btn.classList.add("btnColor");
        btn.style.color = jsonCores[i].textColor;
        divBtns.appendChild(btn);
        btn.addEventListener("click", changeColor.bind(jsonCores[i]));
    }

    function changeColor(){
        console.log("i", this)
        mainContainer.style.backgroundColor = this.background;
        mainContainer.style.color = this.textColor;
    }

    let btnPerso = document.createElement("btn");
    btnPerso.classList.add("btnColor");
    btnPerso.innerText = "Personalizar";
    btnPerso.style.backgroundColor = "#000";
    btnPerso.style.color = "#FFF";
    divBtns.appendChild(btnPerso);
    btnPerso.addEventListener("click", personalizar);

    function personalizar(){
        const persoExist = document.querySelector(".divPerso");
        if(persoExist){
            persoExist.remove();
        }

        let divPerso = document.createElement("div");
        divPerso.classList.add("divPerso");
        mainContainer.appendChild(divPerso);

        let divBtnsPerso = document.createElement("div");
        divBtnsPerso.classList.add("divBtnsPerso");
        divPerso.appendChild(divBtnsPerso);

        let rgb = document.createElement("button");
        rgb.classList.add("btnPerso");
        rgb.innerText = "RGB";
        divBtnsPerso.appendChild(rgb);
        rgb.addEventListener("click", openRgb);

        let hex = document.createElement("button");
        hex.classList.add("btnPerso");
        hex.innerText = "HEX";
        divBtnsPerso.appendChild(hex);
        hex.addEventListener("click", openHex);

        let hsl = document.createElement("button");
        hsl.classList.add("btnPerso");
        hsl.innerText = "HSL";
        divBtnsPerso.appendChild(hsl);
        hsl.addEventListener("click", openHsl);

        let divColorPick = document.createElement("div");
        divColorPick.classList.add("divColorPick");
        divPerso.appendChild(divColorPick);

        function openRgb(){
            while(divColorPick.firstChild){
                divColorPick.removeChild(divColorPick.firstChild);
            }

            let title = document.createElement("p");
            title.innerText = "Rgb Color Picker";
            divColorPick.appendChild(title);

            let divRgb = document.createElement("div");
            divRgb.classList.add("divShowResult");
            divColorPick.appendChild(divRgb);

            let pRgb = document.createElement("p");
            pRgb.innerText = "Rgb(0,0,0)";
            divRgb.appendChild(pRgb);

            let divSliders = document.createElement("div");
            divSliders.classList.add("divSliders");
            divColorPick.appendChild(divSliders);

            let divRed = document.createElement("div");
            divRed.classList.add("divPick");
            divSliders.appendChild(divRed);

            let labelRed = document.createElement("label");
            labelRed.innerText = "Red";
            labelRed.setAttribute("for", "red");
            divRed.appendChild(labelRed);

            let inputRed = document.createElement("input");
            inputRed.type = "range";
            inputRed.id = "red";
            inputRed.name = "red";
            inputRed.min = "0";
            inputRed.max = "255";
            inputRed.value = "0";
            divRed.appendChild(inputRed);
            inputRed.addEventListener("input", function(){
                pShowRed.innerText = inputRed.value;
                updateColor();
            });

            var pShowRed = document.createElement("p");
            pShowRed.innerText = "0";
            divRed.appendChild(pShowRed);
            
            let divGreen = document.createElement("div");
            divGreen.classList.add("divPick");
            divSliders.appendChild(divGreen);

            let labelGreen = document.createElement("label");
            labelGreen.innerText = "Green";
            labelGreen.setAttribute("for", "green");
            divGreen.appendChild(labelGreen);

            let inputGreen = document.createElement("input");
            inputGreen.type = "range";
            inputGreen.id = "green";
            inputGreen.name = "green";
            inputGreen.min = "0";
            inputGreen.max = "255";
            inputGreen.value = "0";
            divGreen.appendChild(inputGreen);
            inputGreen.addEventListener("input", function(){
                pShowGreen.innerText = inputGreen.value;
                updateColor();
            });

            var pShowGreen = document.createElement("p");
            pShowGreen.innerText = "0";
            divGreen.appendChild(pShowGreen);

            let divYellow = document.createElement("div");
            divYellow.classList.add("divPick");
            divSliders.appendChild(divYellow);

            let labelYellow = document.createElement("label");
            labelYellow.innerText = "Yellow";
            labelYellow.setAttribute("for", "Yellow");
            divYellow.appendChild(labelYellow);

            let inputYellow = document.createElement("input");
            inputYellow.type = "range";
            inputYellow.id = "yellow";
            inputYellow.name = "yellow";
            inputYellow.min = "0";
            inputYellow.max = "255";
            inputYellow.value = "0";
            divYellow.appendChild(inputYellow);
            inputYellow.addEventListener("input", function(){
                pShowYellow.innerText = inputYellow.value;
                updateColor();
            });

            var pShowYellow = document.createElement("p");
            pShowYellow.innerText = "0";
            divYellow.appendChild(pShowYellow);

            let rgbColor = 0;

            function updateColor(){
                const red = inputRed.value;
                const green = inputGreen.value;
                const yellow = inputYellow.value;
                rgbColor = `rgb(${red}, ${green}, ${yellow})`

                divRgb.style.backgroundColor = rgbColor;
                pRgb.innerText = rgbColor;

            }

            let btnApply = document.createElement("button");
            btnApply.innerText = "Apply";
            btnApply.classList.add("btnApply");
            divColorPick.appendChild(btnApply);
            btnApply.addEventListener("click", function(){
                mainContainer.style.backgroundColor = rgbColor;
            });

        }

        function openHex(){
            while(divColorPick.firstChild){
                divColorPick.removeChild(divColorPick.firstChild);
            }

            let title = document.createElement("p");
            title.innerText = "HEX Color Picker";
            divColorPick.appendChild(title);

            let divHex = document.createElement("div");
            divHex.classList.add("divShowResult");
            divColorPick.appendChild(divHex);

            let pHex = document.createElement("p");
            pHex.innerText = "#FFFFFF";
            divHex.appendChild(pHex);

            let divSliders = document.createElement("div");
            divSliders.classList.add("divSliders");
            divColorPick.appendChild(divSliders);

            let divRed = document.createElement("div");
            divRed.classList.add("divPick");
            divSliders.appendChild(divRed);

            let labelRed = document.createElement("label");
            labelRed.innerText = "Red";
            labelRed.setAttribute("for", "red");
            divRed.appendChild(labelRed);

            let inputRed = document.createElement("input");
            inputRed.type = "range";
            inputRed.id = "red";
            inputRed.name = "red";
            inputRed.min = "0";
            inputRed.max = "255";
            inputRed.value = "0";
            divRed.appendChild(inputRed);
            inputRed.addEventListener("input", function(){
                pShowRed.innerText = inputRed.value;
                updateColor();
            });

            var pShowRed = document.createElement("p");
            pShowRed.innerText = "0";
            divRed.appendChild(pShowRed);
            
            let divGreen = document.createElement("div");
            divGreen.classList.add("divPick");
            divSliders.appendChild(divGreen);

            let labelGreen = document.createElement("label");
            labelGreen.innerText = "Green";
            labelGreen.setAttribute("for", "green");
            divGreen.appendChild(labelGreen);

            let inputGreen = document.createElement("input");
            inputGreen.type = "range";
            inputGreen.id = "green";
            inputGreen.name = "green";
            inputGreen.min = "0";
            inputGreen.max = "255";
            inputGreen.value = "0";
            divGreen.appendChild(inputGreen);
            inputGreen.addEventListener("input", function(){
                pShowGreen.innerText = inputGreen.value;
                updateColor();
            });

            var pShowGreen = document.createElement("p");
            pShowGreen.innerText = "0";
            divGreen.appendChild(pShowGreen);

            let divYellow = document.createElement("div");
            divYellow.classList.add("divPick");
            divSliders.appendChild(divYellow);

            let labelYellow = document.createElement("label");
            labelYellow.innerText = "Yellow";
            labelYellow.setAttribute("for", "Yellow");
            divYellow.appendChild(labelYellow);

            let inputYellow = document.createElement("input");
            inputYellow.type = "range";
            inputYellow.id = "yellow";
            inputYellow.name = "yellow";
            inputYellow.min = "0";
            inputYellow.max = "255";
            inputYellow.value = "0";
            divYellow.appendChild(inputYellow);
            inputYellow.addEventListener("input", function(){
                pShowYellow.innerText = inputYellow.value;
                updateColor();
            });

            var pShowYellow = document.createElement("p");
            pShowYellow.innerText = "0";
            divYellow.appendChild(pShowYellow);

            let hexColor;
            
            function componentToHex(c) {
                const hex = c.toString(16);
                return hex.length == 1 ? "0" + hex : hex;
            }
            
            function rgbToHex(r, g, b) {
                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            }

            function updateColor(){
                const red = parseInt(inputRed.value);
                const green = parseInt(inputGreen.value);
                const yellow = parseInt(inputYellow.value);
                hexColor = rgbToHex(red, green, yellow);

                divHex.style.backgroundColor = hexColor;
                pHex.innerText = hexColor;

            }

            let btnApply = document.createElement("button");
            btnApply.innerText = "Apply";
            btnApply.classList.add("btnApply");
            divColorPick.appendChild(btnApply);
            btnApply.addEventListener("click", function(){
                mainContainer.style.backgroundColor = hexColor;
            });
        }

        function openHsl(){
            while(divColorPick.firstChild){
                divColorPick.removeChild(divColorPick.firstChild);
            }

            let title = document.createElement("p");
            title.innerText = "Rgb Color Picker";
            divColorPick.appendChild(title);

            let divHsl = document.createElement("div");
            divHsl.classList.add("divShowResult");
            divColorPick.appendChild(divHsl);

            let pHsl = document.createElement("p");
            pHsl.innerText = "Rgb(0,0,0)";
            divHsl.appendChild(pHsl);

            let divSliders = document.createElement("div");
            divSliders.classList.add("divSliders");
            divColorPick.appendChild(divSliders);

            let divHue = document.createElement("div");
            divHue.classList.add("divPick");
            divSliders.appendChild(divHue);

            let labelHue = document.createElement("label");
            labelHue.innerText = "Hue";
            labelHue.setAttribute("for", "Hue");
            divHue.appendChild(labelHue);

            let inputHue = document.createElement("input");
            inputHue.type = "range";
            inputHue.id = "hue";
            inputHue.name = "hue";
            inputHue.min = "0";
            inputHue.max = "360";
            inputHue.value = "0";
            divHue.appendChild(inputHue);
            inputHue.addEventListener("input", function(){
                pShowHue.innerText = inputHue.value;
                updateColor();
            });

            var pShowHue = document.createElement("p");
            pShowHue.innerText = "0";
            divHue.appendChild(pShowHue);
            
            let divSatu = document.createElement("div");
            divSatu.classList.add("divPick");
            divSliders.appendChild(divSatu);

            let labelSatu = document.createElement("label");
            labelSatu.innerText = "Saturation";
            labelSatu.setAttribute("for", "saturation");
            divSatu.appendChild(labelSatu);

            let inputSatu = document.createElement("input");
            inputSatu.type = "range";
            inputSatu.id = "saturation";
            inputSatu.name = "saturation";
            inputSatu.min = "0";
            inputSatu.max = "100";
            inputSatu.value = "100";
            divSatu.appendChild(inputSatu);
            inputSatu.addEventListener("input", function(){
                pShowSatu.innerText = inputSatu.value;
                updateColor();
            });

            var pShowSatu = document.createElement("p");
            pShowSatu.innerText = "100";
            divSatu.appendChild(pShowSatu);

            let divLight = document.createElement("div");
            divLight.classList.add("divPick");
            divSliders.appendChild(divLight);

            let labelLight = document.createElement("label");
            labelLight.innerText = "Lightness";
            labelLight.setAttribute("for", "light");
            divLight.appendChild(labelLight);

            let inputLight = document.createElement("input");
            inputLight.type = "range";
            inputLight.id = "light";
            inputLight.name = "light";
            inputLight.min = "0";
            inputLight.max = "100";
            inputLight.value = "50";
            divLight.appendChild(inputLight);
            inputLight.addEventListener("input", function(){
                pShowLight.innerText = inputLight.value;
                updateColor();
            });

            var pShowLight = document.createElement("p");
            pShowLight.innerText = "50";
            divLight.appendChild(pShowLight);

            let hslColor;

            function updateColor(){
                const hue = inputHue.value;
                const saturation = inputSatu.value;
                const lightness = inputLight.value;
                hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`

                divHsl.style.backgroundColor = hslColor;
                pHsl.innerText = hslColor;

            }

            let btnApply = document.createElement("button");
            btnApply.innerText = "Apply";
            btnApply.classList.add("btnApply");
            divColorPick.appendChild(btnApply);
            btnApply.addEventListener("click", function(){
                mainContainer.style.backgroundColor = hslColor;
            });
        }
    }

}

function galeria(){
    const mainContainer = document.getElementById("mainContainer");
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }

    let nav = document.createElement("nav");
    nav.classList.add("nav");
    mainContainer.appendChild(nav);

    let titleNav = document.createElement("p");
    titleNav.innerText = "Flex";
    titleNav.classList.add("titleNav");
    nav.appendChild(titleNav);
    titleNav.addEventListener("click", createMainPage);

    let divAncor = document.createElement("div");
    divAncor.classList.add("divAncor");
    nav.appendChild(divAncor);

    let aSneakers = document.createElement("a");
    aSneakers.classList.add("aNav");
    aSneakers.href = "emDesenvolvimento.html";
    aSneakers.target = "_blank";
    aSneakers.innerText = "Sneakers";
    divAncor.appendChild(aSneakers);

    let aClothes = document.createElement("a");
    aClothes.classList.add("aNav");
    aClothes.innerText = "Clothes";
    divAncor.appendChild(aClothes);

    let aJackets = document.createElement("a");
    aJackets.classList.add("aNav");
    aJackets.innerText = "Jackets";
    divAncor.appendChild(aJackets);

    let aDesafios = document.createElement("a");
    aDesafios.classList.add("aNav");
    aDesafios.innerText = "Cores";
    divAncor.appendChild(aDesafios);
    aDesafios.addEventListener("click", desafios);

    let aGaleria = document.createElement("a");
    aGaleria.classList.add("aNav");
    aGaleria.innerText = "Galeria";
    divAncor.appendChild(aGaleria);
    aGaleria.addEventListener("click", galeria);

    let iCart = document.createElement("i");
    iCart.classList.add("bi", "bi-bag", "iNav");
    nav.appendChild(iCart);
    iCart.addEventListener("click", openCart);

    let divGaleria = document.createElement("div");
    divGaleria.classList.add("divGaleria");
    mainContainer.appendChild(divGaleria);

    let iArrowLeft = document.createElement("i");
    iArrowLeft.classList.add("bi", "bi-chevron-left", "arrow");
    divGaleria.appendChild(iArrowLeft);

    let divImgs = document.createElement("div");
    divImgs.classList.add("imagesGaleria");
    divImgs.id = "imagesGaleria";
    divGaleria.appendChild(divImgs);

    let iArrowRight = document.createElement("i");
    iArrowRight.classList.add("bi", "bi-chevron-right", "arrow");
    divGaleria.appendChild(iArrowRight);

    const images = [
        { src: './img/jordanJkt.webp', desc: 'Jaqueta Jordan Jumpman' },
        { src: './img/lamelo.webp', desc: 'Puma MB.01 LaMelo Red Blast' },
        { src: './img/lebron.webp', desc: 'Nike Lebron 21 Aragonite' },
        { src: './img/lvCamisa.webp', desc: 'Camiseta em Degradé Monogram LVSE' },
        { src: './img/noctaJkt.webp', desc: 'Jaqueta Nocta' },
        { src: './img/nikeJkt.webp', desc: 'Supreme x Nike Jaqueta Pullover' },
        { src: './img/pietXoakley.webp', desc: 'Oakley x Piet Camiseta' },
        { src: './img/sufgang.webp', desc: 'Camiseta Sufgang Basic 5.4 Azul' },
        { src: './img/tnfJkt.webp', desc: 'The North Face x Supreme Jaqueta' },
        { src: './img/noctaHotStep.webp', desc: 'NOCTA x Nike Hot Step 2' }
    ];

    let currentIndex = 0;

    function renderImages() {
        divImgs.innerHTML = '';
        for (let i = 0; i < 4; i++) {
            const imgIndex = (currentIndex + i) % images.length;
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');
            if (i === 1 || i === 2) {
                imageContainer.classList.add('center');
            }
            imageContainer.innerHTML = `
                <img src="${images[imgIndex].src}" alt="Image ${imgIndex + 1}">
                <div class="description">${images[imgIndex].desc}</div>
            `;
            divImgs.appendChild(imageContainer);
            imageContainer.addEventListener('click', () => shiftImages(i < 2 ? -1 : 1));
        }
    }

    function shiftImages(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        renderImages();
    }
    
    iArrowLeft.addEventListener('click', () => shiftImages(-1));
    iArrowRight.addEventListener('click', () => shiftImages(1));
    
    renderImages();
}