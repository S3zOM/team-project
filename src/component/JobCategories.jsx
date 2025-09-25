const categories = [
  { name: "IT & Software", icon: "💻" },
  { name: "Accounting", icon: "📊" },
  { name: "Design & Creative", icon: "🎨" },
  { name: "Marketing", icon: "📢" },
  { name: "Education", icon: "📚" },
  { name: "Healthcare", icon: "🩺" },
  { name: "Engineering", icon: "🛠️" },
  { name: "Other", icon: "🔎" },
];

export default function JobCategories({ selected, onSelect }) {
  return (
    <section className="w-full max-w-4xl mt-12">
      <h3 className="text-xl font-bold mb-4 text-gray-700">Browse by Category</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border transition shadow-sm hover:bg-blue-50 hover:border-blue-400 text-gray-700 font-medium text-sm
              ${selected === cat.name ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-200'}`}
            onClick={() => onSelect && onSelect(cat.name)}
          >
            <span className="text-2xl mb-1">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
}
