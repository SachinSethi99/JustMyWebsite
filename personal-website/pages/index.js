import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import 'tailwindcss/tailwind.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // Optional CSS for default styling
import { enGB } from 'date-fns/locale'; // Import the locale you need

const Home = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Head>
                <title>Sachin Sethi</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/apple-touch-icon.png" />
            </Head>

            <header className="fixed top-0 left-0 w-full bg-darkGray shadow-md z-50">
                <nav className="flex justify-center py-2 md:py-4">
                    <ul className="flex space-x-2 md:space-x-8 px-2 md:px-0">
                        <li>
                            <Link to="about" smooth={true} duration={500} offset={-100} className="text-teal-400 font-bold text-sm md:text-base hover:text-teal-500">About</Link>
                        </li>
                        <li>
                            <Link to="education" smooth={true} duration={500} offset={-100} className="text-teal-400 font-bold text-sm md:text-base hover:text-teal-500">Education</Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500} offset={-100} className="text-teal-400 font-bold text-sm md:text-base hover:text-teal-500">Skills</Link>
                        </li>
                        <li>
                            <Link to="experience" smooth={true} duration={500} offset={-100} className="text-teal-400 font-bold text-sm md:text-base hover:text-teal-500">Experience</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} offset={-100} className="text-teal-400 font-bold text-sm md:text-base hover:text-teal-500">Projects</Link>
                        </li>
                        <li>
                            <Link to="calendar" smooth={true} duration={500} offset={-100} className="text-teal-400 font-bold text-sm md:text-base hover:text-teal-500">Calendar</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="flex-1 mt-24">
                <section className="bg-darkGray text-white p-8">
                    <div className="flex items-center">
                        <div className="mr-8">
                            <img src="/F39FE942-C2C0-413E-848E-1F796C7D412A.JPG" alt="Sachin Sethi" className="w-60 h-60 rounded-full border-4 border-teal-400 object-cover" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold text-teal-400 mb-4">Sachin Sethi</h1>
                            <p className="text-2xl mb-4">Software Engineer 🚀</p>
                            <p className="text-lg mb-8">"Code is like humor. When you have to explain it, it’s bad." – Cory House 🤓</p>
                            <a href="/SachinSethiCV.pdf" download="SachinSethiCV.pdf" className="inline-block bg-teal-400 text-darkGray py-2 px-4 rounded hover:bg-teal-500 transition">📄 Download My Latest CV</a>
                        </div>
                    </div>
                </section>

                <Element name="about" className="bg-white text-darkGray p-6 section">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">About Me 👋</h2>
                    <p className="text-lg leading-relaxed text-justify">
                        Hi, I'm Sachin! 👋 I'm a Software Engineer skilled in <b>.NET</b>, <b>Java</b>, <b>Python</b>, <b>AWS</b>, <b>JavaScript</b>, <b>React.js</b>, <b>Node.js</b>, and <b>MySQL</b>. I create innovative solutions for top-notch performance and seamless functionality. 💻✨
                        I've worked with <b>TYDIUP</b>, <b>Light & Wonder</b>, and <b>CGI</b>, developing scalable solutions and optimizing cloud infrastructure with Agile and DevOps practices. 🚀📚 My toolkit includes <b>PostgreSQL</b> in <b>AWS</b> and secure authentication with <b>Firebase</b>.
                        I'm passionate about leading projects, promoting knowledge exchange, and supporting the tech community. 🌟🤝 When I'm not coding, I'm cheering for Manchester United ⚽🔴, Chennai Super Kings 🏏, and Team India 🇮🇳. I also enjoy boxing and UFC. 🥊🥋
                        Let’s build the future together! Reach out! 📬
                    </p>
                </Element>

                <Element name="education" className="bg-white text-darkGray p-6 section">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">Education 🎓</h2>
                    <div className="education-item mb-8">
                        <h3 className="text-2xl font-semibold">Manchester Metropolitan University</h3>
                        <p className="text-lg mb-2">September 2019 - July 2022</p>
                        <p className="text-lg">BSc (Hons) Computer Science: First Classification (1:1) 🥇</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="module">
                                <h4 className="text-xl font-semibold mb-2">1<sup>st</sup> Year Modules Completed 📘:</h4>
                                <ul className="list-disc list-inside">
                                    <li>💻 Programming</li>
                                    <li>🌐 Introduction to Web Development</li>
                                    <li>🏗️ Computer Architecture</li>
                                    <li>➗ Mathematics in Computing</li>
                                    <li>📊 Information Systems</li>
                                </ul>
                            </div>
                            <div className="module">
                                <h4 className="text-xl font-semibold mb-2">2<sup>nd</sup> Year Modules Completed 📙:</h4>
                                <ul className="list-disc list-inside">
                                    <li>🧩 Algorithms and Data Structures</li>
                                    <li>🔗 Computer Networks and Operating Systems</li>
                                    <li>⚙️ Advanced Programming</li>
                                    <li>📈 Professional Development: Thematic Project</li>
                                </ul>
                            </div>
                            <div className="module">
                                <h4 className="text-xl font-semibold mb-2">3<sup>rd</sup> Year Modules Completed 📕:</h4>
                                <ul className="list-disc list-inside">
                                    <li>🤖 Artificial Intelligence</li>
                                    <li>📱 Mobile Development</li>
                                    <li>🔤 Programming Languages: Principles and Design</li>
                                    <li>🗺️ Project: Advanced Routing Approach for Road Networks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Element>

                <Element name="skills" className="bg-beige text-darkGray p-6 section">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">Skills 🛠️</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <li className="bg-darkGray p-4 rounded text-center text-white">☕ Java</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🔧 C#/.NET</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🐍 Python</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🌐 JavaScript</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">⚛️ React.js</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🟢 Node.js</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">☁️ AWS</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🔄 CI/CD</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🔀 Git</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🔗 REST APIs</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🗃️ SQL Server</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🐘 PostgreSQL</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🌐 HTML/CSS</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🧪 Unit Testing</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🧩 Lua</li>
                        <li className="bg-darkGray p-4 rounded text-center text-white">🏃‍♂️ Agile</li>
                    </ul>
                </Element>

                <Element name="experience" className="bg-lightGray text-darkGray p-6 section">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">Experience 💼</h2>
                    <div className="experience-item mb-8">
                        <h3 className="text-2xl font-bold text-black mb-2">Software Engineer - TYDIUP</h3>
                        <p className="duration text-lg mb-4 text-justify flex-shrink-0">March 2024 - Present</p>
                        <ul className="list-disc list-outside ml-6 text-justify">
                            <li>🔗 Integrated <b>Twilio</b> and <b>Google Maps APIs</b> to enhance user interaction with real-time notifications and geolocation services.</li>
                            <li>📊 Managed databases using <b>PostgreSQL</b> within <b>AWS RDS</b> for high performance and reliability.</li>
                            <li>🔧 Developed responsive websites using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b> to improve user engagement.</li>
                            <li>🔐 Implemented secure authentication with <b>Firebase</b> to protect user data and privacy.</li>
                            <li>🪄 Developed a <b>Node.js</b>-based SSO system for improved user accessibility and security.</li>
                            <li>☁️ Orchestrated <b>AWS</b> deployment using <b>EC2</b> and <b>S3</b> for efficient and scalable infrastructure.</li>
                            <li>✅ Configured and tested OTP functionality with <b>Twilio</b> and <b>Amazon SNS</b> using <b>Postman</b> for code verification.</li>
                        </ul>
                    </div>
                    <div className="experience-item mb-8">
                        <h3 className="text-2xl font-bold text-black mb-2">Software Engineer - Light & Wonder</h3>
                        <p className="duration text-lg mb-4 text-justify flex-shrink-0">January 2024 - May 2024</p>
                        <ul className="list-disc list-outside ml-6 text-justify">
                            <li>🔄 Refactored <b>C#</b> backend systems to improve efficiency and code readability.</li>
                            <li>🌍 Directed the launch of an international backend gaming platform.</li>
                            <li>🐛 Addressed critical issues in the backend using <b>C#</b>, reducing system bugs by 10%.</li>
                            <li>💹 Executed SQL queries using <b>SQL Server</b> for accurate financial data.</li>
                            <li>🌐 Collaborated with global teams to enhance product deployment.</li>
                            <li>☁️ Acquired hands-on experience with <b>AWS</b> cloud services such as <b>VPCs</b>, <b>EC2</b>, and <b>S3</b>.</li>
                        </ul>
                    </div>
                    <div className="experience-item mb-8">
                        <h3 className="text-2xl font-bold text-black mb-2">Software Engineer - CGI</h3>
                        <p className="duration text-lg mb-4 text-justify flex-shrink-0">September 2022 - January 2024</p>
                        <ul className="list-disc list-outside ml-6 text-justify">
                            <li>🌥️ Contributed to cloud migration projects using <b>Python</b>, <b>Node.js</b>, and <b>AWS</b>, enhancing efficiency and scalability.</li>
                            <li>🚀 Streamlined CI/CD pipelines with <b>GitLab CI</b>, reducing execution time by 5%.</li>
                            <li>☁️ Utilized <b>AWS</b> services (<b>EC2</b>, <b>S3</b>, <b>Lambda</b>, <b>API Gateway</b>) for scalable applications.</li>
                            <li>🐳 Employed <b>Docker</b> and <b>Kubernetes</b> for monitoring and deployments.</li>
                            <li>👥 Implemented mob programming to boost collaboration and code quality.</li>
                            <li>✅ Developed and executed unit tests using <b>Python</b> and <b>Lua</b> for 100% test coverage.</li>
                            <li>🎨 Enhanced UI/UX of an internal site using <b>React.js</b>.</li>
                            <li>📚 Designed an internal resource tool, improving UI/UX and authoring usage documentation.</li>
                        </ul>
                    </div>
                </Element>

                <Element name="projects" className="bg-white text-darkGray p-6 section">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">Projects 🚀</h2>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/SaberTesting" className="text-black hover:underline">BBC Web Scraper 📄📰</a></h3>
                        <p className="text-lg text-justify">
                            Built a web scraper using <b>Python</b> for the backend and <b>Next.js</b> for the frontend. It gathers news articles from the BBC website, cleans and processes the data, and stores the information in a <b>PostgreSQL</b> database.
                        </p>
                    </div>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/Test_Social_Media" className="text-black hover:underline">Facebook Clone 📸👥</a></h3>
                        <p className="text-lg text-justify">
                            Created a Facebook clone using <b>React Native</b>. The app includes user authentication, profile creation, and the ability to post updates and images. The backend is powered by <b>Node.js</b> with data stored in <b>MySQL DB</b>.
                        </p>
                    </div>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/AlienGame" className="text-black hover:underline">Alien Collision Game 👾🎮</a></h3>
                        <p className="text-lg text-justify">
                            Developed an alien collision game using <b>Java</b> with a GUI created with <b>Processing</b>. Players control a spaceship and avoid collisions with aliens, with scores tracked and displayed.
                        </p>
                    </div>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/Falling_Car_Game" className="text-black hover:underline">Falling Car Game 🚗💥</a></h3>
                        <p className="text-lg text-justify">
                            Created a <b>Java</b>-based game where players control a car that dodges falling obstacles and collects points. The game increases in difficulty as the player progresses.
                        </p>
                    </div>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/TestingABlog" className="text-black hover:underline">API Functionality Tester 📑🔍</a></h3>
                        <p className="text-lg text-justify">
                            Developed a project using <b>Node.js</b> to test API functionality with various test cases, ensuring reliability and performance of different API endpoints.
                        </p>
                    </div>
                </Element>

                {/* Add Calendar component section */}
                <Element name="calendar" className="bg-white p-6 text-darkGray section">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">Calendar 📅</h2>
                    <div className="flex justify-center">
                        <Calendar onChange={setDate} value={date} locale={enGB} />
                    </div>
                </Element>
            </main>

            <footer className="bg-darkGray text-center py-4">
                <div className="contact-info text-white">
                    <p>📧 <strong>Email:</strong> <a href="mailto:sachinsethi2017@gmail.com" className="text-white">sachinsethi2017@gmail.com</a></p>
                    <p>📞 <strong>Phone:</strong> +44 7481080451</p>
                    <p>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/Sachin-Sethi-SS" className="text-teal-400 hover:underline">Sachin-Sethi-SS</a></p>
                    <p>🖥️ <strong>GitHub:</strong> <a href="https://github.com/SachinSethi99" className="text-teal-400 hover:underline">SachinSethi99</a></p>
                    <p>📍 <strong>Location:</strong> Manchester, UK</p>
                </div>
                <p className="text-lg text-white mt-4">&copy; 2024 Sachin Sethi. All rights reserved. 🌟</p>
                <p className="text-lg text-white">Made with 💻, ☕, and a lot of ❤️.</p>
                <button
                    onClick={() => scroll.scrollToTop()}
                    className={`fixed bottom-4 right-4 bg-teal-400 text-white p-2 rounded-full ${showScroll ? 'block' : 'hidden'}`}
                >
                    ↑
                </button>
            </footer>
        </div>
    );
};

export default Home;
