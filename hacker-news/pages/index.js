import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="card-display-parent center">
      <Link href="./stories" className="card-parent"><h1>Go To Stories</h1></Link>
      <Link href="./leaders" className="card-parent"><h1>Go To Leaders</h1></Link>
    </div>
  );
}
