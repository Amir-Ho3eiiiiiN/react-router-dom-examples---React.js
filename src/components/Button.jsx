function Button({ children }) {
  return (
    <button
      className={`px-4 py-3 text-lg text-gray-100 ${"bg-blue-600 hover:bg-blue-500 hover:text-blue-900"} w-full border-none rounded-full shadow-md focus:outline-none`}
    >
      {children}
    </button>
  );
}

export default Button;
