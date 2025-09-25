// app/about/page.tsx (Next.js 13+ App Router)
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-xl text-gray-600">
            Where Talent Meets Opportunity
          </p>
        </div>

        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-indigo-600">[Your Site Name]</span>, 
            we believe work is more than a paycheck — it’s purpose, growth, and 
            the chance to make an impact. That’s why we’ve built more than just 
            an employment platform. We’ve built a movement. 
          </p>
        </div>

        {/* Mission, Vision, Difference */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower people everywhere to unlock their potential by 
              connecting them with meaningful opportunities and workplaces 
              where they can thrive.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              A world where every person finds work that inspires them — and 
              every company finds the right people to grow with.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Difference</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>🌍 Global Reach, Local Touch</li>
              <li>🤝 Human-Centered Approach</li>
              <li>🚀 Tools for Career Growth</li>
              <li>🔎 Smarter Job Matching</li>
            </ul>
          </div>
        </div>

        {/* Promise */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Promise</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We’re not just another job board. We’re your partner in progress. 
            Every profile created, every job posted, and every match made brings 
            us closer to a future where the right opportunity finds the right 
            person — every time.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Together, We Work Better
          </h2>
          <p className="text-gray-700 mb-8">
            Behind every great company is great talent. Behind every great career 
            is a great opportunity. We’re here to make sure they meet.
          </p>
          <a
            href="/jobs"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Explore Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}
