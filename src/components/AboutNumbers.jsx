import React from 'react'
import { Fade } from "react-awesome-reveal";


function AboutNumbers() {
  return (
    <section className="">
    <div className="px- py- mx-auto max-w-screen-xl sm:py- lg: xl:px-0">
        <div className="mb-4 space-y-4 flex flex-wrap justify-center items-end gap-8 ">
        <Fade triggerOnce={true} duration={1000}>
            <div className="flex justify-center pt-8 items-center p-6 text-center  xl:p-12 rounded-full  ">
                <div className="text-white dark:text-white">
                    <p className="mb-4 text-6xl font-extrabold md:text-7xl">20+</p>
                    <h3 className="mb-2 text-2xl font-semibold">Progetti</h3>
                    <p className="font-light text-white dark:text-gray-400"></p>
                </div>
            </div>
            </Fade>

            <Fade triggerOnce={true} duration={1000} delay={600}>
            <div className="flex justify-center items-center p-6 text-center  rounded-full xl:p-12 dark:bg-gray-800 ">
                <div className="text-white dark:text-white">
                    <p className="mb-4 text-4xl font-extrabold md:text-7xl">100%</p>
                    <h3 className="mb-2 text-2xl font-semibold">Clienti Soddisfatti</h3>
                    <p className="font-light text-white dark:text-gray-400"></p>
                </div>
            </div>
            </Fade>

            <Fade triggerOnce={true} duration={1000} delay={900}>
            <div className="flex justify-center pt-6 items-center p-6 text-center  xl:p-12 dark:bg-gray-800 rounded-full ">
                <div className="text-white dark:text-white">
                    <p className="mb-4 text-4xl font-extrabold md:text-7xl">3</p>
                    <h3 className="mb-2 text-2xl font-semibold">Certificazioni</h3>
                    <p className="font-light text-white dark:text-gray-400"></p>
                </div>
            </div>
            </Fade>
        </div>
    </div>
</section>
  )
}

export default AboutNumbers