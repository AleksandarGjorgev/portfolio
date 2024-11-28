export default function ContactPage() {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Kontaktiraj me</h2>
        <form className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Ime"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Vaše sporočilo"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
          >
            Pošlji
          </button>
        </form>
      </section>
    );
  }
  