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

function createMainPage(){
    let mainContainer = document.getElementById("mainContainer");

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

    let iCart = document.createElement("i");
    iCart.classList.add("bi", "bi-bag", "iNav");
    nav.appendChild(iCart);
    iCart.addEventListener("click", openCart);

    let divImg = document.createElement("header");
    divImg.classList.add("divApresent");
    mainContainer.appendChild(divImg);

    let imgBackground = document.createElement("img");
    imgBackground.src = "img/img1.jpg";
    imgBackground.id = 1;
    imgBackground.classList.add("imgApresent");
    divImg.appendChild(imgBackground);

    let divSlideshow = document.createElement("div");
    divSlideshow.classList.add("divSlideshow");
    divImg.appendChild(divSlideshow);

    let iArrowLeft = document.createElement("i");
    iArrowLeft.classList.add("bi", "bi-chevron-left", "iSlideshow", "prev");
    divImg.appendChild(iArrowLeft);
    iArrowLeft.addEventListener("click", prevImg);

    let iArrowRight = document.createElement("i");
    iArrowRight.classList.add("bi", "bi-chevron-right", "iSlideshow", "next");
    divImg.appendChild(iArrowRight);
    iArrowRight.addEventListener("click", nextImg);

    let dot1 = document.createElement("i");
    dot1.classList.add("bi", "bi-dot", "iDot1", "iDots", "activeDot");
    dot1.id = 1;
    divImg.appendChild(dot1);

    let dot2 = document.createElement("i");
    dot2.classList.add("bi", "bi-dot", "iDot2", "iDots");
    dot2.id = 2;
    divImg.appendChild(dot2);

    let dot3 = document.createElement("i");
    dot3.classList.add("bi", "bi-dot", "iDot3", "iDots");
    dot3.id = 3;
    divImg.appendChild(dot3);

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

const images = [
    {img: "img/img1.jpg", id: "1"},
    {img: "img/img2.jpg", id: "2"},
    {img: "img/img3.jpg", id: "3"}
];

function nextImg(){
    let img = document.querySelector(".imgApresent");
    let currentIndex = img.id - 1;
    console.log("iamges", images);

    let dots = document.querySelectorAll(".iDots");
    for(let i = 0; i < dots.length; i++){
        if(dots[i].id == currentIndex + 1){
            console.log("dot", dots[i]);
            let dotAtivo = document.querySelector(".activeDot");
            dotAtivo.classList.remove("activeDot");
            dots[i].classList.add("activeDot");
        }
    }

    if(currentIndex + 1 < images.length){
        img.src = images[currentIndex + 1].img;
        img.id = images[currentIndex + 1].id
    }else{
        currentIndex = 1;
        img.src = images[currentIndex - 1].img;
        img.id = images[currentIndex - 1].id;
    }
}

function prevImg(){
    let img = document.querySelector(".imgApresent");
    let currentIndex = img.id - 1;

    let dots = document.querySelectorAll(".iDots");
    for(let i = 0; i < dots.length; i++){
        if(dots[i].id == currentIndex + 1){
            console.log("dot", dots[i]);
            let dotAtivo = document.querySelector(".activeDot");
            dotAtivo.classList.remove("activeDot");
            dots[i].classList.add("activeDot");
        }
    }

    if(currentIndex - 1 >= 0){
        img.src = images[currentIndex - 1].img;
        img.id = images[currentIndex - 1].id;
    }else{
        currentIndex = 3;
        img.src = images[currentIndex - 1].img;
        img.id = images[currentIndex - 1].id;
    }

}



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

createMainPage();
