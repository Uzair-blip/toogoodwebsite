// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
function videonconanimation(){
    var videoncon=document.querySelector("#videocontainer")
    var playbtn=document.querySelector("#play")
    videoncon.addEventListener("mouseenter",function() {
       gsap.to(playbtn,{
    opacity:1,
    scale:1
       })
    
    })
    videoncon.addEventListener("mouseleave",function() {
       gsap.to(playbtn,{
    opacity:0,

    scale:0
       })
    
    })
    videoncon.addEventListener("mousemove",function(dets) {
       gsap.to(playbtn,{
    left:dets.x+"px",
    top:dets.y+"px"
    
       })
    
    })
}
function loadinganimation() {

gsap.from("#page1 h1",{
y:100,
opacity:0,
delay:0.8,
stagger:0.3
})

gsap.from("#videocontainer",{
scale:.7,
opacity:0,
delay:1,
duration:.4
})


}
function cursoranimation(){
    
    
    document.addEventListener("mousemove",function (dets) {
        gsap.to("#cursor",{
            left:dets.x,
        top:dets.y
               })
    })
    
    //  i am comenting this because this is applying on the single child and i want ii to apply it on all childs i
    // document.querySelector("#child1").addEventListener("mouseenter",function () {
        //     gsap.to("#cursor",{
            //         transform: `translate(-50%,-50%)scale(1)`
            
            
            //            })
            // })
            // document.querySelector("#child1").addEventListener("mouseleave",function () {
                //     gsap.to("#cursor",{
    //         transform: `translate(-50%,-50%)scale(0)`
    
    
    //            })
    // })
    
    
    // so for that we use forEach
    document.querySelectorAll(".child").forEach(function(elem) {
        elem.addEventListener("mouseenter",function () {
                gsap.to("#cursor",{
                    transform: `translate(-50%,-50%)scale(1)`    
                       })
    })
        elem.addEventListener("mouseleave",function () {
                gsap.to("#cursor",{
                    transform: `translate(-50%,-50%)scale(0)`    
                       })
    })
    
    
    }
    )

}
        cursoranimation()
        loadinganimation()
        videonconanimation()


        