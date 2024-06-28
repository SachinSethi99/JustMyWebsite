import React from 'react';
import Head from 'next/head';
import { Link, Element } from 'react-scroll';
import 'tailwindcss/tailwind.css';

const Home = () => (
    <div className="min-h-screen flex flex-col font-sans">
        <Head>
            <title>Sachin Sethi</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="fixed top-0 left-0 w-full bg-darkGray shadow-md z-50">
            <nav className="flex justify-center py-4">
                <ul className="flex space-x-8">
                    <li><Link to="about" smooth={true} duration={500} className="text-white hover:text-teal-400">👋 About</Link></li>
                    <li><Link to="education" smooth={true} duration={500} className="text-white hover:text-teal-400">🎓 Education</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} className="text-white hover:text-teal-400">🛠️ Skills</Link></li>
                    <li><Link to="experience" smooth={true} duration={500} className="text-white hover:text-teal-400">💼 Experience</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} className="text-white hover:text-teal-400">🚀 Projects</Link></li>
                </ul>
            </nav>
        </header>

        <main className="flex-1 mt-16">
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

            <Element name="education" className="bg-white text-darkGray p-8">
                <h2 className="text-3xl font-bold text-teal-400 mb-4">About Me</h2>
                <p className="text-lg leading-relaxed text-justify">
                    Hi there I'm Sachin as you can see as this website is about me and everything but me! 👋 I'm also a passionate Software Engineer who loves mixing up .NET, Java, Python, and AWS to cook up amazing user experiences. With a strong skill set in JavaScript, React.js, Node.js, and MySQL, I whip up innovative solutions that ensure top-notch performance and seamless functionality. 💻✨
                    I've had the pleasure of coding adventures with TYDIUP, Light & Wonder, and CGI, where I've developed scalable solutions, optimized cloud infrastructure, and boosted product functionality and efficiency through Agile and DevOps practices. My experience includes managing PostgreSQL databases in AWS and crafting secure authentication frameworks with Firebase. 🚀📚
                    I’m all about leading projects with a sprinkle of creativity, promoting knowledge exchange, and supporting growth within our tech community. My flexible approach to technology means I can quickly adapt and continuously improve system performance and user engagement across various business environments. As the digital landscape evolves, so does my ambition to make a significant impact on the industry. 🌟🤝

                    When I'm not coding, I'm an avid sports fan. I love football and cheer for Manchester United ⚽🔴. I'm also a huge cricket fan, rooting for Chennai Super Kings in the IPL and Team India 🇮🇳 (Chak de India!). 🏏 Besides that, I enjoy watching boxing and UFC – nothing like some good old-fashioned punches and kicks! 🥊🥋

                    Let’s build the future together! Feel free to reach out! 📬
                </p>
            </Element>

            <Element name="education" className="bg-white text-darkGray p-8">
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

            <Element name="skills" className="bg-beige text-darkGray p-8">
                <h2 className="text-3xl font-bold text-teal-400 mb-4">Skills</h2>
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

            <Element name="experience" className="bg-lightGray text-darkGray p-8">
                <h2 className="text-3xl font-bold text-teal-400 mb-4">Experience</h2>
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-400 mb-2">Software Engineer - TYDIUP</h3>
                    <p className="text-lg mb-4">March 2024 - Present</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>🔗 Integrated Twilio and Google Maps APIs to make user interactions super smooth and fun! 🚀</li>
                        <li>📊 Managed PostgreSQL databases in AWS RDS, making sure our data storage is always high-performing and reliable. No lost data on my watch! 💾</li>
                        <li>🔧 Created API endpoints using Node.js for all the important stuff like user registration, verification, database integration, and session management. Basically, making everything work like magic! 🪄</li>
                        <li>☁️ Orchestrated AWS deployment with EC2 and S3, setting up a scalable infrastructure for smooth application hosting. It's all about the cloud, baby! 🌥️</li>
                        <li>🔐 Configured and tested OTP functionality with Twilio and Amazon SNS, using Postman to ensure seamless code verification and validation. Security first! 🛡️</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-400 mb-2">Software Engineer - Light & Wonder</h3>
                    <p className="text-lg mb-4">January 2024 - May 2024</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>🔄 Refactored C# backend systems for efficiency, making the code cleaner and faster. Code is poetry! ✍️</li>
                        <li>🌍 Directed the launch of an international backend gaming platform, coordinating releases and supporting the team. Game on! 🎮</li>
                        <li>🐛 Fixed critical issues in the backend with C#, reducing bugs by 10%. Less bugs, more hugs! 🤗</li>
                        <li>💹 Executed SQL queries using SQL Server to fetch accurate financial data. Precision is key! 📈</li>
                        <li>🌐 Collaborated with global teams to solve backend issues, improving deployment and functionality worldwide. Teamwork makes the dream work! 🤝</li>
                        <li>☁️ Got hands-on with AWS services like VPCs, EC2, and S3, configuring secure and scalable cloud infrastructures. Cloud ninja in action! 🥷</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-teal-400 mb-2">Software Engineer - CGI</h3>
                    <p className="text-lg mb-4">September 2022 - January 2024</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>🌥️ Worked on cloud migration projects using Python, Node.js, and AWS, boosting client application efficiency. Up, up, and away to the cloud! ☁️</li>
                        <li>🚀 Streamlined CI/CD pipelines with GitLab CI, cutting pipeline execution time by 5%. Faster deploys = happier developers! ⏩</li>
                        <li>☁️ Mastered AWS services (EC2, S3, Lambda, API Gateway) for scalable app deployment and efficient cloud management. Cloud whisperer, reporting for duty! 🗣️</li>
                        <li>🐳 Used Docker and Kubernetes to keep logs and deployments in check, ensuring everything runs smoothly. Container magic! 🎩</li>
                        <li>👥 Implemented mob programming to boost team collaboration and efficiency. More brains = better code! 🧠</li>
                        <li>✅ Developed and executed unit tests with Python and Lua, achieving 100% test coverage. Quality code is happy code! 😄</li>
                        <li>🎨 Enhanced the UI/UX of an internal CGI site with React.js, making it more user-friendly and popular among CGI members. User love, guaranteed! 💖</li>
                        <li>📚 Designed and developed an internal resource tool, improving UI/UX and creating usage documentation. Even presented it to VPs and senior execs. Innovation for the win! 🏆</li>
                    </ul>
                </div>
            </Element>

            <Element name="projects" className="bg-white text-darkGray p-8">
                <h2 className="text-3xl font-bold text-teal-400 mb-4">Projects 🚀</h2>
                <div className="project mb-8">
                    <h3 className="text-2xl font-semibold"><a href="https://github.com/SachinSethi99/SaberTesting" className="text-teal-400 hover:underline">BBC Web Scraper 📄📰</a></h3>
                    <p className="text-lg">A Python web scraper using Next.js on the frontend and Python on the backend. It scrapes news articles from the BBC website, cleans and processes the data, and stores it in a PostgreSQL database. Think of it as a digital vacuum cleaner for BBC news! 🧹📡</p>
                </div>
                <div className="project mb-8">
                    <h3 className="text-2xl font-semibold"><a href="https://github.com/SachinSethi99/Test_Social_Media" className="text-teal-400 hover:underline">Facebook Clone 📸👥</a></h3>
                    <p className="text-lg">A fully functional Facebook clone created with React Native. It features user authentication, profile creation, and the ability to post updates and images. The app uses API endpoints to interact with a backend server, storing user data and images in a database. Basically, it's Facebook but cooler because I made it! 😎</p>
                </div>
                <div className="project mb-8">
                    <h3 className="text-2xl font-semibold"><a href="https://github.com/SachinSethi99/AlienGame" className="text-teal-400 hover:underline">Alien Collision Game 👾🎮</a></h3>
                    <p className="text-lg">An engaging alien collision game developed in Java. The game uses a Java GUI created with Processing to provide an interactive gaming experience. Players control a spaceship and must avoid collisions with aliens, while their scores are tracked and displayed. It's like Space Invaders but with more crashing! 🚀💥</p>
                </div>
                <div className="project mb-8">
                    <h3 className="text-2xl font-semibold"><a href="https://github.com/SachinSethi99/Falling_Car_Game" className="text-teal-400 hover:underline">Falling Car Game 🚗💥</a></h3>
                    <p className="text-lg">A Java-based game where players control a car that must dodge falling obstacles and collect points. If the car collides with an obstacle, the player loses a life. The game increases in difficulty as the player progresses. It's like Frogger, but with cars... and falling stuff! 🐸🚘</p>
                </div>
                <div className="project mb-8">
                    <h3 className="text-2xl font-semibold"><a href="https://github.com/SachinSethi99/TestingABlog" className="text-teal-400 hover:underline">API Functionality Tester 📑🔍</a></h3>
                    <p className="text-lg">A small but powerful project written in Node.js to test API functionality. It includes various test cases to ensure the reliability and performance of different API endpoints. Because even APIs need a good workout! 💪💻</p>
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
        </footer>
    </div>
);

export default Home;
