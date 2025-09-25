import { useAuth } from "../app/context/AuthContext";
import Link from "next/link";

export default function Hero() {
  const { user } = useAuth();
  return (
    <section className="mt-12 text-center max-w-2xl">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Find Your Next Opportunity</h2>
      <p className="text-lg text-gray-600 mb-6">
        A platform for job seekers to showcase their skills and connect with employers. Create your profile and let opportunities find you!
      </p>
      {!user ? (
        <Link href="/register">
          <span className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition cursor-pointer">Create Your Profile</span>
        </Link>
      ) : (
        <Link href="/profile">
          <span className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition cursor-pointer">Manage Profile</span>
        </Link>
      )}
    </section>
  );
}
