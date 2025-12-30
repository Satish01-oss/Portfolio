import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis"
import "./Page2.css"

const Page2 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis()
    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    const cards = document.querySelector(".card-container")
    const sticky = document.querySelector(".sticky-header h1")

    let isGapAnimationCompleted = false
    let isFlipAnimationCompleted = false

    function initAnimations() {
      ScrollTrigger.getAll().forEach((t) => t.kill())

      const mm = gsap.matchMedia()

      mm.add("(max-width: 999px)", () => {
        document
          .querySelectorAll(".card, .card-container, .sticky-header h1")
          .forEach((el) => (el.style = ""))
        return {}
      })

      mm.add("(min-width: 1000px)", () => {
        ScrollTrigger.create({
          trigger: ".sticky",
          start: "top top",
          end: `+=${window.innerHeight * 4}px`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress

            if (progress >= 0.1 && progress <= 0.25) {
              const headerProgress = gsap.utils.mapRange(
                0.1,
                0.25,
                0,
                1,
                progress
              )
              gsap.set(sticky, {
                y: gsap.utils.mapRange(0, 40, 0, headerProgress),
                opacity: headerProgress,
              })
            } else if (progress < 0.1) {
              gsap.set(sticky, { y: 40, opacity: 0 })
            } else {
              gsap.set(sticky, { y: 0, opacity: 1 })
            }

            if (progress <= 0.25) {
              gsap.set(cards, {
                width: `${gsap.utils.mapRange(0, 0.25, 75, 60, progress)}%`,
              })
            } else {
              gsap.set(cards, { width: "60%" })
            }

            if (progress >= 0.35 && !isGapAnimationCompleted) {
              gsap.to(cards, { gap: "20px", duration: 0.5 })
              gsap.to(["#card-1", "#card-2", "#card-3"], {
                borderRadius: "20px",
                duration: 0.5,
              })
              isGapAnimationCompleted = true
            } else if (progress < 0.35 && isGapAnimationCompleted) {
              gsap.to(cards, { gap: "0px", duration: 0.5 })
              gsap.to("#card-1", {
                borderRadius: "20px 0 0 20px",
                duration: 0.5,
              })
              gsap.to("#card-2", { borderRadius: "0px", duration: 0.5 })
              gsap.to("#card-3", {
                borderRadius: "0 20px 20px 0",
                duration: 0.5,
              })
              isGapAnimationCompleted = false
            }

            if (progress >= 0.7 && !isFlipAnimationCompleted) {
              gsap.to(".card", {
                rotationY: 180,
                duration: 0.75,
                stagger: 0.1,
              })
              gsap.to(["#card-1", "#card-3"], {
                y: 30,
                rotationZ: (i) => [-15, 15][i],
                duration: 0.75,
              })
              isFlipAnimationCompleted = true
            } else if (progress < 0.7 && isFlipAnimationCompleted) {
              gsap.to(".card", {
                rotationY: 0,
                duration: 0.75,
                stagger: -0.1,
              })
              gsap.to(["#card-1", "#card-3"], {
                y: 0,
                rotationZ: 0,
                duration: 0.75,
              })
              isFlipAnimationCompleted = false
            }
          },
        })
      })
    }

    initAnimations()

    let resizeTimer
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(initAnimations, 250)
    })
  }, [])

  return (
    <>
      <section className="intro">
        <h1>Every Idea Begins as a single image</h1>
      </section>

      <section className="sticky">
        <div className="sticky-header">
          <h1>Three pillars with one purpose</h1>
        </div>

        <div className="card-container">
          <div className="card" id="card-1">
            <div className="card-front">
              <img src="/card1.png" alt="" />
            </div>
            <div className="card-back">
              <span>( 01 )</span>
              <p>Interactive Web Experiance</p>
            </div>
          </div>

          <div className="card" id="card-2">
            <div className="card-front">
              <img src="/card2.png" alt="" />
            </div>
            <div className="card-back">
              <span>( 02 )</span>
              <p>Thoughtful Design Language</p>
            </div>
          </div>

          <div className="card" id="card-3">
            <div className="card-front">
              <img src="/card3.png" alt="" />
            </div>
            <div className="card-back">
              <span>( 03 )</span>
              <p>Visual Design Systems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="outro">
        <h1>Every transition leaves a trace</h1>
      </section>
    </>
  )
}

export default Page2
