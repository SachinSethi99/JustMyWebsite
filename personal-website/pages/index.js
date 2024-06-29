import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import 'tailwindcss/tailwind.css';

const Home = () => {
    const [showScroll, setShowScroll] = useState(false);

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
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="fixed top-0 left-0 w-full bg-darkGray shadow-md z-50">
                <nav className="flex justify-center py-4">
                    <ul className="flex space-x-8">
                        <li><Link to="about" smooth={true} duration={500} offset={-100} className="text-white hover:text-teal-400">About 👋</Link></li>
                        <li><Link to="education" smooth={true} duration={500} offset={-100} className="text-white hover:text-teal-400">Education 🎓</Link></li>
                        <li><Link to="skills" smooth={true} duration={500} offset={-100} className="text-white hover:text-teal-400">Skills 🛠️</Link></li>
                        <li><Link to="experience" smooth={true} duration={500} offset={-100} className="text-white hover:text-teal-400">Experience 💼</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} offset={-100} className="text-white hover:text-teal-400">Projects 🚀</Link></li>
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
                        Hi, I'm Sachin! 👋 I'm a Software Engineer with a knack for .NET, Java, Python, AWS, JavaScript, React.js, Node.js, and MySQL. I create innovative solutions that ensure top-notch performance and seamless functionality. 💻✨
                        I've worked with TYDIUP, Light & Wonder, and CGI, developing scalable solutions, optimizing cloud infrastructure, and boosting product efficiency with Agile and DevOps magic. 🚀📚 My toolkit includes PostgreSQL in AWS and secure authentication with Firebase.
                        I'm passionate about leading projects with creativity, promoting knowledge exchange, and supporting our tech community. 🌟🤝
                        When I'm not coding, I'm cheering for Manchester United ⚽🔴, Chennai Super Kings in the IPL, and Team India 🇮🇳. 🏏 I also enjoy boxing and UFC. 🥊🥋
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
                                <h4 className="text-xl font-semibold mb-2">3<sup>rd</sup> Year Modules Currently Covering 📕:</h4>
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
                    <div className="mb-8">
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-bold text-black mb-2">Software Engineer - TYDIUP</h3>
                            <p className="text-lg mb-4 text-justify flex-shrink-0">March 2024 - Present</p>
                        </div>
                        <ul className="list-disc list-outside ml-8 text-justify">
                            <li>🔗 Integrated <b>Twilio</b> and <b>Google Maps APIs</b> to enrich user interaction and improve service quality, providing real-time notifications and geolocation services. This significantly enhanced the overall user experience by offering more interactive and responsive features.</li>
                            <li>📊 Managed databases using <b>PostgreSQL</b> within <b>AWS RDS</b>. Ensured high performance and reliability of data storage and retrieval, which led to more efficient data processing and a better user experience.</li>
                            <li>🔧 Led the development of websites from inception to completion using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. Focused on creating responsive designs to ensure optimal user experience across various devices, leading to increased user engagement and satisfaction.</li>
                            <li>🔐 Implemented secure authentication frameworks with <b>Firebase</b>, prioritizing user data protection and privacy. This initiative bolstered user trust and security, making the platform more reliable.</li>
                            <li>🪄 Developed a <b>Node.js</b>-based Single Sign-On (SSO) system to enhance user accessibility and security for a mobile application. This streamlined the login process, making it faster and more secure for users.</li>
                            <li>☁️ Orchestrated <b>AWS</b> deployment using <b>EC2</b> and <b>S3</b>. Established a scalable infrastructure that was both efficient and cost-effective, improving application hosting and reducing downtime.</li>
                            <li>✅ Configured and tested OTP functionality with <b>Twilio</b> and <b>Amazon SNS</b>, using <b>Postman</b> for seamless code verification and validation. This improved the security and reliability of user transactions.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-bold text-black mb-2">Software Engineer - Light & Wonder</h3>
                            <p className="text-lg mb-4 text-justify flex-shrink-0">January 2024 - May 2024</p>
                        </div>
                        <ul className="list-disc list-outside ml-8 text-justify">
                            <li>🔄 Refactored <b>C#</b> backend systems to streamline code efficiency, enhancing application performance on on-premises servers and improving code readability by adhering to coding standards.</li>
                            <li>🌍 Directed the launch of an international backend gaming platform, coordinating distribution and supporting team members during releases. This successful launch expanded the platform's global reach.</li>
                            <li>🐛 Addressed and rectified critical issues in the backend using <b>C#</b>, significantly reducing the system's bug count by 10%. This initiative not only enhanced overall stability but also improved performance and user satisfaction.</li>
                            <li>💹 Executed SQL queries using <b>SQL Server</b> to obtain accurate financial data, ensuring precision and reliability in financial reporting and analysis.</li>
                            <li>🌐 Collaborated with global teams to address backend issues, enhancing product deployment and functionality across various international markets.</li>
                            <li>☁️ Acquired hands-on experience with <b>AWS</b> cloud services such as <b>VPCs</b>, <b>EC2</b>, and <b>S3</b>, through practical training exercises, learning to configure robust, scalable, and secure cloud infrastructures.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-bold text-black mb-2">Software Engineer - CGI</h3>
                            <p className="text-lg mb-4 text-justify flex-shrink-0">September 2022 - January 2024</p>
                        </div>
                        <ul className="list-disc list-outside ml-8 text-justify">
                            <li>🌥️ Contributed to cloud migration projects using <b>Python</b>, <b>Node.js</b>, and <b>AWS</b>, improving a client's application efficiency and scalability. Developed tailored solutions that optimized performance on AWS.</li>
                            <li>🚀 Streamlined CI/CD pipelines with <b>GitLab CI</b>, achieving a 5% reduction in pipeline execution time. Ensured more efficient software delivery and deployment while maintaining high code quality standards.</li>
                            <li>☁️ Proficiently utilized <b>AWS</b> cloud services (<b>EC2</b>, <b>S3</b>, <b>Lambda</b>, <b>API Gateway</b>) for deploying scalable applications and expertly managed cloud infrastructure, ensuring the efficient operation of applications and services.</li>
                            <li>🐳 Employed <b>Docker</b> and <b>Kubernetes</b> to monitor logs and deployments, making necessary adjustments to Docker files to ensure applications ran correctly and efficiently.</li>
                            <li>👥 Implemented mob programming to boost collaboration and efficiency among developers of varying expertise through focused development sessions. This approach fostered knowledge sharing and improved code quality.</li>
                            <li>✅ Developed and executed comprehensive unit tests using <b>Python</b> and <b>Lua</b>, achieving 100% test coverage. This effort enhanced code reliability and minimized post-deployment issues.</li>
                            <li>🎨 Enhanced the UI/UX of an internal CGI site using <b>React.js</b>, improving usability and resulting in higher satisfaction rates and increased usage among CGI members.</li>
                            <li>📚 Championed the design and development of an internal resource tool, enhancing UI/UX and authoring usage documentation. Presented to over fifty personnel, including VPs and senior executives, demonstrating its impact and value.</li>
                        </ul>
                    </div>
                </Element>

                <Element name="projects" className="bg-white text-darkGray p-6 section">
                    <h2 className="text-3xl font-bold text-teal-400 mb-4">Projects 🚀</h2>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/SaberTesting" className="text-black hover:underline">BBC Web Scraper 📄📰</a></h3>
                        <p className="text-lg text-justify">
                            Built a comprehensive web scraper using <b>Python</b> for the backend and <b>Next.js</b> for the frontend. This scraper diligently gathers news articles from the BBC website, then cleans and processes the data. The refined information is stored in a <b>PostgreSQL</b> database. Think of it as a digital vacuum cleaner for BBC news! 🧹📡 This project involved dealing with data extraction, data cleaning, and storage, ensuring high accuracy and efficiency in data processing.
                        </p>
                    </div>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/Test_Social_Media" className="text-black hover:underline">Facebook Clone 📸👥</a></h3>
                        <p className="text-lg text-justify">
                            Created a fully functional Facebook clone using <b>React Native</b>. This app includes features such as user authentication, profile creation, and the ability to post updates and images. The backend is powered by <b>Node.js</b>, which handles API endpoints for user data and images stored in a <b>MongoDB</b> database. Basically, it's Facebook but cooler because I made it! 😎 This project enhanced my skills in building mobile applications and managing data flows between the frontend and backend.
                        </p>
                    </div>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/AlienGame" className="text-black hover:underline">Alien Collision Game 👾🎮</a></h3>
                        <p className="text-lg text-justify">
                            Developed an engaging alien collision game using <b>Java</b> with a graphical user interface created with <b>Processing</b>. Players control a spaceship and must avoid collisions with aliens, while their scores are tracked and displayed. It's like Space Invaders but with more crashing! 🚀💥 This project involved implementing game logic, user controls, and real-time score tracking.
                        </p>
                    </div>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/Falling_Car_Game" className="text-black hover:underline">Falling Car Game 🚗💥</a></h3>
                        <p className="text-lg text-justify">
                            Created a Java-based game where players control a car that must dodge falling obstacles and collect points. If the car collides with an obstacle, the player loses a life. The game increases in difficulty as the player progresses. It's like Frogger, but with cars... and falling stuff! 🐸🚘 This project focused on developing interactive gameplay mechanics and increasing difficulty levels.
                        </p>
                    </div>
                    <div className="project mb-8">
                        <h3 className="text-2xl font-semibold text-black"><a href="https://github.com/SachinSethi99/TestingABlog" className="text-black hover:underline">API Functionality Tester 📑🔍</a></h3>
                        <p className="text-lg text-justify">
                            Developed a small but powerful project using <b>Node.js</b> to test API functionality. It includes various test cases to ensure the reliability and performance of different API endpoints. Because even APIs need a good workout! 💪💻 This project enhanced my skills in writing test cases and ensuring robust API performance under different scenarios.
                        </p>
                    </div>
                </Element>
            </main>

            <footer className="bg-darkGray text-center py-4">
                <p className="text-lg text-white">
                    📧 <strong>Email:</strong> <a href="mailto:sachinsethi2017@gmail.com" className="text-white">sachinsethi2017@gmail.com</a>
                    <span className="mx-2 text-white font-bold">|</span>
                    📞 <strong>Phone:</strong> +44 7481080451
                    <span className="mx-2 text-white font-bold">|</span>
                    💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/Sachin-Sethi-SS" className="text-teal-400 hover:underline">Sachin-Sethi-SS</a>
                    <span className="mx-2 text-white font-bold">|</span>
                    🖥️ <strong>GitHub:</strong> <a href="https://github.com/SachinSethi99" className="text-teal-400 hover:underline">SachinSethi99</a>
                    <span className="mx-2 text-white font-bold">|</span>
                    📍 <strong>Location:</strong> Manchester, UK
                </p>
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
