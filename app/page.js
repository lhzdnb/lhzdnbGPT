import Link from "next/link";

function HomePage(props) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">lhzdnbGPT</h1>
          <p className="py-6 text-lg leading-loose">
            A Next.js project showcasing cutting-edge web development techniques
            and innovative features.
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
