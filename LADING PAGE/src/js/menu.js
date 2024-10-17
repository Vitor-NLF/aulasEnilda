$(document).ready(function(){
    $('.mobile-btn').on('click',function(){
        $('.mobile-menu').toggleClass('active');
        $('.mobile-btn').find('i').toggleClass('fa-regular fa-circle-xmark');
    })
})

// window.alert("Olá, esse site ainda está em desenvolvimento!");