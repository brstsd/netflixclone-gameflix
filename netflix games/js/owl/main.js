$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{ //resposividade: quando a tela se adapta ao tamanho do dispositivo
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function redirecionar(){
    window.open("https://store.playstation.com/pt-br/product/UP9000-CUSA07820_00-THELASTOFUSPART2");
}

function informacao(){
    window.open("https://www.techtudo.com.br/noticias/2021/01/the-last-of-us-2-jogo-de-2020-e-o-mais-premiado-da-historia.ghtml");
}