import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSearch(query);
      }}
      className="w-full max-w-xl flex gap-2"
    >
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className="
          flex-1 p-3 rounded-lg border 
          border-gray-300 focus:border-blue-400 
          focus:ring focus:ring-blue-200 focus:outline-none
          shadow-sm
        "
      />
      <button
        type="submit"
        className="
          px-6 py-3 rounded-lg bg-blue-600 text-white 
          font-semibold hover:bg-blue-700 shadow"
      >
        Search
      </button>
    </form>
  );
}
