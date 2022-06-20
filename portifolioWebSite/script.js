$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){//class sticky esta no css
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }

        // if(this.scrollY > 500){
        //     $('.scroll-up-btn').addClass("show");
        // }else{
        //     $('.scroll-up-btn').removeClass("show");
        // }
    })

    // a funcao abaixo eh usada para o clique do menu hamburg, para esconder ou mostrar o menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
})