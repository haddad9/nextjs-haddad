import Head from "next/head"
import tw from "twin.macro"
import { Memes } from "../components/Memes"

export default function Home() {
  return (
    <div>
      <Head>
        <title>c0mPfsstZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Memes />
      </main>
    </div>
  )
}
