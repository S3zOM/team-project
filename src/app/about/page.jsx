
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="max-w-2xl text-lg text-gray-700 text-center mb-6">
          This platform is dedicated to helping job seekers showcase their skills and connect with employers. We believe in empowering individuals to find the right opportunities by making their profiles visible to the world.
        </p>
        <p className="max-w-2xl text-gray-600 text-center">
          Whether you are looking for your first job or a new career move, our mission is to make your journey easier and more successful. Thank you for trusting us with your professional growth!
        </p>
      </main>
    </div>
  );
}
