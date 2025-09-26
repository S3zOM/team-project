import { useAuth } from "../app/context/AuthContext";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

export default function Hero() {
  const { user } = useAuth();
  return (
  <section className="w-full mt-0 mb-12 px-0" style={{ position: 'relative', left: 0, width: '100vw' }}>
  <Carousel interval={4000} className="w-full rounded-none shadow-lg" style={{ width: '100vw' }}>
        <Carousel.Item>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image src="/products/pic5.png" fill alt="Browse Jobs" className="object-contain object-center w-full h-full" />
          
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image src="/products/pic4.png" fill alt="Showcase Talent" className="object-cover object-center w-full h-full" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Showcase Your Talent</h2>
              <p className="text-lg md:text-2xl text-white mb-6 drop-shadow">Create a profile and let employers find you. Stand out in the crowd!</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image src="/products/pic4.png" fill alt="Connect & Get Hired" className="object-cover object-center w-full h-full" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Connect & Get Hired</h2>
              <p className="text-lg md:text-2xl text-white mb-6 drop-shadow">Message employers, apply for jobs, and take the next step in your career.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/* Removed Create Your Profile button and its space */}
    </section>
  );
}
