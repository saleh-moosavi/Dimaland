import Customers from "./components/Customers";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen" dir="rtl">
      <Navbar />
      <Hero />
      <Customers />
    </div>
  );
}

export default App;
