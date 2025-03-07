import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");

  const fetchGreeting = async () => {
    if (!name.trim()) {
      setGreeting("");
      setError("Name is required.");
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/api/greet?name=${name}`);
      const data = await response.json();
      if (data.error) {
        setGreeting("");
        setError(data.error);
      } else {
        setGreeting(data.message);
        setError("");
      }
    } catch (error) {
      setGreeting("");
      setError("Error fetching greeting");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h1 className="text-xl font-semibold mb-4">Enter Your Name</h1>
        <input
          type="text"
          placeholder="Your name"
          className="border p-2 rounded w-full mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          onClick={fetchGreeting}
        >
          Get Greeting
        </button>
        {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}
        {greeting && <p className="mt-4 text-lg font-medium">{greeting}</p>}
      </div>
    </div>
  );
}


export default App
