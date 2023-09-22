import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";
import coffee from "../public/coffee.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      {/* local image */}
      <Image src={coffee} alt="Coffee" width={600} height={300} />

      {/* Remote image */}
      <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        className="object-cover"
        priority
      />
    </main>
  );
}
