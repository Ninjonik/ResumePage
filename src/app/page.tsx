'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import sendWebhook from "@/app/api/sendWebhook";
import toast from 'react-hot-toast';

export default function Home() {

    const email = useRef(null);
    const subject = useRef(null);
    const message = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailValue = email.current.value;
        const subjectValue = subject.current.value;
        const messageValue = message.current.value;

        const res = await sendWebhook(emailValue, subjectValue, messageValue);
        if (res === 'OK'){
            email.current.value = '';
            subject.current.value = '';
            message.current.value = '';
            toast.success('Contact form successfully submitted!');
            return
        }
        toast.error('There has been an error while submitting your form. Please try again later.');
    }
    return (
        <main className="max-w-screen overflow-x-hidden flex flex-col gap-8">

            <header className="fixed w-full">

                <div className="navbar bg-base-100 bg-white">
                    <div className="flex-1">
                        <a href="#" className="btn btn-ghost normal-case text-xl">Ninjonik</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className="link-outline link-secondary" href="#portfolio">Portfolio</a></li>
                            {/*<li><a className="link-outline link-secondary" href="#contact">Contact</a></li>*/}
                            <li><a className="link-outline link-secondary" href="#skills">Skills</a></li>
                        </ul>
                    </div>
                </div>

            </header>

            <section
                className="w-full h-screen bg-[url('/images/computerbg.jpg')] bg-cover bg-no-repeat bg-opacity-25 flex flex-col justify-center items-center text-center">

                <h1 className="text-6xl text-white">Ninjonik</h1>
                <a href="https://git.io/typing-svg"><img
                    src="https://readme-typing-svg.herokuapp.com?font=Varela+Round&duration=2500&pause=1000&color=F7F7F7&center=true&vCenter=true&random=false&width=435&lines=Computer+Networks+Student;Full-Stack+Web+Developer;Always+learning+new+things"
                    alt="Typing SVG"/></a>

            </section>

            <section className="w-full flex flex-col p-16 gap-8 justify-center items-center bg-white" id="portfolio">

                <div className="">
                    <h1 className="text-4xl text-black">Portfolio</h1>
                </div>

                <div className="flex flex-row gap-16 justify-center items-center">
                    <div className="group h-96 w-96">
                        <div
                            className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <img className="h-full w-full rounded-xl shadow-xl shadow-black/40 object-fill"
                                     src="/images/hoi4intel_800_600.png"
                                     alt=""/>
                            </div>
                            <div
                                className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center gap-2">
                                    <h1 className="text-3xl font-bold">HOI4Intel</h1>
                                    <div className="text-xl">Discord.py-based Discord Bot with Laravel-based Dashboard
                                    </div>
                                    <div className="text-base">This platform helps Hosts and Players of Hearts of Iron
                                        IV
                                        to
                                        find games they want to play and with who they want to play.
                                    </div>
                                    <div className="text-base">
                                        <h2>Technologies used:</h2>
                                        <ul>
                                            <li>Python3 + Discord.py</li>
                                            <li>PHP + Laravel</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <a
                                            className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                                            href="https://hoi.igportals.eu/" target="_blank">
                                            HOI4Intel
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group h-96 w-96">
                        <div
                            className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <img className="h-full w-full rounded-xl shadow-xl shadow-black/40 object-cover"
                                     src="/images/igcmsv3.png"
                                     alt=""/>
                            </div>
                            <div
                                className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center gap-2">
                                    <h1 className="text-3xl font-bold">IGCMSV3</h1>
                                    <div className="text-xl">NamelessMC and Wordpress inspired CMS</div>
                                    <div className="text-base">
                                        <h2>Features:</h2>
                                        <ul dir="auto">
                                            <li>Login / Register system</li>
                                            <li>Theme (Template) system</li>
                                            <li>Forum system</li>
                                            <li>Ticket system</li>
                                            <li>...</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <a
                                            className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                                            href="https://github.com/Ninjonik/igcmsv3" target="_blank">
                                            Github
                                        </a>
                                        <a
                                            className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                                            href="http://igportals.eu/" target="_blank">
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group h-96 w-96">
                        <div
                            className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            <div className="absolute inset-0">
                                <img className="h-full w-full rounded-xl shadow-xl shadow-black/40 object-cover"
                                     src="/images/hoi4inteldb.png"
                                     alt=""/>
                            </div>
                            <div
                                className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className="flex min-h-full flex-col items-center justify-center gap-2">
                                    <h1 className="text-3xl font-bold">HOI4Intel DB</h1>
                                    <div className="text-base">Next.js based web application which provides basic stats
                                        tracking for players using HOI4Intel.
                                    </div>
                                    <div className="text-base">
                                        <h2>Technologies used:</h2>
                                        <ul>
                                            <li>Next.JS 13</li>
                                            <li>Typescript</li>
                                            <li>Tailwind CSS</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <a
                                            className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
                                            href="https://db.igportals.eu/" target="_blank">
                                            HOI4Intel DB
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

            <section className="w-full h-96 flex flex-row p-16 py-32 my-16 gap-8 bg-primary text-white items-center"
                     id="contact">

                <div className="w-1/3">
                    <FontAwesomeIcon icon={faEnvelope} size="2xl"/>
                    <h1 className="text-4xl">Contact me</h1>
                    <h3 className="text-xl">Get in Touch for Collaboration, Questions, or Just to Say Hello! I'm Always
                        Excited to Hear from You and Explore New Opportunities!</h3>
                </div>

                <div
                    className="shadow-lg rounded-lg p-4 text-black flex flex-col items-center relative bg-white w-1/2 h-128 left-2/2 transform -translate-x-2/2">
                    <div className="px-4 w-full pt-4">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                            Me</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                    email</label>
                                <input type="email" id="email" ref={email}
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       placeholder="name@provider.com" required/>
                            </div>
                            <div>
                                <label htmlFor="subject"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" ref={subject}
                                       className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       placeholder="Let me know how I can help you" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                                    message</label>
                                <textarea id="message" rows="6" ref={message}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">SUBMIT</button>
                        </form>
                    </div>
                </div>

            </section>

            <section className="w-full flex flex-col p-32 gap-8 justify-center items-center bg-white" id="skills">

                <div className="">
                    <h1 className="text-4xl text-black">My Skills</h1>
                </div>

                <div className="grid grid-cols-6 gap-8">

                    <a href="https://www.javascript.com/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/jslogo.png" alt="javascript"/>
                        <span className="">JavaScript</span>
                    </a>

                    <a href="https://www.typescriptlang.org/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/tslogo.png" alt="typescript"/>
                        <span className="">TypeScript</span>
                    </a>

                    <a href="https://nodejs.org/en"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/nodejslogo.png" alt="nodejs"/>
                        <span className="">Node.js</span>
                    </a>

                    <a href="https://nextjs.org/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/nextjslogo.png" alt="nextjs"/>
                        <span className="">Next.js</span>
                    </a>

                    <a href="https://www.php.net/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/phplogo.png" alt="php"/>
                        <span className="">PHP</span>
                    </a>

                    <a href="https://laravel.com/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/laravellogo.png" alt="laravel"/>
                        <span className="">Laravel</span>
                    </a>

                    <a href="https://www.python.org/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/pythonlogo.png" alt="python"/>
                        <span className="">Python</span>
                    </a>

                    <a href="https://discordpy.readthedocs.io/en/stable/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/discordpylogo.png" alt="discord.py"/>
                        <span className="">Discord.py</span>
                    </a>

                    <a href="https://git-scm.com/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/gitlogo.png" alt="git"/>
                        <span className="">Git</span>
                    </a>

                    <a href="https://github.com"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/githublogo.png" alt="github"/>
                        <span className="">Github</span>
                    </a>

                    <a href="https://www.mysql.com/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/mysqllogo.webp" alt="mysql"/>
                        <span className="">MySQL</span>
                    </a>

                    <a href="https://www.mongodb.com/"
                       className="h-48 w-48 flex flex-col justify-center items-center hover:scale-105 transition-all">
                        <img className="h-40 w-40" src="/images/mongodblogo.webp" alt="mongodb"/>
                        <span className="">MongoDB</span>
                    </a>

                </div>

            </section>

            <footer className="footer footer-center p-10 bg-primary text-primary-content">
                <aside>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                         fillRule="evenodd"
                         clipRule="evenodd" className="inline-block fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <div className="font-bold">
                        Ninjonik <br/>Created with ❤️
                    </div>
                    <div>Copyright © 2023 - All rights reserved</div>
                </aside>
            </footer>

        </main>
    )
}
