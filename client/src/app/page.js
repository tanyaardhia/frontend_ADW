import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Welcome to iProc
        </h1>
        <p className="text-gray-700 mb-8">
          Manage and view your user data effortlessly. Access detailed profiles,
          manage user information, and keep track of all your users in one
          place.
        </p>
        <Link
          href="/login"
          className="inline-block px-8 py-3 bg-gray-900 text-white text-lg font-medium rounded-md shadow-sm hover:bg-gray-800 transition duration-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
