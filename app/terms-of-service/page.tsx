import React from "react";
import { Logo } from "../(auth)/_components/logo";
import Image from "next/image";
import Link from "next/link";
const TermsOfService = () => {
    return <>
        <div>
            <div className="container mx-auto px-4 py-8">
                <div className="mb-7 w-full flex items-center justify-center">
                    <Link href="/">
                        <Image
                            src="/logo-white.png"
                            alt="Futcenter"
                            height="180"
                            width="180"
                        /> 
                    </Link>
                </div>
                <div className="w-full">
                    <h1 className="text-3xl font-bold mb-4 flex items-center">
                        <span>Términos y Condiciones del Servicio</span> 
                    </h1>
                </div>
                <br />
                <p className="mb-4 text-base">
                    Estos Términos y Condiciones regulan el uso de la plataforma Futcenter. Al registrarse o utilizar nuestro servicio, usted acepta cumplir estos términos.
                </p>
                <div className="p-5">
                    <ul className="list-decimal">
                        <li>
                            <p className="text-xl font-bold">
                                Uso de la Plataforma
                            </p>
                            <ul className="list-disc ml-2">
                                <li>
                                    Futcenter proporciona acceso a transmisiones de video en vivo y contenido relacionado con ligas de fútbol local.
                                </li>
                                <li>
                                    El uso de la plataforma es solo para fines personales y no comerciales
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                                Registro de Cuenta
                            </p>
                            <ul className="list-disc ml-2">
                                <li>
                                    Para acceder a ciertas funciones, deberá crear una cuenta con información precisa y actualizada.
                                </li>
                                <li>
                                    Usted es responsable de mantener la confidencialidad de su cuenta y contraseña.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Derechos de Propiedad Intelectual
                            </p>
                            <ul className="list-disc ml-2">
                                <li>
                                Todo el contenido de Futcenter, incluyendo transmisiones, imágenes y textos, está protegido por derechos de propiedad intelectual. No está permitido copiar, distribuir o modificar el contenido sin autorización.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Limitación de Responsabilidad
                            </p>
                            <ul className="list-disc ml-2">
                                <li>
                                Futcenter no garantiza que la plataforma esté libre de errores o interrupciones. No nos hacemos responsables por daños derivados del uso de la plataforma, a menos que la ley indique lo contrario.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Cancelación y Terminación
                            </p>
                            <ul className="list-disc ml-2">
                                <li>Futcenter se reserva el derecho de suspender o cancelar cuentas por incumplimiento de estos Términos y Condiciones.</li>
                                <li>
                                Puede cancelar su suscripción en cualquier momento desde la configuración de su cuenta.</li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Cambios en los Términos del Servicio
                            </p>
                            <p className="ml-2">
                            Nos reservamos el derecho a modificar estos Términos y Condiciones en cualquier momento. Se le notificará sobre los cambios significativos y se publicarán los términos actualizados en nuestro sitio web.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Contacto
                            </p>
                            <p className="ml-2">
                            Si tiene alguna duda sobre estos Términos y Condiciones, puede contactarnos en: <a href="mailto:correo@futcenter.com" className="text-blue-500">correo@futcenter.com</a>.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default TermsOfService;