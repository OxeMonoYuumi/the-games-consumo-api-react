import Head from "next/head";
import Container from "@/Components/Container/index.js"
import LoginContent from "@/Components/LoginContent";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Games &copy; 2024</title>
        <meta name="description" content="Consumo de uma API de games em React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <LoginContent />
        </Container>
      </main>
      <Footer />
    </>
  );
}
