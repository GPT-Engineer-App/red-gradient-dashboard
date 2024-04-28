import { FaShoppingCart, FaDollarSign, FaBox } from "react-icons/fa";

function App() {
  return (
    <div className="bg-gradient-to-r from-white to-gray-100 min-h-screen p-8">
      <header className="text-black mb-10">
        <h1 className="text-4xl font-bold">E-commerce Dashboard</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Products Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-red-100 rounded-full">
              <FaBox className="text-red-500 text-2xl" />
            </div>
            <div>
              <p className="text-lg text-gray-700">Products</p>
              <p className="text-2xl font-bold">1,250</p>
            </div>
          </div>
        </div>

        {/* Sales Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-red-100 rounded-full">
              <FaDollarSign className="text-red-500 text-2xl" />
            </div>
            <div>
              <p className="text-lg text-gray-700">Sales</p>
              <p className="text-2xl font-bold">$34,200</p>
            </div>
          </div>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-red-100 rounded-full">
              <FaShoppingCart className="text-red-500 text-2xl" />
            </div>
            <div>
              <p className="text-lg text-gray-700">Orders</p>
              <p className="text-2xl font-bold">320</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
