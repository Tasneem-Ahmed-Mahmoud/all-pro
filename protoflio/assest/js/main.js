
//////////////////////////////////// filter by category ///////////////////////////////

  const btns=document.querySelectorAll(".product");
const storeProduct=document.querySelectorAll(".product-stor")
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(e){
        e.preventDefault();//not reload page
        const filter=e.target.dataset.filter;
        // console.log(filter)
        storeProduct.forEach((product)=>{
            if(filter=="all"){
                product.style.display="block"
            }else {
               if(product.classList.contains(filter)){
                product.style.display="block"
               }else{
                product.style.display="none"
               }
            }
        })

    })
}
/////////////////navebar///////btns

$(window).scroll(function(){
    let x=$(window).scrollTop()
    // console.log(x)
 let top=  $(".about__header h2 ").offset().top;
//  console.log(top)

 if(x >top -500){
    $(".navbar").addClass("bg-dark navbar-dark");
    $(".btn-up").show(500);

 }else{
    $(".navbar").removeClass("bg-dark")
    $(".btn-up").hide(500);
 }
})


$(".btn-up").click(function () {
  console.log($(window).scrollTop())

  $("html, body").animate({ scrollTop: "0" },3000);
   
  });

////////////////////////////////////////////////////////////////
//   $(".nav-link").click(function () {
//     let sectionSelector = $(this).attr("href"); //#home   #about  #blog
  
//     console.log(sectionSelector);
  
//     let secOffset = $(sectionSelector).offset().top;
  
//     $("html, body").animate(
//       {
//         scrollTop: secOffset,
//       },
//       2000
//     );

//   })
