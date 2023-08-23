import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
// import team1 from "../assets/img/team1.jpg";
import team1 from "../assets/img/team7.jpeg";
import team2 from "../assets/img/team6.jpeg";
import team3 from "../assets/img/team5.jpeg";
import team4 from "../assets/img/team8.jpeg";
import team5 from "../assets/img/team9.jpeg";
import team6 from "../assets/img/bel.jpeg";
import team7 from "../assets/img/folo.jpeg";
import team8 from "../assets/img/olu.jpeg";
import team9 from "../assets/img/ri.jpeg";

const Home = () => {
  const teamMembers = [
    {
      nameTitle: "Ademuyiwa Adekunle",
      imgSrc:
        "https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/343324053_757820185794519_2169248705563550875_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG6f7nrQaXNec7ktxHAMJaEpaOMy7Ft786lo4zLsW3vznxZqvgGb5XcTeoiO6guPsbkiZdIVcHM3fZaLYY1B84_&_nc_ohc=dTNL8OCMB_gAX9MjJgX&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&oh=00_AfC5__3zmWcRzS9tRzBDpG6o6fVqnGdnlmxU-DVTSnLpRA&oe=64EA721E",
      stack: "Fullstack Developer",
    },
    {
      nameTitle: "Adenusi David",
      imgSrc: team1,
      stack: "Frontend Developer",
    },
    {
      nameTitle: "Paseda Modupe",
      imgSrc: team2,
      stack: "Frontend Developer",
    },

    {
      nameTitle: "Haroun Ayotunde",
      imgSrc: team3,
      stack: "Backend Developer",
    },

    {
      nameTitle: "Mogaji Rasheed",
      imgSrc: team4,
      stack: "Backend Developer",
    },
    {
      nameTitle: "Owodeinde Moshood",
      imgSrc: team5,
      stack: "Frontend Developer",
    },
    {
      nameTitle: "Bello Idowu",
      imgSrc: team6,
      stack: "Backend Developer",
    },
    {
      nameTitle: "Folorunsho Quazeem",
      imgSrc: team7,
      stack: "Frontend Developer",
    },

    {
      nameTitle: "Oladipupo Olumide",
      imgSrc: team8,
      stack: "Frontend Developer",
    },
    {
      nameTitle: "Afolabi Omobalanle",
      imgSrc: team9,
      stack: "Backend Developer",
    },
  ];
  return (
    <>
      <Navbar transparent />
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black hover:bg-slate-600"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12 mt-8">
                  <h1 className="text-white font-semibold text-5xl">
                    Welcome to the ultimate platform, where innovation meets
                    competition!
                  </h1>
                  <p className="mt-4 text-md text-gray-300">
                    Get ready to embark on a journey of innovation, learning,
                    and growth. Are you up for the challenge?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white hover:translate-y-2 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="bi bi-braces"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Mentorship and Feedback
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Receive guidance from experienced mentors who are eager to
                      share their knowledge and provide feedback on your
                      solutions.
                      {/* Grow not only as a developer but also as a
                      critical thinker and problem solver. */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center hover:translate-y-2">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="bi bi-journal-code"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Real-world Impact</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Our challenges aren't just theoretical exercises. They're
                      often based on real-world problems faced by industries and
                      communities.
                      {/* By participating, you're contributing to
                      innovative solutions that can make a tangible impact on
                      the world */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center hover:translate-y-2">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="bi bi-code-slash"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Skill Levels</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Our Challenges are tailored to cater for participants of
                      all skill levels, from beginners taking their first steps.
                      {/* Choose challenges that
                      match your skill level and progressively level up. */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words hover:translate-y-2 bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="bi bi-braces"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Rich and Varied Question Formats
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      We present questions in various formats including multiple
                      choice, coding challenges, algorithmic puzzles, and design
                      problems.
                      {/* This keeps
                      participants engaged and provides a holistic learning
                      experience. */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words hover:translate-y-2 bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="bi bi-journal-code"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Interactive Coding Environment
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      We offer an in-browser coding environment that supports
                      multiple languages. You can write, and test their code
                      directly on the platform.
                      {/* making it easier to tackle coding challenges. */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words hover:translate-y-2 bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="bi bi-code-slash"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Challenge History and Progress Tracking
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      We give participants the ability to track their challenge
                      history, progress, and completion status. 
                      {/* This offers a
                      sense of achievement and a roadmap for continuous growth. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <h3>Our features</h3> */}
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="bi bi-terminal"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Collaboration Opportunities
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Collaboration is the heart of innovation. Engage with other
                  participants through forums, chat rooms, and collaborative
                  coding spaces. Form teams, brainstorm ideas, and collectively
                  solve challenges that require multidisciplinary expertise.
                </p>
                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Participation in discussion forums, share insight, ask
                  questions,and connect with like minded developers to grow your
                  network.
                </p> */}
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg bg-white">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-black">
                      Growing With Like Minds
                    </h4>
                    <p className="text-md font-light mt-2 text-black">
                      learning and grow with other participants, it helps you
                      learn faster. Support one another in the learning journey.
                      <br />
                      <span className="font-bold">Never Walk Alone</span>
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="bi bi-braces-asterisk"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing platform</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The platform comes with well structured word problem to aid
                    your growth and get started faster.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted problems
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Built in Terminal</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Level assertation</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Meet Our Developers</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Meet our amazing developers who are working together to
                  develop one of the greatest platform for Techies.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="flex flex-wrap justify-between w-full px-6">
                {teamMembers.map((teamMember) => {
                  return (
                    <div className="w-full p-2 md:w-6/12 lg:w-3/12 lg:mb-4 mb-12 px-4 bg-gray-100 md:mr-2 hover:bg-gray-950 hover:text-white rounded-lg">
                      <img
                        alt="img"
                        src={teamMember.imgSrc}
                        className="shadow-lg rounded-full max-w-full mx-auto"
                        style={{ maxWidth: "120px" }}
                      />
                      <div className="pt-6 text-center">
                        <h5 className="text-xl font-bold">
                          {teamMember.nameTitle}
                        </h5>
                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                          {teamMember.stack}
                        </p>
                        <div className="mt-6 flex justify-around items-center">
                          <button
                            className="bg-blue-600 text-white p-2 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="flex bi bi-twitter"></i>
                          </button>
                          <button
                            className="bg-gray-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                          >
                            <i className="bi bi-github"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64"></div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
