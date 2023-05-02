import Link from "next/link";

export default function Home() {
  return (
    <div className="card-display-parent center">
      <Link href="./stories" className="card-parent">
        <h1>Go To Stories</h1>
      </Link>
      <Link href="./leaders" className="card-parent">
        <h1>Go To Leaders</h1>
      </Link>
    </div>
  );
}
