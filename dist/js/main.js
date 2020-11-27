$(document).ready(function(){
    $(".menu-btn").click(function(){
        $(".menu").slideToggle(1000); 
    })
})
function myfunction(x){
    x.classList.toggle("fa-times");
}