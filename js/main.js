$(document).ready(function(){
    $(".menu-btn").click(function(){
        $(".menu").slideToggle(); 
    })
})
function myfunction(x){
    x.classList.toggle("fa-times");
}