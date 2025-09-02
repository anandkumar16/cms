import { useState } from "react";
import { Search, Plus } from "lucide-react";
import Header from "../components/layout/Header";
import CustomerForm from "../components/customers/CustomerForm";
import CustomerList from "../components/customers/CustomerList";
import ConfirmModal from "../components/common/ConfirmModal";
import Toast from "../components/common/Toast";

const Dashboard = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      address: "123 Main St, New York, NY",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1987654321",
      address: "456 Oak Ave, Los Angeles, CA",
    },
    {
      id: 3,
      name: "Jim Brown",
      email: "jim@example.com",
      phone: "+1231231234",
      address: "789 Pine St, Chicago, IL",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [toast, setToast] = useState(null);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCustomer = (customerData) => {
    setCustomers([...customers, customerData]);
    setShowForm(false);
    setToast({ message: "Customer added successfully!", type: "success" });
  };

  const handleEditCustomer = (customerData) => {
    setCustomers(
      customers.map((c) => (c.id === customerData.id ? customerData : c))
    );
    setEditingCustomer(null);
    setToast({ message: "Customer updated successfully!", type: "success" });
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
    setConfirmDelete(null);
    setToast({ message: "Customer deleted successfully!", type: "success" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 px-9 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
            />
          </div>
          <button
            onClick={() => setShowForm(true)}
           className="inline-flex items-center px-5 py-2.5 rounded-lg shadow-sm 
             text-sm font-medium text-white bg-indigo-600 
             hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            <Plus className="mr-2 h-5 w-5" />
            <span>Add Customer</span>
          </button>
        </div>

        {/* Customer List */}
        <CustomerList
          customers={filteredCustomers}
          searchTerm={searchTerm}
          onAddCustomer={() => setShowForm(true)}
          onEditCustomer={setEditingCustomer}
          onDeleteCustomer={setConfirmDelete}
        />
      </div>

      {/* Modals */}
      {showForm && (
        <CustomerForm
          onSave={handleAddCustomer}
          onCancel={() => setShowForm(false)}
        />
      )}

      {editingCustomer && (
        <CustomerForm
          customer={editingCustomer}
          onSave={handleEditCustomer}
          onCancel={() => setEditingCustomer(null)}
        />
      )}

      <ConfirmModal
        isOpen={!!confirmDelete}
        onClose={() => setConfirmDelete(null)}
        onConfirm={() => handleDeleteCustomer(confirmDelete)}
        title="Delete Customer"
        message="Are you sure you want to delete this customer? This action cannot be undone."
      />

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
