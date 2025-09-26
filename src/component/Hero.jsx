import { useAuth } from "../app/context/AuthContext";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hero() {
  const { user } = useAuth();
  return (
  <section className="w-full mt-0 mb-12 px-0" style={{ position: 'relative', left: 0, width: '100vw' }}>
  <Carousel interval={4000} className="w-full rounded-none shadow-lg" style={{ width: '100vw' }}>
        <Carousel.Item>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img src="/public/globe.svg" alt="Browse Jobs" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Browse Top Job Opportunities</h2>
              <p className="text-lg md:text-2xl text-white mb-6 drop-shadow">Discover jobs tailored to your skills and interests. Start your journey today!</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img src="/public/window.svg" alt="Showcase Talent" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Showcase Your Talent</h2>
              <p className="text-lg md:text-2xl text-white mb-6 drop-shadow">Create a profile and let employers find you. Stand out in the crowd!</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img src="/public/vercel.svg" alt="Connect & Get Hired" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Connect & Get Hired</h2>
              <p className="text-lg md:text-2xl text-white mb-6 drop-shadow">Message employers, apply for jobs, and take the next step in your career.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="mt-8 flex justify-center">
        {!user && (
          <Link href="/register">
            <span className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition cursor-pointer">Create Your Profile</span>
          </Link>
        )}
      </div>
    </section>
  );
}
