// @types/gsap => types packages give you autocompletion for almost ALL famous libraries


console.log("JAAAAA! Anim.js ist daaa!")

// initial state (= where we come FROM)
gsap.from("h1 > span", 
{
  duration: 2,
  y: -200,
  opacity: 0,
  rotateY: 90,
  ease: Bounce.easeOut,
  stagger: { 
    each: 0.3,
    from: "end"
  }
})
// go next To THIS STATE below
gsap.to("h1 > span", 
{
  delay: 5, // start this thingy HERE after 2 seconds (when first one finished)
  duration: 1.5,
  scale: 50,
  opacity: 0,
  stagger: { 
    each: 0.1,
    from: "random"
  },
  ease: Power4.easeIn
})

