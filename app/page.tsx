"use client"
import React, { useRef, useState } from "react";
import Link from "next/link";

const AppPage = () => {
    const [isToggled, setIsToggled] = useState(false);
    
    return <>
        <header>
            <nav className="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
                        <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                            <Link href={"/"} aria-label="logo" className="flex items-center space-x-2">
                                <div aria-hidden="true" className="flex space-x-1">
                                    <img className="w-28 block dark:hidden" src="/logo-black.png" />
                                    <img className="w-28 hidden dark:block" src="/logo.png" />
                                </div>
                            </Link>

                            <div className="relative flex max-h-10 items-center lg:hidden">
                                <button aria-label="humburger" id="hamburger" className={`relative -mr-6 p-6 ${isToggled && "toggled"}`} onClick={() => {
                                    setIsToggled(!isToggled)
                                }}>
                                    <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                                    <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"></div>
                                </button>
                            </div>
                        </div>
                        <div id="navLayer" aria-hidden="true" className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden 
                            ${isToggled && "origin-top scale-y-100"}    
                        `}></div>
                        <div id="navlinks" className={`invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none 
                            ${isToggled && "!visible !scale-100 !opacity-100 !lg:translate-y-0"}
                        `}>
                            <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                                    
                                </ul>
                            </div>

                            <div className="mt-12 lg:mt-0">
                                <Link href={`/live`} className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-red-500 hover:before:bg-red-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                    <span className="relative text-sm font-semibold text-white flex gap-2 items-center justify-between">
                                        En vivo ahora <img src="/live-white.png" className="w-6 inline" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className="relative" id="home">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                            ¡Vive cada partido en tiempo real! ⚽️
                        </h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">
                            Descubre las emociones del fútbol local con nuestras transmisiones en vivo. Cada jugada, cada gol y cada emoción, en un solo lugar.
                        </p>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">
                            En Futcenter, organizamos las mejores ligas de fútbol local y te traemos la emoción directamente a tu pantalla. Con nuestra plataforma de transmisión en vivo, no te perderás ningún momento crucial de los partidos.
                        </p>
                        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">¡Vive el Fútbol en Vivo!</h6>
                                <p className="mt-2 text-gray-500">Disfruta de cada partido, cada gol y cada emoción en tiempo real. Futcenter te lleva al campo desde cualquier lugar.</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the market</h6>
                                <p className="mt-2 text-gray-500">Accede a las mejores ligas locales, estadísticas en vivo y transmisiones exclusivas, ¡no te pierdas ni un segundo del juego!</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">La Pasión del Fútbol, al Alcance de tu Pantalla</h6>
                                <p className="mt-2 text-gray-500">Siente la emoción de cada jugada y acompaña a tu equipo favorito en cada partido, estés donde estés.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default AppPage;