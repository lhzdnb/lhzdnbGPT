import Link from "next/link";

function HomePage(props) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://lhzdnb.com/assets/img/homepageimg.jpg"
          alt="My picture"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">lhzdnbGPT</h1>
          <p className="py-6 text-lg leading-loose">
            This is a GPT powered by OpenAI gpt-3.5-turbo. Have fun!
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
