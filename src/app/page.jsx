import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      <Header />
      <Hero />

      {/* Featured Job Seekers */}
      <section className="mt-16 w-full max-w-4xl">
        <h3 className="text-2xl font-bold mb-6 text-gray-700">Featured Job Seekers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <JobCard
            name="Person 1"
            title="Frontend Developer"
            description="React, Next.js, Tailwind CSS. 2 years experience. Looking for remote work."
          />
          <JobCard
            name="Person 2"
            title="Accountant"
            description="Certified accountant with 5 years experience. Fluent in English and Mongolian."
          />
          <JobCard
            name="Person 3"
            title="Graphic Designer"
            description="Creative designer with a passion for branding and digital art. Portfolio available."
          />
        </div>
      </section>

      {/* Reused About Section */}
      <AboutSection />

      <Footer />
    </main>
  );
}
