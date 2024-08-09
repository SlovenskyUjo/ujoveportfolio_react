import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reveal from "@/Components/Reveal";

const Contact: React.FC = () => {
    // Create a reference for the form
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_jctrgds', 'template_cyktek2', e.currentTarget, 'oT4Vkny2712AwqY9R')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent successfully!');
                // Reset the form fields
                if (formRef.current) {
                    formRef.current.reset();
                }
            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send message.');
            });
    };

    return (
        <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
            <Reveal>
                <div className="grid md:grid-cols-2 place-items-center">
                    <div>
                        <div className="text-gray-300 my-3">
                            <h3 className="text-4xl font-semibold mb-5">About <span>Me</span></h3>
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                Som programátor so skúsenosťami vo webovom vývoji.
                                Mám vášeň pre technológie a riešenie problémov. Pracujem s Laravel, React a InertiaJS
                                a neustále sa snažím zlepšovať svoje zručnosti.
                                Rád sa zapájam do nových projektov a výziev.
                            </p>
                        </div>

                        <div className="flex mt-10 items-center gap-5">
                            <div className="bg-gray-800/40 p-5 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">4
                                    <span>+</span>
                                </h3>
                                <p className="text-xs md:text-base"><span>years of experience</span></p>
                            </div>

                            <div className="bg-gray-800/40 p-5 rounded-lg">
                                <h3 className="md:text-4xl text-2xl font-semibold text-white">10
                                    <span>+</span>
                                </h3>
                                <p className="text-xs md:text-base"><span>Completed projects</span></p>
                            </div>

                        </div>

                    </div>

                    <form
                        onClick={sendEmail}
                        action="https://getform.io/f/placeYourEndpointHere"
                        method="POST"
                        className=" max-w-6xl p-5 md:p-12"
                        id="form"
                    >
                        <p className="text-gray-100 font-bold text-xl mb-2">
                            Let´s connect!
                        </p>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name ..."
                            name="name"
                            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                        />
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email ..."
                            name="email"
                            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                        />
                        <textarea
                            name="textarea"
                            id="textarea"
                            cols={30}
                            rows={4}
                            placeholder="Your Message ..."
                            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </Reveal>
        </div>
    )
}

export default Contact
