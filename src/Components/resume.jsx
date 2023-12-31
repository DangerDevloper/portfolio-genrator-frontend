import './Resume.css' 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const Resume = () => {

  // ----------------- Profile -----------------------------

  const [Name, setName] = useState("Monu");
  const [email, setemail] = useState("monurko99@gmail.com");
  const [phone, setphone] = useState("+91 9664366346");
  const [Dis, setDis] = useState("Full-stack web developer from India. Love building and learning new things.");
  const [Github, Setgithub] = useState("https://github.com/monurajputrko");
  const [Boolgithub, SetBoolgithub] = useState(true);
  const [Twitter, SetTwitter] = useState("https://twitter.com/MonuSingh135850");
  const [BoolTwitter, SetBoolTwitter] = useState(true);
  const [Linkedin, SetLinkedin] = useState("https://www.linkedin.com/in/monurajputrko/");
  const [BoolLinkedin, SetBoolLinkedin] = useState(true);
  const [Hashnode, SetHashnode] = useState("https://hashnode.com/");
  const [BoolHashnode, SetBoolHashnode] = useState(true);
  const [Dribble, SetDribble] = useState("https://dribbble.com/");
  const [BoolDribble, SetBoolDribble] = useState(true);
  const [Median, SetMedian] = useState("https://medium.com/");
  const [BoolMedian, SetBoolMedian] = useState(true);
  const [Resume, SetResume] = useState("https://drive.google.com/file/d/1R-yhF8M6XdPq1VZEC3FgeNHNqpMsSRgJ/view");
   
  //    ------------------ Skills -----------------------------------------------------
    
  const [Html, SetHtml] = useState(true);
  const [Css, SetCss] = useState(true);
  const [Js, SetJs] = useState(true);
  const [Express, SetExpress] = useState(true);
  const [Reacte, SetReacte] = useState(true);
  const [Nextjs, SetNextjs] = useState(true);
  const [TypeScript, SetTypeScript] = useState(true);
  const [MongoDB, SetMongoDB] = useState(true);
  const [Bootstrap, SetBootstrap] = useState(true);
  const [Python, SetPython] = useState(true);
  const [Cp, SetCp] = useState(true);
  const [C, SetC] = useState(true);
  const [Java, SetJava] = useState(true);
  const [PHp, SetPHp] = useState(true);
  const [Swift, SetSwift] = useState(true);
  const [Go, SetGo] = useState(true);
  const [Kotlin, SetKotlin] = useState(true);
  const [Ruby, SetRuby] = useState(true);
  const [Dart, SetDart] = useState(true);
  const [Lua, SetLua] = useState(true);
  const [Perl, SetPerl] = useState(true);
  const [MySql, SetMySql] = useState(true);
  const [SqLite, SetSqLite] = useState(true);
  const [Redis, SetRedis] = useState(true);
  const [InfluxDB, SetInfluxDB] = useState(true);
  const [ArangoDB, SetArangoDB] = useState(true);
  const [Prisma, SetPrisma] = useState(true);
  const [Realm, SetRealm] = useState(true);
  const [CockroachLab, SetCockroachLab] = useState(true);
  const [AmazonDynamo, SetAmazonDynamo] = useState(true);
  const [Superbase, SetSuperbase] = useState(true);
  const [ElasticSearch, SetElasticSearch] = useState(true);
  const [CouchBase, SetCouchBase] = useState(true);
  const [Cassandra, SetCassandra] = useState(true);
  const [PostgreSQL, SetPostgreSQL] = useState(true);
  const [MicrosoftSql, SetMicrosoftSql] = useState(true);
  const [MariaDB, SetMariaDB] = useState(true);
  const [RabbitMQ, SetRabbitMQ] = useState(true);
  const [Puppeteer, SetPuppeteer] = useState(true);
  const [ERLANG, SetERLANG] = useState(true);
  const [Numba, SetNumba] = useState(true);
  const [Rust, SetRust] = useState(true);
  const [Pug, SetPug] = useState(true);
  const [Json, SetJson] = useState(true);
  const [Leaflet, SetLeaflet] = useState(true);
  const [Haskell, SetHaskell] = useState(true);
  const [PyTorch, SetPyTorch] = useState(true);
  const [PyTorchLighting, SetPyTorchLighting] = useState(true);
  const [StreamLit, SetStreamLit] = useState(true);
  const [Latex, SetLatex] = useState(true);
  const [Plotly, SetPlotly] = useState(true);
  const [Pandas, SetPandas] = useState(true);
  const [Numpy, SetNumpy] = useState(true);
  const [SCIPY, SetSCIPY] = useState(true);
  const [Solidity, SetSolidity] = useState(true);
  const [Crystal, SetCrystal] = useState(true);
  const [CoffeeScript, SetCoffeeScript] = useState(true);
  const [KERAS, SetKERAS] = useState(true);
  const [Scikit, SetScikit] = useState(true);
  const [TensorFlow, SetTensorFlow] = useState(true);
  const [Delphi, SetDelphi] = useState(true);
  const [Groovy, SetGroovy] = useState(true);
  const [Clojure, SetClojure] = useState(true);
  const [Tailwind, SetTailwind] = useState(true);
  const [MaterialUI, SetMaterialUI] = useState(true);
  const [NodeJS, SetNodeJS] = useState(true);
  const [Npm, SetNpm] = useState(true);
  const [Yarn, SetYarn] = useState(true);
  const [Jest, SetJest] = useState(true);
  const [Socket, SetSocket] = useState(true);
  const [Saas, SetSaas] = useState(true);
  const [Net, SetNet] = useState(true);
  const [Markdown, SetMarkdown] = useState(true);
  const [Svelte, SetSvelte] = useState(true);
  const [VueJS, SetVueJS] = useState(true);
  const [Angular, SetAngular] = useState(true);
  const [styles, Setstyles] = useState(true);
  const [ChakraUI, SetChakraUI] = useState(true);
  const [Redux, SetRedux] = useState(true);
  const [JQuery, SetJQuery] = useState(true);
  const [Drupal, SetDrupal] = useState(true);
  const [Laraval, SetLaraval] = useState(true);
  const [SpringBoot, SetSpringBoot] = useState(true);
  const [Spring, SetSpring] = useState(true);
  const [Flask, SetFlask] = useState(true);
  const [GraphQL, SetGraphQL] = useState(true);
  const [Docker, SetDocker] = useState(true);
  const [Firebase, SetFirebase] = useState(true);
  const [Git, SetGit] = useState(true);
  const [ThreeJS, SetThreeJS] = useState(true);
  const [Mocha, SetMocha] = useState(true);
  const [Webpack, SetWebpack] = useState(true);
  const [JWT, SetJWT] = useState(true);
  const [Babel, SetBabel] = useState(true);
  const [CHAI, SetCHAI] = useState(true);
  const [NestJS, SetNestJS] = useState(true);
  const [AmazonAWS, SetAmazonAWS] = useState(true);
  const [Heroku, SetHeroku] = useState(true);
  const [Netlify, SetNetlify] = useState(true);
  const [Vercel, SetVercel] = useState(true);
  const [Shopify, SetShopify] = useState(true);
  const [NuxtJS, SetNuxtJS] = useState(true);
  const [SAP, SetSAP] = useState(true);
  const [RubyonRails, SetRubyonRails] = useState(true);
  const [DJango, SetDJango] = useState(true);
  const [FastAPI, SetFastAPI] = useState(true);
  const [Electron, SetElectron] = useState(true);
  const [Vite, SetVite] = useState(true);
  const [GatsBy, SetGatsBy] = useState(true);
  const [Jupyter, SetJupyter] = useState(true);
  const [Scala, SetScala] = useState(true);
  const [Stylus, SetStylus] = useState(true);
  const [MicrosoftExcel, SetMicrosoftExcel] = useState(true);
  const [Tableau, SetTableau] = useState(true);
  const [PowerBI, SetPowerBI] = useState(true);
  const [Looker, SetLooker] = useState(true);
  const [NoSQL, SetNoSQL] = useState(true);
  const [Hadoop, SetHadoop] = useState(true);
  const [Pyspark, SetPyspark] = useState(true);
  const [R, SetR] = useState(true);
  const [Julia, SetJulia] = useState(true);
  const [Hive, SetHive] = useState(true);

  // ------------------------ Projects -------------------------------------------------

  const [ProjectName1, SetProjectName1] = useState("Coffeto");
  const [Description1, SetDescription1] = useState("Designed and developed a website for coffee lovers using React, Redux, MongoDB, and Express.");
  const [RepoUrl1, SetRepoUrl1] = useState("https://github.com/monurajputrko/Coffetto");
  const [DemoUrl1, SetDemoUrl1] = useState("https://coffeto.vercel.app/");
  const [ProjectImage1, SetProjectImage1] = useState("https://monurajputrko.github.io/images/coffetto.png");

  const [ProjectName2, SetProjectName2] = useState("Mern Blog App");
  const [Description2, SetDescription2] = useState("Developed a blog app using React and MongoDB.Implemented features for creating, editing, deleting, and reading blog posts.");
  const [RepoUrl2, SetRepoUrl2] = useState("https://github.com/monurajputrko/Blog-App-Mern-");
  const [DemoUrl2, SetDemoUrl2] = useState("blog-app-mern-wqfj.onrender.com/");
  const [ProjectImage2, SetProjectImage2] = useState("https://monurajputrko.github.io/images/coffetto.png");

  const [ProjectName3, SetProjectName3] = useState("Prompt GPT");
  const [Description3, SetDescription3] = useState("Chat GPT prompts are brief inputs or queries provided to an artificial intelligence model, like me, to generate specific outputs or responses.");
  const [RepoUrl3, SetRepoUrl3] = useState("https://github.com/monurajputrko/Promt-GPT");
  const [DemoUrl3, SetDemoUrl3] = useState("https://promptgpt.netlify.app/");
  const [ProjectImage3, SetProjectImage3] = useState("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhakdyV2-jBtavInHyvnyQV68qjqfg4Mhj8wPfXNhswGd8hR775jENb7T0kXMnOZ2IRy5KCVLb0BPq0sEfjoddcJWuME2_Hrmp-R6Y8hPK6DIhSRnjmT8mrBMvrUOxS2czKA-FB-JUgMcYjQDX0eqPTw2KCzHUcr57mIPurpuEcPMhIVZjiX1rfELeD58x8/s320/Screenshot%20(106).png");
  
  const [ProjectName4, SetProjectName4] = useState("Sopa Marketplace");
  const [Description4, SetDescription4] = useState("SOPA Marketplace is a e-commerce platform that brings together style, trends, and convenience.");
  const [RepoUrl4, SetRepoUrl4] = useState("https://github.com/monurajputrko/Sopa-Marketplace");
  const [DemoUrl4, SetDemoUrl4] = useState("https://sopa-marketplace.vercel.app/");
  const [ProjectImage4, SetProjectImage4] = useState("https://blogger.googleusercontent.com/img/a/AVvXsEiq6dn-gG-kljFIPg_3viIW3BRgDcngTctthJAILQs28k__9Nvhtj8U4QJCI6aXQYg4wtsY41HfTpyFQJekz16KRoRIIWSbmfSppFUfRxAr-bRApsa4ACwM69wV9rkiuFM8JqKa6PymkQCqw3qxBmStW2m4WYTSfVUFtaguXPUSbpxOScEgMKm7XYgXXkvM");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const { id } = useParams();
  
   const fetchData = async () => {
   
      try {
        const response = await fetch("https://portfolio-generator-8tae.vercel.app/portfolio"); // Replace with your API endpoint
     
        const jsonData = await response.json(); // Parse JSON response
        const userData = jsonData.find(item => item.username == id);
        console.log("Name =",Name);
        setName(userData.name);
        setLoading(false);
    console.log(data);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:");// Set loading to false in case of an error
     }
     
    };
  
  useEffect(() => {
    fetchData(); 
  }, [Name]);
  
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div id="__next">
          <div class="jsx-408acd7ebedf08ea custom_scrollbar template theme_14">
            <header class="jsx-3cc39d55e1ae0774 header">
              <div class="jsx-3cc39d55e1ae0774 header_container">
                <div class="jsx-3cc39d55e1ae0774 left">{Name}</div>
                <div class="jsx-3cc39d55e1ae0774 right">
                  <div class="jsx-3cc39d55e1ae0774">
                    <button class="jsx-3cc39d55e1ae0774 hamburger">
                      <span class="jsx-3cc39d55e1ae0774 hamburger_line hamburger_line_1"></span>
                      <span class="jsx-3cc39d55e1ae0774 hamburger_line hamburger_line_2"></span>
                      <span class="jsx-3cc39d55e1ae0774 hamburger_line hamburger_line_3"></span>
                    </button>
                  </div>
                  <div class="jsx-3cc39d55e1ae0774 menu_items slide">
                    <li class="jsx-3cc39d55e1ae0774 menu_btn">
                      <a href="#skills" class="jsx-3cc39d55e1ae0774">
                        Skills
                      </a>
                    </li>
                    <li class="jsx-3cc39d55e1ae0774 menu_btn">
                      <a href="#projects" class="jsx-3cc39d55e1ae0774">
                        Projects
                      </a>
                    </li>
                    <li class="jsx-3cc39d55e1ae0774 menu_btn">
                      <a href="#contact" class="jsx-3cc39d55e1ae0774">
                        Contact
                      </a>
                    </li>
                    <li class="jsx-3cc39d55e1ae0774 menu_btn">
                      <a
                        rel="noreferrer noopener"
                        target="_blank"
                        href={Resume}
                        class="jsx-3cc39d55e1ae0774"
                      >
                        Resume
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </header>
            <div class="jsx-2d7ae7e0243f25bc hero_container">
              <div class="jsx-2d7ae7e0243f25bc hero_about">
                <p class="jsx-2d7ae7e0243f25bc name">{Name}</p>
                <p class="jsx-2d7ae7e0243f25bc">{Dis}</p>
              </div>
              <div class="jsx-2d7ae7e0243f25bc hero_links">
                {Boolgithub ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={Github}
                    class="jsx-2d7ae7e0243f25bc icon"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                  </a>
                ) : (
                  ""
                )}
                {BoolTwitter ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={Twitter}
                    class="jsx-2d7ae7e0243f25bc icon"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                ) : (
                  ""
                )}
                {BoolLinkedin ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={Linkedin}
                    class="jsx-2d7ae7e0243f25bc icon"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                ) : (
                  ""
                )}

                {BoolHashnode ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={Hashnode}
                    class="jsx-2d7ae7e0243f25bc icon"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"></path>
                    </svg>
                  </a>
                ) : (
                  ""
                )}
                {BoolDribble ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={Dribble}
                    class="jsx-2d7ae7e0243f25bc icon"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"></path>
                    </svg>
                  </a>
                ) : (
                  ""
                )}
                {BoolMedian ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={Median}
                    class="jsx-2d7ae7e0243f25bc icon"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
                    </svg>
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div class="jsx-2d7ae7e0243f25bc hero_button">
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href={Resume}
                  class="jsx-2d7ae7e0243f25bc"
                >
                  Resume
                </a>
              </div>
            </div>
            <div class="jsx-85785b62a986c47 skills_wrapper">
              <div id="skills" class="jsx-85785b62a986c47 skills">
                <h2 class="jsx-85785b62a986c47">Skills</h2>
                <div class="jsx-85785b62a986c47 skills_grid">
                  {Html ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">HTML</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Css ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">CSS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Js ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">JavaScript</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Express ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">ExpressJS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Reacte ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">React</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {NestJS ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">NextJS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {TypeScript ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Typescript</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {MongoDB ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">MongoDB</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Bootstrap ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Bootstrap</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Python ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Python</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Cp ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">C++</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {C ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">C</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Java ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Java</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {PHp ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">PHP</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Swift ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M21.984 16.348c.056-.112.056-.224.112-.336 1.346-5.272-1.851-11.44-7.347-14.693 2.412 3.253 3.365 7.122 2.524 10.599-.056.28-.168.617-.28.897a5.173 5.173 0 0 1-.45-.28S11.104 9.17 5.273 3.282c-.169-.168 3.14 4.71 6.841 8.58-1.738-1.01-6.673-4.542-9.758-7.403.337.617.842 1.234 1.346 1.851 2.58 3.309 5.945 7.346 9.983 10.43-2.86 1.74-6.842 1.851-10.88 0-1.01-.448-1.85-1.009-2.804-1.682 1.682 2.636 4.318 5.048 7.459 6.337 3.757 1.627 7.57 1.515 10.318 0h.057c.112-.056.224-.112.336-.224 1.346-.673 3.982-1.402 5.44 1.402.392.785 1.121-2.86-1.626-6.225z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Swift</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Go ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">GO</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Kotlin ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M24 24H0V0h24L12 12Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Kotlin</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Ruby ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089v.026-.029.003zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Ruby</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Dart ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Dart</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Lua ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M.38 10.377l-.272-.037c-.048.344-.082.695-.101 1.041l.275.016c.018-.34.051-.682.098-1.02zM4.136 3.289l-.184-.205c-.258.232-.509.48-.746.734l.202.188c.231-.248.476-.49.728-.717zM5.769 2.059l-.146-.235c-.296.186-.586.385-.863.594l.166.219c.27-.203.554-.399.843-.578zM1.824 18.369c.185.297.384.586.593.863l.22-.164c-.205-.271-.399-.555-.58-.844l-.233.145zM1.127 16.402l-.255.104c.129.318.274.635.431.943l.005.01.245-.125-.005-.01c-.153-.301-.295-.611-.421-.922zM.298 9.309l.269.063c.076-.332.168-.664.272-.986l-.261-.087c-.108.332-.202.672-.28 1.01zM.274 12.42l-.275.01c.012.348.04.699.083 1.043l.273-.033c-.042-.336-.069-.68-.081-1.02zM.256 14.506c.073.34.162.682.264 1.014l.263-.08c-.1-.326-.187-.658-.258-.99l-.269.056zM11.573.275L11.563 0c-.348.012-.699.039-1.044.082l.034.273c.338-.041.68-.068 1.02-.08zM23.221 8.566c.1.326.186.66.256.992l.27-.059c-.072-.34-.16-.682-.262-1.014l-.264.081zM17.621 1.389c-.309-.164-.627-.314-.947-.449l-.107.252c.314.133.625.281.926.439l.128-.242zM15.693.572c-.332-.105-.67-.199-1.01-.277l-.063.268c.332.076.664.168.988.273l.085-.264zM6.674 1.545c.298-.15.606-.291.916-.418L7.486.873c-.317.127-.632.272-.937.428l-.015.008.125.244.015-.008zM23.727 11.588l.275-.01a11.797 11.797 0 0 0-.082-1.045l-.273.033c.041.338.068.682.08 1.022zM13.654.105c-.346-.047-.696-.08-1.043-.098l-.014.273c.339.018.683.051 1.019.098l.038-.273zM9.544.527l-.058-.27c-.34.072-.681.16-1.014.264l.081.262c.325-.099.659-.185.991-.256zM1.921 5.469l.231.15c.185-.285.384-.566.592-.834l-.217-.17c-.213.276-.417.563-.606.854zM.943 7.318l.253.107c.132-.313.28-.625.439-.924l-.243-.128c-.163.307-.314.625-.449.945zM18.223 21.943l.145.234c.295-.186.586-.385.863-.594l-.164-.219c-.272.204-.557.4-.844.579zM21.248 19.219l.217.17c.215-.273.418-.561.607-.854l-.23-.148c-.186.285-.385.564-.594.832zM19.855 20.715l.184.203c.258-.23.51-.479.746-.732l-.201-.188c-.23.248-.477.488-.729.717zM22.359 17.504l.244.129c.162-.307.314-.625.449-.945l-.254-.107a11.27 11.27 0 0 1-.439.923zM23.617 13.629l.273.039c.049-.346.082-.695.102-1.043l-.275-.014c-.018.338-.051.682-.1 1.018zM23.156 15.621l.264.086c.107-.332.201-.67.279-1.01l-.268-.063c-.077.333-.169.665-.275.987zM22.453 6.672c.154.303.297.617.424.932l.256-.104c-.131-.322-.277-.643-.436-.953l-.244.125zM8.296 23.418c.331.107.67.201 1.009.279l.062-.268c-.331-.076-.663-.168-.986-.273l-.085.262zM10.335 23.889c.345.049.696.082 1.043.102l.014-.275c-.339-.018-.682-.051-1.019-.098l-.038.271zM17.326 22.449c-.303.154-.613.297-.926.424l.104.256c.318-.131.639-.275.947-.434l.004-.002-.123-.246-.006.002zM4.613 21.467c.274.213.562.418.854.605l.149-.23c-.285-.184-.565-.385-.833-.592l-.17.217zM12.417 23.725l.009.275c.348-.014.699-.041 1.045-.084l-.035-.271c-.336.041-.68.068-1.019.08zM6.37 22.604c.307.162.625.314.946.449l.107-.254c-.313-.133-.624-.279-.924-.439l-.129.244zM3.083 20.041c.233.258.48.51.734.746l.188-.201c-.249-.23-.49-.477-.717-.729l-.205.184zM14.445 23.475l.059.27c.34-.074.68-.162 1.014-.266l-.082-.262c-.325.099-.659.185-.991.258zM21.18.129A2.689 2.689 0 1 0 21.18 5.507 2.689 2.689 0 1 0 21.18.129zM15.324 15.447c0 .471.314.66.852.66.67 0 1.297-.396 1.297-1.016v-.645c-.23.107-.379.141-1.107.24-.735.109-1.042.306-1.042.761zM12 2.818c-5.07 0-9.18 4.109-9.18 9.18 0 5.068 4.11 9.18 9.18 9.18 5.07 0 9.18-4.111 9.18-9.18 0-5.07-4.11-9.18-9.18-9.18zm-2.487 13.77H5.771v-6.023h.769v5.346h2.974v.677zm4.13 0h-.619v-.67c-.405.57-.811.793-1.446.793-.843 0-1.38-.463-1.38-1.182v-3.271h.686v3c0 .52.347.85.893.85.719 0 1.181-.578 1.181-1.461v-2.389h.686v4.33zm-.53-8.393c0-1.484 1.205-2.689 2.689-2.689s2.688 1.205 2.688 2.689-1.203 2.688-2.688 2.688-2.689-1.203-2.689-2.688zm5.567 7.856v.52c-.223.059-.33.074-.471.074-.34 0-.637-.238-.711-.57-.381.406-.918.637-1.471.637-.877 0-1.422-.463-1.422-1.248 0-.527.256-.916.76-1.123.266-.107.414-.141 1.389-.264.545-.066.719-.191.719-.48v-.182c0-.412-.348-.645-.967-.645-.645 0-.957.24-1.016.77h-.693c.041-1 .686-1.404 1.734-1.404 1.066 0 1.627.412 1.627 1.182v2.412c0 .215.133.338.373.338.041-.002.074-.002.149-.017z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">LUA</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Perl ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.638 0c-.148 0-.207.689-.252 2.925-.058 2.86-.07 2.949-.51 3.914-.36.793-1.623 2.676-2.037 3.04-.373.328-1.183 1.56-1.58 2.401-.71 1.504-.659 3.52-.04 5.047.518 1.194 1.262 2.156 2.46 3.182.94.805 1.23.919 1.375.544.049-.128-.162-.572-.483-1.018-.313-.436-.843-1.362-1.178-2.059-1.382-2.926-.7-5.357.902-8.045.89-1.393 1.403-2.642 1.579-3.852.22-1.515.043-6.079-.236-6.079zm-.757 1.215c-.186 0-.228.26-.228 1.422 0 .782-.08 1.654-.177 1.938-.312.914-1.154 1.737-3.482 3.404-1.684 1.205-3.096 2.652-3.64 3.732-1.666 3.299-.195 7.311 3.42 9.333 1.613.902 2.966 1.253 2.966.768 0-.126-.054-.228-.121-.228s-.632-.332-1.254-.738c-2.69-1.755-3.947-3.927-3.747-6.482.15-1.91.873-3.08 3.796-6.135 2.522-2.636 2.69-2.97 2.693-5.304.001-1.42-.036-1.71-.226-1.71zm1.508.632c-.103.017-.14.905-.142 2.903l-.004 2.926-.744 2.812c-.83 2.54-.954 5.133-.345 7.725.558 2.202.796 2.638 1.567 2.857.343.098.89.355 1.216.572.736.49 1.395.435 2.715-.232 1.92-.97 3.209-2.222 4.067-3.953.745-1.648.856-3.71.068-5.35-.7-1.414-1.882-2.554-4.358-4.197-2.162-1.436-2.617-1.82-3.15-2.652-.322-.503-.369-.724-.308-1.444.04-.468.126-.978.192-1.134.101-.239.069-.268-.202-.182-.26.082-.34.027-.42-.286-.061-.245-.112-.372-.152-.365zm.714 4.586c.034-.007.135.113.252.306.144.237 1.022 1 1.952 1.697 2.888 2.189 5.27 4.378 4.087 8.2-.405 1.146-.99 2.07-1.963 3.098-.544.575-1.266 1.09-1.53 1.09-.047 0 .252-.43.664-.954 1.337-1.7 1.972-3.718 1.79-5.674-.168-1.796-1.557-3.975-3.753-5.89-.912-.796-1.518-1.536-1.512-1.846 0-.016.005-.025.013-.027zm-1.089 15.492c-.208-.006-.297.349-.297 1.121 0 .94.018.988.342.942.302-.042.347-.15.387-.899.032-.613-.019-.902-.183-1.039-.097-.08-.18-.123-.249-.125zm-1.052.28c-.124-.002-.226.14-.327.43-.085.245-.253.481-.373.527-.322.124-.264.55.075.55.162 0 .402-.109.534-.24.441-.442.579-.824.382-1.062-.111-.134-.206-.203-.29-.205zm2.074.063c-.312 0-.28.61.053 1.034.309.392.908.567.908.264 0-.252-.775-1.298-.961-1.298z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">PERL</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {MySql ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">MySQL</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {SqLite ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">SQLite</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Redis ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M10.5 2.661l.54.997-1.797.644 2.409.218.748 1.246.467-1.121 2.077-.208-1.61-.613.426-1.017-1.578.519zm6.905 2.077L13.76 6.182l3.292 1.298.353-.146 3.293-1.298zm-10.51.312a2.97 1.153 0 0 0-2.97 1.152 2.97 1.153 0 0 0 2.97 1.153 2.97 1.153 0 0 0 2.97-1.153 2.97 1.153 0 0 0-2.97-1.152zM24 6.805s-8.983 4.278-10.395 4.953c-1.226.561-1.901.561-3.261.094C8.318 11.022 0 7.241 0 7.241v1.038c0 .24.332.499.966.8 1.277.613 8.34 3.677 9.45 4.206 1.112.53 1.9.54 3.313-.197 1.412-.738 8.049-3.905 9.326-4.57.654-.342.945-.602.945-.84zm-10.042.602L8.39 8.26l3.884 1.61zM24 10.637s-8.983 4.279-10.395 4.954c-1.226.56-1.901.56-3.261.093C8.318 14.854 0 11.074 0 11.074v1.038c0 .238.332.498.966.8 1.277.612 8.34 3.676 9.45 4.205 1.112.53 1.9.54 3.313-.197 1.412-.737 8.049-3.905 9.326-4.57.654-.332.945-.602.945-.84zm0 3.842l-10.395 4.954c-1.226.56-1.901.56-3.261.094C8.318 18.696 0 14.916 0 14.916v1.038c0 .239.332.499.966.8 1.277.613 8.34 3.676 9.45 4.206 1.112.53 1.9.54 3.313-.198 1.412-.737 8.049-3.904 9.326-4.569.654-.343.945-.613.945-.841z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Redis</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {InfluxDB ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23.778 14.482l-2.287-9.959c-.13-.545-.624-1.09-1.169-1.248L9.87.051C9.74 0 9.584 0 9.426 0c-.443 0-.909.18-1.222.443L.716 7.412C.3 7.776.092 8.504.222 9.024l2.445 10.662c.13.545.624 1.092 1.169 1.248l9.775 3.015c.13.051.285.051.443.051.443 0 .91-.18 1.223-.443l8.007-7.435c.418-.39.624-1.092.494-1.64zM10.962 2.417l7.175 2.21c.285.08.285.21 0 .286l-3.77.858c-.285.08-.674-.05-.883-.26l-2.626-2.834c-.235-.232-.184-.336.104-.26zm4.47 12.872c.079.286-.105.444-.39.365l-7.748-2.392c-.285-.079-.338-.313-.13-.52l5.93-5.514c.209-.209.443-.13.52.156zM2.667 8.267l6.293-5.85c.21-.209.545-.18.754.025L12.86 5.85c.209.21.18.545-.026.754l-6.293 5.85c-.21.21-.545.181-.754-.025L2.64 9.024a.536.536 0 01.026-.757zm1.536 9.284L2.54 10.244c-.08-.285.05-.34.234-.13L5.4 12.949c.209.209.285.624.209.909L4.462 17.55c-.079.285-.208.285-.26 0zm9.202 4.264l-8.217-2.522a.547.547 0 01-.364-.675l1.378-4.421a.547.547 0 01.675-.365l8.216 2.522c.285.079.443.39.364.675L14.08 21.45a.553.553 0 01-.674.365zm7.279-5.98L15.2 20.93c-.209.209-.31.13-.234-.155l1.144-3.694c.079-.285.39-.573.674-.624l3.77-.858c.288-.076.339.054.13.234zm.598-1.09l-4.523 1.039a.534.534 0 01-.65-.39l-1.922-8.372a.534.534 0 01.39-.65L19.1 5.335a.534.534 0 01.649.39l1.923 8.371c.079.31-.102.596-.39.65Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">InfluxDB</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {ArangoDB ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M13.885 3.75c-.32.007-.536.032-.61.041-.878.106-2.81.49-4.466 2.088-.921.89-1.501 2.153-1.783 2.826.251-.072.502-.13.75-.164.94-.131 1.8-.013 2.431.219.89-.158 1.474-.228 1.782-.227.953.004 2.003-.008 2.775.65.208.178.82.542.725 1.515-.084.867-.474 1.933-1.428 2.982-.574.632-1.686 1.444-3.059 2.15-.995.511-2.412 1.313-4.469 1.426-.331.019-.708.041-1.105.04-1.012-.004-2.48-.138-3.545-1.249-.221-.231-1.31-1.458-1.002-2.93.248-1.185 1.229-1.798 2.016-2.292.447-.281 1.05-.512 1.861-.754.585-.63 1.274-1.017 1.975-1.262-1.394.312-2.784.652-3.788 1.15-1.15.557-2.236 1.082-2.707 2.237-.287.707-.263 1.42-.191 1.892 0 0 .31 3.096 2.441 4.674 1.784 1.323 4.413 1.812 6.374 1.276 1.543-.294 3.015-1.738 4.24-3.004l.006.004c.392.186 1.295.584 2.027.963 1.692.873 2.864 1.054 3.47 1.16 1.317.23 3.368-.292 4.341-1.383.932-1.045 1.203-2.454.98-3.711-.067-.386-.066-1.073-.349-2.016-.222-.737-.333-1.104-.494-1.496-.31-.758-.705-1.373-1.295-2.137-1.382-1.784-2.072-2.679-3.2-3.39-1.834-1.16-3.74-1.297-4.703-1.278zm.713 1.135c.814.033 2.014.046 3.051.725.603.397 1.182.68 2.338 2.21 1.56 2.069 1.711 2.301 2.293 3.405.443.84.822 2.55.65 3.885-.05.387-.09 1.209-.95 2.021-1.157 1.093-3.13.97-3.337.946-.629-.077-1.113-.371-2.582-.934l-1.816-.744c-.121-.048-.245-.115-.37-.18.417-.499 1.182-1.488 1.497-2.111.231-.466.385-.985.488-1.37.078-.308.195-.765.244-1.204.025-.229.045-.463.049-.663.004-.207-.001-.244-.01-.402a4.156 4.156 0 0 0-.201-.926 2.408 2.408 0 0 0-.457-.748 2.623 2.623 0 0 0-.51-.367c-.208-.113-.474-.216-.646-.283-.32-.125-.585-.196-1.067-.256a5.006 5.006 0 0 0-.451-.016c-.547.005-1.274.08-2.338.237-.68.095-1.357.208-2.024.334l.002-.006c.69-1.402 1.67-2.392 3.35-2.983 1.075-.377 2.198-.595 2.797-.57zm.272 2.566a2.08 2.08 0 0 0-.721.112c.378.093.743.284 1.064.426.255.138.49.313.633.462.249.261.46.616.569.93.099.29.206.71.226 1.06.009.15.016.22.012.438a8.02 8.02 0 0 1-.053.711c-.054.488-.178.965-.256 1.272a7.829 7.829 0 0 1-.383 1.144c.239.004.47-.002.602-.025.937-.164 1.561-1.126 1.752-1.904.268-1.102-.285-2.02-.654-2.633-.349-.577-.963-1.384-2.073-1.834a2.09 2.09 0 0 0-.718-.159zM7.844 9.035a4.64 4.64 0 0 0-1.511.457c-.53.254-.99.648-1.573 1.335-.65.815-1.112 2.387-.76 2.81.18.218.275.24.34.283.901.436 1.724 1.035 3.068 1.114h1.118c.234.002.545-.05.632-.059 1.547-.254 3.605-1.349 3.526-2.88-.03-.573-.683-1.512-1.127-1.935-.431-.41-1.147-.788-1.454-.917-.266-.131-.576-.167-.888-.213-.47-.078-.972-.048-1.371.005z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">ArangoDB</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Prisma ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Prisma</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Realm ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 .029a12.122 12.122 0 00-8.484 3.504v.003C1.291 5.76 0 8.855 0 11.998c0 3.142 1.285 6.244 3.516 8.465l.001.002a12.168 12.168 0 008.479 3.505H12c3.148 0 6.255-1.283 8.482-3.508l.002-.002A12.08 12.08 0 0024 12.005V12c0-3.14-1.287-6.242-3.518-8.464A12.116 12.116 0 0012 .03zm0 1.336c.48 0 .96.046 1.435.113-2.03.566-3.765 1.622-5.554 1.949a7.352 7.352 0 01-2.225.044C7.482 2.135 9.74 1.364 12 1.364zm4.135 1.072c.173 0 .348.01.521.023a10.59 10.59 0 012.883 2.022c.092.09.173.194.262.289a10.278 10.278 0 01-4.442 1.178c-2.43.06-4.958-.794-7.69-.823a12.662 12.662 0 00-4.362.744c.32-.457.672-.893 1.062-1.293 1.223.322 2.5.39 3.748.164h.002c2.264-.412 4.133-1.625 6.049-2.08a8.342 8.342 0 011.967-.225zM20.67 5.84a10.87 10.87 0 011.433 2.824 11.21 11.21 0 00-1.35-.644h-.001a11.305 11.305 0 00-6.62-.493h-.003c-1.489.345-2.841.968-4.154 1.524-.468.198-.933.383-1.399.553a10.83 10.83 0 00-1.445-.257h-.002a9.578 9.578 0 00-4.194.55 8.125 8.125 0 01-1.244-.536 10.9 10.9 0 01.53-1.557c1.671-.877 3.552-1.364 5.433-1.344 2.445.026 4.992.89 7.738.822h.004A11.626 11.626 0 0020.67 5.84zm-4.031 2.742c1.233 0 2.463.228 3.625.681a9.895 9.895 0 012.283 1.282c.036.252.064.504.082.758a10.71 10.71 0 00-2.244-.329 10.28 10.28 0 00-3.201.38c-.697.199-1.353.464-1.989.76-1.087-.371-2.166-.86-3.277-1.336a35.107 35.107 0 00-1.324-.538c1.3-.552 2.554-1.113 3.834-1.41a9.968 9.968 0 012.21-.248zM5.873 10.644c.374-.015.75-.004 1.125.032 1.475.148 2.935.704 4.393 1.33.717.309 1.453.625 2.203.928-1.1.604-2.156 1.225-3.237 1.7-1.05-.393-2.131-.757-3.302-.917-1.835-.25-3.717.06-5.387.828a10.467 10.467 0 01-.32-2.3c.403-.3.828-.57 1.28-.79a8.264 8.264 0 013.245-.81zm14.463 1.667c.775.029 1.547.16 2.29.379a10.709 10.709 0 01-.304 1.893c-.67.439-1.383.808-2.139 1.08-1.828.658-3.85.79-5.75.374-.78-.17-1.557-.45-2.341-.75 1.889-.973 3.598-2.12 5.457-2.646h.002a8.954 8.954 0 012.785-.33zM5.504 14.976a8.13 8.13 0 011.369.065c2.354.323 4.617 1.719 7.275 2.302.357.078.717.134 1.078.178-.35.1-.698.21-1.043.332v.002h-.001c-1.283.462-2.455 1.042-3.637 1.388-2.151.625-4.443.54-6.543-.23a10.723 10.723 0 01-1.926-3.18 8.615 8.615 0 013.428-.858zm16.144 1.5c-.067.145-.133.29-.207.433-.221-.017-.442-.04-.664-.048.298-.112.584-.251.871-.385zm-1.7 1.703a16.2 16.2 0 01.696.016c-.333.464-.696.911-1.105 1.323h-.002v.002c-1.966 1.963-4.754 3.113-7.535 3.113a10.814 10.814 0 01-5.793-1.725c1.57.19 3.173.065 4.71-.382h.003c1.332-.39 2.526-.987 3.71-1.414a16.091 16.091 0 015.315-.934z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">REALM</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {CockroachLab ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M17.645 16.155a13.013 13.013 0 0 0-4.479-13.287 11.617 11.617 0 0 1 5.815-1.546c.774 0 1.545.075 2.304.226l.32-1.282A13.092 13.092 0 0 0 18.98 0 12.93 12.93 0 0 0 12 2.03 12.933 12.933 0 0 0 5.021 0C4.139 0 3.26.089 2.396.266l.319 1.282a11.83 11.83 0 0 1 2.306-.226 11.64 11.64 0 0 1 5.817 1.544 13.01 13.01 0 0 0 .792 20.877l.375.257.373-.257c2.624-1.801 4.5-4.5 5.27-7.588zm-6.305 5.7A11.687 11.687 0 0 1 7.825 9.519a13.08 13.08 0 0 0 2.457 2.977 3.202 3.202 0 0 1 1.058 2.383zm.661-9.657a11.717 11.717 0 0 1-2.343-2.315 3.23 3.23 0 0 1 0-3.912 11.67 11.67 0 0 1 2.347-2.333c.9.671 1.697 1.468 2.37 2.366a3.197 3.197 0 0 1 0 3.832 11.816 11.816 0 0 1-2.374 2.362zm.659 9.657v-6.976a3.202 3.202 0 0 1 1.06-2.383 13.026 13.026 0 0 0 2.455-2.977 11.694 11.694 0 0 1-3.515 12.336Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Cockroach Labs</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {AmazonDynamo ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M16.606 20.705v-2.371c-1.263 1.082-3.884 1.795-7.066 1.795-3.184 0-5.805-.714-7.068-1.797v2.369c0 1.168 2.903 2.47 7.068 2.47 4.16 0 7.06-1.3 7.066-2.466zm.001-6.765l.817-.005v.005c0 .517-.258.998-.75 1.441.601.54.75 1.071.75 1.449a1661.7 1661.7 0 0 0 0 3.87c0 1.881-3.389 3.3-7.884 3.3-4.471 0-7.846-1.404-7.88-3.27a583.119 583.119 0 0 1-.003-3.909c.001-.375.15-.9.745-1.437-.592-.538-.743-1.062-.746-1.435v-3.892c.002-.377.153-.903.747-1.438-.593-.54-.744-1.062-.747-1.435 0-1.357-.002-2.735.002-3.897C1.674 1.412 5.056 0 9.54 0c2.159 0 4.233.356 5.689.974l-.315.766c-1.36-.58-3.319-.91-5.374-.91-4.165 0-7.067 1.3-7.067 2.47 0 1.168 2.902 2.47 7.067 2.47.115 0 .222 0 .334-.005l.033.828c-.122.006-.245.006-.367.006-3.184 0-5.805-.714-7.068-1.798v2.38c.005.45.45.843.821 1.093 1.116.736 3.114 1.239 5.34 1.342l-.037.829c-2.254-.105-4.23-.59-5.5-1.332-.318.245-.623.573-.623.952 0 1.168 2.902 2.47 7.067 2.47.411 0 .812-.014 1.203-.042l.06.826c-.41.03-.833.045-1.263.045-3.184 0-5.805-.713-7.068-1.797v2.368c.005.462.449.855.821 1.104 1.275.842 3.67 1.366 6.247 1.366h.182v.83H9.54c-2.62 0-4.99-.507-6.444-1.359-.317.245-.623.574-.623.954 0 1.168 2.902 2.47 7.067 2.47 4.159 0 7.058-1.298 7.066-2.465v-.007c0-.377-.303-.705-.62-.948a5.732 5.732 0 0 1-.662.336l-.316-.764c.3-.128.56-.266.776-.412.376-.254.823-.651.823-1.1zm4.377-6.915h-2.717a.406.406 0 0 1-.332-.173.42.42 0 0 1-.055-.375l1.204-3.597h-5.403l-2.583 4.974h2.623c.128 0 .248.06.325.164a.418.418 0 0 1 .069.36l-2.249 8.365zm1.249-.128l-10.89 11.608a.408.408 0 0 1-.498.075.418.418 0 0 1-.192-.471l2.534-9.426h-2.766a.407.407 0 0 1-.349-.2.418.418 0 0 1-.012-.407l3.014-5.804a.408.408 0 0 1 .36-.222h6.22c.132 0 .256.065.332.174a.422.422 0 0 1 .055.374l-1.204 3.598h3.1c.164 0 .31.099.375.251a.422.422 0 0 1-.08.45zM3.085 20.723a8.107 8.107 0 0 0 1.72.72l.233-.794a7.32 7.32 0 0 1-1.546-.645zm1.72-5.984l.233-.795a7.262 7.262 0 0 1-1.546-.646l-.407.72a8.051 8.051 0 0 0 1.72.72zm-1.72-7.427l.407-.719c.418.244.939.462 1.546.646l-.232.794a8.046 8.046 0 0 1-1.72-.72Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Amazon Dynamo DB</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Superbase ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Superbase</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {ElasticSearch ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M13.394 0C8.683 0 4.609 2.716 2.644 6.667h15.641a4.77 4.77 0 0 0 3.073-1.11c.446-.375.864-.785 1.247-1.243l.001-.002A11.974 11.974 0 0 0 13.394 0zM1.804 8.889a12.009 12.009 0 0 0 0 6.222h14.7a3.111 3.111 0 1 0 0-6.222zm.84 8.444C4.61 21.283 8.684 24 13.395 24c3.701 0 7.011-1.677 9.212-4.312l-.001-.002a9.958 9.958 0 0 0-1.247-1.243 4.77 4.77 0 0 0-3.073-1.11z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Elastic Search</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {CouchBase ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M20.111 14.104a1.467 1.458 0 0 1-1.235 1.503c-1.422.244-4.385.398-6.875.398s-5.454-.15-6.877-.398c-.814-.14-1.235-.787-1.235-1.503V9.417a1.57 1.56 0 0 1 1.235-1.505 15.72 15.619 0 0 1 2.156-.14.537.533 0 0 1 .523.543v3.303c1.463 0 2.727-.086 4.201-.086 1.474 0 2.727.086 4.196.086V8.342a.535.532 0 0 1 .494-.569h.027a15.995 15.891 0 0 1 2.156.14 1.57 1.56 0 0 1 1.234 1.504zM12.001 0C5.373 0 0 5.374 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.626-5.373-12-12-12z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Couchbase</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Cassandra ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M17.514 5.766c-.002.003-.247.256-.387.408-.366.397-.92.975-1.312 1.12h-.004a2.28 2.28 0 00-.16-.05l.705-1.425-.008.012c-.022.043-.72 1.415-1.666 1.218l-.002.002c-.014-.003-.026.002-.04-.002.455-.58.63-1.113.63-1.113s-.756 1.213-1.69.885a.075.075 0 01-.05-.047.153.153 0 010-.08c.01-.04.04-.092.067-.14.095-.176.256-.368.256-.368s-.156.152-.366.295l-.002.002c-.157.107-.345.208-.52.236a.512.512 0 01-.167 0c-.214-.037-.208-.25-.149-.455v-.002c.06-.204.174-.4.174-.4s-.19.298-.398.588c-.16.223-.311.396-.416.474l-.12.004c-.063-.176.1-.756.1-.76a4.984 4.984 0 01-.314.446 1.73 1.73 0 01-.34.336h-.027c-.082.007-.16.02-.24.031a.208.208 0 01-.063-.125c-.042-.268.123-.756.125-.762-.002.006-.09.26-.21.502V6.6c-.032.067-.07.12-.107.178-.086.136-.176.244-.261.22-.127-.039-.202-.203-.246-.357-.044-.154-.057-.299-.057-.299s-.031.251-.117.485a.8.8 0 01-.146.265c-.024.027-.057.036-.086.055a12.553 12.553 0 00-2.617.764c-.223.082-.446.159-.674.257-.75.32-1.53.726-2.344 1.248a21.335 21.335 0 00-2.56 1.945c-.449.393-.907.82-1.377 1.29C3.887 10.735 5.3 7.908 11.964 7.656c5.045-.19 7.402 2.138 8.18 2.171 1.957.083 3.258-1.4 3.673-1.947.112-.142.179-.237.183-.244-.01.011-.328.374-.781.722l-.006.004c-.46.35-1.05.68-1.577.6h-.002c-.068-.01-.138-.007-.203-.032.744-.434 1.237-1.19 1.483-1.596.076-.125.233-.36.233-.36S21.4 8.762 20.099 8.642l-.002.002c-.051-.005-.105.007-.155-.004.567-.446.985-1.045 1.278-1.55v-.004h.002c.317-.548.482-.985.484-.992-.005.008-.326.498-.766 1.037l-.01.01c-.44.54-.998 1.122-1.464 1.3-.07.026-.14.066-.205.072 1.085-.96 1.54-2.323 1.54-2.323s-1.098 1.595-2.027 1.89c-.056.017-.114.047-.17.054.568-.513.869-.92 1.057-1.24V6.89c.238-.404.281-.65.281-.65l-.004.004a9.381 9.381 0 01-.271.334l-.016.017c-.255.3-.645.733-1.045 1.078l-.005.004a4.148 4.148 0 01-.32.248c-.03.021-.06.046-.09.065a1.7 1.7 0 01-.273.139c-.022.01-.044.022-.065.03-.068-.045-.132-.092-.205-.135-.046.06-.096.117-.142.176h-.002c-.02-.006-.044-.006-.063-.016.859-.935 1.44-2.12 1.44-2.12l-.003.004c-.008.01-1.194 1.61-1.73 1.71-.07-.035-.14-.07-.216-.103a.5.5 0 01.044-.162c.122-.284.465-.717.465-.717s-.093.07-.123.096a4.251 4.251 0 01-.304.238c-.056.04-.114.072-.172.108a1.9 1.9 0 01-.188.105.71.71 0 01-.263.086c-.043 0-.082-.005-.11-.027.453-.277 1.228-1.628 1.233-1.637zm-4.79 2.166a15.085 15.085 0 00-.914.006c-.286.01-.55.033-.817.053l-.002.002a3.41 3.41 0 00-.783.46.427.427 0 01.035.168.431.431 0 01-.047.19l.885.642.022-.014-.36-1.264.623 1.114c.02-.008.042-.014.063-.02l-.02-1.236.397 1.162.476-1.15.018 1.269c.004.002.007.006.012.008l.712-1.006-.363 1.219.008.01 1.041-.692-.758 1.05v.007l.95-.34c.013-.017.03-.03.042-.047a.394.394 0 01.396-.63c.119-.245.209-.504.268-.77a13.153 13.153 0 00-1.884-.19zm-2.508.134l-.02.002c-.309.036-.607.078-.893.125-.287.047-.562.1-.824.16l-.014.002c.115.388.294.756.531 1.08.108-.24.244-.461.402-.662a.436.436 0 01.57-.557c.077-.058.166-.1.248-.15zm4.46.092a3.184 3.184 0 01-.162.826.394.394 0 01-.328.68 3.172 3.172 0 01-.55.63l.66.034-.994.236c-.026.018-.046.042-.072.06a3.195 3.195 0 011.538.69c.32-.574.504-1.235.504-1.94 0-.535-.237-.928-.594-1.216zm-6.319.226c-.296.07-.58.147-.85.23a1.462 1.462 0 00-.212.76 3.99 3.99 0 002.357 3.64l.002-.011a3.198 3.198 0 01-.58-.79.572.572 0 01-.336-1.079 3.18 3.18 0 01.14-1.39 3.16 3.16 0 01-.52-1.36zm7.633.026c.14.41.225.842.225 1.293 0 2.44-2.203 4.419-4.921 4.419-2.718 0-4.921-1.98-4.921-4.42 0-.235.023-.467.063-.693A13.08 13.08 0 004.36 10.12c-.214.388-.318.793-.283 1.2.085.986.951 1.808 2.275 2.365l-.256-.068c-2.291-.646-4.109.503-6.096-.494.46.364.984.717 2.499.722.513.002 2.158-.08 2.461.186.303.265-1.021 1.514-1.021 1.514s2.24-1.897 2.459-1.25c.137.402-.643 1.476-.643 1.476s.784-1.06 1.364-1.287c.4-.156.735-.136 1.022.266.19.265-.91 1.553-.91 1.553s1.477-1.44 1.741-1.364c.266.076 0 1.364 0 1.364s.545-1.307.835-1.403c.398-.133-.909 3.031-.909 3.031s1.596-2.926 1.894-2.992c.51-.114.852 2.044.852 2.044s-.25-1.886.02-2.007c1.694-.767.718 3.257.718 3.257s1.11-2.73.428-3.337c1.799 1.193 1.579 3.337 1.579 3.337s.472-1.02-.855-3.53c.72-.038 1.8 1.864 1.8 1.864s-1.172-2.082-.377-2.12c1.58-.075 1.74 2.765 1.74 2.765s.474-.398-.795-3.181c.808-.518 2.765 2.575 2.765 2.575s-1.805-3.018-1.515-3.22c.29-.202 1.35.96 1.35.96s-.808-1.11-.594-1.223c.216-.114 2.363 2.207 2.363 2.207s-1.895-2.271-1.567-2.55c.328-.277 1.717.784 1.717.784s-2.134-1.4-1.717-1.618c.58-.3 2.235.72 2.235.72s-.996-.82-.832-1.02c.164-.203 2.12 1.287 2.12 1.287s-1.729-1.365-1.818-1.706c-.088-.34 1.362.115 1.362.115s-1.602-.744-1.627-.959c-.026-.214 1.06.24 1.06.24s-1.49-1.225-1.855-.228c-.084.16-.187.3-.283.45.093-.27.135-.543.11-.82a1.87 1.87 0 00-.052-.28c-.683-.367-1.702-.933-3.134-1.336zm-5.831.455a.427.427 0 01-.509.164c-.054.073-.1.152-.148.23l1.278.47c.01-.013.02-.03.032-.042zM9.5 9.26c-.094.155-.18.316-.244.489.12.128.26.235.396.343l.923-.029.002-.004zm4.187.541l-.606.463.053.002c.201-.132.383-.29.553-.465zm-4.535.291c-.002.012-.007.023-.01.035a2.88 2.88 0 00-.048.958.567.567 0 01.451.474l.938-.6c-.085-.03-.17-.06-.251-.097l-1.052-.076.638-.139a3.199 3.199 0 01-.666-.555zm.793.211c.139.086.28.16.43.223l.116-.024c0-.019.005-.037.006-.056zm3.121.68l.916.9-1.198-.466.703 1.079-1.072-.833-.012.006.346 1.28-.596-1.136-.097 1.33-.403-1.326-.47 1.263.113-1.36-.016-.008-.812 1.153.297-1.11a3.299 3.299 0 00-.793 1.19c.095.102.196.198.302.289a3.985 3.985 0 004.353-1.689 3.399 3.399 0 00-1.26-.539zm-2.436.223l-1.079.39c.001.018.01.033.01.051a.57.57 0 01-.184.42c.102.218.228.424.375.616a3.2 3.2 0 01.32-.635l-.295.239zm3.634 2.791c-.186.049-.37.097-.56.137.191-.04.374-.09.56-.136zm-1.089.235c-.114.02-.225.046-.34.063-.202.03-.39.042-.586.062.315-.033.624-.074.926-.125zm-1.35.17c-.11.008-.215.007-.324.012.11-.007.214-.003.324-.012z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Cassandra</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {PostgreSQL ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">PostgreSQL</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {MicrosoftSql ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M4.724 2.505s-.08.127-.004.315c.046.116.186.256.34.404 0 0 1.615 1.576 1.813 1.804.895 1.033 1.284 2.05 1.32 3.453.022.9-.151 1.692-.573 2.613-.756 1.649-2.35 3.468-4.81 5.49l.36-.12c.233-.173.548-.359 1.292-.766 1.713-.936 3.636-1.798 5.999-2.686 3.399-1.277 8.99-2.776 12.172-3.263l.331-.051-.05-.08c-.292-.452-.49-.731-.73-1.027-.697-.863-1.542-1.567-2.577-2.146-1.422-.797-3.267-1.416-5.6-1.88a67.93 67.93 0 00-2.191-.375 209.29 209.29 0 01-3.924-.64c-.425-.075-1.06-.181-1.481-.272a9.404 9.404 0 01-.961-.258c-.268-.105-.645-.207-.726-.515zm.936.909c.003-.002.063.017.137.042.136.046.316.1.526.159.146.04.307.084.479.127.218.056.399.104.401.107.024.027.391 1.198.516 1.647.048.172.084.315.081.318a.789.789 0 01-.09-.14c-.424-.746-1.097-1.505-1.874-2.116a3.104 3.104 0 01-.176-.144zm1.79.494c.018-.001.099.012.195.034.619.136 1.725.35 2.435.47.119.02.216.04.216.047a.348.348 0 01-.098.062c-.119.06-.602.349-.763.457-.403.27-.766.559-1.03.821a5.4 5.4 0 01-.197.192c-.003 0-.022-.062-.041-.137a12.09 12.09 0 00-.65-1.779 1.801 1.801 0 01-.071-.165c0-.001 0-.002.004-.002zm3.147.598c.02.007.06.13.129.404a6.05 6.05 0 01.153 1.977l-.012.038-.187-.06c-.388-.124-1.02-.31-1.562-.46a6.625 6.625 0 01-.56-.17c0-.022.449-.471.642-.642.369-.326 1.362-1.098 1.397-1.087zm.25.036c.011-.01 1.504.248 2.182.378.506.097 1.237.25 1.281.269.022.008-.054.05-.297.16-.96.432-1.672.82-2.38 1.293-.186.124-.341.226-.344.226-.004 0-.006-.104-.006-.23 0-.69-.139-1.387-.391-1.976a.688.688 0 01-.045-.12zm3.86.764c.011.011-.038.306-.08.48-.132.54-.482 1.344-.914 2.099a2.26 2.26 0 01-.152.246 1.499 1.499 0 01-.219-.115c-.422-.247-.9-.48-1.425-.697a4.588 4.588 0 01-.278-.12c-.024-.022 1.143-.795 1.762-1.166.495-.297 1.292-.741 1.306-.727zm.276.043c.033 0 .695.18 1.037.283.853.255 1.837.614 2.475.904l.265.12-.187.043c-1.561.36-2.9.773-4.188 1.296-.107.044-.2.08-.207.08a.911.911 0 01.075-.185c.388-.823.638-1.687.703-2.42.006-.067.018-.121.027-.121zm-6.58 1.512c.01-.01.514.108.789.185.413.116 1.292.41 1.292.433 0 .004-.097.089-.215.188-.475.397-.934.813-1.483 1.343a5.27 5.27 0 01-.308.285c-.007 0-.01-.023-.006-.05.083-.611.065-1.395-.05-2.193a1.29 1.29 0 01-.02-.19zm10.61.01c.007.008-.234.385-.384.6-.22.314-.537.726-1.261 1.637l-.954 1.202a9.418 9.418 0 01-.269.333c-.003 0-.05-.066-.103-.146a7.584 7.584 0 00-1.47-1.625 9.59 9.59 0 00-.27-.218.427.427 0 01-.074-.063c0-.01.617-.274 1.088-.466a37.02 37.02 0 012.778-.99c.442-.135.912-.27.919-.264zm.278.073a.93.93 0 01.207.1 12.274 12.274 0 012.428 1.824c.194.19.667.683.66.687l-.363.029c-1.53.115-3.486.44-5.37.893-.128.03-.238.056-.246.056-.007 0 .133-.14.311-.312 1.107-1.063 1.611-1.734 2.205-2.934.088-.178.163-.333.166-.342h.002zm-8.088.83c.051.01.523.23.879.408.325.163.818.426.843.449.003.003-.17.093-.386.201-.683.342-1.268.664-1.878 1.037-.175.107-.32.194-.325.194-.015 0-.01-.013.088-.191a7.702 7.702 0 00.738-2.002c.014-.062.03-.1.041-.097zm-.475.084c.01.01-.112.46-.19.7a9.092 9.092 0 01-.835 1.808l-.09.147-.203-.197a2.671 2.671 0 00-.676-.5 1.009 1.009 0 01-.176-.102c0-.03.62-.593 1.098-.998.343-.29 1.064-.867 1.072-.858zm2.888 1.188l.177.115c.407.264.888.619 1.255.924.206.172.605.53.687.616l.044.047-.294.082a53.8 53.8 0 00-4.45 1.424c-.167.061-.31.112-.32.112-.021 0-.042.019.333-.326.96-.883 1.807-1.856 2.44-2.802zm-.759.19c.009.009-.492.71-.789 1.106-.356.473-.99 1.265-1.426 1.78a8.769 8.769 0 01-.346.397c-.01.003-.015-.05-.016-.133 0-.44-.112-.91-.308-1.308-.083-.168-.097-.208-.08-.224.068-.062 1.127-.666 1.794-1.023.459-.246 1.163-.604 1.171-.595zm-4.59 1.125a3.988 3.988 0 01.812.518c.008.005-.087.083-.21.172-.345.249-.87.644-1.173.886-.32.255-.331.263-.295.207.24-.367.36-.574.486-.84.113-.236.224-.516.304-.76a.675.675 0 01.077-.183zm1.223.96c.017-.003.04.028.139.175.207.31.366.722.407 1.058l.008.073-.497.192c-.89.346-1.711.687-2.266.94-.155.072-.428.202-.607.292-.179.09-.325.16-.325.156 0-.004.112-.089.25-.188 1.087-.79 2.025-1.654 2.732-2.519.075-.092.144-.172.153-.178a.016.016 0 01.006-.002zm-.564.14c.015.014-.401.484-.681.77-.7.715-1.396 1.275-2.256 1.821-.108.069-.206.13-.22.138-.023.014.008-.022.386-.434.238-.259.42-.474.628-.743.136-.177.162-.202.362-.346.537-.388 1.767-1.221 1.781-1.207zM9.925 0c-.08-.01-1.371.455-2.2.791-1.123.457-1.996.894-2.534 1.272-.2.14-.452.393-.488.49a.356.356 0 00-.021.123l.488.46 1.158.37L9.087 4l3.153.542.032-.27-.028-.005-.415-.066-.085-.148a27.702 27.702 0 01-1.177-2.325 12.264 12.264 0 01-.53-1.465C9.969.02 9.962.005 9.925 0zm-.061.186h.005c.003.003.017.105.032.225.062.508.176 1 .354 1.53.134.4.136.377-.024.332-.37-.103-2.032-.388-3.234-.555a8.796 8.796 0 01-.357-.053c-.015-.015.867-.477 1.258-.66.501-.232 1.867-.8 1.966-.819zM6.362 1.814l.141.048c.772.262 2.706.632 3.775.72.12.01.222.021.225.024.003.003-.1.058-.228.122-.515.258-1.083.573-1.476.819-.115.072-.22.13-.235.129a4.868 4.868 0 01-.17-.027l-.144-.023-.365-.355c-.641-.62-1.141-1.1-1.335-1.28zm-.143.114l.511.638c.282.35.564.699.626.774.063.075.111.138.108.14-.014.011-.74-.13-1.125-.219a8.532 8.532 0 01-.803-.212l-.2-.064.001-.049c.003-.245.312-.607.836-.976zm4.352.869c.015.001.032.032.077.131.124.272.51 1.008.603 1.15.03.047.08.05-.433-.033-1.23-.198-1.629-.265-1.629-.273a.36.36 0 01.083-.054 7.13 7.13 0 001.107-.767l.175-.147c.006-.005.012-.008.017-.007zm4.309 8.408l-4.808 1.568-4.18 1.846-1.17.31c-.298.282-.613.568-.948.86-.37.321-.716.612-.98.822a7.46 7.46 0 00-.953.945c-.332.414-.592.854-.704 1.193-.2.61-.103 1.228.285 1.798.495.728 1.48 1.468 2.625 1.972.585.256 1.57.588 2.31.774 1.233.312 3.614.65 4.926.7.266.01.62.01.637-.002.028-.019.233-.405.47-.89.806-1.646 1.389-3.19 1.703-4.508.19-.799.338-1.863.434-3.125.027-.354.037-1.533.016-1.934a13.564 13.564 0 00-.183-1.706.435.435 0 01-.012-.15c.014-.01.059-.025.65-.197zm-1.1.645c.045 0 .16 1.114.191 1.82.006.151.005.247-.004.247-.028 0-.615-.345-1.032-.606a28.716 28.716 0 01-1.162-.772c-.035-.028-.031-.029.266-.131.505-.174 1.704-.558 1.742-.558zm-2.448.803c.03 0 .115.047.315.172.75.47 1.766 1.035 2.2 1.225.136.06.151.036-.16.247-.662.45-1.486.892-2.497 1.342a7.59 7.59 0 01-.331.142.989.989 0 01.043-.2c.245-.905.383-1.82.387-2.554.002-.362.002-.364.037-.373h.006zm-.504.193c.021.022.006.834-.02 1.056a9.206 9.206 0 01-.418 1.837c-.014.017-.511-.468-.676-.66a4.918 4.918 0 01-.669-.973c-.082-.162-.214-.484-.202-.493.056-.04 1.971-.78 1.985-.767zm-2.375.936c.004 0 .008.001.01.004a.881.881 0 01.056.131c.116.315.376.782.602 1.08a6.247 6.247 0 001.017 1.06c.023.02.03.016-.562.24a48.53 48.53 0 01-2.294.8c-.327.106-.604.195-.615.2-.033.011-.023-.009.073-.158.427-.666 1.073-1.97 1.435-2.892.062-.16.122-.32.133-.356.015-.052.031-.07.08-.092a.149.149 0 01.065-.017zm-.728.3c.01.009-.174.398-.356.751-.351.686-.739 1.361-1.253 2.185l-.182.288c-.018.027-.026.018-.082-.094a3.307 3.307 0 01-.28-.842 3.39 3.39 0 01.02-1.083c.047-.227.045-.222.152-.276.462-.237 1.966-.942 1.981-.929zm6.268.255v.154a20.106 20.106 0 01-.255 2.992 9.362 9.362 0 01-1.898-.782c-.354-.194-.865-.507-.85-.522.003-.004.154-.083.334-.177.714-.37 1.395-.77 1.988-1.166.222-.148.555-.389.629-.454zM4.981 15.41c.015 0 .011.028-.012.161a4.137 4.137 0 00-.041.39c-.03.532.057.924.32 1.46.074.15.132.274.129.276-.027.023-2.43.726-3.186.933l-.435.12c-.027.008-.029.002-.02-.06.083-.533.49-1.232 1.058-1.82.378-.39.68-.622 1.195-.915a30.782 30.782 0 01.992-.545zm5.669 1.015c.002-.002.091.045.197.107.777.449 1.86.87 2.783 1.081l.084.02-.115.063c-.482.268-2.071.929-3.694 1.537a68.82 68.82 0 00-.513.194.314.314 0 01-.082.027c0-.004.067-.132.149-.286.456-.852.91-1.887 1.144-2.605.023-.073.044-.135.047-.138zm-.578.19a1.39 1.39 0 01-.063.169 23.534 23.534 0 01-1.261 2.54 9.009 9.009 0 01-.252.433c-.005 0-.114-.066-.244-.145-.77-.472-1.452-1.052-1.9-1.617l-.064-.08.332-.091a23.616 23.616 0 003.19-1.103c.142-.06.26-.109.262-.106zm3.59 1.253c.001 0 .002.001.002.003 0 .08-.183.828-.336 1.37-.128.453-.236.808-.435 1.437a8.533 8.533 0 01-.168.504 15.004 15.004 0 01-3-.841 7.964 7.964 0 01-.639-.283c-.006-.007.213-.11.486-.23 1.655-.721 3.369-1.543 3.955-1.896a.432.432 0 01.135-.064zm-8.287.283c.009.009-.454.671-1.1 1.576l-.587.823c-.097.139-.245.358-.329.488l-.153.236-.162-.137c-.191-.16-.525-.501-.677-.69-.312-.389-.523-.798-.607-1.174-.038-.174-.04-.262-.003-.273a176.26 176.26 0 011.934-.455l1.3-.305c.209-.05.382-.09.384-.089zm.465.178l.117.131a6.763 6.763 0 001.706 1.394c.115.066.202.124.195.128a281.967 281.967 0 01-4.33 1.53.858.858 0 01-.072-.048l-.067-.048.105-.152c.34-.493.768-1.035 1.705-2.162zm2.9 2.073c.003-.003.165.054.362.128.473.177.844.292 1.347.418.617.155 1.51.31 2.038.354.08.006.122.016.11.024-.025.016-.56.194-.953.318a258.526 258.526 0 01-4.636 1.363c-.035.007-.157-.025-.157-.04 0-.009.087-.119.193-.246a22.027 22.027 0 001.476-1.984 56.9 56.9 0 01.22-.335zm-.642.018c.005.005-.253.418-.706 1.132-.192.301-.409.645-.483.762-.075.118-.184.298-.242.4l-.107.185-.054-.014c-.13-.035-1.049-.36-1.291-.456-.301-.12-.615-.264-.846-.389-.289-.156-.655-.388-.627-.397l1.105-.302c1.592-.434 2.473-.683 3.05-.864.109-.033.199-.059.2-.057zm4.523 1.061h.006c.015.038-.575 1.67-.79 2.188-.049.116-.066.145-.092.143a55.54 55.54 0 01-1.433-.2c-.906-.138-2.423-.403-2.806-.49l-.089-.02.543-.122c1.164-.262 1.723-.403 2.29-.577a16.544 16.544 0 002.138-.824c.113-.052.21-.093.233-.098Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Microsoft SQL Server</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {MariaDB ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23.157 4.412c-.676.284-.79.31-1.673.372-.65.045-.757.057-1.212.209-.75.246-1.395.75-2.02 1.59-.296.398-1.249 1.913-1.249 1.988 0 .057-.65.998-.915 1.32-.574.713-1.08 1.079-2.14 1.59-.77.36-1.224.524-4.102 1.477-1.073.353-2.133.738-2.367.864-.852.449-1.515 1.036-2.203 1.938-1.003 1.32-.972 1.313-3.042.947a12.264 12.264 0 00-.675-.063c-.644-.05-1.023.044-1.332.334L0 17.193l.177.088c.094.05.353.234.561.398.215.17.461.347.55.391.088.044.17.088.183.101.012.013-.089.17-.228.353-.435.581-.593.871-.574 1.048.019.164.032.17.43.17.517-.006.826-.056 1.261-.208.65-.233 2.058-.94 2.784-1.4.776-.5 1.717-.998 1.956-1.042.082-.02.354-.07.594-.114.58-.107 1.464-.095 2.587.05.108.013.373.045.6.064.227.025.43.057.454.076.026.012.474.037.998.056.934.026 1.104.007 1.3-.189.126-.133.385-.631.498-.985.209-.643.417-.921.366-.492-.113.966-.322 1.692-.713 2.411-.259.499-.663 1.092-.934 1.395-.322.347-.315.36.088.315.619-.063 1.471-.397 2.096-.82.827-.562 1.647-1.691 2.19-3.03.107-.27.22-.22.183.083-.013.094-.038.315-.057.498l-.031.328.353-.202c.833-.48 1.414-1.262 2.127-2.884.227-.518.877-2.922 1.073-3.976a9.64 9.64 0 01.271-1.042c.127-.429.196-.555.48-.858.183-.19.625-.555.978-.808.72-.505.953-.75 1.187-1.205.208-.417.284-1.13.132-1.357-.132-.202-.284-.196-.763.006Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">MariaDB</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {RabbitMQ ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23.035 9.601h-7.677a.956.956 0 01-.962-.962V.962a.956.956 0 00-.962-.956H10.56a.956.956 0 00-.962.956V8.64a.956.956 0 01-.962.962H5.762a.956.956 0 01-.961-.962V.962A.956.956 0 003.839 0H.959a.956.956 0 00-.956.962v22.076A.956.956 0 00.965 24h22.07a.956.956 0 00.962-.962V10.58a.956.956 0 00-.962-.98zm-3.86 8.152a1.437 1.437 0 01-1.437 1.443h-1.924a1.437 1.437 0 01-1.436-1.443v-1.917a1.437 1.437 0 011.436-1.443h1.924a1.437 1.437 0 011.437 1.443z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">RabbitMQ</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Puppeteer ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M17.89 17.86h.397v.174h.028a.466.466 0 0 1 .619-.155l-.11.373a.364.364 0 0 0-.184-.043.288.288 0 0 0-.243.11.471.471 0 0 0-.082.29v.635h-.424zm-.26 1.048a.766.766 0 0 1-.27.28.741.741 0 0 1-.398.101.822.822 0 0 1-.3-.054.752.752 0 0 1-.237-.155.704.704 0 0 1-.214-.529c0-.1.018-.194.056-.282a.719.719 0 0 1 .156-.235.725.725 0 0 1 .529-.22.75.75 0 0 1 .302.056.642.642 0 0 1 .353.384.846.846 0 0 1 .037.402h-1.02c.02.09.063.156.127.198a.387.387 0 0 0 .214.062.345.345 0 0 0 .32-.18zm-.376-.54a.227.227 0 0 0-.03-.074.21.21 0 0 0-.058-.07.264.264 0 0 0-.093-.054.325.325 0 0 0-.43.198zm-1.242.54a.766.766 0 0 1-.27.28.741.741 0 0 1-.397.101.822.822 0 0 1-.3-.054.752.752 0 0 1-.237-.155.704.704 0 0 1-.215-.529c0-.1.019-.194.057-.282a.719.719 0 0 1 .155-.235.725.725 0 0 1 .529-.22c.115 0 .215.018.302.056a.642.642 0 0 1 .353.384.846.846 0 0 1 .037.402h-1.02c.02.09.063.156.127.198a.387.387 0 0 0 .215.062.345.345 0 0 0 .32-.18zm-.376-.54a.227.227 0 0 0-.028-.074.21.21 0 0 0-.06-.07.264.264 0 0 0-.093-.054.325.325 0 0 0-.43.198zm-1.918-.144l-.243-.004.004-.388.25.012-.007-.41.412.004-.016.39.367.02-.012.355-.365.008.013.47c-.012.092.022.145.027.194.08.1.137.068.137.068.02-.008.162-.027.177-.038l.04.388c-.138.082-.377.036-.377.036-.253-.037-.383-.217-.384-.293-.025-.068-.018-.21-.029-.29zm-.412.717c-.037.126-.172.218-.283.285a.772.772 0 0 1-.406.11.944.944 0 0 1-.32-.077c-.09-.038-.165-.113-.233-.18-.068-.065-.093-.142-.131-.23a.822.822 0 0 1-.045-.31c-.015-.194.126-.378.212-.505.28-.238.49-.22.49-.22.387-.075.696.288.718.437.03.086.022.18.022.28-.005.054 0 .05-.031.125h-1.037c.02.09.063.192.104.24.048.06.128.06.207.06.079 0 .163.002.214-.032.053-.034.172-.072.203-.125zm-.37-.558a.41.41 0 0 0-.04-.097c-.014-.026-.05-.046-.076-.066-.024-.023-.071-.037-.109-.05a.31.31 0 0 0-.121-.023.274.274 0 0 0-.168.053c-.057.037-.097.12-.123.19zm-2.34-.372h.028a.388.388 0 0 1 .147-.138.498.498 0 0 1 .254-.06.623.623 0 0 1 .467.207.696.696 0 0 1 .147.232c.036.09.053.19.053.3a.8.8 0 0 1-.053.3.729.729 0 0 1-.147.234.647.647 0 0 1-.467.203.518.518 0 0 1-.254-.056.409.409 0 0 1-.147-.142h-.028l.028.198v.565H10.2V17.86h.396zm.336.198a.34.34 0 0 0-.31.201.37.37 0 0 0-.026.141c0 .053.008.101.025.145a.362.362 0 0 0 .074.107c.032.028.068.05.107.068a.378.378 0 0 0 .257 0 .348.348 0 0 0 .108-.068.304.304 0 0 0 .073-.107.358.358 0 0 0 .028-.145.338.338 0 0 0-.336-.342zm-2.026-.198h.03a.388.388 0 0 1 .146-.138.498.498 0 0 1 .254-.06.623.623 0 0 1 .466.207.696.696 0 0 1 .147.232c.036.09.054.19.054.3a.8.8 0 0 1-.054.3.729.729 0 0 1-.147.234.647.647 0 0 1-.466.203.518.518 0 0 1-.254-.056.409.409 0 0 1-.147-.142h-.029l.03.198v.565H8.51V17.86h.395zm.337.198a.34.34 0 0 0-.31.201.37.37 0 0 0-.027.141c0 .053.01.101.026.145a.362.362 0 0 0 .073.107c.032.028.068.05.108.068a.378.378 0 0 0 .257 0 .348.348 0 0 0 .107-.068.303.303 0 0 0 .074-.107.358.358 0 0 0 .028-.145.338.338 0 0 0-.21-.316.32.32 0 0 0-.126-.026zm-1.433.86h-.028a.47.47 0 0 1-.424.22c-.174 0-.303-.055-.387-.167a.703.703 0 0 1-.128-.438v-.825h.424v.777c0 .076.018.138.054.187.036.047.091.07.167.07a.245.245 0 0 0 .217-.11.497.497 0 0 0 .077-.288v-.636h.424v1.385H7.81zm-2.594.175V17.22h.724a.82.82 0 0 1 .285.048.677.677 0 0 1 .23.136.589.589 0 0 1 .15.206.67.67 0 0 1 .053.27.657.657 0 0 1-.054.267.617.617 0 0 1-.379.342.818.818 0 0 1-.285.048h-.283v.707zm.738-1.125c.092 0 .16-.023.206-.068a.234.234 0 0 0 .068-.172.234.234 0 0 0-.068-.173c-.045-.045-.114-.068-.206-.068h-.297v.48zM18.04 2.758l-.594.05.236 2.932.626.363zm-12.016.01L5.728 6.01l.624-.3.266-2.89zm-.49 5.183l-.044.557-1.247 3.137c-.216.224-.308.514-.307.825L3.93 22.84c0 .669.49 1.16 1.158 1.16H18.82c.67 0 1.25-.444 1.25-1.11V12.485c0-.306-.1-.56-.286-.774L18.44 7.748l-.006-.068-.575.257.267 3.33H5.846l.237-2.615.226-.588L6.143 8l.002-.03zm13.112 2.34l.323.987c-.088-.014-.158-.006-.245-.01zm-13.316.232l-.084.744c-.058-.005-.12.005-.172.007zm-.18 1.134l13.67.008c.47 0 .853.344.853.815v.796H4.313v-.796c0-.47.364-.823.837-.823zm.135.553a.27.27 0 0 0-.272.27c0 .36.542.36.542 0a.27.27 0 0 0-.27-.27zm.92 0c-.36 0-.36.54 0 .54s.362-.54.002-.54zm.896 0c-.39-.034-.39.572 0 .538.33-.028.33-.51 0-.538zm-2.788 1.424h15.36v9.153c0 .595-.38.846-.853.845l-13.668-.004a.828.828 0 0 1-.84-.841zm1.883 4.42c.07-.117.07-.11.068-.186-.008-.073-.004-.076-.053-.135-.054-.054-.123-.138-.2-.134h-.387l-.02.55h.407c.122-.002.16-.084.185-.094zm-.185-.83a.58.58 0 0 1 .442.171c.11.117.164.273.164.465a.65.65 0 0 1-.16.462c-.117.12-.263.21-.43.203l-.4.008-.004.774-.412-.013-.005-2.088zm1.793 1.26l-.012-.624.366-.004.004 1.435-.36.004v-.122a.582.582 0 0 1-.432.15.557.557 0 0 1-.413-.156c-.103-.11-.13-.31-.123-.46l-.004-.847h.372l-.008.77a.328.328 0 0 0 .075.23.25.25 0 0 0 .198.09c.225 0 .336-.156.336-.468zm1.805.077a.36.36 0 0 0-.11-.272c-.07-.073-.115-.118-.218-.115-.1 0-.186.018-.266.094a.388.388 0 0 0-.116.293c0 .12.038.217.117.29.07.073.168.114.27.114.102.003.166-.053.238-.126.087-.094.06-.21.085-.278zm-.262-.76c.176 0 .333.11.466.245a.71.71 0 0 1 .197.515.7.7 0 0 1-.197.512c-.093.16-.31.255-.486.254-.16.005-.36-.066-.428-.197l.004.76-.4.006-.02-2.04.416-.02v.157c.126-.103.285-.2.448-.193zm2.002.764c-.014-.16-.044-.203-.117-.283-.072-.074-.117-.087-.22-.085-.1 0-.178-.005-.257.07a.388.388 0 0 0-.116.294c0 .12.038.217.116.29.07.073.168.114.27.114.102.003.154-.065.226-.137.073-.08.086-.175.098-.263zm-.318-.75c.177 0 .389.096.522.23a.712.712 0 0 1 .198.516.7.7 0 0 1-.198.512c-.105.15-.344.255-.522.254a.475.475 0 0 1-.392-.197v.75l-.405.01-.023-2.034h.428v.137c.126-.103.23-.183.392-.177zm1.268.576l.637-.008c-.017-.074-.063-.12-.124-.166a.357.357 0 0 0-.406.003c-.085.068-.054.056-.107.17zm.313-.575c.179-.003.425.078.552.203.133.13.157.308.166.512l-.031.125h-1.03c.02.095.044.186.104.244.059.056.153.07.234.07a.5.5 0 0 0 .383-.17l.316.141c-.046.14-.187.223-.304.296a.757.757 0 0 1-.408.094c-.184.003-.378-.116-.507-.247a.718.718 0 0 1-.2-.523c0-.21.094-.382.23-.518.13-.132.31-.232.495-.227zm1.673 1.127c.08-.003.11.002.178-.038l.04.388c-.107.063-.135.038-.26.042a.633.633 0 0 1-.416-.155c-.094-.09-.097-.26-.097-.443l-.012-.513-.243-.004.004-.388.25.012-.007-.41.412.004-.016.39.367.02-.012.355-.365.008.003.507c.002.155.042.225.175.225zm.75-.54h.654a.32.32 0 0 0-.12-.186.357.357 0 0 0-.407.003.3.3 0 0 0-.127.184zm.338-.587c.185 0 .368.092.5.22.133.13.173.295.183.5v.12h-1.03a.4.4 0 0 0 .12.228.31.31 0 0 0 .218.086c.155 0 .297-.06.367-.18l.3.15c-.05.13-.12.19-.238.262a.958.958 0 0 1-.452.125.712.712 0 0 1-.502-.224.77.77 0 0 1-.208-.542c0-.21.106-.382.24-.518.132-.132.316-.232.5-.227zm1.27.587h.654a.32.32 0 0 0-.12-.186.357.357 0 0 0-.407.003.3.3 0 0 0-.127.184zm.337-.587a.74.74 0 0 1 .5.22c.134.13.174.295.184.5v.12h-1.03a.4.4 0 0 0 .12.228.31.31 0 0 0 .217.086c.154 0 .297-.06.368-.18l.3.15c-.05.13-.12.19-.238.262a.957.957 0 0 1-.454.125.713.713 0 0 1-.5-.224.77.77 0 0 1-.208-.542c0-.21.106-.382.24-.518.13-.132.315-.232.5-.227zm1.938.04l-.067.364-.18-.023c-.322 0-.36.207-.36.595v.49l-.393.005.008-1.43h.365l-.004.22c.145-.17.215-.286.63-.22zM17.535 7.91l.02-.366 1.317-.687.007.396zM5.04 6.84l1.35.68-.008.393-1.314-.65zm7.21-1.748l4.839 2.448v.392l-4.851-2.46zM6.874 7.51l4.894-2.42-.007.374-4.893 2.444zm3.467-3.974L5.418 1.099 6.64.494l5.352 2.744L17.335.466l1.257.65-4.926 2.478c-.196.098-.13.388.067.486l4.838 2.42-1.22.622-5.353-2.697L6.62 7.129l-1.273-.634 4.998-2.483a.266.266 0 0 0-.004-.477zM5.059 1.888l.007-.377 4.607 2.276-.348.2zm9.648 2.077l-.41-.184 4.596-2.303-.028.412zm.422.306l4.124-2.07a.124.124 0 0 0 .07-.11v-.98c0-.046-.008-.136-.05-.157l-1.94-.94a.124.124 0 0 0-.113 0l-5.167 2.623a.123.123 0 0 1-.11 0L6.679.015a.124.124 0 0 0-.11 0L4.616.938c-.04.02-.02.11-.02.157v.995c0 .047.026.09.07.11l4.14 2.047L4.69 6.239c-.04.02-.108.062-.11.108l.017 1.034a.123.123 0 0 0 .068.113l1.933.986c.034.018.122.03.157.014l5.186-2.602a.124.124 0 0 1 .11 0l5.12 2.603a.124.124 0 0 0 .11 0l1.972-.954c.042-.02.103-.05.104-.096l-.007-1.033c0-.047-.047-.15-.09-.17z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Puppeteer</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {ERLANG ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M8.859 7.889c.154-1.863 1.623-3.115 3.344-3.119 1.734.004 2.986 1.256 3.029 3.119zm12.11 11.707c.802-.86 1.52-1.872 2.172-3.03l-3.616-1.807c-1.27 2.064-3.127 3.965-5.694 3.977-3.738-.012-5.206-3.208-5.198-7.322h13.966c.019-.464.019-.68 0-.904.091-2.447-.558-4.504-1.737-6.106l-.007.005H24v15.186h-3.039zm-17.206-.001C1.901 17.62.811 14.894.813 11.64c-.002-2.877.902-5.35 2.456-7.232H0v15.187h3.761Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">ERLANG</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Numba ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M16.419 15.204s7.235-5.335 4.305-8.786c-3.398-4.003-12.921 4.486-13.962 2.76-1.04-1.725 8.452-5.86 9.481-6.55.112-.075.144-.218.112-.383l1.099-.127-.685-.345.175-.685-.796.621C15.85 1.173 15.34.595 15.049.393c-1.035-.685-2.93-.52-5.685.86-2.756 1.38-9.147 5.685-5.877 10.51 2.93 4.306 11.35-3.094 12.756-1.9 1.205 1.035-8.095 7.411-8.095 7.411h3.965C11.43 18.999 8.148 24 8.148 24l11.934-8.621c-1.253-.186-3.663-.175-3.663-.175zM13.175.908a.776.776 0 01.823.716.776.776 0 01-.717.823.776.776 0 01-.823-.716.768.768 0 01.717-.823z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Numba</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Rust ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Rust</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Pug ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12.0938 4.6358c-2.0663 0-3.6817.204-4.9221.5704a6.4511 6.4511 0 0 0 .0918-.084c.0374-.0375-.0507-.0625-.2285-.0684-.5335-.0175-1.8672.1436-2.9904.7051-1.273.599-4.118 3.7446-4.0432 3.9318.075.1872 1.4594 1.3458 1.8712 1.795.2621.2995 1.0485 2.9592 1.7599 2.51.189-.131.2656-.651.33-1.2931.0582.4975.1155 1.013.1934 1.4805.1123.7488 1.087 1.3474 1.1993 2.0587.1391 1.0138.7614 1.7234 1.9805 2.174.4847.6681 1.2382.3299 1.801.6347.8984.4867 1.9091.2617 2.92.2617 1.0108 0 1.984.186 2.92-.3007.576-.2995 1.32.0311 1.8087-.5802 1.2254-.4494 1.8319-1.1633 1.9727-2.1895.1123-.7113 1.0479-1.3099 1.1602-2.0587.0633-.3799.1102-.802.1582-1.2032.0568.4994.13.9042.291 1.0157.674.4493 1.4978-2.2104 1.7599-2.5099.4118-.4492 1.7963-1.6078 1.8712-1.795.0748-.1872-2.8074-3.3327-4.0803-3.9318-1.1231-.5615-2.4568-.7226-2.9903-.705-.167.0054-.2454.0287-.2247.0624-1.1748-.308-2.6728-.4805-4.6095-.4805zm.0293.5c2.2035 0 3.8486.2253 5.01.6153.1335.0449.2387.098.3593.1465.6901.715 1.6233 1.831 2.0138 3.1173.0246.081.0405.1658.0625.248.0003.0013-.0003.0028 0 .004v.0039c.0453.77.3158 1.4169.2305 1.9903-.1536.9982-.2285 1.9726-.373 2.84l-.002.0039v.0039c-.0289.1922-.218.4762-.4786.8067-.2606.3305-.5955.7024-.6817 1.248v.006l-.0019.0038c-.1006.733-.4207 1.1997-1.17 1.5821.1252-.4447.2051-1.055.2051-1.963.0374-1.1231.0766-1.5722-.8594-2.6954-.7184-.9236-1.704-1.5746-2.793-1.8985-.1111-.3899-.7217-.836-1.551-.836-.8285 0-1.4147.422-1.5352.8204-1.1098.3182-2.116.9759-2.8458 1.9141-.936 1.1232-.8594 1.6097-.8594 2.6955 0 .9037.0795 1.5135.2031 1.961-.7697-.385-1.1078-.857-1.207-1.5802v-.0097c-.0875-.5541-.4371-.9235-.7071-1.254-.27-.3305-.4626-.6166-.4903-.8008l-.002-.004v-.0038c-.1444-.8669-.2196-1.8406-.373-2.838v-.002c-.0853-.5734.1833-1.2203.2285-1.9903v.0156c.0131-.1437.0173-.241.0254-.371.3604-1.1587 1.1531-2.1726 1.8048-2.8752a6.4135 6.4135 0 0 1 .7246-.289c1.1921-.3916 2.8593-.6153 5.0628-.6153zm-5.2092 3.805a1.6473 1.6473 0 0 0-1.6349 1.6484 1.6473 1.6473 0 0 0 1.6485 1.6466 1.6473 1.6473 0 0 0 .4415-.0606c.3487-.3747.7177-.7223 1.1113-1.041a1.6473 1.6473 0 0 0 .0938-.545 1.6473 1.6473 0 0 0-1.6466-1.6485 1.6473 1.6473 0 0 0-.0136 0zm10.2973 0a1.6473 1.6473 0 0 0-1.6368 1.6484 1.6473 1.6473 0 0 0 .1504.6836c.3125.2642.611.547.8945.8477a1.6473 1.6473 0 0 0 .6036.1153 1.6473 1.6473 0 0 0 1.6465-1.6466 1.6473 1.6473 0 0 0-1.6465-1.6485 1.6473 1.6473 0 0 0-.0117 0zm-9.8715.4863a.4118.4118 0 0 1 .4101.412.4118.4118 0 0 1-.4101.4122.4118.4118 0 0 1-.4122-.4121.4118.4118 0 0 1 .4122-.4121zm9.471 0a.4118.4118 0 0 1 .4122.412.4118.4118 0 0 1-.4121.4122.4118.4118 0 0 1-.4122-.4121.4118.4118 0 0 1 .4122-.4121zm-5.1095 1.4863a.1498.2995 17.23 0 1 .0293.004.1498.2995 17.23 0 1 .0547.33.1498.2995 17.23 0 1-.2325.2422.1498.2995 17.23 0 1-.0527-.33.1498.2995 17.23 0 1 .2012-.2462zm.6719.0215a.2995.1498 75.54 0 1 .205.254.2995.1498 75.54 0 1-.0703.328.2995.1498 75.54 0 1-.2207-.2519.2995.1498 75.54 0 1 .0703-.3281.2995.1498 75.54 0 1 .0157-.002zm-.3164.4766s.0358.226.1855.3008c.1498.0749.8614-.1504.8614-.1504-.337.262-.9727.263-.9727.338v.373c0 .4079.0263 1.4614-.0313 1.6856.8238.0045 2.09 1.1255 2.09 2.508v.0741c-.0375-1.3478-1.6091-2.4337-2.0958-2.4337-.4867 0-2.0603 1.0485-2.0978 2.4337v-.0742c0-1.3626 1.2326-2.47 2.0567-2.506-.0704-.5517-.0722-1.1372-.0722-1.6875v-.373c-.2145-.0954-.4322-.1714-.6563-.2364.1846.0326.371.0488.545.0488.1497-.0749.1875-.3008.1875-.3008zm-3.0412 1.3477a.1498.1498 0 0 1 .0078 0 .1498.1498 0 0 1 .1504.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm1.1231 0a.1498.1498 0 0 1 .0078 0 .1498.1498 0 0 1 .1504.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm3.67 0a.1498.1498 0 0 1 .0079 0 .1498.1498 0 0 1 .1504.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm1.1232 0a.1498.1498 0 0 1 .0078 0 .1498.1498 0 0 1 .1504.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm-5.6526.8985a.1498.1498 0 0 1 .0078 0 .1498.1498 0 0 1 .1484.1504.1498.1498 0 0 1-.1484.1504.1498.1498 0 0 1-.1504-.1504.1498.1498 0 0 1 .1426-.1504zm5.3908 0a.1498.1498 0 0 1 .006 0 .1498.1498 0 0 1 .1503.1504.1498.1498 0 0 1-.1504.1504.1498.1498 0 0 1-.1484-.1504.1498.1498 0 0 1 .1425-.1504Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">PUG</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Json ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12.043 23.968c.479-.004.953-.029 1.426-.094a11.805 11.805 0 003.146-.863 12.404 12.404 0 003.793-2.542 11.977 11.977 0 002.44-3.427 11.794 11.794 0 001.02-3.476c.149-1.16.135-2.346-.045-3.499a11.96 11.96 0 00-.793-2.788 11.197 11.197 0 00-.854-1.617c-1.168-1.837-2.861-3.314-4.81-4.3a12.835 12.835 0 00-2.172-.87h-.005c.119.063.24.132.345.201.12.074.239.146.351.225a8.93 8.93 0 011.559 1.33c1.063 1.145 1.797 2.548 2.218 4.041.284.982.434 1.998.495 3.017.044.743.044 1.491-.047 2.229-.149 1.27-.554 2.51-1.228 3.596a7.475 7.475 0 01-1.903 2.084c-1.244.928-2.877 1.482-4.436 1.114a3.916 3.916 0 01-.748-.258 4.692 4.692 0 01-.779-.45 6.08 6.08 0 01-1.244-1.105 6.507 6.507 0 01-1.049-1.747 7.366 7.366 0 01-.494-2.54c-.03-1.273.225-2.553.854-3.67a6.43 6.43 0 011.663-1.918c.225-.178.464-.333.704-.479l.016-.007a5.121 5.121 0 00-1.441-.12 4.963 4.963 0 00-1.228.24c-.359.12-.704.27-1.019.45a6.146 6.146 0 00-.733.494c-.211.18-.42.36-.615.555-1.123 1.153-1.768 2.682-2.022 4.256-.15.973-.15 1.96-.091 2.95.105 1.395.391 2.787.945 4.062a8.518 8.518 0 001.348 2.173 8.14 8.14 0 003.132 2.23 7.934 7.934 0 002.113.54c.074.015.149.015.209.015zm-2.934-.398a4.102 4.102 0 01-.45-.228 8.5 8.5 0 01-2.038-1.534c-1.094-1.137-1.827-2.566-2.247-4.08a15.184 15.184 0 01-.495-3.172 12.14 12.14 0 01.046-2.082c.135-1.257.495-2.501 1.124-3.58a6.889 6.889 0 011.783-2.053 6.23 6.23 0 011.633-.9 5.363 5.363 0 013.522-.045c.029 0 .029 0 .045.03.015.015.045.015.06.03.045.016.104.045.165.074.239.12.479.271.704.42a6.294 6.294 0 012.097 2.502c.42.914.615 1.934.631 2.938.014 1.079-.18 2.157-.645 3.146a6.42 6.42 0 01-2.638 2.832c.09.03.18.045.271.075.225.044.449.074.688.074 1.468.045 2.892-.66 3.94-1.647.195-.18.375-.375.54-.585.225-.27.435-.54.614-.823.239-.375.435-.75.614-1.154a8.112 8.112 0 00.509-1.664c.196-1.004.211-2.022.149-3.026-.135-2.022-.673-4.045-1.842-5.724a9.054 9.054 0 00-.555-.719 9.868 9.868 0 00-1.063-1.034 8.477 8.477 0 00-1.363-.915 9.927 9.927 0 00-1.692-.598l-.3-.06c-.209-.03-.42-.044-.634-.06a8.453 8.453 0 00-1.015.016c-.704.045-1.412.16-2.112.337C5.799 1.227 2.863 3.566 1.3 6.67A11.834 11.834 0 00.238 9.801a11.81 11.81 0 00-.104 3.775c.12 1.02.374 2.023.778 2.977.227.57.511 1.124.825 1.648 1.094 1.783 2.683 3.236 4.51 4.24.688.39 1.408.69 2.157.944.226.074.45.15.689.21z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">JSON</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Leaflet ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M17.69 0c-.355.574-8.432 4.74-10.856 8.649-2.424 3.91-3.116 6.988-2.237 9.882.879 2.893 2.559 2.763 3.516 3.717.958.954 2.257 2.113 4.332 1.645 2.717-.613 5.335-2.426 6.638-7.508 1.302-5.082.448-9.533-.103-11.99A35.395 35.395 0 0 0 17.69 0zm-.138.858l-9.22 21.585-.574-.577Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Leaflet</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Haskell ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M0 3.535L5.647 12 0 20.465h4.235L9.883 12 4.235 3.535zm5.647 0L11.294 12l-5.647 8.465h4.235l3.53-5.29 3.53 5.29h4.234L9.883 3.535zm8.941 4.938l1.883 2.822H24V8.473zm2.824 4.232l1.882 2.822H24v-2.822z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Haskell</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {PyTorch ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">PyTorch</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {PyTorchLighting ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 0L1.75 6v12L12 24l10.25-6V6zm-1.775 18l1.08-4.657-2.428-2.397L13.79 6l-1.082 4.665 2.414 2.384z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">PyTorch Lightning</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {StreamLit ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M16.673 11.32l6.862-3.618c.233-.136.554.12.442.387L20.463 17.1zm-8.556-.229l3.473-5.187c.203-.328.578-.316.793-.028l7.886 11.75zm-3.375 7.25c-.28 0-.835-.284-.993-.716l-3.72-9.46c-.118-.331.139-.614.48-.464l19.474 10.306c-.149.147-.453.337-.72.334z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">StreamLit</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Latex ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M2.176 2.814c.233.42.476.78.73 1.09.247-.013 1.132.456 1.312.523.508.282 1.063.63 1.567.966.505.337.96.662 1.272.9.156.12.278.218.352.286a.483.483 0 01.078.082.08.08 0 01.01.021.06.06 0 01-.004.047.057.057 0 01-.04.03.077.077 0 01-.028 0c-.057 0-.203-.163-.497-.415a23.474 23.474 0 00-2.759-1.827c-.504-.28-.956-.542-1.264-.613a2.322 2.322 0 00-.36-.025 2.706 2.706 0 00-.788.133c.494.414.91.716 1.28.949-.57-.182-1.182-.21-1.902.133.526.329.967.567 1.354.745 1.103.156 2.258.696 3.224 1.309.483.307.904.615 1.219.867.157.125.29.237.39.328.098.091.174.154.197.21.03.073-.019.104-.084.058-.032-.022-.088-.102-.184-.191a7.35 7.35 0 00-.384-.327c-.312-.25-.729-.552-1.209-.857-.893-.562-2.232-1.013-3.173-1.397-.602-.11-1.225-.06-1.906.39.449.2.837.349 1.182.463.812 0 1.892.365 2.935.922 1.042.556 2.04 1.214 2.523 1.774.066.077-.016.126-.074.07-.52-.495-1.463-1.204-2.498-1.756-.639-.337-2.153-1.01-2.886-1.01l.004.002c-.567.02-1.13.195-1.679.716.477.118.885.196 1.244.249-.44.088-.87.3-1.289.722.324.07.616.122.882.162-.328.159-.639.404-.923.78.373.03.703.042 1 .044-.36.166-.696.43-.996.85.533.027.98.025 1.364.003-.422.172-.812.464-1.145.968.662.01 1.188-.022 1.628-.076l-.006.002c.99-.073 2.297.127 2.962.847.052.057-.024.118-.072.074-.648-.58-1.493-.827-2.89-.921h-.002c-.543.149-1.046.446-1.46 1.074.536.008.982-.013 1.366-.05-.469.257-.873.644-1.139 1.306.483-.092.888-.19 1.237-.292-.363.265-.668.636-.873 1.194.324-.072.612-.146.871-.221a2.519 2.519 0 00-.513 1.095c.352-.13.655-.254.926-.377-.257.3-.453.681-.55 1.19.495-.199.899-.388 1.238-.568-.31.333-.543.76-.635 1.356a11.816 11.816 0 001.442-.744c-.433.362-.764.843-.879 1.587.788-.348 1.339-.663 1.767-.955-.184.372-.282.806-.235 1.348.762-.584 1.243-1.056 1.602-1.473-.024.269-.003.56.077.884.546-.939 1.089-1.212 1.65-1.526-.895.451-.762.79-.762 1.184.683-.72 1.635-1.482 1.927-1.96-.39.585-.547 1.14-.65 1.63-1.993 1.054-3.207 1.329-4.568 1.75.528.194 1.093.383.859.652l-.624.622c.399-.124.805-.3 1.158-.059-.035.327-.447.492-.8.683.621-.224.756-.172.92-.12.081.393-.203.603-.388.862 1.565-1.19 3.606-2.13 5.044-2.522 2.022-.681 4.63-1.389 5.339-3.115l.712-2.847-.004.004c-.111-.034-.246-.063-.35-.133a.651.651 0 01-.235-.297c-.252.065-.44.03-.56-.088-.117-.117-.167-.296-.203-.491-.203.041-.362.016-.467-.077-.116-.101-.17-.26-.198-.444l-.008-.039.037-.015a.842.842 0 00.302-.194.257.257 0 00.07-.225l-.006-.037.03-.016c.163-.093.345-.169.428-.28a.274.274 0 00.053-.21.88.88 0 00-.155-.357l-.027-.04.04-.027c.118-.09.244-.179.308-.26.032-.04.048-.076.047-.11 0-.033-.015-.07-.064-.117l-.098-.094.135.006c.213.01.395-.007.538-.053a.504.504 0 00.274-.197c-.007-.033-.02-.063-.02-.098a.484.484 0 01.967 0c0 .044-.015.084-.026.125.177.014.347.01.507-.06l.002.001.035-.013c.236-.085.334.045.72-.456-1.69-2.19-4.157-.635-4.977 1.622-.21.576-1.405.578-1.751 0-1.37-2.95-5.53-6.068-9.07-7.218zm.86 2.145c.906.293 1.913.782 2.77 1.328.43.273.813.543 1.114.779.301.236.566.473.62.575.054.102 0 .14-.082.06-.081-.078-.303-.32-.6-.553-.298-.234-.68-.505-1.106-.777-.775-.49-1.982-.958-2.716-1.412zm-1.7 2.7c1.116.014 2.35.447 3.434.997.541.275 1.023.567 1.395.83.372.263.672.524.734.657.061.134-.02.13-.087.055a4.401 4.401 0 00-.704-.626 11.47 11.47 0 00-1.385-.826C3.76 8.264 2.439 7.82 1.336 7.66zm14.916.772a.381.381 0 100 .762.381.381 0 000-.762zM1.7 8.478c.822.072 1.72.368 2.534.75 1.086.509 2.035 1.158 2.434 1.667.035.045-.014.131-.08.062-.428-.44-1.322-1.131-2.397-1.635-.913-.421-2.282-.87-3.262-.78.251-.03.497-.088.771-.064zm16.339.01c-.366.475-.53.423-.703.464.094.43.35.586.585.77l-.06.012c2.315-.447 4.186-.286 6.139-.236l-5.961-1.01zm-.178 1.246h-.002l-.004.016.006-.016zm-.625-.757c-.183.074-.373.076-.563.059a.477.477 0 01-.42.26.483.483 0 01-.435-.278.609.609 0 01-.274.188c-.139.045-.308.057-.493.055.02.035.054.068.055.104a.273.273 0 01-.069.174c-.073.092-.189.17-.295.248.087.141.137.26.149.362a.39.39 0 01-.07.284c-.106.14-.288.21-.439.293a.374.374 0 01-.09.268.89.89 0 01-.297.198c.027.156.074.283.154.354.086.076.211.103.425.047l.055-.014.01.055c.033.207.088.385.187.483.1.099.244.135.503.055l.049-.015.016.048c.05.142.12.223.209.282.087.06.247.112.358.147.798-.869 1.525-1.772 1.884-2.86-.225-.177-.506-.338-.609-.797zm-16.23.386c1.165-.08 2.283.196 3.202.626.92.43 1.658.939 1.974 1.307.075.087-.019.12-.072.072a8.187 8.187 0 00-1.947-1.29c-.904-.414-2.193-.644-3.157-.715zm.864.802c.61.02 1.24.155 1.806.352.756.262 1.421.614 1.747.98.045.05-.007.127-.074.069-.349-.304-.961-.693-1.706-.951-.574-.195-1.613-.369-2.268-.397.197-.022.292-.06.495-.053zm1.05 1.788c.423.034.886.133 1.341.407.043.026.049.136-.049.09-.856-.402-1.326-.49-2.457-.31.386-.128.74-.221 1.164-.187zm-.04.788c.4-.035.784-.002 1.297.204.044.018.08.126-.033.094-.857-.243-1.167-.328-2.287.104.28-.229.622-.366 1.023-.402zm1.285.687c.317-.023.635-.026.934.006.052.006.055.105-.006.102a7.87 7.87 0 00-1.837.115c-.243.046-.423.043-1.405.458.287-.233.794-.452 1.385-.56a8.91 8.91 0 01.93-.12zm1.28.49c.099.003.062.104.006.103-.728-.01-1.304.132-1.875.295a9.78 9.78 0 00-1.318.525c.283-.23.713-.457 1.291-.622.579-.166 1.248-.326 1.896-.302zm.528.398c.036-.005.105.084.018.1-.73.137-1.244.267-1.794.454-.216.074-.58.207-1.243.587.26-.269.656-.492 1.213-.68.558-.19 1.196-.37 1.806-.46zm.311.507c.075-.012.097.087.02.102-1.217.241-1.76.556-2.54 1.144.504-.523 1.297-1.051 2.52-1.246zm.595.448c.087-.013.11.087.021.1-.872.13-1.477.553-2.255 1.33.295-.493 1.004-1.24 2.234-1.43zm.372.39c.046-.006.114.073.023.1a2.634 2.634 0 00-.669.3c-.182.118-.3.2-.597.507.111-.245.296-.434.542-.59.247-.157.509-.293.7-.317z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Latex</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Plotly ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M2.021 0C.967 0 .111.883.111 1.973v20.054c0 1.09.857 1.973 1.91 1.973H21.98c1.054 0 1.91-.884 1.91-1.973V1.973C23.89.883 23.034 0 21.98 0H2.02zM10.1 4.648a.72.72 0 0 1 .304.127 1.196 1.196 0 0 1 .356.373.212.212 0 0 1 .084.163c.165.388.135.857-.149 1.203-.19.232-.429.305-.648.263a.241.241 0 0 1-.096.04c-.41.13-.884-.218-.994-.663-.065-.26-.087-.674.076-.908a.367.367 0 0 1 .082-.086.917.917 0 0 1 .05-.264c.077-.214.256-.214.425-.148a.542.542 0 0 1 .09-.006 1.938 1.938 0 0 1 .158.008.277.277 0 0 1 .262-.102zm8.43 0c.098.012.204.06.304.127a1.196 1.196 0 0 1 .355.373.212.212 0 0 1 .084.163c.166.388.136.857-.148 1.203-.19.232-.43.305-.648.263a.241.241 0 0 1-.096.04c-.41.13-.885-.218-.994-.663-.065-.26-.087-.674.076-.908a.367.367 0 0 1 .082-.086.91.91 0 0 1 .049-.264c.077-.214.256-.214.424-.148a.57.57 0 0 1 .091-.006 1.938 1.938 0 0 1 .159.008.277.277 0 0 1 .261-.102zm-13.159.16c.224-.013.461.063.649.198a1.069 1.069 0 0 1 .23.223 1.518 1.518 0 0 1 .059.039c.341.244.312.679.074.992l-.004.008a.91.91 0 0 1-.897.558c-.302-.008-.611-.084-.82-.271-.2-.143-.34-.356-.332-.627a.131.131 0 0 1 .092-.127 1.042 1.042 0 0 1 .342-.6.704.704 0 0 1 .607-.393zm8.682.003c.224-.014.461.06.648.195a1.069 1.069 0 0 1 .229.224 1.518 1.518 0 0 1 .058.04c.342.244.315.679.076.992l-.005.006a.907.907 0 0 1-.895.558c-.302-.008-.614-.084-.822-.271a.73.73 0 0 1-.33-.627.131.131 0 0 1 .092-.125 1.04 1.04 0 0 1 .34-.6.705.705 0 0 1 .61-.393zm-8.282.496a.563.563 0 0 1 .034.04l.011.005a.126.126 0 0 1 .088.076.596.596 0 0 1 .225.125.659.659 0 0 0-.078-.135 1.161 1.161 0 0 0-.28-.111zm8.68 0a.563.563 0 0 1 .033.04l.012.005c.039.007.07.038.088.076a.596.596 0 0 1 .225.125.659.659 0 0 0-.079-.135 1.153 1.153 0 0 0-.279-.111zm-4.553.119a1.912 1.912 0 0 0-.005.295c.075-.042.081-.17.064-.262a.322.322 0 0 0-.059-.033zm8.428 0a1.943 1.943 0 0 0-.004.295c.076-.042.08-.17.063-.262l-.02-.014a.303.303 0 0 0-.039-.02zM5.55 5.65l-.086.028.01.04c.057-.032.133-.028.175.028a.435.435 0 0 0-.003-.057.335.335 0 0 1-.075-.023c-.008-.004-.014-.01-.021-.016zm8.68 0l-.086.028.011.04c.057-.032.134-.028.176.028a.435.435 0 0 0-.004-.057.335.335 0 0 1-.074-.023.153.153 0 0 1-.023-.016zm-9.032.088c.003.017.005.036.01.053a.888.888 0 0 0 .023.078c-.026-.029-.038-.073-.033-.13zm8.68.002a.866.866 0 0 0 .033.13c-.026-.029-.038-.072-.033-.13zm-3.18.02l-.011.017a.38.38 0 0 1-.13.237.183.183 0 0 0-.001.006.119.119 0 0 1-.04.119.9.9 0 0 1-.029.064 1.862 1.862 0 0 1-.148.285.572.572 0 0 0 .217-.205c.1-.156.147-.34.142-.523zm8.43 0l-.012.017a.378.378 0 0 1-.129.237c0 .001 0 .004-.002.006.013.043-.005.088-.039.119a1.163 1.163 0 0 1-.029.064 1.862 1.862 0 0 1-.148.285.566.566 0 0 0 .216-.205c.1-.156.148-.34.143-.523zm-9.961.039a1.314 1.314 0 0 0 .004.133c.017.185.078.383.219.513a.59.59 0 0 0 .086.067 1.038 1.038 0 0 1-.143-.278 2.565 2.565 0 0 1-.166-.435zm8.43 0a1.314 1.314 0 0 0 .004.133c.017.185.078.383.218.513a.59.59 0 0 0 .086.067 1.054 1.054 0 0 1-.142-.278 2.522 2.522 0 0 1-.166-.435zm-11.67.146a.434.434 0 0 1-.028.065l.036.068a.238.238 0 0 0-.008-.133zm8.681 0a.51.51 0 0 1-.029.065l.035.068a.241.241 0 0 0-.006-.133zm-9.09.41a.61.61 0 0 1-.18.038l-.013.015a.532.532 0 0 0 .229-.013.495.495 0 0 1-.035-.04zm8.68 0a.61.61 0 0 1-.18.038l-.013.015a.532.532 0 0 0 .228-.013.625.625 0 0 1-.035-.04zm-4.308 2.3a1.061 1.061 0 0 1 1.052 1.072v8.58c0 .592-.47 1.072-1.052 1.072-.583 0-1.055-.48-1.055-1.072v-8.58c0-.592.472-1.072 1.055-1.073zm8.431 0a1.062 1.062 0 0 1 1.053 1.072v8.58c0 .592-.47 1.072-1.053 1.072-.582 0-1.054-.48-1.054-1.072v-8.58c0-.592.472-1.072 1.054-1.073zm-12.95.105c.224-.013.461.06.649.195a1.075 1.075 0 0 1 .23.225 1.871 1.871 0 0 1 .059.039c.341.244.312.679.074.992l-.004.006a.91.91 0 0 1-.897.558c-.302-.007-.611-.083-.82-.271-.2-.142-.34-.354-.332-.625a.131.131 0 0 1 .092-.127 1.042 1.042 0 0 1 .342-.6.701.701 0 0 1 .607-.393zm8.682 0c.224-.013.461.06.648.195a1.075 1.075 0 0 1 .229.225 1.871 1.871 0 0 1 .058.039c.342.244.315.679.076.992l-.005.006a.907.907 0 0 1-.895.558c-.302-.007-.614-.083-.822-.271a.727.727 0 0 1-.33-.625.131.131 0 0 1 .092-.127 1.04 1.04 0 0 1 .34-.6.705.705 0 0 1 .61-.393zm-8.282.496a.567.567 0 0 1 .034.043l.011.002a.126.126 0 0 1 .088.076.599.599 0 0 1 .225.125.659.659 0 0 0-.078-.133 1.21 1.21 0 0 0-.28-.113zm8.68 0a.567.567 0 0 1 .033.043l.012.002c.039.007.07.038.088.076a.599.599 0 0 1 .225.125.659.659 0 0 0-.079-.133 1.2 1.2 0 0 0-.279-.113zM5.55 9.6l-.086.027.01.041c.057-.032.133-.029.175.027a.437.437 0 0 0-.003-.054.323.323 0 0 1-.075-.026c-.008-.004-.014-.01-.021-.015zm8.68 0l-.086.027.011.041c.057-.032.134-.029.176.027a.437.437 0 0 0-.004-.054.323.323 0 0 1-.074-.026.153.153 0 0 1-.023-.015zm-9.032.09a.575.575 0 0 0 .032.123.164.164 0 0 1-.032-.124zm8.68 0a.575.575 0 0 0 .031.123.169.169 0 0 1-.031-.124zm-7.951.206a.419.419 0 0 1-.028.063 18.358 18.358 0 0 1 .036.07.237.237 0 0 0-.008-.133zm8.681 0a.419.419 0 0 1-.029.063 18.358 18.358 0 0 1 .035.07.241.241 0 0 0-.006-.133zm-9.09.409a.627.627 0 0 1-.18.037v.002l-.013.015a.548.548 0 0 0 .229-.015.61.61 0 0 1-.035-.04zm8.68 0a.627.627 0 0 1-.18.037v.002l-.013.015a.548.548 0 0 0 .228-.015l-.035-.04zm-8.525 2.64c.582 0 1.053.48 1.053 1.073v4.289c0 .592-.47 1.072-1.053 1.072-.582 0-1.055-.48-1.055-1.072v-4.29c0-.592.473-1.072 1.055-1.072zm8.432 0c.581 0 1.054.48 1.054 1.073v4.289c0 .592-.473 1.072-1.054 1.072-.583 0-1.053-.48-1.053-1.072v-4.29c0-.592.47-1.072 1.053-1.072Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Plotly</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Pandas ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Pandas</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Numpy ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M10.315 4.876L6.3048 2.8517l-4.401 2.1965 4.1186 2.0683zm1.8381.9277l4.2045 2.1223-4.3622 2.1906-4.125-2.0718zm5.6153-2.9213l4.3193 2.1658-3.863 1.9402-4.2131-2.1252zm-1.859-.9329L12.021 0 8.1742 1.9193l4.0068 2.0208zm-3.0401 16.7443V24l4.7107-2.3507-.0053-5.3085zm4.7037-4.2057l-.0052-5.2528-4.6985 2.3356v5.2546zm5.6553-.9845v5.327l-4.0178 2.0052-.0029-5.3028zm0-1.8626V6.4214l-4.0253 2.001.0034 5.2633zM11.2062 11.571L8.0333 9.9756v6.895s-3.8804-8.2564-4.2399-8.998c-.0463-.0957-.2371-.2007-.2858-.2262C2.8118 7.2812.773 6.2485.773 6.2485V18.43l2.8204 1.5076v-6.3674s3.8392 7.3775 3.878 7.458c.0389.0807.4245.8582.8362 1.1314.5485.363 2.8992 1.7766 2.8992 1.7766z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Numpy</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {SCIPY ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M15.697 13.496c-.784-1.072-1.982-1.519-3.694-1.88l-1.592-.375-1.201-.515c-.631-.446-1.17-1.634-1.017-2.681a3 3 0 0 1 3.386-2.526 2.962 2.962 0 0 1 1.962 1.155L15.35 9.05c1.033 1.33 2.195 1.727 3.459 1.098l.637-.27a.22.22 0 0 1 .278.087l.127.19a.311.311 0 0 0 .156.131.326.326 0 0 0 .33-.058l1.467-1.384c.257-.22.182-.422.182-.422l-.354-.806s-.097-.193-.431-.149l-1.968.181a.327.327 0 0 0-.27.411l.071.227c.014.047.014.1-.005.148a.219.219 0 0 1-.124.125l-.556.235c-.582.341-1.244.123-1.686-.417l-.505-.67-1.438-1.91a4.421 4.421 0 0 0-2.929-1.72C9.355 3.733 7.095 5.42 6.741 7.84c-.179 1.22.187 2.375.855 3.302.485.674 1.373 1.06 1.854 1.18l1.262.36 1.208.277c.166.04.634.155.91.255.256.092.845.31 1.324.701.572.582.875 1.413.746 2.284a2.744 2.744 0 0 1-4.897 1.255l-1.726-2.292a2.294 2.294 0 0 0-1.514-.89 2.31 2.31 0 0 0-1.708.439l-3.632 2.71A11.002 11.002 0 0 1 0 12C0 5.798 5.133.768 11.465.768c4.715 0 8.761 2.788 10.523 6.77l.581-.27.393-1.072.411.144-.353.96.98.337-.148.402-1.095-.382-.603.277c.5 1.262.778 2.632.778 4.066 0 6.203-5.135 11.232-11.467 11.232a11.526 11.526 0 0 1-9.26-4.61l3.721-2.788a.855.855 0 0 1 1.163.19l1.826 2.455a4.186 4.186 0 0 0 2.673 1.502c2.302.322 4.439-1.273 4.773-3.563a4.14 4.14 0 0 0-.664-2.922"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">SCIPY</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Solidity ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L15.552 0H8.411zm4.036 17.392l3.572 6.354 3.575-6.354h-7.147zm-.608-10.284h-7.43l3.715 6.605 3.715-6.605zm.428-.25h7.428L15.982.255l-3.715 6.603zM15.589 24l-3.569-6.349L8.448 24h7.141zm-3.856-6.858H4.306l3.712 6.603 3.715-6.603zm.428-.25h7.433l-3.718-6.605-3.715 6.605z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Solidity</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Crystal ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23.964 15.266l-8.687 8.669c-.034.035-.086.052-.121.035L3.29 20.79c-.052-.017-.087-.052-.087-.086L.007 8.856c-.018-.053 0-.087.035-.122L8.728.065c.035-.035.087-.052.121-.035l11.866 3.18c.052.017.087.052.087.086l3.18 11.848c.034.053.016.087-.018.122zm-11.64-9.433L.667 8.943c-.017 0-.035.034-.017.052l8.53 8.512c.017.017.052.017.052-.017l3.127-11.64c.017 0-.018-.035-.035-.017Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Crystal</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {CoffeeScript ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M4.645 7.472c2.1.53 4.779.8 8.008.8 3.299 0 5.918-.27 8.008-.8 2.23-.52 3.299-1.22 3.299-1.88 0-.47-.48-.93-1.35-1.28.2.13.35.35.35.59 0 .67-1.01 1.22-3.039 1.68-1.88.41-4.279.7-7.198.7-2.82 0-5.329-.29-7.138-.68-1.95-.48-2.97-1-2.97-1.68 0-.28.13-.52.52-.8-1.22.47-1.88.87-1.88 1.47.07.68 1.16 1.36 3.39 1.88zm4.689-2.16c2.27-.2 2.929-1.659 5.588-1.899 1.31-.1 2.14.16 2.23.62.08.43-.57.72-1.36.78-1.09.11-1.54-.28-1.63-.65-.81.09-.94.43-.9.67.09.46 1.07.92 2.75.76 1.9-.15 2.54-.9 2.38-1.65-.2-.98-1.66-1.8-4.28-1.55-3.359.3-3.339 1.86-5.628 2.05-.94.09-1.46-.13-1.55-.5-.06-.37.4-.55.94-.59.5-.05 1.11.04 1.4.2.21-.11.28-.22.26-.35-.1-.35-.79-.5-1.66-.44-1.7.15-1.7.91-1.64 1.25.17.87 1.48 1.45 3.1 1.3zm11.417 3.84c-2.1.49-4.779.809-8.008.809-3.3 0-5.989-.34-8.078-.8-1.88-.48-2.88-1.01-3.23-1.56.18 1.23.49 2.42.89 3.55-.48.3-.91.67-1.3 1.17a4.519 4.519 0 00-1.019 3.098 3.6 3.599 0 001.42 2.62c.87.68 1.81.88 2.879.68.41-.07.87-.28 1.29-.42-.88 0-1.62-.28-2.36-.87a3.55 3.549 0 01-1.49-2.42c-.2-.94 0-1.81.53-2.579.12-.15.25-.28.39-.4.3.73.62 1.45.98 2.12.81 1.23 1.62 2.299 2.43 3.459.35.68.58 1.35.74 2.019a3.899 3.899 0 002.229 1.5c1.15.4 2.35.58 3.579.51h.13a10.197 10.197 0 003.689-.52 4.179 4.179 0 002.16-1.49h.07c.13-.67.35-1.34.67-2.02.799-1.17 1.619-2.229 2.419-3.458A20.995 20.993 0 0024 7.612c-.43.6-1.44 1.13-3.25 1.54z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">CoffeeScript</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {KERAS ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M24 0H0v24h24V0zM8.45 5.16l.2.17v6.24l6.46-6.45h1.96l.2.4-5.14 5.1 5.47 7.94-.2.3h-1.94l-4.65-6.88-2.16 2.08v4.6l-.19.2H7l-.2-.2V5.33l.17-.17h1.48z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">KERAS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Scikit ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M15.601 5.53c-1.91.035-3.981.91-5.63 2.56-2.93 2.93-2.083 8.53-1.088 9.525.805.804 6.595 1.843 9.526-1.088a9.74 9.74 0 0 0 .584-.643c.043-.292.205-.66.489-1.106a1.848 1.848 0 0 1-.537.176c-.144.265-.37.55-.676.855-.354.335-.607.554-.76.656a.795.795 0 0 1-.437.152c-.35 0-.514-.308-.494-.924-.22.316-.425.549-.612.7a.914.914 0 0 1-.578.224c-.194 0-.36-.09-.496-.273a1.03 1.03 0 0 1-.193-.507 4.016 4.016 0 0 1-.726.583c-.224.132-.47.197-.74.197-.3 0-.543-.096-.727-.288a.978.978 0 0 1-.257-.524v.004c-.3.276-.564.48-.79.611a1.295 1.295 0 0 1-.649.197.693.693 0 0 1-.571-.275c-.145-.183-.218-.43-.218-.739 0-.464.101-1.02.302-1.67.201-.65.445-1.25.733-1.797l.842-.312a.21.21 0 0 1 .06-.013c.063 0 .116.047.157.14.04.095.061.221.061.38 0 .451-.104.888-.312 1.31-.207.422-.532.873-.974 1.352-.018.23-.027.388-.027.474 0 .193.036.345.106.458.071.113.165.169.282.169a.71.71 0 0 0 .382-.13c.132-.084.333-.26.602-.523.028-.418.187-.798.482-1.142.324-.38.685-.569 1.08-.569.206 0 .37.054.494.16a.524.524 0 0 1 .186.417c0 .458-.486.829-1.459 1.114.088.43.32.646.693.646a.807.807 0 0 0 .417-.117c.129-.076.321-.243.575-.497.032-.252.118-.495.259-.728.182-.3.416-.544.701-.73.285-.185.537-.278.756-.278.276 0 .47.127.58.381l.677-.374h.186l-.292.971c-.15.488-.226.823-.226 1.004 0 .19.067.285.202.285.086 0 .181-.045.285-.137.104-.092.25-.232.437-.42v.001c.143-.155.274-.32.392-.494-.19-.084-.285-.21-.285-.375 0-.17.058-.352.174-.545.116-.194.275-.29.479-.29.172 0 .258.088.258.265 0 .139-.05.338-.149.596.367-.04.687-.32.961-.842l.228-.01c1.059-2.438.828-5.075-.83-6.732-1.019-1.02-2.408-1.5-3.895-1.471zm4.725 8.203a8.938 8.938 0 0 1-1.333 2.151 1.09 1.09 0 0 0-.012.147c0 .168.047.309.14.423.092.113.206.17.34.17.296 0 .714-.264 1.254-.787-.001.04-.003.08-.003.121 0 .146.012.368.036.666l.733-.172c0-.2.003-.357.01-.474.01-.157.033-.33.066-.517.02-.11.07-.216.152-.315l.186-.216a5.276 5.276 0 0 1 .378-.397c.062-.055.116-.099.162-.13a.26.26 0 0 1 .123-.046c.055 0 .083.035.083.106 0 .07-.052.236-.156.497-.194.486-.292.848-.292 1.084 0 .175.046.314.136.418a.45.45 0 0 0 .358.155c.365 0 .803-.269 1.313-.808v-.381c-.361.426-.623.64-.784.64-.109 0-.163-.067-.163-.2 0-.1.065-.316.195-.65.19-.486.285-.836.285-1.048a.464.464 0 0 0-.112-.319.36.36 0 0 0-.282-.127c-.165 0-.354.077-.567.233-.213.156-.5.436-.863.84.053-.262.165-.622.335-1.08l-.809.156a6.54 6.54 0 0 0-.399 1.074c-.04.156-.07.316-.092.48a7.447 7.447 0 0 1-.49.45.38.38 0 0 1-.229.08.208.208 0 0 1-.174-.082.352.352 0 0 1-.064-.222c0-.1.019-.214.056-.343.038-.13.12-.373.249-.731l.308-.849zm-17.21-2.927c-.863-.016-1.67.263-2.261.854-1.352 1.352-1.07 3.827.631 5.527 1.7 1.701 4.95 1.21 5.527.632.467-.466 1.07-3.827-.631-5.527-.957-.957-2.158-1.465-3.267-1.486zm12.285.358h.166v.21H15.4zm.427 0h.166v.865l.46-.455h.195l-.364.362.428.684h-.198l-.357-.575-.164.166v.41h-.166zm1.016 0h.166v.21h-.166zm.481.122h.166v.288h.172v.135h-.172v.717c0 .037.006.062.02.075.012.013.037.02.074.02a.23.23 0 0 0 .078-.01v.141a.802.802 0 0 1-.136.014.23.23 0 0 1-.15-.043.15.15 0 0 1-.052-.123v-.79h-.141v-.136h.141zm-3.562.258c.081 0 .15.012.207.038.057.024.1.061.13.11s.045.106.045.173h-.176c-.006-.111-.075-.167-.208-.167a.285.285 0 0 0-.164.041.134.134 0 0 0-.06.117c0 .035.015.065.045.088.03.024.08.044.15.06l.16.039a.47.47 0 0 1 .224.105c.047.046.07.108.07.186a.3.3 0 0 1-.052.175.327.327 0 0 1-.152.116.585.585 0 0 1-.226.041c-.136 0-.24-.03-.309-.088-.069-.059-.105-.149-.109-.269h.176c.004.037.01.065.017.084a.166.166 0 0 0 .034.054c.044.043.112.065.204.065a.31.31 0 0 0 .177-.045.139.139 0 0 0 .067-.119.116.116 0 0 0-.038-.09.287.287 0 0 0-.124-.055l-.156-.038a1.248 1.248 0 0 1-.159-.05.359.359 0 0 1-.098-.061.22.22 0 0 1-.058-.083.32.32 0 0 1-.016-.108c0-.096.036-.174.109-.232a.45.45 0 0 1 .29-.087zm1.035 0a.46.46 0 0 1 .202.043.351.351 0 0 1 .187.212.577.577 0 0 1 .023.126h-.168a.256.256 0 0 0-.078-.168.242.242 0 0 0-.17-.06.248.248 0 0 0-.155.05.306.306 0 0 0-.1.144.662.662 0 0 0-.034.224.58.58 0 0 0 .035.214.299.299 0 0 0 .101.135.261.261 0 0 0 .157.048c.142 0 .227-.084.256-.252h.167a.519.519 0 0 1-.065.22.35.35 0 0 1-.146.138.464.464 0 0 1-.216.048.448.448 0 0 1-.246-.066.441.441 0 0 1-.161-.192.703.703 0 0 1-.057-.293c0-.085.01-.163.032-.233a.522.522 0 0 1 .095-.182.403.403 0 0 1 .15-.117.453.453 0 0 1 .191-.04zm.603.03h.166v1.046H15.4zm1.443 0h.166v1.046h-.166zm-5.05.618c-.08 0-.2.204-.356.611-.155.407-.308.977-.459 1.71.281-.312.509-.662.683-1.05.175-.387.262-.72.262-.999a.455.455 0 0 0-.036-.197c-.025-.05-.056-.075-.093-.075zm4.662 1.797c-.221 0-.431.188-.629.563-.197.376-.296.722-.296 1.038 0 .12.029.216.088.29a.273.273 0 0 0 .223.111c.221 0 .43-.188.625-.565.196-.377.294-.725.294-1.043a.457.457 0 0 0-.083-.29.269.269 0 0 0-.222-.104zm-2.848.007c-.146 0-.285.11-.417.333-.133.222-.2.51-.2.866.566-.159.849-.452.849-.881 0-.212-.077-.318-.232-.318Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Scikit-learn</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {TensorFlow ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">TensorFlow</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Delphi ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.986 0C5.74 0 .47 4.84.03 11.167c-.46 6.61 4.527 12.343 11.138 12.804 6.61.46 12.343-4.527 12.804-11.138C24.43 6.223 19.444.49 12.833.03 12.55.01 12.267 0 11.986 0zm1.89 3.14c.426 0 .845.027 1.258.079l-.604 1.12-1.116 2.073-.757 1.414c-.027.05-.056.07-.114.067-1.187-.08-2.017.235-2.156.266l.2-.75 1.015-3.768c.023-.085.047-.17.068-.256.71-.16 1.449-.244 2.206-.244zm2.544.327c1.191.312 2.298.838 3.277 1.534L17.9 6.514l-1.712 1.435c-.288.242-.576.486-.861.732-.046.039-.08.043-.137.017a5.77 5.77 0 00-1.893-.708l.463-.67 1.83-2.651c.277-.4.554-.8.83-1.202zm-5.699.181c-.016.104-.03.201-.047.298a1675.621 1675.621 0 01-.58 3.327c-.06.352-.115.645-.17.998-.01.066-.051.076-.093.093-.886.368-1.605 1.009-1.837 1.236l-.053-.635c-.02-.227-.037-.453-.055-.679-.019-.235-.037-.47-.057-.704l-.06-.685-.057-.678-.06-.703c-.005-.066-.015-.132-.014-.198l.001-.005a10.086 10.086 0 013.082-1.665zM6.867 5.995l.142.632.522 2.323c.066.293.133.568.195.862a.123.123 0 01-.024.093 6.798 6.798 0 00-.955 1.466l-.277-.559c-.43-.865-.859-1.73-1.29-2.593a.142.142 0 01-.018-.063l.125-.206c.249-.353.491-.713.755-1.055.197-.254.433-.477.651-.714l.174-.186zm5.338 2.134c.117 0 .234.003.351.011.807.053 1.561.298 2.274.676.457.242.878.536 1.27.871.067.057.13.118.202.184l-1.383.95-3.723 2.544c-.308.21-.615.425-.925.633-.07.046-.092.086-.072.172.08.346.147.694.22 1.04.003.015.01.028.017.049l.622-.123 1.241 2.606c-.148-.02-.282-.041-.417-.057-.285-.032-.57-.067-.856-.09a7.53 7.53 0 00-.758-.032c-.453.01-.907.038-1.34.192-.242.086-.46.208-.622.432-.109-.107-.219-.208-.32-.316a5.686 5.686 0 01-1.012-1.503 5.857 5.857 0 01-.47-1.566 5.387 5.387 0 01-.051-1.28 5.775 5.775 0 011.053-2.916 5.85 5.85 0 013.804-2.4c.297-.051.596-.077.895-.077zm-1.39.785c-.026.011-.051.021-.076.033a7.446 7.446 0 00-1.525.95 6.121 6.121 0 00-1.403 1.555 4.536 4.536 0 00-.686 2.253c-.018.485.05.962.17 1.431.17.675.454 1.304.798 1.907.033.058.074.05.115.031.119-.056.235-.118.357-.18l-.04-.07c-.164-.287-.344-.566-.489-.862-.393-.805-.599-1.65-.52-2.554.03-.33.089-.652.192-.966.372-1.127 1.09-2.004 1.988-2.75.35-.29.723-.548 1.119-.778zM4.677 9.1l.347.464c.506.68 1.018 1.358 1.524 2.037.037.05.065.091.037.162-.143.366-.27.83-.318 1.205-.124-.109-.247-.216-.36-.317l-1.502-1.324c-.116-.103-.233-.205-.346-.312a.11.11 0 01-.028-.052 10.186 10.186 0 01.617-1.808l.029-.055zM17 9.695l.135.816c.057.353.111.706.168 1.06l.193 1.192c.036.217.07.435.107.653.01.057.003.086-.067.099-.79.153-1.581.311-2.372.466-.987.194-1.975.385-2.962.578-.516.101-1.03.205-1.546.307-.009.002-.017 0-.032-.001-.058-.207-.119-.414-.172-.623-.006-.022.016-.06.038-.08zM3.858 11.87l.572.356c.566.352 1.143.707 1.71 1.057.055.034.075.068.072.13-.009.152-.045.858.035 1.355l-.42-.147c-.677-.234-1.353-.469-2.03-.7a.188.188 0 01-.03-.014 10.418 10.418 0 01.09-2.037zm-.018 2.834c.117.022.23.043.342.067.696.145 1.387.287 2.082.435.03.007.075.042.078.069.06.28.249.819.257.85h-.401c-.314 0-.628-.002-.942 0-.37.004-.741.01-1.112.018h-.007a10.21 10.21 0 01-.297-1.44zm8.243.561c.02 0 .05.02.067.036.304.302.597.615.911.905.264.244.552.461.83.69.395.324.741.697 1.039 1.113.52.727.896 1.522 1.105 2.392a.481.481 0 01-.032.25c-.09.265-.282.457-.494.628-.296.24-.63.42-.982.566-.073.03-.1.015-.132-.056-.363-.794-.73-1.586-1.096-2.378l-1.487-3.223-.347-.75-.02-.052c.214-.041.424-.083.634-.12h.004zM6.69 16.47c.035 0 .06.017.084.06.132.232.158.337.431.76L5.09 18.417c-.257-.45-.48-.923-.667-1.413l.49-.117 1.732-.413a.18.18 0 01.046-.006zm3.534 1.412c.118 0 .235.005.353.015.537.045 1.072.111 1.608.171.027.003.063.03.075.055.217.469.432.939.646 1.41.01.02.01.052 0 .07l-.597 1.078c-.417-.071-.824-.148-1.234-.208a14.496 14.496 0 00-.948-.108c-.324-.026-.649-.05-.973-.049-.543 0-1.083.05-1.603.225l-.045.014.305-.71c.191-.446.388-.89.57-1.34a.647.647 0 01.307-.334 2.2 2.2 0 01.761-.23c.257-.036.516-.059.775-.059zm.02.27a5.133 5.133 0 00-1.324.21.155.155 0 00-.083.076c-.169.345-.335.692-.5 1.039-.051.104-.1.21-.15.315l.023.02c.005-.013.007-.028.015-.039.285-.4.57-.8.857-1.198a.234.234 0 01.113-.08c.535-.165 1.072-.314 1.645-.272-.027-.008-.054-.017-.081-.022a2.644 2.644 0 00-.515-.048z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Delphi</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Groovy ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.997 6.012S10.315 8.8 9.516 10.155c-.155.058-.172.041-.341.207-.41-.47-.897-.041-1.028.22-.057-.566-.151-.567-.279-.694.074-.496.316-1.305-.241-1.884-1.078-.727-2.326 1.05-3.021 1.982l-.375.622c-1.546-.032-2.763.008-4.231-.021 1.79.67 1.864.686 4.026 1.506 0 .066.161.372.34.552.147.15.308.234.389.284-.106.054-.32.138-.385.258-.292.546.139.672.418 1.107.315.568.382.944 1.126.625.254-.11.562-.148.758-.21-.693 1.094-.87 1.392-2.083 3.274l.012.004c4.85-1.893 4.974-1.942 7.373-2.89 3.448 1.338 3.646 1.448 7.432 2.891-.529-.826-.89-1.343-1.274-1.995.151-.013.483-.046.777-.233.213-.135.463-.288.688-.574.443-.565.551-1.277.39-2.166-.078-.423-.235-.834-.213-.85 2.061-.778 2.304-.862 4.226-1.587-2.31.034-2.422.01-4.591.016-.036-.414-.244-.627-.882-.606-.238.039-.389.12-.5.445-.357-.657-.85-.464-1.06-.14-.275-.282-.917-.377-1.24-.17-.238-.112-.514-.112-.757.177-.175-.146-.23-.188-.614-.342-.886-1.497-1.622-2.692-2.36-3.951zm.012.802c.35.535 1.552 2.61 1.849 3.074-.337.023-.668.202-.918.562-.217-.224-.47-.445-.917-.463-.544-.093-.834.148-1.2.568-.108-.365-.53-.45-.896-.28.327-.519 1.872-3.122 2.082-3.46zM7.45 9.128c-.05 1.434-1.068 2.712-1.798 2.245-.551-.449.149-1.584.59-1.985-.033.307.246.498.023.77-.446.543-.27.936-.078.996.513.162 1.004-1.227 1.004-2.201 0-.625-.366-.613-1.086.136-.983 1.022-1.513 2.012-1.16 2.69.197.38.485.651.959.594.925-.11 1.483-1.254 1.543-1.988.148-.003.109.01.148-.02 0 .129.177.755.317 1.166.183.702.964 2.11-1.369 2.658-.44.11-.614.148-1.05.32-.213-.443-.263-.585-.697-1.013.588-.205.593-.185.972-.317 1.467-.51 1.908-.947 1.857-1.57 0 0 .018-.32-.185-.588a2.613 2.613 0 0 1-.293.645c-.437.68-1.296 1.101-2.06.833-.417-.146-.596-.466-.596-1.015 0-.703 1.601-2.735 2.387-3.08.555-.165.579.293.571.724zm6.502 1.3c.26.006.543.133.735.34.594.64.529 1.417.163 1.905-.435.581-1.532.324-1.791-.488-.12-.378.095-1.312.475-1.624a.628.628 0 0 1 .418-.132zm-2.113.066a.502.502 0 0 1 .117.017c.503.03.61.313.701.56.231.626.173 1.212-.301 1.691-.711.719-1.54.401-1.536-.567.014-.69.443-1.715 1.02-1.7zm1.868.038c-.383.287-.432 1.023-.08 1.296.138.13.215.22.613.256.273.024.704-.253.725-.527.01-.125-.013-.333-.312-.67-.252-.283-.579-.349-.661-.3-.265.156.021.28.125.383.162.163.2.234.125.282a.447.447 0 0 1-.372.057c-.105-.049-.456-.246-.163-.777zm3.759.003c.167.26.215.316.402.965.24.838.546 1.163.816 1.01.74-.418.148-1.476-.113-1.974.167-.002.134.007.286.005.12.471.086.387.407 1.813.385 1.706.442 2.16-.528 2.926-.446.352-1.103.37-1.667.34l-.636-.095c.438-.287.545-.557.542-1.116 1.278.535 1.959.132 2.23-.526.132-.317.086-.735-.04-1.471.008.6-.005.71-.084 1.007-.158.595-.547.76-.812.34-.102-.163-.345-.702-.42-1.282-.075-.58-.132-1.395-.5-1.736.04-.08.082-.17.117-.206zm-1.247.01c.258.068.572.204.74.52.234.436.388.668.376 1.447-.014.832-.34 1.055-.557 1.086-.278.04-.762.034-1.049-1.598-.095-.541-.268-1.056-.45-1.224.09-.11.097-.096.165-.204.091.1.17.27.298.777.202.808.387.975.745 1.02.558.072.778-.78.318-1.391-.1-.134-.365-.307-.503-.236.008.236.113.162.114.318-.026.185-.053.219-.113.32-.142-.056-.21-.078-.334-.291-.157-.31-.055-.6.25-.544zm-4.597.076c-.263.185-.594.8-.304 1.35.143.205.297.372.638.3.245-.051.671-.34.73-.749.052-.35-.456-1.028-.738-.87-.327.183-.128.314.074.511.185.18.052.289-.077.342-.258.106-.403.003-.467-.203-.065-.205-.01-.38.144-.68zm-2.867.064c.056.172.1.402.218.624.028.023.132 0 .269-.157.086-.1.185-.238.357-.463.104.095.113.166.142.219.073.13.225.12.273.106.168-.167.195-.275.306-.29.01.216.021.35-.257.677a.535.535 0 0 1-.501.172c-.12-.034-.199-.108-.389-.205-.258.04-.19.315-.143.546.12.611.5.855.832.675.116-.062.09-.062.312-.153-.038.388-.06.463.01.896-.541.301-.982.25-1.102-.506-.091-.632-.261-1.4-.415-1.556-.145-.147-.205-.195-.205-.195l.293-.39zm-7.114.082c.753.01 1.602.01 2.506.017-.13.318-.175.54-.193.854-.422-.163-1.877-.684-2.313-.871zm20.723.01c-.997.359-1.715.637-2.677 1.004-.105-.45-.124-.588-.219-.994 1.601-.005 1.628-.002 2.896-.01zm-6.978 2.04c.105.43.253.641.253.641.202.348.454.545.84.645.085.136.115.163.148.236.037.457.01.514-.344.774-.209.204-.218.497-.003.769.231.22.474.298 1.375.064.174.3.418.653.776 1.217-1.206-.455-2.868-1.103-6.43-2.49 0 0-4.169 1.62-6.404 2.491.935-1.474 1.012-1.599 1.677-2.63.225-.089.149-.053.349-.155.459-.245.827-.61 1.028-1.145.368.83.779.925 1.636.655.177-.082.38-.2.424-.518.46.413 1.432.49 2.142-.382.612.717 2.001.785 2.533-.171zm2.157.865s.04.129.064.169c-.101.003-.213 0-.213 0a.905.905 0 0 0 .149-.17z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Groovy</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Clojure ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.503 12.216c-.119.259-.251.549-.387.858-.482 1.092-1.016 2.42-1.21 3.271a4.91 4.91 0 0 0-.112 1.096c0 .164.009.337.022.514.682.25 1.417.388 2.186.39a6.39 6.39 0 0 0 2.001-.326 3.808 3.808 0 0 1-.418-.441c-.854-1.089-1.329-2.682-2.082-5.362M8.355 6.813A6.347 6.347 0 0 0 5.657 12a6.347 6.347 0 0 0 2.625 5.134c.39-1.622 1.366-3.107 2.83-6.084-.087-.239-.186-.5-.297-.775-.406-1.018-.991-2.198-1.513-2.733a4.272 4.272 0 0 0-.947-.729M17.527 19.277c-.84-.105-1.533-.232-2.141-.446A7.625 7.625 0 0 1 4.376 12a7.6 7.6 0 0 1 2.6-5.73 5.582 5.582 0 0 0-1.324-.162c-2.236.02-4.597 1.258-5.58 4.602-.092.486-.07.854-.07 1.29 0 6.627 5.373 12 12 12 4.059 0 7.643-2.017 9.815-5.101-1.174.293-2.305.433-3.271.436-.362 0-.702-.02-1.019-.058M15.273 16.952c.074.036.242.097.475.163a6.354 6.354 0 0 0 2.6-5.115h-.002a6.354 6.354 0 0 0-6.345-6.345 6.338 6.338 0 0 0-1.992.324c1.289 1.468 1.908 3.566 2.507 5.862l.001.003c.001.002.192.637.518 1.48.326.842.789 1.885 1.293 2.645.332.51.697.876.945.983M12.001 0a11.98 11.98 0 0 0-9.752 5.013c1.134-.71 2.291-.967 3.301-.957 1.394.004 2.491.436 3.017.732.127.073.248.152.366.233A7.625 7.625 0 0 1 19.625 12a7.605 7.605 0 0 1-2.268 5.425c.344.038.709.063 1.084.061 1.328 0 2.766-.293 3.842-1.198.703-.592 1.291-1.458 1.617-2.757.065-.502.1-1.012.1-1.531 0-6.627-5.371-12-11.999-12"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Clojure</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Tailwind ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Tailwind CSS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {MaterialUI ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">MaterialUI</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {NodeJS ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">NodeJS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Npm ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">NPM</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Yarn ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Yarn</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Jest ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M22.251 11.82a3.117 3.117 0 0 0-2.328-3.01L22.911 0H8.104L11.1 8.838a3.116 3.116 0 0 0-2.244 2.988c0 1.043.52 1.967 1.313 2.536a8.279 8.279 0 0 1-1.084 1.244 8.14 8.14 0 0 1-2.55 1.647c-.834-.563-1.195-1.556-.869-2.446a3.11 3.11 0 0 0-.91-6.08 3.117 3.117 0 0 0-3.113 3.113c0 .848.347 1.626.903 2.182-.048.097-.097.195-.146.299-.465.959-.993 2.043-1.195 3.259-.403 2.432.257 4.384 1.849 5.489A5.093 5.093 0 0 0 5.999 24c1.827 0 3.682-.917 5.475-1.807 1.279-.632 2.599-1.292 3.898-1.612.48-.118.98-.187 1.508-.264 1.07-.153 2.175-.312 3.168-.89a4.482 4.482 0 0 0 2.182-3.091c.174-.994 0-1.994-.444-2.87.298-.48.465-1.042.465-1.647zm-1.355 0c0 .965-.785 1.75-1.75 1.75a1.753 1.753 0 0 1-1.085-3.126l.007-.007c.056-.042.118-.084.18-.125 0 0 .008 0 .008-.007.028-.014.055-.035.083-.05.007 0 .014-.006.021-.006.028-.014.063-.028.097-.042.035-.014.07-.027.098-.041.007 0 .013-.007.02-.007.028-.007.056-.021.084-.028.007 0 .02-.007.028-.007.034-.007.062-.014.097-.02h.007l.104-.022c.007 0 .02 0 .028-.007.028 0 .055-.007.083-.007h.035c.035 0 .07-.007.111-.007h.09c.028 0 .05 0 .077.007h.014c.055.007.111.014.167.028a1.766 1.766 0 0 1 1.396 1.723zM10.043 1.39h10.93l-2.509 7.4c-.104.02-.208.055-.312.09l-2.64-5.385-2.648 5.35c-.104-.034-.216-.055-.327-.076l-2.494-7.38zm4.968 9.825a3.083 3.083 0 0 0-.938-1.668l1.438-2.904 1.452 2.967c-.43.43-.743.98-.868 1.605H15.01zm-3.481-1.098c.034-.007.062-.014.097-.02h.02c.029-.008.056-.008.084-.015h.028c.028 0 .049-.007.076-.007h.271c.028 0 .049.007.07.007.014 0 .02 0 .035.007.027.007.048.007.076.014.007 0 .014 0 .028.007l.097.02h.007c.028.008.056.015.083.029.007 0 .014.007.028.007.021.007.049.014.07.027.007 0 .014.007.02.007.028.014.056.021.084.035h.007a.374.374 0 0 1 .09.049h.007c.028.014.056.034.084.048.007 0 .007.007.013.007.028.014.05.035.077.049l.007.007c.083.062.16.132.236.201l.007.007a1.747 1.747 0 0 1 .48 1.209 1.752 1.752 0 0 1-3.502 0 1.742 1.742 0 0 1 1.32-1.695zm-6.838-.049c.966 0 1.751.786 1.751 1.751s-.785 1.751-1.75 1.751-1.752-.785-1.752-1.75.786-1.752 1.751-1.752zm16.163 6.025a3.07 3.07 0 0 1-1.508 2.133c-.758.438-1.689.577-2.669.716a17.29 17.29 0 0 0-1.64.291c-1.445.355-2.834 1.05-4.182 1.717-1.724.854-3.35 1.66-4.857 1.66a3.645 3.645 0 0 1-2.154-.688c-1.529-1.056-1.453-3.036-1.272-4.12.167-1.015.632-1.966 1.077-2.877.028-.055.049-.104.077-.16.152.056.312.098.479.126-.264 1.473.486 2.994 1.946 3.745l.264.139.284-.104c1.216-.431 2.342-1.133 3.336-2.071a9.334 9.334 0 0 0 1.445-1.716c.16.027.32.034.48.034a3.117 3.117 0 0 0 3.008-2.327h1.167a3.109 3.109 0 0 0 3.01 2.327c.576 0 1.11-.16 1.57-.43.18.52.236 1.063.139 1.605z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Jest</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Socket ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Socket.io</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Saas ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">SASS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Net ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">.NET</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Markdown ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Markdown</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Svelte ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Svelte</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {VueJS ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">VueJS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Angular ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M9.931 12.645h4.138l-2.07-4.908m0-7.737L.68 3.982l1.726 14.771L12 24l9.596-5.242L23.32 3.984 11.999.001zm7.064 18.31h-2.638l-1.422-3.503H8.996l-1.422 3.504h-2.64L12 2.65z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Angular</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Angular ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.964 0L.672 3.974l1.784 14.794L11.976 24l9.568-5.303 1.784-14.794zm-.027 1.258l10.265 3.5-1.663 13.232-8.602 4.76-8.469-4.697L1.939 4.822zm0 .78L4.957 17.57l2.604-.048 1.4-3.501h6.257l1.532 3.55 2.492.046zm.02 4.98l2.355 4.93H9.878Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">AngularJS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {styles ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">styles-components</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {ChakraUI ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">ChakraUI</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Redux ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Redux</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {JQuery ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 00.31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 00.425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 01.056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 01-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 00-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 01-.362-.17 1.485 1.485 0 01-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 01-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 01-.439-.27 2.107 2.107 0 01-.118-.078 6.01 6.01 0 01-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 01-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 01-.335-.28.258.258 0 00-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 01-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 01-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 00.678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 00.414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 01-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 01-.265-.15.62.62 0 01-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 01-.516-.16 6.352 6.352 0 01-.618-.254 6.53 6.53 0 01-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">JQuery</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Drupal ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M15.78 5.113C14.09 3.425 12.48 1.815 11.998 0c-.48 1.815-2.09 3.425-3.778 5.113-2.534 2.53-5.405 5.4-5.405 9.702a9.184 9.185 0 1018.368 0c0-4.303-2.871-7.171-5.405-9.702M6.72 16.954c-.563-.019-2.64-3.6 1.215-7.416l2.55 2.788a.218.218 0 01-.016.325c-.61.625-3.204 3.227-3.527 4.126-.066.186-.164.18-.222.177M12 21.677a3.158 3.158 0 01-3.158-3.159 3.291 3.291 0 01.787-2.087c.57-.696 2.37-2.655 2.37-2.655s1.774 1.988 2.367 2.649a3.09 3.09 0 01.792 2.093A3.158 3.158 0 0112 21.677m6.046-5.123c-.068.15-.223.398-.431.405-.371.014-.411-.177-.686-.583-.604-.892-5.864-6.39-6.848-7.455-.866-.935-.122-1.595.223-1.94C10.736 6.547 12 5.285 12 5.285s3.766 3.574 5.336 6.016c1.57 2.443 1.029 4.556.71 5.253"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Drupal</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Laraval ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Laraval</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {SpringBoot ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">SpringBoot</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Spring ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M21.8537 1.4158a10.4504 10.4504 0 0 1-1.284 2.2471A11.9666 11.9666 0 1 0 3.8518 20.7757l.4445.3951a11.9543 11.9543 0 0 0 19.6316-8.2971c.3457-3.0126-.568-6.8649-2.0743-11.458zM5.5805 20.8745a1.0174 1.0174 0 1 1-.1482-1.4323 1.0396 1.0396 0 0 1 .1482 1.4323zm16.1991-3.5806c-2.9385 3.9263-9.2601 2.5928-13.2852 2.7904 0 0-.7161.0494-1.4323.1481 0 0 .2717-.1234.6174-.2469 2.8398-.9877 4.1732-1.1853 5.9018-2.0743 3.2349-1.6545 6.4698-5.2844 7.1118-9.0379-1.2347 3.6053-4.9881 6.7167-8.3959 7.9761-2.3459.8643-6.5685 1.7039-6.5685 1.7039l-.1729-.0988c-2.8645-1.4076-2.9632-7.6304 2.2718-9.6306 2.2966-.889 4.4696-.395 6.9637-.9877 2.6422-.6174 5.7043-2.5929 6.939-5.1857 1.3828 4.1732 3.062 10.643.0493 14.6434z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Spring</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Flask ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M7.172 20.36c-.914-.72-1.89-1.41-2.556-2.38-1.402-1.712-2.482-3.694-3.22-5.777-.446-1.355-.6-2.808-1.174-4.11-.602-.944.103-1.978 1.138-2.28.46-.087 1.272-.522.293-.211-.878.644-.963-.585-.063-.662.615-.082.84-.585.63-1.037-.66-.43 1.6-.903.463-1.544C1.5 1.08 4.34.835 3.64 2.285 3.473 3.4 5.624 2.08 5.125 3.368c.507.619 1.9.14 1.865 1.009.74.05.993.672 1.687.72.72.325 2.022.58 2.266 1.39-.713.566-2.364-1.165-2.443.398.215 2.31.16 4.689 1.004 6.888.4 1.332 1.37 2.38 2.244 3.418.837 1.016 1.971 1.73 3.127 2.333 1.014.478 2.107.795 3.213.994.448-.343 1.24-1.617 1.938-1.08.033.604-1.388 1.263-.067 1.196.776-.234 1.314.6 1.953-.152.588.697 2.446-.446 2.027.98-.566.364-1.392.144-1.959.646-.935-.467-1.68.418-2.715.306a19.86 19.86 0 01-3.484.29c-1.912-.15-3.865-.214-5.684-.88-1.024-.297-2.023-.881-2.924-1.464zm1.615.7c1 .432 1.978.888 3.074 1.026 1.74.24 3.537.614 5.283.274-.79-.357-1.608.14-2.395-.255-.944.203-1.957-.052-2.917-.177-1.092-.486-2.27-.82-3.291-1.452-1.277-.466.66.598 1.005.685.798.453-.877-.233-1.114-.421-.668-.375-.754-.297-.066.084.139.08.276.166.42.235zm-1.904-1.346c.97.359-.004-.682-.45-.622-.196-.341-.751-.557-.36-.74-.704.244-.737-.93-1.07-.763-.744-.235-.29-1.07-1.176-1.58-.081-.54-.882-1.008-1.138-1.822-.113-.416-.905-1.613-.418-.5.414 1.072 1.143 1.99 1.75 2.907.47.873 1.027 1.786 1.885 2.33.29.278.568.703.977.79zM4.09 16.647c.033-.146.177.317 0 0zm3.954 3.497c.215-.096-.31-.12 0 0zm.526.192c-.054-.265-.24.148 0 0zm.66.275c.312-.3-.484-.188 0 0zm1.127.63c.191-.282-.61-.107 0 0zM8.19 19.728c.487-.315-.63-.004 0 0zm.494.246c-.014-.166-.176.075 0 0zm2.47 1.542c.397.25 2.32.55 1.115.103-.2.042-2.23-.574-1.116-.103zm-3.921-3.054c-.04-.167-.616-.185 0 0zm1.15.67c.3-.21-.621-.16 0 0zm.966.593c.43-.162-.696-.163 0 0zm-2.584-1.773c.466.358 1.88.046.714-.213-.53-.283-1.727-.476-.912.17zm3.24 1.978c.193-.33-.815-.19 0 0zm-.984-.783c1.14.323-.958-.72-.281-.118l.15.068.13.05zm1.973 1.14c1.08.01-.975-.147 0 0zm-4.644-2.96c-.042-.2-.266.018 0 0zm6.47 3.985c.028-.363-.353.27 0 0zm-4.63-2.856c-.064-.191-.336-.008 0 0zm-1.738-1.254c.62-.037-.848-.273 0 0zm-2.06-1.332c-.077-.297-.674-.534 0 0zm5.407 3.435c-.114-.13-.054.028 0 0zm3.366 2.065c-.01-.197-.183.075 0 0zm-3.664-2.373c.06-.255-.528-.077 0 0zm-2.506-1.592c.46-.05-.74-.311 0 0zm4.241 2.637c.718-.285-.7-.14 0 0zM9.03 18.545c.827.106-.985-.563-.181-.06zm2.876 1.768c.773-.462.518 1.082 1.311.13.782-.57-.675.707.29.103.696-.467 1.726.22 2.376.445.468-.023.923.405 1.403.145.923-.25-1.806-.37-1.09-.81-.845.245-1.47-.294-1.885-.835-.948-.22-2.044-.703-2.517-1.542-.192-.315.28.044-.166-.47-.57-.508-.856-1.085-1.24-1.702-.457-.244-.51-.963-.557-.024.004-.593-.553-.992-.688-.826-.002-.571.595-.285.176-.707-.09-.592-.386-1.21-.475-1.877-.138-.322-.02-1.011-.473-.282-.165.77-.055-.947.202-.38.337-.58-.12-.51-.14-.43.22-.488.14-1.18-.057-.916.117-.517.185-1.902-.175-1.656.218-.54.414-2.473-.534-1.736-.384.005-1.048.14-1.363.296.986.543-.1.196-.5.11-.052.502-.45.285-.946.29.793.098-.386.81-.841.534-.59.282.51.987.012 1.205.06.328-.905-.12-.83.64-.573-.241-.078.9.209.514.975.264.686.866.71 1.437-.158.333-.784-.783-.14-.731-.507-.827-.561-.3-.984.085-.1.028 1.079.547.34.803.65.1.668.67.8 1.03.39.407.31-.45.779.04-.296-.436-1.567-1.228-.544-.974-.005-.44-.185-.793.129-.784.31-.562-.325 1.387.375.672.193-.085.24-.563.59.045.505.498.182.858-.531.403.127.433.954.587.799 1.265.165.595.395.376.596.342.158.578.247.153.255-.123.72.155.552.58.778.88.497.224-.712-1.522.142-.526.898.81.337 1.15-.47 1.02.51-.041.675.69 1.313.664.582.277.975 1.34-.027.897-.348-.313-1.58-.7-.573-.104.929.43 1.665.688 2.561 1.227.64.458.918.982 1.16 1.086-.538.257-1.623-.206-.817-.348-.503-.091-1.068-.345-.587.28.41.343 1.45.306 1.637.345-.159.348-.43.376.006.403-.486.26.156.3.201.448zm-.994-2.808c-.296-.31-.373-.89-.053-.385.164.066.525.947.053.385zm3.238 2.057c.185-.011.006.14 0 0zm-3.706-2.816c-.01-.468.107.36 0 0zm-.322-.433c-.372-.72.47.204 0 0zm-3.9-2.692c.219-.06.108.374 0 0zm3.104 1.682c.134-.504.158.424 0 0zm-2.192-1.525c-.155-.278.323.26 0 0zm1.882.604c-.352-.79.25-.432.078.13zM5.77 12.217c-.158-.26-.418-1.02-.334-1.252.076.378.804 1.627.357.518-.494-.93.59.302.702.534.05.23-.305-.063-.064.478-.44-.617-.26.34-.661-.278zm-1.003-.691c.04-.603.23.413 0 0zm.45.155c.216-.455.366.634 0 0zm-1.084-.84c-.374-.37-.644-.713.017-.23.255.01-.566-.778.06-.25.66.12.327 1.082-.077.48zm.57-.015c.217-.215.115.212 0 0zm.35.113c-.328-.617.4.258 0 0zm-.697-.667c-1.086-.966 1.365.506.177.18zm3.11 1.808c-.47-.282-.123-1.984.037-.82.457-.148-.025.6.315.594-.053.473-.206.643-.35.226zm1.15.68c.048-.513.099.35 0 0zm-.2-.198c.054-.22.007.258 0 0zM4.57 9.955c-.697-.963 2.027.973.447.244-.165-.043-.364-.06-.447-.244zm2.216 1.175c-.066-.81.147.134 0 0zm1.682 1.079c.13-.462.01.305 0 0zM4.676 9.587c.415-.088 1.718.729.52.234-.132-.148-.416-.08-.52-.234zm3.56 1.775c.044-.83.248-.495.002.118zM4.985 9.299c.169-.248-.45-1.12.089-.313.232.185.672.31.283.387.61.539-.15.146-.372-.074zm3.075 1.804c.117-.944.103.553 0 0zM4.632 8.427c.129-.055.068.172 0 0zm.802.478c.206-.434.38.483 0 0zm2.263 1.259c-.002-.167.043.242 0 0zm-.131-.29c-.314-.776.292.41 0 0zm-.193-.51c-.053-.32.18.404 0 0zm.314-.51c-.216-.38.272-1.673.326-.87-.227.625-.065.975.093.136.293-.66-.063 1.303-.42.735zm.322-1.923c.094-.115.02.139 0 0zM7.47 17.544c-.128-.111.016.07 0 0zm1.11.56c.615.16.612-.095.055-.17-.3-.28-1.246-.575-.4-.035.057.142.235.139.344.206zM6.389 16.65c.34.253 1.28.719.484.096.269-.312-.514-.478-.254-.686-.66-.404-.52-.368-.058-.356-.794-.354.114-.328.07-.51-.305-.06-1.52-.54-.804.04-.726-.37-.173.138-.392.084-.743-.202.66.565-.118.375.425.337 1.146.864.18.357-.128.183.69.46.892.6zm1.16.667c1.41.454-.691-.556 0 0zm5.94 3.598c.02-.28-.193.24 0 0zm.611.257c.325-.315.013.503.54-.077.005-.415-.017-.66-.606-.156-.162.09-.234.473.066.233zm-9.692-6.087c-.1-.393-.7-.39 0 0zm.652.428c-.242-.402-.864-.364 0 0zm3.71 2.237c.362.32 1.662.236.44.04-.182-.27-1.151-.204-.44-.04zm5.097 3.149c.558-.468-.54.208 0 0zm1.16.796c.003-.15-.24.066 0 0zm.001-.21c.617-.654-.598.039 0 0zM2.805 13.743c-.526-.75-.327-1.088-.835-1.7-.096-.47-.87-1.533-.4-.406.43.659.558 1.679 1.235 2.106zm12.03 7.534c1.135-.734-.466-.32 0 0zm.866.34c.57-.488-.36-.102 0 0zM4.215 14.255c.163-.242-.42-.031 0 0zm11.305 7.129c.551-.355-.126-.3-.1.032zm-7.47-4.71c-.02-.24-.291.02 0 0zm.46.267c-.145-.297-.224.047 0 0zm7.894 4.684c.705-.51-.428-.098-.148.096zm-.27-.13c.574-.482-.607.213 0 0zm1.38.918c.386-.258-.469-.083 0 0zM4.57 14.08c.517.116 2.066 1.274 1.152.08-.468-.138-.187-1.283-.665-1.08.32.535.264.763-.41.426-.845-.413-.474.204-.31.374-.224.052.299.196.233.2zm-2.356-1.86c.092-.383-.853-2.107-.446-.864.146.26.13.754.446.864zm4.324 2.666c-.266-.223-.013-.032 0 0zm.656.152c0-.405-.725-.164 0 0zm5.681 3.583c-.108-.278-.428-.006 0 0zm.273.199c-.04-.155-.157.03 0 0zM15.4 20.24c.216-.16-.27-.02 0 0zM3.39 12.52c.62-.24-.664-.17 0 0zm8.984 5.662c-.007-.401-.395.1 0 0zm-9.23-6.231c.399-.135-.367-.09 0 0zm1.156.56c-.007-.133-.122.05 0 0zm14.09 8.64c.512-.104 1.678.26 1.866-.136-.62-.015-2.15-.438-2.222.1l.136.023.22.013zM4.667 12.603c.009-.407-.317-.015 0 0zM1.63 10.495c-.138-.775-.525-.118 0 0zm.724.182c.009-.25-.663-.224 0 0zm.414.203c-.12-.097-.094.122 0 0zm2.605 1.67c.122-.112-.29-.083 0 0zm-2.88-2.128c-.07-.585-.84-.088 0 0zm-1.486-.964c-.02-.27-.144.102 0 0zm.22-.167c-.035-.32-.19.04 0 0zm1.22.729c.518-.203-.94-.42-.104-.04zm16.334 10.089c.33-.303-.42-.094 0 0zm1.974 1.023c.132-.392-.334.05 0 0zM2.573 9.38c.055-.38-.41.075 0 0zM.837 8.218c-.093-.535-.08-1.474.812-1.156-1.191.236.824 1.48.57.498.5.024.98-.296.716.19.987-.11 1.67-.964 2.624-.845.742-.098 1.554-.172 2.354-.471.658-.048 1.29-.756.93-1.175-.896-.076-1.835.036-2.827.233-1.098.228-2.096.662-3.205.849-1.08.145.217.4-.092.456-.564.196.672.328-.073.534-.46-.088-.94-.246-.743-.73-1.035.133-1.945.563-1.127 1.616h.06zm2.494-1.27c.243-.894 1.3.735.398.118-.108-.08-.285-.146-.398-.12zm.047-.434c.35-.26.186.146 0 0zm.445.008c.032-.411 1.018.218.163.148zm.608-.245c.222-.26.064.23 0 0zm.156-.104c.37-.444 2.095-.283.832-.043-.338-.255-.598.15-.832.043zm2.25-.347c-.055-1.214 1.119.432 0 0zm.64-.004c.233-.612.906-.245.108-.123.017.065-.024.316-.108.123zM2.322 9.067c.697-.427-.741-.37 0 0zm.515.144c.245-.26-.531-.106 0 0zm-1.52-1.08c.399-.305-.471-.116 0 0zm20.602 12.89c.012-.355-.304.16 0 0zm-2.093-1.43c.06-.408-.27.037 0 0zm2.67 1.568c.557 0 1.688-.173.475-.173-.19.03-1.109.024-.476.173zM3.29 8.959c.45-.03.706-.497-.087-.47-1.23-.127 1.084.42-.158.264-.167.11.236.237.245.207zm.398.202c-.048-.29-.14.154 0 0zm.47-1.257c.197-.243-.27-.065 0 0zm-1.5-2.508c.806-.274 1.907-.581 2.287.135-.387-.466-.156-.924.21-.243.516.689.775-.313.438-.545.383.476.819.7.257.03.61-.734-1.223.097-1.64.088-.2.09-2.071.477-1.551.535zm.472-.903c.46-.347 1.588.206.864-.345-.07-.062-1.586.418-.864.345zm1.674.069c.538.013-.231-.722.409-.39-.105-.343-.746-.407-1.06-.544-.176.314.36.938.65.934zm-1.38-1.52c.186-.252-.326.128 0 0zm.684.164c.866-.115-.22-.373-.174-.01zm-1.277-1c-.61-.796 1.146.134.527-.7-.522-.415-1.023.468-.527.7zm7.824 4.215c.28-.496-1.155-.668-.188-.175.09.03.07.21.188.175z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Flask</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {GraphQL ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">GraphQL</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Docker ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Docker</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Firebase ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Firebase</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Git ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">GIT</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {ThreeJS ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">ThreeJS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Mocha ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M13.325 0c-.907 1.116-2.442 2.302-.768 4.814.558.628.838 1.953.768 2.372 0 0 2.512-1.464.977-4.116-.907-1.395-1.326-2.582-.977-3.07zm-2.79 2.582c-.628.767-1.605 1.535-.489 3.279.35.349.489 1.256.489 1.535 0 0 1.673-.978.627-2.792-.628-.907-.906-1.743-.627-2.022zm-5.094 6a.699.699 0 0 0-.697.698c0 2.372.349 10.535 3.837 14.512.14.139.28.208.489.208h5.86c.21 0 .35-.069.489-.208 3.488-3.908 3.837-12.07 3.837-14.512a.7.7 0 0 0-.698-.699H12zm2.023 2.163h9.21c.349 0 .697.278.697.697 0 1.953-.348 7.465-2.72 10.326-.21.14-.35.208-.559.208H9.976a.633.633 0 0 1-.488-.208c-2.372-2.79-2.652-8.373-2.722-10.326 0-.35.28-.697.698-.697zm8.792 4.744s-.071.627-1.745 1.255c-2.303.837-6.348.28-6.348.28.349 1.465.906 2.86 1.743 3.907.07.14.28.209.419.209h3.489c.14 0 .279-.07.418-.209 1.186-1.395 1.745-3.558 2.024-5.442z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Mocha</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Webpack ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M22.1987 18.498l-9.7699 5.5022v-4.2855l6.0872-3.3338 3.6826 2.117zm.6683-.6026V6.3884l-3.5752 2.0544v7.396zm-21.0657.6026l9.7699 5.5022v-4.2855L5.484 16.3809l-3.6826 2.117zm-.6683-.6026V6.3884l3.5751 2.0544v7.396zm.4183-12.2515l10.0199-5.644v4.1434L5.152 7.6586l-.0489.028zm20.8975 0l-10.02-5.644v4.1434l6.4192 3.5154.0489.028 3.5518-2.0427zm-10.8775 13.096l-6.0056-3.2873V8.9384l6.0054 3.4525v6.349zm.8575 0l6.0053-3.2873V8.9384l-6.0053 3.4525zM5.9724 8.1845l6.0287-3.3015L18.03 8.1845l-6.0288 3.4665z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Webpack</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {JWT ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M10.2 0v6.456L12 8.928l1.8-2.472V0zm3.6 6.456v3.072l2.904-.96L20.52 3.36l-2.928-2.136zm2.904 2.112l-1.8 2.496 2.928.936 6.144-1.992-1.128-3.432zM17.832 12l-2.928.936 1.8 2.496 6.144 1.992 1.128-3.432zm-1.128 3.432l-2.904-.96v3.072l3.792 5.232 2.928-2.136zM13.8 17.544L12 15.072l-1.8 2.472V24h3.6zm-3.6 0v-3.072l-2.904.96L3.48 20.64l2.928 2.136zm-2.904-2.112l1.8-2.496L6.168 12 .024 13.992l1.128 3.432zM6.168 12l2.928-.936-1.8-2.496-6.144-1.992-1.128 3.432zm1.128-3.432l2.904.96V6.456L6.408 1.224 3.48 3.36Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">JWT</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Babel ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M15.76 0c-1.603.147-3.719.713-6.317 1.719a22.366 22.366 0 01-2.44 1.539l.01.158c.064 0 .136-.043.24-.096.106-.01.169.032.169.137l.168-.094.084-.011.01.074c.01.073-.566.523-1.707 1.33l.093.146-.084.012-.177-.064c0 .052-.073.085-.24.095l.01.084.189.21a.673.673 0 01-.252-.053c-.367.031-.734.303-1.09.806l.094.147c.314-.283.492-.43.544-.43l.022.23c-.052 0-.136.042-.24.094l.199.295A5.86 5.86 0 016.29 5.291c.23.063.346.125.346.209l.168-.01c1.225-.911 2.44-1.562 3.644-1.97l.012.158c-.22.335-.377.501-.461.511.01.116.052.21.115.305.021.21-.524 1.583-1.635 4.139-2.535 5.93-4.651 10.307-6.359 13.156 0 .052.041.136.094.23.419-.104.691-.197.806-.302l.096-.012.01.158.158-.011.166-.094c0 .052.063.073.168.062l.012.159c.01.157-.075.397-.274.722-.178.2-.355.607-.554 1.225l.01.074.158-.01c.68-.764 1.204-1.52 1.56-2.254 2.001-.586 3.52-1.162 4.578-1.728 1.058-.094 1.876-.365 2.42-.826l-.011-.084-.399.115-.094.01-.01-.084c.776-.116 1.32-.293 1.614-.524 1.519-1.173 2.66-2 3.435-2.492 2.4-1.76 3.531-3.457 3.395-5.07-.01-.168-.545-.828-1.582-1.98-.021-.22.345-.535 1.078-.954l2.086-1.834c.46-.597.744-1.56.838-2.89l-.031-.315c-.084-.932-.756-1.687-2.034-2.264C19.06.303 17.708.031 15.76 0zm2.525 1.037c1.55.063 2.347.335 2.389.817l-.063.158-2.326-.975zm-1.482 1.317c1.063-.016 1.617.267 1.672.863l.156-.012-.031-.398.168-.01c.408.22.627.492.648.816.021.22-.094.494-.355.819-.105.01-.168-.064-.178-.221l-.168.012-.041.47c-.702 1.048-1.205 1.582-1.52 1.614-.283.387-.462.587-.535.597-.22.262-.816.712-1.8 1.34-.325.032-1.531.493-3.616 1.404a.595.595 0 00-.334-.052l-.012-.147c-.02-.304.107-.681.41-1.142.158-.86.335-1.352.534-1.467l1.738-3.906c-.02-.241.347-.43 1.111-.555l.252-.022.02.221a50.387 50.387 0 011.394-.2c.173-.014.335-.022.487-.024zm3.619.39h.027c.139.012.288.263.446.744l.01.147c-.085.01-.24-.242-.471-.744l-.012-.147zm-9.836 2.483h.072l.022.23c-.074.01-.177.116-.303.336l-.012-.156c.147-.178.22-.316.22-.41zM5.6 5.354l.01.072c-.053 0-.136.043-.24.095l-.085.01-.01-.146.325-.031zM9.885 6.86l.031.315-.084.01-.031-.313.084-.012zm-.2.567c-.02.262-.084.397-.22.408l-.084.01c.094-.178.147-.303.137-.397l.168-.021zm-.345.816l.01.074-.147.25-.158.012-.01-.074c.157-.01.231-.093.22-.25l.085-.012zm-.358.735l-.04.386-.085.01-.03-.387.155-.01zm8.497.28l.345.212c.01.104-.042.167-.146.177-.147-.094-.262-.136-.346-.136l-.021-.23.168-.022zm-6.653.891l.012.147-.326.033-.01-.148.324-.032zm5.363.545c.23.105.347.21.358.293l.01.075c-.22.02-.42-.095-.608-.346l.24-.022zm2.6.252c.178.074.261.148.272.221l.052.617c-.073.168-.146.252-.23.252l-.094-1.09zm-4.195.065c.84-.014 1.482.184 1.922.605l.03.315c-.376 1.09-.795 1.719-1.245 1.918l-2.096 1.666c-1.56 1.026-2.4 1.538-2.525 1.548-2.483 1.373-4.032 2.075-4.63 2.127l-.095.01c.084-.293 1.185-2.555 3.322-6.808.943-.084 2.43-.525 4.452-1.32l.492-.042c.128-.01.253-.017.373-.02zm-3.055.49l.01.074-.334.031-.012-.074.336-.031zm-5.226 5.07c-.105.535-.221.808-.336.819l-.01-.075c-.021-.272.094-.513.346-.744zm7.101.336l.01.147c.01.063-.23.261-.701.607-1.394.681-2.21 1.152-2.452 1.393-1.508.523-2.252.849-2.242.974-1.34.535-2.22.923-2.638 1.164-.095.01-.241-.031-.43-.115-.021-.272.093-.494.365-.672.23-.02.463.011.672.106.251-.126.68-.274 1.299-.42l-.012-.156-.492.04c.063-.083.535-.303 1.436-.67l.251-.02.01.073c-.419.032-.66.167-.713.387.01.094.064.147.168.137.304-.21.461-.324.461-.356.608-.115 2.274-.995 5.008-2.619zm-7.584.723l.01.072c.01.105-.042.17-.147.18l-.01-.074c-.01-.095.042-.157.147-.178zm3.77.937c.089-.002.139.049.148.131-.199.021-.566.178-1.121.492l-.084.01-.01-.156a1.586 1.586 0 001.026-.47c.014-.003.028-.006.04-.007zm-3.664 1.243l.01.082c-.064 0-.138.043-.243.095l-.156.01c-.01-.073.032-.136.137-.168l.252-.02zm-1.918.953l.177.072c-.063.471-.198.713-.44.734a1.076 1.076 0 00-.513-.105l-.021-.23c-.01-.095.043-.147.158-.178.105-.01.167.061.178.218.282-.345.44-.511.46-.511Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Babel</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {CHAI ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M22.2235 5.8311 12.2307.0619a.4617.4617 0 0 0-.4615 0L1.7765 5.8311a.4615.4615 0 0 0-.2308.3997v11.5385c0 .1649.088.3173.2308.3997l9.9928 5.7692a.4617.4617 0 0 0 .4615 0l9.9928-5.7692a.4615.4615 0 0 0 .2308-.3997V6.2308a.4618.4618 0 0 0-.2309-.3997zm-.6304 11.7074L12 23.0769l-9.5931-5.5385V6.4615L12 .9231l9.5931 5.5385v11.0769zM11.2957 8.1858c.3873-.2769.7918-.4965 1.2137-.6588s.8427-.2434 1.2624-.2434c.2596 0 .5019.0379.7269.1136.225.0757.4197.185.5841.3278s.2942.3202.3894.5322c.0952.212.1428.4543.1428.7269 0 .3288-.0649.6555-.1947.98-.1298.3245-.304.6252-.5225.9022s-.4706.5192-.7561.7269-.582.357-.8892.4478l-.1363-.2272a2.0872 2.0872 0 0 0 .4998-.3505 2.2747 2.2747 0 0 0 .3894-.4835c.1082-.1796.1915-.37.2499-.5712a2.1893 2.1893 0 0 0 .0876-.6133c0-.238-.0346-.463-.1038-.675-.0692-.212-.1709-.397-.305-.5549-.1341-.1579-.2996-.2823-.4965-.3732-.1969-.0909-.423-.1363-.6782-.1363-.3115 0-.5971.0606-.8567.1817-.2596.1212-.4933.2845-.701.49s-.3883.4413-.5419.7075a4.874 4.874 0 0 0-.3829.8373 5.6168 5.6168 0 0 0-.2304.8859c-.0519.2986-.0779.5798-.0779.8438 0 .2683.0281.5452.0844.8308s.1385.5668.2466.8438c.1082.2769.2423.5387.4024.7853.1601.2466.3451.463.5549.649a2.583 2.583 0 0 0 .701.4446c.2575.1103.5376.1655.8405.1655.2077 0 .41-.0281.6069-.0844a2.9874 2.9874 0 0 0 .5679-.2272 3.2094 3.2094 0 0 0 .516-.3375 3.9668 3.9668 0 0 0 .4511-.4219l.2142.2077c-.1904.251-.4165.4922-.6782.7237a5.5434 5.5434 0 0 1-.847.6166 4.6241 4.6241 0 0 1-.9508.4284c-.331.106-.6588.159-.9833.159-.3159 0-.6133-.0552-.8924-.1655-.2791-.1103-.5355-.2596-.7691-.4478s-.4424-.4089-.6263-.662c-.1839-.2531-.3397-.5225-.4673-.8081s-.225-.5798-.2921-.8827-.101-.5992-.101-.8891c0-.4197.0703-.8513.2109-1.2948s.3343-.874.5809-1.2916.5376-.8124.873-1.1845c.3353-.3721.6966-.6967 1.0839-.9736z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">CHAI</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {NestJS ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21zM16.102.4c-.024.143-.006.106-.012.18-.006.05-.006.112-.012.161-.013.05-.025.1-.044.149-.012.05-.03.1-.05.149l-.067.142c-.02.025-.031.05-.05.075l-.037.055a2.152 2.152 0 0 1-.093.124c-.037.038-.068.081-.112.112v.006c-.037.031-.074.068-.118.1-.13.099-.278.173-.415.266-.043.03-.087.056-.124.093a.906.906 0 0 0-.118.099c-.043.037-.074.074-.111.118-.031.037-.068.08-.093.124a1.582 1.582 0 0 0-.087.13c-.025.05-.043.093-.068.142-.019.05-.037.093-.05.143a2.007 2.007 0 0 0-.043.155c-.006.025-.006.056-.012.08-.007.025-.007.05-.013.075 0 .05-.006.105-.006.155 0 .037 0 .074.006.111 0 .05.006.1.019.155.006.05.018.1.03.15.02.049.032.098.05.148.013.03.031.062.044.087l-1.426-.552c-.241-.068-.477-.13-.719-.186l-.39-.093c-.372-.074-.75-.13-1.128-.167-.013 0-.019-.006-.031-.006A11.082 11.082 0 0 0 8.9 2.855c-.378.025-.756.074-1.134.136a12.45 12.45 0 0 0-.837.174l-.279.074c-.092.037-.18.08-.266.118l-.205.093c-.012.006-.024.006-.03.012-.063.031-.118.056-.174.087a2.738 2.738 0 0 0-.236.118c-.043.018-.086.043-.124.062a.559.559 0 0 1-.055.03c-.056.032-.112.063-.162.094a1.56 1.56 0 0 0-.148.093c-.044.03-.087.055-.124.086-.006.007-.013.007-.019.013-.037.025-.08.056-.118.087l-.012.012-.093.074c-.012.007-.025.019-.037.025-.031.025-.062.056-.093.08-.006.013-.019.02-.025.025-.037.038-.074.069-.111.106-.007 0-.007.006-.013.012a1.742 1.742 0 0 0-.111.106c-.007.006-.007.012-.013.012a1.454 1.454 0 0 0-.093.1c-.012.012-.03.024-.043.036a1.374 1.374 0 0 1-.106.112c-.006.012-.018.019-.024.03-.05.05-.093.1-.143.15l-.018.018c-.1.106-.205.211-.317.304-.111.1-.229.192-.347.273a3.777 3.777 0 0 1-.762.421c-.13.056-.267.106-.403.149-.26.056-.527.161-.756.18-.05 0-.105.012-.155.018l-.155.037-.149.056c-.05.019-.099.044-.148.068-.044.031-.093.056-.137.087a1.011 1.011 0 0 0-.124.106c-.043.03-.087.074-.124.111-.037.043-.074.08-.105.124-.031.05-.068.093-.093.143a1.092 1.092 0 0 0-.087.142c-.025.056-.05.106-.068.161-.019.05-.037.106-.056.161-.012.05-.025.1-.03.15 0 .005-.007.012-.007.018-.012.056-.012.13-.019.167C.006 7.95 0 7.986 0 8.03a.657.657 0 0 0 .074.31v.006c.019.037.044.075.069.112.024.037.05.074.08.111.031.031.068.069.106.1a.906.906 0 0 0 .117.099c.149.13.186.173.378.272.031.019.062.031.1.05.006 0 .012.006.018.006 0 .013 0 .019.006.031a1.272 1.272 0 0 0 .08.298c.02.037.032.074.05.111.007.013.013.025.02.031.024.05.049.093.073.137l.093.13c.031.037.069.08.106.118.037.037.074.068.118.105 0 0 .006.006.012.006.037.031.074.062.112.087a.986.986 0 0 0 .136.08c.043.025.093.05.142.069a.73.73 0 0 0 .124.043c.007.006.013.006.025.012.025.007.056.013.08.019-.018.335-.024.65.026.762.055.124.328-.254.6-.688-.036.428-.061.93 0 1.079.069.155.44-.329.763-.862 4.395-1.016 8.405 2.02 8.826 6.31-.08-.67-.905-1.041-1.283-.948-.186.458-.502 1.047-1.01 1.413.043-.41.025-.83-.062-1.24a4.009 4.009 0 0 1-.769 1.562c-.588.043-1.177-.242-1.487-.67-.025-.018-.031-.055-.05-.08-.018-.043-.037-.087-.05-.13a.515.515 0 0 1-.037-.13c-.006-.044-.006-.087-.006-.137v-.093a.992.992 0 0 1 .031-.13c.013-.043.025-.086.044-.13.024-.043.043-.087.074-.13.105-.298.105-.54-.087-.682a.706.706 0 0 0-.118-.062c-.024-.006-.055-.018-.08-.025l-.05-.018a.847.847 0 0 0-.13-.031.472.472 0 0 0-.13-.019 1.01 1.01 0 0 0-.136-.012c-.031 0-.062.006-.093.006a.484.484 0 0 0-.137.019c-.043.006-.086.012-.13.024a1.068 1.068 0 0 0-.13.044c-.043.018-.08.037-.124.056-.037.018-.074.043-.118.062-1.444.942-.582 3.148.403 3.787-.372.068-.75.148-.855.229l-.013.012c.267.161.546.298.837.416.397.13.818.247 1.004.297v.006a5.996 5.996 0 0 0 1.562.112c2.746-.192 4.996-2.281 5.405-5.033l.037.161c.019.112.043.23.056.347v.006c.012.056.018.112.025.162v.024c.006.056.012.112.012.162.006.068.012.136.012.204v.1c0 .03.007.067.007.098 0 .038-.007.075-.007.112v.087c0 .043-.006.08-.006.124 0 .025 0 .05-.006.08 0 .044-.006.087-.006.137-.006.018-.006.037-.006.055l-.02.143c0 .019 0 .037-.005.056-.007.062-.019.118-.025.18v.012l-.037.174v.018l-.037.167c0 .007-.007.02-.007.025a1.663 1.663 0 0 1-.043.168v.018c-.019.062-.037.118-.05.174-.006.006-.006.012-.006.012l-.056.186c-.024.062-.043.118-.068.18-.025.062-.043.124-.068.18-.025.062-.05.117-.074.18h-.007c-.024.055-.05.117-.08.173a.302.302 0 0 1-.019.043c-.006.006-.006.013-.012.019a5.867 5.867 0 0 1-1.742 2.082c-.05.031-.099.069-.149.106-.012.012-.03.018-.043.03a2.603 2.603 0 0 1-.136.094l.018.037h.007l.26-.037h.006c.161-.025.322-.056.483-.087.044-.006.093-.019.137-.031l.087-.019c.043-.006.086-.018.13-.024.037-.013.074-.02.111-.031.62-.15 1.221-.354 1.798-.595a9.926 9.926 0 0 1-3.85 3.142c.714-.05 1.426-.167 2.114-.366a9.903 9.903 0 0 0 5.857-4.68 9.893 9.893 0 0 1-1.667 3.986 9.758 9.758 0 0 0 1.655-1.376 9.824 9.824 0 0 0 2.61-5.268c.21.98.272 1.99.18 2.987 4.474-6.241.371-12.712-1.346-14.416-.006-.013-.012-.019-.012-.031-.006.006-.006.006-.006.012 0-.006 0-.006-.007-.012 0 .074-.006.148-.012.223a8.34 8.34 0 0 1-.062.415c-.03.136-.068.273-.105.41-.044.13-.093.266-.15.396a5.322 5.322 0 0 1-.185.378 4.735 4.735 0 0 1-.477.688c-.093.111-.192.21-.292.31a3.994 3.994 0 0 1-.18.155l-.142.124a3.459 3.459 0 0 1-.347.241 4.295 4.295 0 0 1-.366.211c-.13.062-.26.118-.39.174a4.364 4.364 0 0 1-.818.223c-.143.025-.285.037-.422.05a4.914 4.914 0 0 1-.297.012 4.66 4.66 0 0 1-.422-.025 3.137 3.137 0 0 1-.421-.062 3.136 3.136 0 0 1-.415-.105h-.007c.137-.013.273-.025.41-.05a4.493 4.493 0 0 0 .818-.223c.136-.05.266-.112.39-.174.13-.062.248-.13.372-.204.118-.08.235-.161.347-.248.112-.087.217-.18.316-.279.105-.093.198-.198.291-.304.093-.111.18-.223.26-.334.013-.019.026-.044.038-.062.062-.1.124-.199.18-.298a4.272 4.272 0 0 0 .334-.775c.044-.13.075-.266.106-.403.025-.142.05-.278.062-.415.012-.142.025-.285.025-.421 0-.1-.007-.199-.013-.298a6.726 6.726 0 0 0-.05-.415 4.493 4.493 0 0 0-.092-.415c-.044-.13-.087-.267-.137-.397-.05-.13-.111-.26-.173-.384-.069-.124-.137-.248-.211-.366a6.843 6.843 0 0 0-.248-.34c-.093-.106-.186-.212-.285-.317a3.878 3.878 0 0 0-.161-.155c-.28-.217-.57-.421-.862-.607a1.154 1.154 0 0 0-.124-.062 2.415 2.415 0 0 0-.589-.26Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">NestJS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {AmazonAWS ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Amazon AWS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Heroku ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Heroku</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Netlify ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Netlify</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Vercel ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M24 22.525H0l12-21.05 12 21.05z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Vercel</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Shopify ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Shopify</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {NuxtJS ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.906c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-10.31a1.437 1.437 0 0 0-1.252-.71z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">NuxtJS</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {SAP ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">SAP</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {RubyonRails ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M7.523 7.781c-.187 0-.382.011-.582.035l.116.358c.175-.018.351-.024.527-.024h.06l-.12-.369zm2.315.358l-.024.4c.2.067.394.138.588.217l.026-.404c-.055-.03-.208-.104-.59-.213zm-4.988.23a9.597 9.597 0 00-.473.26l.28.426c.157-.097.308-.19.466-.268L4.85 8.37zm2.89.022a5.602 5.602 0 00-.654.027c-.443.04-.909.169-1.38.375-1.418.618-2.878 1.918-3.833 3.51-.955 1.591-1.291 3-1.4 3.603-.037.202-.05.313-.05.313h4.79s-.057-.26-.096-.678a8.18 8.18 0 01-.033-.732c0-.55.055-1.203.244-1.858.047-.163.103-.328.168-.49.065-.162.14-.321.225-.479.17-.314.381-.618.646-.894s.584-.525.963-.736c.248-.12.698-.365 1.346-.489.216-.041.453-.07.713-.076.26-.005.542.012.845.06.606.097 1.298.32 2.075.74.388.211.798.47 1.228.788.11-.09.211-.162.211-.162s-.196-.197-.547-.486c-.35-.29-.853-.672-1.467-1.043-.306-.186-.642-.37-.998-.538a8.852 8.852 0 00-1.129-.44 7.48 7.48 0 00-1.226-.27 6.048 6.048 0 00-.64-.045zm2.086 1.65l-.023.383c.2.006.4.03.6.072l.025-.375a4.32 4.32 0 00-.602-.08zm-1.418.146c-.206.061-.381.127-.533.194l.139.418c.175-.085.351-.157.527-.211l-.133-.4zm-6.008.024c-.157.151-.31.303-.449.455l.467.4c.127-.163.267-.327.412-.478l-.43-.377zm4.34.898c-.14.128-.266.267-.375.407l.291.435c.103-.151.224-.29.358-.43l-.274-.412zm.989.787v4.323h1.164v-1.043L9.9 16.219h1.721l-1.351-1.364s1.06-.09 1.06-1.46c0-1.37-1.285-1.499-1.285-1.499H7.729zm5.292.032c-.842 0-1.126.763-1.126 1.127v3.164h1.181v-.758h1.11v.758h1.146v-3.164c0-.922-.838-1.127-1.129-1.127h-1.182zm2.85 0v4.29h1.23v-4.29h-1.23zm1.733 0v4.291h2.88v-1.11h-1.656v-3.181h-1.224zm4.359 0c-.485 0-1.133.399-1.133 1.144v.383c0 .746.642 1.127 1.133 1.127 1.364.006-.327 0 .933 0v.533l-2.005.006v1.098h1.982c.406 0 1.103-.297 1.127-1.127v-.424c0-.71-.581-1.129-1.127-1.129h-.988v-.508h1.957v-1.103h-1.88zM5.668 12.8a5.75 5.75 0 00-.182.666l.49.388c.025-.236.069-.472.13-.709l-.438-.345zm7.771.15h.407c.327 0 .334.236.334.236v1.05h-1.11v-1.05s0-.236.37-.236zm-4.546.031h.933s.262.097.262.49c0 .395-.268.499-.268.499h-.927v-.989zm-8.59.061c-.115.26-.242.563-.303.727l.697.255c.08-.206.206-.504.303-.728l-.697-.254zm5.092 1.963c.012.321.043.584.074.765l.726.26a8.003 8.003 0 01-.144-.787l-.656-.238z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Ruby on Rails</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {DJango ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">DJango</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {FastAPI ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.626 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm-.624 21.62v-7.528H7.19L13.203 2.38v7.528h4.029L11.376 21.62z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">FastAPI</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Electron ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12.0111 0c-.85 0-1.5392.6891-1.5392 1.5392 0 .8501.6891 1.5393 1.5392 1.5393.595 0 1.11-.338 1.3662-.832 2.2208 1.2675 3.847 5.4728 3.847 10.3623 0 2.0715-.2891 4.056-.825 5.7685a.3215.3215 0 0 0 .2107.403.322.322 0 0 0 .4033-.2111c.5558-1.7763.8542-3.8251.8542-5.9604 0-5.1927-1.7717-9.686-4.3206-11.0027.001-.0223.0035-.0443.0035-.0669 0-.85-.6891-1.5392-1.5393-1.5392zm0 .6432a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm-5.486 4.3052c-2.067.0074-3.6473.6646-4.3885 1.9485-.7375 1.2774-.5267 2.971.5113 4.7813a.3217.3217 0 0 0 .558-.32C2.271 9.7274 2.089 8.266 2.6938 7.2185c.821-1.422 3.033-1.9552 5.9321-1.4271a.3216.3216 0 0 0 .1153-.6329c-.784-.1428-1.5271-.2125-2.216-.21zm11.0522.0176a.3216.3216 0 0 0-.0084.6432c1.8337.0239 3.1556.5956 3.7502 1.6256.8192 1.419.1798 3.5947-1.7182 5.837a.322.322 0 0 0 .0377.4535.3215.3215 0 0 0 .4532-.0377c2.0535-2.426 2.7708-4.8661 1.7845-6.5744-.7257-1.257-2.26-1.9207-4.299-1.9472zm-2.6984.2924a.3225.3225 0 0 0-.0647.0072c-1.8568.3979-3.8333 1.1755-5.7314 2.2714-4.5699 2.6384-7.5924 6.4948-7.3601 9.3717-.4726.2628-.7928.7664-.7928 1.3455 0 .85.6892 1.5392 1.5393 1.5392.85 0 1.5392-.6891 1.5392-1.5392 0-.8501-.6891-1.5393-1.5392-1.5393-.038 0-.0754.003-.1128.0057-.1002-2.5597 2.7434-6.1412 7.048-8.6265 1.8413-1.063 3.7551-1.8163 5.5445-2.1997a.3217.3217 0 0 0-.07-.636zm-2.8787 6.2364a1.1192 1.1192 0 0 0-.2243.0255c-.6012.1301-.983.7225-.8533 1.3238.1302.6012.7226.9832 1.3238.8533.6012-.1302.9832-.7226.8533-1.3238-.1139-.526-.5816-.8844-1.0995-.8788zM4.532 13.341a.321.321 0 0 0-.2318.0835.3214.3214 0 0 0-.0214.4542c1.2682 1.3936 2.9157 2.701 4.7946 3.7857 4.4146 2.5489 9.1056 3.2849 11.5608 1.8392a1.53 1.53 0 0 0 .8966.2899c.8501 0 1.5392-.6891 1.5392-1.5392 0-.8501-.689-1.5393-1.5392-1.5393-.85 0-1.5392.6892-1.5392 1.5393 0 .276.0737.5344.201.7584-2.2448 1.214-6.631.5002-10.7976-1.9054-1.8228-1.0524-3.418-2.3181-4.6404-3.6614a.3206.3206 0 0 0-.2226-.1049zm-2.0628 4.0172a.896.896 0 1 1 0 1.792.896.896 0 1 1 0-1.792zm19.0616 0a.896.896 0 1 1 0 1.792.891.891 0 0 1-.5864-.2194c-.0025-.004-.0039-.0083-.0066-.0123a.3195.3195 0 0 0-.0957-.0914.896.896 0 0 1 .6887-1.4689zm-14.0045 1.368a.3215.3215 0 0 0-.3207.4296C8.2793 22.154 10.036 24 12.0111 24c1.4406 0 2.7735-.9822 3.8128-2.711a.3215.3215 0 0 0-.11-.4413.3219.3219 0 0 0-.4415.11c-.934 1.5537-2.0812 2.399-3.2613 2.399-1.6407 0-3.2075-1.6465-4.2-4.4179a.3216.3216 0 0 0-.2848-.2126z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Electron</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Vite ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Vite</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {GatsBy ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.571c3.171 0 5.915 1.543 7.629 3.858l-1.286 1.115C16.886 5.572 14.571 4.286 12 4.286c-3.343 0-6.171 2.143-7.286 5.143l9.857 9.857c2.486-.857 4.373-3 4.973-5.572h-4.115V12h6c0 4.457-3.172 8.228-7.372 9.17L2.83 9.944C3.772 5.743 7.543 2.57 12 2.57zm-9.429 9.6l9.344 9.258c-2.4-.086-4.801-.943-6.601-2.743-1.8-1.8-2.743-4.201-2.743-6.515z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">GatsBy</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Jupyter ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M7.157 22.201A1.784 1.799 0 0 1 5.374 24a1.784 1.799 0 0 1-1.784-1.799 1.784 1.799 0 0 1 1.784-1.799 1.784 1.799 0 0 1 1.783 1.799zM20.582 1.427a1.415 1.427 0 0 1-1.415 1.428 1.415 1.427 0 0 1-1.416-1.428A1.415 1.427 0 0 1 19.167 0a1.415 1.427 0 0 1 1.415 1.427zM4.992 3.336A1.047 1.056 0 0 1 3.946 4.39a1.047 1.056 0 0 1-1.047-1.055A1.047 1.056 0 0 1 3.946 2.28a1.047 1.056 0 0 1 1.046 1.056zm7.336 1.517c3.769 0 7.06 1.38 8.768 3.424a9.363 9.363 0 0 0-3.393-4.547 9.238 9.238 0 0 0-5.377-1.728A9.238 9.238 0 0 0 6.95 3.73a9.363 9.363 0 0 0-3.394 4.547c1.713-2.04 5.004-3.424 8.772-3.424zm.001 13.295c-3.768 0-7.06-1.381-8.768-3.425a9.363 9.363 0 0 0 3.394 4.547A9.238 9.238 0 0 0 12.33 21a9.238 9.238 0 0 0 5.377-1.729 9.363 9.363 0 0 0 3.393-4.547c-1.712 2.044-5.003 3.425-8.772 3.425Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Jupyter</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Scala ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M4.589 24c4.537 0 13.81-1.516 14.821-3v-5.729c-.957 1.408-10.284 2.912-14.821 2.912V24zM4.589 16.365c4.537 0 13.81-1.516 14.821-3V7.636c-.957 1.408-10.284 2.912-14.821 2.912v5.817zM4.589 8.729c4.537 0 13.81-1.516 14.821-3V0C18.453 1.408 9.126 2.912 4.589 2.912v5.817z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Scala</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Stylus ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M13.671 8.861c-.445-.354-1.697.239-2.05 1.118-.446 1.116-1.105 2.746-1.752 3.46-.683.75-.751.17-.683-.262.158-1.02 1.153-3.381 1.696-4.047-.202-.3-1.52-.256-2.435 1.166-.342.536-1.122 2.325-1.99 3.734-.19.305-.427.092-.243-.621.207-.825.818-3.089 1.604-4.871 2.064-.409 4.254-.696 5.933-.702.226-.06.377-.263 0-.275-1.447-.049-3.62.122-5.652.38.391-.782.812-1.404 1.239-1.667-.464-.293-1.404-.177-1.94.617a10.547 10.547 0 00-.702 1.244c-1.49.232-2.765.494-3.412.739-.671.256-.598 1.068-.19.915.85-.317 1.996-.647 3.272-.94-.812 1.831-1.447 3.992-1.599 4.87-.379 2.137.946 2.124 1.593 1.282.702-.922 2.166-4.163 2.392-4.504.067-.116.16-.055.11.048-1.635 3.265-1.496 4.529-.17 4.248.597-.128 1.629-1.153 1.897-1.684.055-.128.171-.116.146-.061-1.037 2.692-2.355 4.87-3.24 5.554-.805.616-1.404-.72 1.446-2.637.422-.286.226-.677-.25-.543-1.47.232-5.681 1.568-7.53 2.85-.142.098-.27.177-.264.379.006.116.208.073.306.012 2.393-1.435 4.351-1.995 6.597-2.466.03.013.067.019.097.007.104-.025.098.03.031.073a3.99 3.99 0 01-.342.177c-1.513.591-2.429 1.897-2.105 2.563.275.574 1.758.366 2.46-.012 1.72-.934 2.971-2.765 3.826-5.292.745-2.24 1.685-4.778 1.904-4.852zM3.7 16.094c.623-.745.696-1.514.214-2.942-.305-.903-.812-1.599-.44-2.16.397-.598 1.24-.019.538.78l.14.098c.842.098 1.257-1.056.628-1.386-1.66-.866-3.113.8-2.472 2.729.275.817.66 1.684.348 2.374-.268.592-.787.94-1.135.952-.726.037-.244-1.63.592-2.045.073-.036.177-.085.08-.207-1.032-.116-1.636.36-1.984 1.025-1.013 1.934 1.922 2.649 3.49.782zm19.974-2.064c-2.8-.366-8.842.122-11.509.831-.794.207-.574.628-.171.549.006 0 .177-.043.183-.043 2.191-.427 7.507-.8 10.607-.207.372.067 1.49-1.05.89-1.13zm-9.22-.329c.78-.39 1.94-2.808 2.702-4.131.055-.098.153-.02.098.048-1.928 3.32-1.11 3.705-.348 3.656 1.02-.061 1.96-1.526 2.167-1.856.086-.128.135-.024.086.068-.05.152-.226.421-.391.787-.232.519.012.72.214.812.317.153 1.183.055 1.317-.476-.865-.018 1.209-4.108 1.423-4.358-.58-.336-1.477.031-1.886.836-.872 1.727-1.605 3.119-2.063 3.143-.89.049 1.026-3.85 1.337-3.973-.19-.275-1.404-.159-2.082.89-.244.38-1.732 3.016-2.099 3.45-.647.769-.696.11-.513-.66.061-.262.165-.598.3-.97.427-.964.885-1.27 1.166-1.581 1.885-2.093 2.966-3.79 2.538-4.455-.378-.592-1.642-.33-2.453.89-1.496 2.241-2.874 5.31-3.051 6.715-.171 1.403.847 1.506 1.537 1.165zm7.372-3.296c.238.586.598 1.166.384 1.679-.177.439-.41.623-.665.665-.36.06-.263-1.068.354-1.404.055-.03.134-.177.06-.262-.78-.043-1.22.33-1.458.824-.69 1.447 1.563 1.842 2.667.42.44-.567.458-1.128.036-2.147-.267-.647-.676-1.13-.42-1.557.275-.45.933-.061.44.544l.11.06c.64.037.902-.817.414-1.03-1.287-.55-2.49.835-1.922 2.208zm-6.579-.811c.067-.153.11-.195.226-.452.67-1.477 1.514-3.033 2.093-3.759.36-.379.866.134-.049 1.538a14.165 14.165 0 01-1.812 2.264v.006c-.171.189-.324.348-.391.44-.049.06-.104.049-.067-.037z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Stylus</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {MicrosoftExcel ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Microsoft Excel</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Tableau ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.348zm6.03 2.262l-.002 1.623v1.623h-2.957v.927h2.957v3.188H18.725l.011-1.582.02-1.576 1.465-.02 1.46-.01v-.927H18.728V2.436h-.522zm-12.407.06V5.686H2.291v.925H5.277V9.801h.985V6.61h3.013v-.925H6.262V2.496H5.77zm6.086 5.27v3.593H8.06v1.188h3.304v3.596h1.28v-3.596H15.953v-1.188H12.643V7.766h-.637zm9.721 1.55v2.221h-2.012v.811h2.012v2.261h.887v-2.261H24v-.811h-2.029V9.317h-.422zm-19.111.131V11.621H0v.621H1.973v2.194H2.64v-2.194h2v-.62H2.609V9.446h-.318zm15.709 4.516v3.254h-3.016v.927h3.016v3.217h1.072v-3.216H21.74v-.928H18.754v-3.254h-.533zm-12.463.008v3.246H2.262v.928h2.957v3.189H6.32v-3.189h2.955v-.928H6.32V13.97h-.55zm6.316 4.578l.002 1.103v1.1H9.566v.812h1.971v2.262h.928l.012-1.119.017-1.143H14.463v-.812h-2V18.549h-.465z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Tableau</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {PowerBI ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M21 1v22a1 1 0 0 1-1 1h-3.5V7c0-.827-.673-1.5-1.5-1.5h-2V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-6 5H9a1 1 0 0 0-1 1v4.5h2c.827 0 1.5.673 1.5 1.5v11H16V7a1 1 0 0 0-1-1zm-5 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7V13a1 1 0 0 0-1-1z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Power BI</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Looker ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.9475 0c-1.1598.0021-2.0982.944-2.096 2.1038a2.1 2.1 0 00.356 1.166l.895-.8959a.884.884 0 11.565.564l-.895.895c.9593.6478 2.2621.3953 2.91-.564.6478-.9593.3953-2.262-.564-2.91A2.096 2.096 0 0011.9475 0zm-.835 6.1128a3.2629 3.2629 0 00-.653-1.965l-1.164 1.162a1.667 1.667 0 01-.318 2.012l.632 1.5449a3.2819 3.2819 0 001.503-2.754zm-3.2499 1.666h-.03c-.9217.0009-1.6697-.7455-1.6707-1.6673-.001-.9217.7454-1.6697 1.6672-1.6707a1.669 1.669 0 01.9195.275l1.152-1.152c-1.4069-1.141-3.4724-.9257-4.6135.4811s-.9257 3.4723.481 4.6135a3.2799 3.2799 0 002.7275.6652l-.633-1.5439v-.001zm4.1279 1.3359c-.728 0-1.452.106-2.15.315l.922 2.2519c2.6872-.6819 5.4184.9438 6.1002 3.631.6818 2.6873-.9439 5.4184-3.6311 6.1002s-5.4184-.9439-6.1002-3.631c-.5682-2.2394.4655-4.5774 2.5041-5.6643l-.91-2.2449c-3.6908 1.808-5.2173 6.2657-3.4093 9.9567l.0005.001c1.808 3.6909 6.2657 5.2173 9.9567 3.4093l.001-.0005c3.6913-1.8071 5.2187-6.2645 3.4116-9.9558a7.4417 7.4417 0 00-6.6865-4.1696h-.008l-.001.001z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Looker</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {NoSQL ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">NoSQL</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Hadoop ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22.6148786,8.51458809 C22.4527967,9.15577678 22.1254391,9.70110654 21.4473346,9.94260905 C21.1149047,10.060965 20.9000793,9.93918049 20.561027,9.84144289 C20.8938327,9.87309841 21.0852218,9.92424509 21.3832721,9.77672285 C21.939686,9.50159222 22.3496579,9.05202745 22.6148786,8.51458809 L22.6148786,8.51458809 Z M23.9697255,12.7295161 C23.8906337,13.5066732 23.683182,14.2616621 23.3136953,14.9015827 C22.9828153,15.4754212 22.5216967,15.9578157 21.9074669,16.2867231 C21.4900743,16.5086405 21.0050967,16.6371413 20.5037277,16.68965 C19.9832433,16.7437556 19.4459448,16.7148241 18.9445759,16.6297205 C18.9211395,16.7074034 18.8969047,16.7863543 18.8738441,16.8635205 C18.8445369,16.9605536 18.814854,17.0582442 18.7855468,17.1547137 C18.6832065,17.4910419 18.4386981,17.7941647 18.1340254,18.0187592 C17.8195837,18.2507744 17.436195,18.4023358 17.0787318,18.4183984 C16.7372843,18.4349776 16.4734256,18.3545238 16.2394847,18.2163948 C16.0129176,18.0831974 15.8191802,17.897867 15.6078303,17.69375 L15.3309149,17.4273551 C15.268825,17.3668151 15.2066881,17.306463 15.1438468,17.2464866 C15.1371775,17.2900247 15.1309779,17.3316371 15.1243086,17.3696801 C15.2219523,17.5671749 15.2910872,17.7523174 15.3613963,17.9421566 L15.3613963,17.9427202 C15.4057328,18.061264 15.4512435,18.1831425 15.5061475,18.3152127 C15.5879634,18.5105 15.6497245,18.6734273 15.692699,18.8423663 C15.7356265,19.0129022 15.7592977,19.1863031 15.764558,19.3988272 C15.7695834,19.5798836 15.7745149,19.7605643 15.7795403,19.941245 C15.7840491,20.111734 15.7883701,20.2822699 15.7938182,20.4527588 C15.8691997,20.5894787 15.913771,20.6832241 15.9359863,20.7867386 C15.9609725,20.8971103 15.9584833,21.0047109 15.9457553,21.1800843 C15.918045,21.5742754 15.7877595,21.7939384 15.568848,21.9185879 C15.3633689,22.0350182 15.0912911,22.0523959 14.754775,22.050799 C14.7035814,22.0500006 14.6206383,22.0500006 14.5199888,22.0500006 C14.1934766,22.0500006 13.6883973,22.050799 13.533877,22.0398558 C13.3262844,22.0248265 13.153588,22.0089987 13.0086959,21.9742434 C12.8969623,21.9477072 12.8051425,21.9089598 12.728399,21.8527407 C12.6168532,21.9427757 12.5188338,22.0242159 12.4203447,22.1052803 C12.1304196,22.3441527 11.8361266,22.5875339 11.7175827,22.6663909 C11.672166,22.7363242 11.6310702,22.8068212 11.593356,22.8722927 C11.4716654,23.0855682 11.3816303,23.2433292 11.094711,23.3990237 C10.5312052,23.7033206 10.0951198,23.6767844 9.71257649,23.4419981 C9.3481153,23.218343 9.04705907,22.8074318 8.73228859,22.3218905 C8.58255892,22.0914252 8.34349867,21.7117468 8.22711532,21.3394422 C8.0984267,20.9273568 8.11627402,20.5265434 8.5268095,20.3156162 C8.54634763,20.3054714 8.56616756,20.2952796 8.58471938,20.2855106 C8.627506,20.2632484 8.66785035,20.2429588 8.70814774,20.2221995 C8.55254723,20.2304187 8.39614829,20.2367122 8.24054778,20.2347396 C7.93507669,20.232767 7.62814964,20.211726 7.31516389,20.1714286 C7.32023629,20.2087671 7.32455722,20.2386379 7.32695252,20.2579881 C7.35090551,20.4655807 7.36748474,20.6015022 7.34775875,20.7376585 C7.32793882,20.8780888 7.27218941,21.003067 7.15350469,21.1800374 C7.14561429,21.191779 7.11903117,21.2302447 7.09629931,21.2624638 C6.98625645,21.4245927 6.92120764,21.5210622 6.76983413,21.8560283 C6.78476953,22.0211161 6.78965406,22.1538908 6.77871083,22.2861019 C6.76668737,22.4285048 6.73672264,22.5733969 6.68604563,22.7628604 C6.55684038,23.2406052 6.07646549,23.3507419 5.54423942,23.3173487 C5.05588021,23.2869143 4.52121188,23.1331924 4.21231223,23.0492161 C4.14524385,23.0314157 4.09085647,23.0173257 4.03801899,23.0034705 C3.77735409,22.9355098 3.49649353,22.862054 3.26011038,22.7546412 C2.78678049,22.5385947 2.48342291,22.1995894 2.77884313,21.5505103 C2.82642035,21.4476064 2.8678919,21.3429177 2.90560612,21.2374306 C2.92007184,21.1999512 2.92955911,21.1640217 2.9418174,21.1265424 C2.70083153,21.1640217 2.44481632,21.1183232 2.19551735,21.0235915 C1.75938505,20.8577992 1.342603,20.5410091 1.08762107,20.2859333 C0.883738843,20.0815814 0.725132469,19.8617305 0.606447747,19.6359148 C0.478040929,19.3913595 0.395896259,19.1378805 0.354095942,18.8882528 C0.285242834,18.4796899 0.333289716,18.4331929 0.574792225,18.2013185 C0.610815645,18.1659996 0.651159997,18.1275339 0.661022993,18.1179527 C0.780365248,17.9999725 0.89890907,17.8816635 1.01796953,17.7642469 C1.14501431,17.6382824 1.27351506,17.5113315 1.40009018,17.3847564 C1.45828186,17.2273242 1.51619174,17.0703147 1.57457128,16.9115204 C1.61209764,16.8101664 1.64929522,16.7080139 1.68639887,16.6070826 C1.66855155,16.5129145 1.65239502,16.4182297 1.63882166,16.3213375 C1.6231348,16.2082418 1.61078257,16.1043516 1.60261037,16.0106062 C1.56588245,15.5787948 1.55357719,15.2074295 1.56639909,14.8711483 C1.57607422,14.6146634 1.59998024,14.37875 1.63933829,14.1529813 C1.4399179,14.1974117 1.23678714,14.1939832 1.05272485,14.1356036 C0.825265365,14.0621478 0.626737339,13.9051383 0.503778652,13.6470096 C0.457704369,13.5522778 0.421446116,13.4564659 0.387160463,13.3483017 C0.357007874,13.2528654 0.329156651,13.1463451 0.299285862,13.0256408 C0.13617069,12.8575941 0.0437403251,12.6812344 0.0130711032,12.5006476 C-0.0233750164,12.2933838 0.0186131678,12.0866835 0.111419266,11.8886252 C0.200280166,11.6982694 0.336718282,11.5172129 0.494620156,11.3529706 C0.919903162,10.9112492 1.5244109,10.579242 1.80574113,10.5303967 L2.01676228,10.4934809 L1.94654714,10.6956253 C1.91005406,10.7979657 1.86736137,10.9051905 1.82607769,11.0107246 C1.81442996,11.0413938 1.80264133,11.0723448 1.7898664,11.1056442 C1.91925952,11.2079845 1.99680146,11.3499647 2.03301274,11.5115769 C2.08956059,11.7614865 2.05302054,12.049392 2.00478579,12.264828 L1.94725164,12.5227219 L1.7838077,12.3159747 C1.74426179,12.2672233 1.71133817,12.2164524 1.67968264,12.1672314 C1.65046939,12.1222843 1.62275906,12.0800143 1.59443818,12.045259 C1.57194115,12.3807417 1.53112713,12.7171638 1.29206689,12.946502 C1.29883009,12.9753395 1.30202382,12.9907446 1.30681442,12.9940792 C1.31061872,12.9960518 1.35124487,12.9738835 1.44931123,12.9356997 C1.6176397,12.8714493 1.76736938,12.7642244 1.90822236,12.6381659 C2.05302054,12.5077865 2.18546649,12.3589492 2.31946234,12.2116618 C2.47092978,11.9175097 2.64428368,11.6392792 2.84670994,11.3746691 C3.05247083,11.1046579 3.28796161,10.8493941 3.55980457,10.6085492 C4.22513412,10.0193056 4.87238151,9.62689924 5.6070808,9.34261011 C6.32623413,9.06470845 7.12795483,8.88956982 8.11284546,8.73166794 C8.23679045,8.60316719 8.36256713,8.47588757 8.49153755,8.35001695 C8.6299013,8.21719527 8.77286778,8.08437358 8.92259746,7.95159887 C9.13296108,7.7666442 9.30875724,7.65354851 9.48361408,7.58356821 C9.64151595,7.51931783 9.79730433,7.49419067 9.97239599,7.48141574 C10.2730765,7.0805554 10.5472208,6.73661862 10.8697408,6.4386622 C11.207431,6.12638095 11.5952346,5.86646752 12.1173629,5.6469454 C13.1987699,5.19080531 14.1156059,4.95320103 14.9827981,5.00768234 C15.8562369,5.06230455 16.6734096,5.41197126 17.5491967,6.13455315 C17.7144724,6.2710852 17.8828008,6.41856048 18.0505657,6.56589486 C18.4175631,6.88855573 18.7777034,7.20450038 19.2007789,7.46911048 C19.3601368,7.56783438 19.494931,7.65359548 19.6281285,7.75457378 C19.759776,7.8550824 19.8812787,7.96737966 20.0078069,8.11678057 C20.1607303,8.29985657 20.3003621,8.48269774 20.4228511,8.67850169 C20.5257551,8.84208653 20.6156023,9.01572223 20.6949289,9.20621896 C20.8742006,9.13393729 21.0640398,9.05428185 21.2160239,8.92582807 C21.3472957,8.81324901 21.456634,8.65337454 21.5656436,8.4940167 C21.6632873,8.35053358 21.7613067,8.20836554 21.877737,8.09118375 C21.9156861,8.0518257 21.9589893,8.01970051 22.005909,7.99607628 C22.1844292,7.90181422 22.4103858,7.91736018 22.6242719,7.99119175 C22.8262285,8.06032666 23.0211401,8.18319141 23.153586,8.31385263 C23.2145018,8.37335938 23.2633471,8.43709312 23.2953784,8.49890123 C23.5613975,9.00750307 23.7527865,9.71463294 23.8684184,10.4424281 C23.9972949,11.2597887 24.032426,12.1066913 23.9697255,12.7295161 L23.9697255,12.7295161 Z M20.2449884,9.38187423 C20.2063349,9.38286053 20.1684328,9.38384683 20.1317049,9.38520886 C20.1867968,9.43931444 20.2299591,9.50356482 20.2616146,9.57457839 C20.2772076,9.559643 20.2950079,9.54517727 20.3141233,9.53212054 C20.2914384,9.48139656 20.2684248,9.43109528 20.2449884,9.38187423 L20.2449884,9.38187423 Z M1.49914284,11.6538859 C1.59749101,11.6428487 1.65864158,11.694512 1.73472756,11.7702692 C1.72096633,11.5887431 1.68658674,11.4539958 1.55911926,11.379084 C1.54996076,11.4085791 1.5427279,11.438262 1.53422693,11.4682267 C1.5177886,11.5266063 1.50764381,11.5886962 1.49914284,11.6538859 L1.49914284,11.6538859 Z M1.88995233,13.6347043 C1.89915779,13.6020625 1.90878596,13.5699373 1.91935345,13.5371076 C1.98116156,13.3420081 2.04738454,13.1526386 2.11839811,12.969046 C1.9698426,13.1033236 1.80278223,13.2172647 1.60012114,13.2984231 C1.07606727,13.5080822 1.0867287,13.3269318 0.861147885,12.8719659 C1.34072434,12.4889529 1.11875995,12.0185349 1.27140156,11.4898314 C1.30695532,11.3683287 1.35843076,11.249597 1.43127604,11.0930571 C0.929014692,11.3954284 0.00597913924,12.2399357 0.622792141,12.8799502 C0.689672649,13.1214528 0.741335963,13.3093663 0.833155762,13.5003327 C1.02196169,13.8947586 1.51515847,13.7935925 1.88995233,13.6347043 L1.88995233,13.6347043 Z M3.27852131,20.0330179 C2.74235004,19.2215281 2.25798299,18.2554711 1.97374083,17.2730697 C1.92127909,17.4138757 1.86867644,17.5535545 1.81649649,17.6941727 C1.57616815,17.9367084 1.33593374,18.1800896 1.0956054,18.4236117 C0.91755483,18.6042924 0.88279951,18.610539 0.91882293,18.8658027 C0.967386445,19.2162209 1.17413363,19.5886664 1.48298632,19.9039065 C1.76549071,20.1924227 2.74070621,20.9449223 3.1241889,20.4320465 C3.20581694,20.3226612 3.24423566,20.1874912 3.27852131,20.0480472 L3.27852131,20.0330179 L3.27852131,20.0330179 Z M15.0621717,18.4968797 C14.9773969,18.2953458 14.9305242,18.106305 14.8715341,17.9154326 C14.7439727,18.3717136 14.5718869,18.8011766 14.4156758,19.294937 C14.2676369,19.7621142 13.507059,21.1168203 13.0602183,21.4461034 C13.1472945,21.5109644 13.307075,21.5359506 13.5918338,21.5606081 C13.7934147,21.5777509 14.5869632,21.5824476 14.7869472,21.5853595 C15.2259914,21.5933908 15.3926291,21.5599976 15.4371535,21.0603663 C15.4586172,20.8152474 15.4390791,20.7697367 15.316778,20.5550991 C15.3062574,20.1726497 15.2957369,19.7894488 15.2851694,19.4070464 C15.2740853,19.0447456 15.2043868,18.8351804 15.0621717,18.4968797 L15.0621717,18.4968797 Z M22.9516294,8.87327239 C22.849477,8.62589905 22.441055,8.25519129 22.1816582,8.50716736 C21.91996,8.7621493 21.7230758,9.12102146 21.4379413,9.34660228 C21.0492923,9.65207336 20.3809099,9.54700897 20.5019899,10.196229 C20.5904751,10.6690892 20.6156492,11.1983563 20.5144831,11.6389035 C20.4180136,12.0620261 20.3176458,12.6633401 20.0969026,12.9465959 C20.1621393,12.7068781 20.2719003,12.0801082 20.3025695,11.6572675 C20.3191957,11.4259098 20.2932232,11.146693 20.2500139,10.8656916 C20.2012155,10.8666779 20.152605,10.8678051 20.1027734,10.869308 C19.9246289,10.8729244 19.634375,11.128376 19.5562695,11.2877808 C19.3382973,11.7317096 19.3234558,12.1442177 19.0793232,12.5667766 C19.2758316,12.094433 19.1652721,11.6684455 19.3447317,11.1618163 C19.4078549,10.9831082 19.568199,10.8290106 19.7535294,10.7352182 C19.6503907,10.7198132 19.5472519,10.7649011 19.3948921,10.8004549 C18.742948,10.9555388 18.7722552,11.4679449 18.3713009,11.9572904 C18.7577895,11.248188 18.5605296,10.7780048 19.3986025,10.5867097 C19.6743906,10.5241971 19.8757366,10.4991169 20.0570279,10.644009 C20.0609261,10.644009 20.0648713,10.644009 20.0683469,10.6432106 C20.116018,10.6395941 20.1632665,10.6356959 20.2113133,10.6323613 C20.1875013,10.5022167 20.1620923,10.3739977 20.1367303,10.2531525 C19.7535294,10.2029452 19.4003872,10.2136066 19.0074172,10.2729725 C19.0923799,10.2360567 19.1749942,10.2019589 19.2550724,10.1729805 C19.3800506,10.1270941 19.5015533,10.0908358 19.6223985,10.0701705 C19.6343281,10.0462644 19.6413261,10.0198692 19.6447077,9.99145437 C19.6572008,9.85905538 19.5591814,9.74079336 19.4269233,9.72768967 C19.2941017,9.71510261 19.1812408,9.81274627 19.168325,9.94556795 C19.1636283,9.99770093 19.1819923,10.0600257 19.2112995,10.111689 C19.2048181,10.1000413 19.1985715,10.0885344 19.1928885,10.0762292 L19.1923249,10.0754307 C19.1417418,9.97788101 19.1186812,9.86534892 19.1290139,9.74868376 C19.1381724,9.66062129 19.1656948,9.57941596 19.20773,9.50746305 C19.1948611,9.51056285 19.1819453,9.51469591 19.1690764,9.51925168 C19.0759416,9.55663713 18.8772726,9.54466064 18.7874254,9.51389748 C18.9635973,9.48468423 19.2260939,9.39103273 19.3956436,9.30841839 C19.4003402,9.30644579 19.404802,9.30452016 19.4085124,9.30217183 C19.5143752,9.23693515 19.6412791,9.20480996 19.7737251,9.21711523 C19.8409344,9.22383146 19.9041515,9.24120912 19.9620144,9.26877854 C20.0409183,9.29202703 20.1292156,9.32340075 20.2354072,9.36158464 C20.0740768,9.02445803 19.8918932,8.71969145 19.6725589,8.41393856 C19.4651542,8.1253285 19.2909079,8.02566527 18.9842627,7.84451491 C18.9174761,7.80487506 18.8522394,7.76528217 18.7878012,7.72371669 C18.5612341,7.68219817 18.3085065,7.64138415 18.0904873,7.68290267 C18.2701817,7.61221786 18.4053518,7.58370911 18.562784,7.57069934 C18.1288121,7.25954529 17.754394,6.91034826 17.3260582,6.55011406 C15.6731609,5.16027698 14.3356447,5.25900088 12.2307873,6.17287794 C11.3766049,6.54475986 11.070852,6.91866136 10.5453421,7.5914586 C10.5499449,7.5914586 10.5554869,7.59098894 10.5617805,7.59098894 C11.096214,7.57750951 11.6275946,7.55914555 12.1770105,7.50748223 C11.608761,7.63978729 11.0654038,7.74555618 10.507487,7.83004918 C9.89184819,7.92398248 9.70280743,7.90834258 9.23844817,8.36025568 C8.38276279,9.19269257 7.66600476,10.1335754 6.88278892,10.977801 C6.42956076,11.4670525 6.20416781,11.9573844 5.93805478,12.5147376 C5.67410221,13.0692258 5.71064226,13.2792607 6.06481776,13.7584614 C6.42664883,14.2489811 6.64537251,14.4708516 6.79876559,14.9063733 C7.19887447,14.2888088 7.68089319,13.7767784 8.1891193,13.1629243 C7.77416895,13.8279721 7.39575866,14.4563858 7.05280819,15.1325647 C6.8391569,15.5532919 6.73423341,15.7676947 6.74109054,16.2329933 C7.14213876,16.6950981 7.39364516,16.9415791 7.76599676,17.0439194 C8.16709194,17.1541032 8.54507953,17.1357392 8.90761509,16.9478257 C9.80956262,16.4810711 10.6668918,15.8720546 11.667939,15.7953111 C12.184713,14.8742481 12.0395391,13.7160036 11.8540678,12.6683655 C11.7004399,11.7977447 11.7394222,11.0299809 11.946827,10.15673 C11.9987721,11.0048538 12.0666389,11.7923905 12.2348734,12.6238881 C12.4799924,13.8419681 12.5315617,14.8935044 12.0192965,16.1521167 C10.9129501,16.1786528 10.0049439,16.8268865 9.02371665,17.3286782 C8.58251195,17.5544939 8.169816,17.5771318 7.67614956,17.4597152 C7.17285495,17.3399972 6.78697696,16.9517239 6.26912269,16.3846955 C6.31989363,15.955984 6.37583091,15.6895891 6.52847252,15.3747717 C6.34379966,14.8184987 6.11479028,14.5626714 5.69147987,13.9937174 C5.20053749,13.3341647 5.19208349,13.0484196 5.56344878,12.297329 C5.83111172,11.7527976 6.08200756,11.2504424 6.50536493,10.7536761 C6.92214697,10.2615126 7.3054418,9.80339991 7.69286968,9.3703674 C6.08271206,9.61478184 5.05489391,10.0030551 3.95516982,10.9676092 C3.13982879,11.6834279 2.63127392,12.5722248 2.26845656,13.5985869 C2.03855481,14.246257 1.97411657,14.8987647 2.08251559,15.9575339 C2.22186564,17.3221968 2.94656103,18.8618575 3.72695887,19.984877 C3.63175748,20.6841165 3.50832912,21.2108945 3.3131827,21.7106666 C3.09196978,22.2774601 3.97226568,22.4509079 4.39754869,22.5672913 C4.74289446,22.662023 6.0544851,23.0219754 6.18416002,22.5571465 C6.26142016,22.2785873 6.26142016,22.0840984 6.2420699,21.790322 C6.47586987,21.324131 6.54688345,21.2618063 6.71375595,20.9860651 C6.89227618,20.6909267 6.90721158,20.5731343 6.90866755,20.2264735 C6.90937204,19.779398 6.89781825,18.9809649 6.91665188,18.6923079 C6.97719189,18.9504836 7.04919176,19.3098724 7.1088394,19.6547954 C8.04108042,19.821574 8.96627644,19.8094566 9.89790689,19.6192417 C9.90974248,19.5541929 9.93130018,19.4832732 9.95544103,19.3961971 C10.0177188,19.1781779 10.142838,18.9602526 10.2058202,18.7418577 C10.1882077,18.956918 10.1718164,19.1713677 10.1543448,19.3858174 C10.1369671,19.6071243 10.1362626,19.7856445 10.1635033,20.0063408 C10.1785326,20.1277966 10.1939846,20.2489235 10.2084504,20.3701914 C10.1410532,20.2590683 10.0360828,20.1524071 9.97474433,20.0406734 C9.55979398,20.3136906 9.33158303,20.4682578 8.92414735,20.6832711 C8.49374498,20.9110124 8.98741143,21.7258368 9.16513323,22.0090927 C9.55584878,22.6291933 10.0224624,23.3643153 10.7482381,22.980363 C10.986312,22.8547741 11.1256621,22.563393 11.2845502,22.353593 C11.497544,22.228239 12.62836,21.27491 12.8080544,21.1709728 C13.0615804,21.0254701 13.9750817,19.5287839 14.0908545,19.15554 C14.3463061,18.3289739 14.646329,17.6999026 14.7311038,16.8375949 C14.1494689,16.5930396 13.8666827,16.3213845 13.4498537,15.8313345 C14.0358096,16.265682 14.5416404,16.4978852 15.1732948,16.6979161 C15.4035254,16.900812 15.6358224,17.1059624 15.8773719,17.3209757 C16.2275552,17.6328812 16.5490889,17.9508454 17.0568453,17.9600039 C17.6060733,17.9693972 18.2271603,17.5494684 18.3869408,17.0287492 C18.4482793,16.8285773 18.5101344,16.6277949 18.5712849,16.4273882 C18.462698,16.4011808 18.3560837,16.3719206 18.2533207,16.3404529 C18.1394266,16.6142685 18.1484442,16.7203662 18.0947143,16.9215243 C18.0021431,17.265649 17.5284844,17.5045213 17.0322348,17.3847564 C16.8558281,17.3422046 16.7521257,17.3175941 16.6892374,17.2722713 C16.7388811,17.407817 16.8361021,17.523261 17.0165949,17.5562316 C17.2166259,17.5933353 17.364242,17.6093979 17.6548717,17.5433628 C17.2955298,17.7297264 17.179898,17.7377108 16.9251978,17.6808811 C16.2550777,17.5320438 16.4910381,16.7250159 16.6371044,16.2314903 C16.7288772,15.920759 16.6978323,15.5910531 16.6282747,15.2797112 C16.8821764,15.4402432 17.0833345,15.5816598 17.3722264,15.6793504 C18.7255234,16.1352087 20.3314071,16.5998498 21.6935338,15.8388961 C22.7618842,15.2426075 23.3476522,13.9201206 23.4792528,12.7087098 C23.5965285,11.6287587 23.3941962,9.94411199 22.9516294,8.87327239 L22.9516294,8.87327239 Z M16.0434459,15.3758049 C16.0168628,15.5439925 15.9807455,15.7515851 15.9541623,15.9197727 C16.0256456,15.7299335 16.1106083,15.5101765 16.1932696,15.3289322 C16.2809563,15.1373553 16.3299425,15.1199776 16.5149441,15.0187645 C16.6470144,14.9469055 16.8860276,14.8484634 17.0174873,14.7773559 C16.8821294,14.7999938 16.6393588,14.8494027 16.5045645,14.8722755 C16.1430152,14.9334261 16.1000408,15.0199386 16.0434459,15.3758049 L16.0434459,15.3758049 Z M9.86540597,8.90807468 C9.44618166,9.32340075 9.03874598,10.7473356 8.90855443,11.3167593 C9.11314115,10.8429127 9.62709719,9.52000315 10.0206777,9.18315834 C10.1293585,9.08988257 10.2059142,9.03267719 10.2868847,8.99106474 C10.0050848,9.46448857 10.0255622,9.58176429 10.1245679,10.2151096 C10.2085443,9.57124376 10.4319647,9.32194479 10.7968955,8.84218047 C11.1974741,8.74092037 11.5732542,8.62115542 11.9837897,8.46081128 C11.5201349,8.51346089 11.0579362,8.56099114 10.593436,8.60476406 C10.2045052,8.64144501 10.1417108,8.63590294 9.86540597,8.90807468 L9.86540597,8.90807468 Z M16.8285874,10.4872343 C16.7385524,10.2980996 16.5803687,10.1626478 16.3973396,10.0959082 C16.5639304,10.006061 16.7266228,9.9133958 16.8543251,9.79766997 C16.4808933,9.97064814 16.0465457,9.92814333 15.7269847,10.1449414 C15.4437758,10.3347806 15.0545632,10.9391004 14.7680196,11.194552 C14.9754243,11.1140982 15.1754083,10.9747012 15.3594237,10.828447 C15.3607857,10.9371278 15.3852084,11.048157 15.4340537,11.1529866 C15.4852004,11.2597887 15.5594077,11.3477103 15.6457793,11.4172209 C15.6211688,11.3926104 15.5998459,11.3645713 15.5840652,11.3319765 C15.5075095,11.1718202 15.575846,10.979163 15.7360023,10.9033588 C15.8965343,10.8260517 16.0900838,10.8945761 16.1666395,11.0545445 C16.1734966,11.0699965 16.1801189,11.0854016 16.1844398,11.1008536 C16.0309059,11.2154052 15.8902877,11.3492132 15.7726832,11.5041562 C15.6699672,11.6393732 15.5840182,11.7920148 15.5227267,11.9610947 C16.0684322,11.3139413 16.8600551,10.8243609 17.6043356,10.6159699 C17.3961324,10.6135276 17.1496514,10.6526039 16.8988495,10.7342319 C16.8898789,10.6514297 16.8670531,10.5676412 16.8285874,10.4872343 L16.8285874,10.4872343 Z M14.1629483,9.9039555 C14.2885371,9.34810521 14.5118166,8.81235664 15.3754393,8.39750023 C14.230909,8.68413769 14.0160836,9.16479438 14.1629483,9.9039555 L14.1629483,9.9039555 Z"
                        ></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Hadoop</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Pyspark ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M10.812 0c-.425.013-.845.215-1.196.605a3.593 3.593 0 00-.493.722c-.355.667-.425 1.415-.556 2.143a551.9 551.9 0 00-.726 4.087c-.027.16-.096.227-.244.273C5.83 8.386 4.06 8.94 2.3 9.514c-.387.125-.773.289-1.114.506-1.042.665-1.196 1.753-.415 2.71.346.422.79.715 1.284.936 1.1.49 2.202.976 3.3 1.47.019.01.036.013.053.019h-.004l1.306.535c0 .023.002.045 0 .073-.2 2.03-.39 4.063-.58 6.095-.04.419-.012.831.134 1.23.317.87 1.065 1.148 1.881.701.372-.204.666-.497.937-.818 1.372-1.623 2.746-3.244 4.113-4.872.111-.133.205-.15.363-.098.349.117.697.231 1.045.347h.001c.02.012.045.02.073.03l.142.042c1.248.416 2.68.775 3.929 1.19.4.132.622.164 1.045.098.311-.048.592-.062.828-.236.602-.33.995-.957.988-1.682-.005-.427-.154-.813-.35-1.186-.82-1.556-1.637-3.113-2.461-4.666-.078-.148-.076-.243.037-.375 1.381-1.615 2.756-3.236 4.133-4.855.272-.32.513-.658.653-1.058.308-.878-.09-1.57-1-1.741a2.783 2.783 0 00-1.235.069c-1.974.521-3.947 1.041-5.918 1.57-.175.047-.26.015-.355-.144a353.08 353.08 0 00-2.421-4.018 4.61 4.61 0 00-.652-.849c-.371-.37-.802-.549-1.227-.536zm.172 3.703a.592.592 0 01.189.211c.87 1.446 1.742 2.89 2.609 4.338.07.118.135.16.277.121 1.525-.41 3.052-.813 4.579-1.217.367-.098.735-.193 1.103-.289a.399.399 0 01-.1.2c-1.259 1.48-2.516 2.962-3.779 4.438-.11.13-.12.22-.04.37.937 1.803 1.768 3.309 2.498 4.76l-3.696-1.019c-.538-.18-1.077-.358-1.615-.539-.163-.055-.25-.03-.36.1-1.248 1.488-2.504 2.97-3.759 4.454a.398.398 0 01-.18.132c.035-.378.068-.757.104-1.136.149-1.572.297-3.144.451-4.716-.03-.318.117-.405-.322-.545-1.493-.593-3.346-1.321-4.816-1.905a.595.595 0 01.24-.134c1.797-.57 3.595-1.14 5.394-1.705.127-.04.199-.092.211-.233.013-.148.05-.294.076-.441.241-1.363.483-2.726.726-4.088.068-.386.14-.771.21-1.157z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Pyspark</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {R ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 2.746c-6.627 0-12 3.599-12 8.037 0 3.897 4.144 7.144 9.64 7.88V16.26c-2.924-.915-4.925-2.755-4.925-4.877 0-3.035 4.084-5.494 9.12-5.494 5.038 0 8.757 1.683 8.757 5.494 0 1.976-.999 3.379-2.662 4.272.09.066.174.128.258.216.169.149.25.363.372.544 2.128-1.45 3.44-3.437 3.44-5.631 0-4.44-5.373-8.038-12-8.038zm-2.111 4.99v13.516l4.093-.002-.002-5.291h1.1c.225 0 .321.066.549.25.272.22.715.982.715.982l2.164 4.063 4.627-.002-2.864-4.826s-.086-.193-.265-.383a2.22 2.22 0 00-.582-.416c-.422-.214-1.149-.434-1.149-.434s3.578-.264 3.578-3.826c0-3.562-3.744-3.63-3.744-3.63zm4.127 2.93l2.478.002s1.149-.062 1.149 1.127c0 1.165-1.149 1.17-1.149 1.17h-2.478zm1.754 6.119c-.494.049-1.012.079-1.54.088v1.807a16.622 16.622 0 002.37-.473l-.471-.891s-.108-.183-.248-.394c-.039-.054-.08-.098-.111-.137z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">R</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Julia ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M11.138 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zm6.431-11.138a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0zM24 17.569a5.569 5.569 0 1 1-11.138 0 5.569 5.569 0 1 1 11.138 0z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Julia</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Hive ? (
                    <div class="jsx-85785b62a986c47 skill">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        class="jsx-85785b62a986c47 icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M19.442 21.355c.55-.19.74-.256.99-.373.342-.152.605-.39.605-.818a.846.846 0 00-.605-.813c-.318-.092-.703.042-.99.122l-5.42 1.46a7.808 7.808 0 01-4.057 0l-5.407-1.46c-.287-.08-.672-.214-.99-.122a.847.847 0 00-.605.813c0 .427.263.666.605.818.25.117.44.184.99.373l5.138 1.79c1.491.52 3.104.52 4.601 0zm-9.263-3.224a7.622 7.622 0 003.636 0l8.01-1.967c.507-.122.709-.165.99-.257.354-.116.605-.415.605-.806a.847.847 0 00-.605-.813c-.281-.08-.697.024-.99.08l-8.664 1.545a6.813 6.813 0 01-2.334 0l-8.652-1.545c-.293-.056-.708-.16-.99-.08a.847.847 0 00-.604.813c0 .39.25.69.604.806.282.092.483.135.99.257zM14.75.621a24.43 24.43 0 00-5.511 0L6.495.933c-.294.03-.715.055-.99.14-.28.092-.605.355-.605.807 0 .39.257.702.605.806.281.08.696.074.99.074h11.01c.293 0 .709.006.99-.074a.835.835 0 00.605-.806c0-.452-.324-.715-.605-.807-.275-.085-.697-.11-.99-.14zm6.037 6.767c.3-.019.709-.037.99-.116a.84.84 0 000-1.614c-.281-.085-.69-.073-.99-.073H3.214c-.3 0-.709-.012-.99.073a.84.84 0 000 1.614c.281.079.69.097.99.116l7.808.556c.642.042 1.308.042 1.943 0zm1.62 4.242c.513-.08.708-.104.989-.202.354-.121.605-.409.605-.806a.84.84 0 00-.605-.806c-.28-.086-.69-.019-.99.012l-9.232.929c-.776.079-1.582.079-2.358 0l-9.22-.93c-.3-.03-.715-.097-.99-.011a.84.84 0 00-.605.806c0 .397.25.685.605.806.275.092.476.123.99.202l8.823 1.418c1.038.165 2.12.165 3.158 0Z"></path>
                      </svg>
                      <p class="jsx-85785b62a986c47">Hive</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div id="projects" class="jsx-86990e7fba6e46fd projects">
              <h2 class="jsx-86990e7fba6e46fd">Projects</h2>
              <div class="jsx-86990e7fba6e46fd projects_grid">
                <div class="jsx-86990e7fba6e46fd project">
                  <img
                    style={{ position: "relative", width: "100%" }}
                    src={ProjectImage1}
                    alt="Coffeto"
                  />
                  <div class="jsx-86990e7fba6e46fd project_about">
                    <h4 class="jsx-86990e7fba6e46fd">{ProjectName1}</h4>
                    <div class="jsx-86990e7fba6e46fd about">
                      <p class="jsx-86990e7fba6e46fd about_line">
                        {Description1}
                      </p>
                      {/* <p class="jsx-86990e7fba6e46fd about_line">
                      It provides the portfolios of stocks. User can visit,
                      invest and buy stocks.
                    </p> */}
                    </div>
                  </div>
                  <div class="jsx-86990e7fba6e46fd demo_links">
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={RepoUrl1}
                      class="jsx-86990e7fba6e46fd demo_link"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                      <p class="jsx-86990e7fba6e46fd">Demo</p>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={DemoUrl1}
                      class="jsx-86990e7fba6e46fd demo_link"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                      </svg>
                      <p class="jsx-86990e7fba6e46fd">Demo</p>
                    </a>
                  </div>
                </div>
                <div class="jsx-86990e7fba6e46fd project">
                  <div class="jsx-86990e7fba6e46fd project_about">
                    <img
                      style={{ position: "relative", width: "100%" }}
                      src={ProjectImage2}
                      alt="Coffeto"
                    />
                    <h4 class="jsx-86990e7fba6e46fd">{ProjectName2}</h4>
                    <div class="jsx-86990e7fba6e46fd about">
                      <p class="jsx-86990e7fba6e46fd about_line">
                        {Description2}
                      </p>
                      {/* <p class="jsx-86990e7fba6e46fd about_line">
                      Tech stack used - ReactJS, CSS, styles-components,
                      MongoDB, ExpressJS, NodeJS and Redis.
                    </p> */}
                    </div>
                  </div>
                  <div class="jsx-86990e7fba6e46fd demo_links">
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={RepoUrl2}
                      class="jsx-86990e7fba6e46fd demo_link"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                      <p class="jsx-86990e7fba6e46fd">Code</p>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={DemoUrl2}
                      class="jsx-86990e7fba6e46fd demo_link"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                      </svg>
                      <p class="jsx-86990e7fba6e46fd">Demo</p>
                    </a>
                  </div>
                </div>
                <div class="jsx-86990e7fba6e46fd project">
                  <div class="jsx-86990e7fba6e46fd project_about">
                    <img
                      style={{ position: "relative", width: "100%" }}
                      src={ProjectImage3}
                      alt="Coffeto"
                    />
                    <h4 class="jsx-86990e7fba6e46fd">{ProjectName3}</h4>
                    <div class="jsx-86990e7fba6e46fd about">
                      <p class="jsx-86990e7fba6e46fd about_line">
                        {Description3}
                      </p>
                      {/* <p class="jsx-86990e7fba6e46fd about_line">
                      Tech stack used - ReactJS, CSS, styles-components,
                      MongoDB, ExpressJS, NodeJS and Redis.
                    </p> */}
                    </div>
                  </div>
                  <div class="jsx-86990e7fba6e46fd demo_links">
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={RepoUrl3}
                      class="jsx-86990e7fba6e46fd demo_link"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                      <p class="jsx-86990e7fba6e46fd">Code</p>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={DemoUrl3}
                      class="jsx-86990e7fba6e46fd demo_link"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                      </svg>
                      <p class="jsx-86990e7fba6e46fd">Demo</p>
                    </a>
                  </div>
                </div>
                <div class="jsx-86990e7fba6e46fd project">
                  <div class="jsx-86990e7fba6e46fd project_about">
                    <img
                      style={{ position: "relative", width: "100%" }}
                      src={ProjectImage4}
                      alt="Coffeto"
                    />
                    <h4 class="jsx-86990e7fba6e46fd">{ProjectName4}</h4>
                    <div class="jsx-86990e7fba6e46fd about">
                      <p class="jsx-86990e7fba6e46fd about_line">
                        {Description4}
                      </p>
                      {/* <p class="jsx-86990e7fba6e46fd about_line">
                      Tech stack used - ReactJS, CSS, styles-components,
                      MongoDB, ExpressJS, NodeJS and Redis.
                    </p> */}
                    </div>
                  </div>
                  <div class="jsx-86990e7fba6e46fd demo_links">
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={RepoUrl4}
                      class="jsx-86990e7fba6e46fd demo_link"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                      <p class="jsx-86990e7fba6e46fd">Code</p>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={DemoUrl4}
                      class="jsx-86990e7fba6e46fd demo_link"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                      </svg>
                      <p class="jsx-86990e7fba6e46fd">Demo</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact" class="jsx-307a8e21887ecf27 contact_wrapper">
              <div class="jsx-307a8e21887ecf27 contact">
                <h2 class="jsx-307a8e21887ecf27">Let's connect</h2>
                <div class="jsx-307a8e21887ecf27 links_wrapper">
                  <div class="jsx-307a8e21887ecf27 email_phone_container">
                    <p class="jsx-307a8e21887ecf27 contact_para">
                      Drop me a mail at{" "}
                      <em class="jsx-307a8e21887ecf27">
                        <a
                          rel="noreferrer noopener"
                          href={email}
                          target="_blank"
                          class="jsx-307a8e21887ecf27 mail_phone"
                        >
                          {email}
                        </a>
                      </em>
                    </p>
                    <p class="jsx-307a8e21887ecf27 contact_para">
                      Or call me at{" "}
                      <a href={phone} class="jsx-307a8e21887ecf27 mail_phone">
                        {phone}
                      </a>
                    </p>
                  </div>
                  <div class="jsx-307a8e21887ecf27 contact_links">
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={Github}
                      class="jsx-307a8e21887ecf27 icon"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={Twitter}
                      class="jsx-307a8e21887ecf27 icon"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={Linkedin}
                      class="jsx-307a8e21887ecf27 icon"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={Hashnode}
                      class="jsx-307a8e21887ecf27 icon"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={Median}
                      class="jsx-307a8e21887ecf27 icon"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={Dribble}
                      class="jsx-307a8e21887ecf27 icon"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="jsx-307a8e21887ecf27 main_footer">
                  <p class="jsx-307a8e21887ecf27 footer_text">
                    Built with ❤️ and{" "}
                    <a
                      href="https://dev.voyage"
                      target="_blank"
                      rel="noreferrer noopener"
                      class="jsx-307a8e21887ecf27"
                    >
                      Portfolio Generator
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
  }

export default Resume;
