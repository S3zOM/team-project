export default function JobCard({ name, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <div className="w-20 h-20 bg-gray-200 rounded-full mb-4" />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-gray-500 text-sm mb-2">{title}</p>
      <p className="text-gray-600 text-center text-sm mb-4">{description}</p>
      <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm">View Profile</button>
    </div>
  );
}
