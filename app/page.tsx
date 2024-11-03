"use client"
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { getOnLiveStrams } from "@/lib/stream-service";

const AppPage = () => {
    const [isToggled, setIsToggled] = useState(false);
    
    const { user } = useUser();
    return <>
        <header>
            <nav className="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
                        <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                            <Link href={"/"} aria-label="logo" className="flex items-center space-x-2">
                                <div aria-hidden="true" className="flex space-x-1">
                                    <img className="w-16 sm:w-28 block dark:hidden" src="/logo-black.png" />
                                    <img className="w-16 sm:w-28 hidden dark:block" src="/logo.png" />
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

                            <div className=" lg:mt-0 flex gap-2">
                                <Link href={`/live`} className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-red-500 hover:before:bg-red-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                    <span className="relative text-sm font-semibold text-white flex gap-2 items-center justify-between">
                                        En vivo ahora <img src="/live-white.png" className="w-6 inline" />
                                    </span>
                                </Link>
                                {
                                    !user && <SignInButton>
                                        <Button size="sm" variant="primary">
                                            Login
                                        </Button>
                                    </SignInButton>
                                }
                                {
                                    !!user &&
                                    <UserButton
                                        afterSignOutUrl="/"
                                    />
                                }
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
                        <h1 className="text-gray-900 dark:text-white font-bold text-4xl md:text-6xl xl:text-7xl">
                            ¡Vive cada partido en tiempo real! ⚽️
                        </h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">
                            Descubre las emociones del fútbol local con nuestras transmisiones en vivo. Cada jugada, cada gol y cada emoción, en un solo lugar.
                        </p>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">
                            En Futcenter, organizamos las mejores ligas de fútbol local y te traemos la emoción directamente a tu pantalla. Con nuestra plataforma de transmisión en vivo, no te perderás ningún momento crucial de los partidos.
                        </p>
                    </div>
                    <div className="px-8 text-center mx-auto">
                        <div className="py-8 mt-16 border-y border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-4 justify-between">
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white text-center">¡Vive el Fútbol en Vivo!</h6>
                                <p className="mt-2 text-gray-500 text-center">Disfruta de cada partido, cada gol y cada emoción en tiempo real. Futcenter te lleva al campo desde cualquier lugar.</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white text-center">The fastest on the market</h6>
                                <p className="mt-2 text-gray-500 text-center">Accede a las mejores ligas locales, estadísticas en vivo y transmisiones exclusivas, ¡no te pierdas ni un segundo del juego!</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white text-center">La Pasión del Fútbol, al Alcance de tu Pantalla</h6>
                                <p className="mt-2 text-gray-500 text-center">Siente la emoción de cada jugada y acompaña a tu equipo favorito en cada partido, estés donde estés.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer" className="max-w-7xl mx-auto mt-8 px-6 md:px-12 xl:px-6">
            <footer>
                <div
                    className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300"
                >

                    <ul role="list" className="flex justify-between gap-3">
                        <li>
                            <a href="#" className="flex items-center space-x-3 transition hover:text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-5"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                    />
                                </svg>
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 transition hover:text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-5"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                    />
                                </svg>
                                <span>YouTube</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="flex items-center space-x-3 transition hover:text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-5"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                    />
                                </svg>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 transition hover:text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-5"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                    />
                                </svg>
                                <span>Instagram</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="m-auto mt-16 pb-8 space-y-6 text-center sm:mt-auto sm:text-left">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center py-4">
                        <span className="block text-gray-500 dark:text-gray-400">
                            Pasión por el fútbol en vivo, donde quieras, cuando quieras.
                        </span>

                        <span className="block text-gray-500 dark:text-gray-400">
                            Futcenter &copy; <span>{new Date().getFullYear()}</span>
                        </span>
                    </div>

                    <span className="flex justify-between text-gray-600 dark:text-white">
                        <Link href={`/terms-of-service`} className="font-medium">Terms of Service </Link>
                        <Link href={`/privacy-policy`} className="font-medium"> Privacy Policy</Link>
                    </span>
                </div>
            </footer>
        </div>
    </>
}


export default AppPage;