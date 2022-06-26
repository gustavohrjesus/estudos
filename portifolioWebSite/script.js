$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){//class sticky esta no css - 
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }

        if(this.scrollY > 500){ //class show esta no css - botao voltar ao topo
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })

    // funcao do botao voltar ao topo
    $('.scroll-up-btn').click(function(){
        $('html').animate({ scrollTop: 0 })
    })

    // funcao typed - EFEITO DE DIGITACAO DINAMICA - 
    var typed = new Typed(".typing", {
        strings: ["Youtuber","Desenvolvedor","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    var typed = new Typed(".typing-2", {
        strings: ["Youtuber","Desenvolvedor","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    // a funcao abaixo eh usada para o clique do menu hamburg, para esconder ou mostrar o menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin: 20, // espaco entre um card e outro
        loop: true, // permite ir do ultimo para o primeiro card
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive:{
            0:{ // menor que 600px, um card por vez no carousel
                items:1,
                nav:false
            },
            600:{  // entre 600px e 999px, dois cards por vez no carousel
                items:2,
                nav:false
            },
            1000:{  // >= 1000px, três cards por vez no carousel
                items:3,
                nav:false
            }
        }
    })
})