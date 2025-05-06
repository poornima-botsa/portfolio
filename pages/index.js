import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Poornima Botsa | Portfolio</title>
        <meta name="description" content="Portfolio of BOTSA POORNIMA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-3xl mx-auto">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
