import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";
import coffee from "../public/coffee.jpg";
import { poppins, robotoMono } from "./layout";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(poppins.variable);
  console.log(poppins.className);

  return (
    <main className="relative h-screen">
      {/* local image */}
      <Image src={coffee} alt="Coffee" width={600} height={300} />
      <h1>Hello World Default (Should be Poppins, but nope)</h1>
      <h1 className={poppins.className}>Hello World Poppins.className</h1>
      <h1 className={poppins.variable}>Hello World Poppins.variable</h1>
      <h1 className="font-poppins">Hello World Poppins (not working)</h1>
      <h1 className={robotoMono.className}>Hello World Roboto Mono</h1>
      {/* Remote image */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        className="object-cover"
        priority
      /> */}
    </main>
  );
}
