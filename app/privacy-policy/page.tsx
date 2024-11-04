import React from "react";
import Image from "next/image";
import Link from "next/link";
const PrivacyPolicy = () => {
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
                        <span>Política de Privacidad</span> 
                    </h1>
                </div>
                <br />
                <p className="mb-4 text-base">
                En Futcenter, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestra plataforma.
                </p>
                <div className="p-5">
                    <ul className="list-decimal">
                        <li>
                            <p className="text-xl font-bold">
                                Información que Recopilamos
                            </p>
                            <ul className="list-disc ml-2">
                                <li>
                                    <b>Información personal</b>: como nombre, correo electrónico, entre otros., recopilada al registrarse o suscribirse.
                                </li>
                                <li>
                                    <b>Información de uso</b>: datos sobre el uso de la plataforma, como páginas vistas, tiempo de reproducción, preferencias de contenido.
                                </li>
                                <li>
                                    <b>Datos técnicos</b>: dirección IP, tipo de dispositivo, sistema operativo y tipo de navegador.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Cómo Usamos su Información
                            </p>
                            <ul className="list-disc ml-2">
                                <li>
                                    Para proporcionar y mejorar nuestros servicios de transmisión.
                                </li>
                                <li>
                                    Para personalizar su experiencia, recomendando contenido y eventos.
                                </li>
                                <li>
                                    Para procesar pagos y suscripciones.
                                </li>
                                <li>
                                    Para enviarle notificaciones y actualizaciones relacionadas con la plataforma.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Protección de Datos
                            </p>
                            <p className="ml-2">
                                Futcenter implementa medidas de seguridad para proteger su información personal, incluyendo encriptación de datos y acceso limitado. Sin embargo, no garantizamos la seguridad absoluta de los datos transmitidos por internet.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Derechos del Usuario
                            </p>
                            <p className="ml-2">
                            Usted tiene derecho a acceder, actualizar o eliminar su información personal. Si desea ejercer estos derechos, por favor contáctenos a través de nuestro correo de soporte.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Cambios a esta Política de Privacidad
                            </p>
                            <p className="ml-2">
                            Podemos actualizar esta Política de Privacidad de vez en cuando. Notificaremos los cambios significativos y publicaremos la versión revisada en nuestro sitio web.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p className="text-xl font-bold">
                            Contacto
                            </p>
                            <p className="ml-2">
                            Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos en: <a href="mailto:correo@futcenter.com">correo@futcenter.com</a>.
                            </p>
                        </li>
                        <br />
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default PrivacyPolicy;