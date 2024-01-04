import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Swiss Spices | Under Construction</title>{" "}
        <meta name="description" content="Swiss Spices | Under Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconn.ico" />
      </Head>
      <main className="main">
        <div className="centered-container">
          <div className="logo-container">
            <Image
              src="/logo.png"
              alt="Swiss Spices Logo"
              className="logo"
              width={1200}
              height={600}
            />
          </div>
          <h1>Coming Soon</h1>
          <p>
            Swiss Spices is your gateway to the rich flavors of Switzerland. Our
            journey is fueled by a passion for culinary excellence and a
            dedication to sourcing the finest Swiss herbs, salts, and chilies.
            We are committed to sustainability and elegance in our packaging,
            crafted locally to reflect the high quality and tradition of
            Switzerland. Stay tuned as we prepare to unveil a unique spice
            experience, blending the art of cooking with the best of Swiss
            ingredients.
          </p>
        </div>
      </main>
    </>
  );
}
