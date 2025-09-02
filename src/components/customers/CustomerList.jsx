import { User, Plus } from "lucide-react";
import CustomerCard from "./CustomerCard";
import CustomerTable from "./CustomerTable";

const CustomerList = ({
  customers,
  searchTerm,
  onAddCustomer,
  onEditCustomer,
  onDeleteCustomer,
}) => {
  if (customers.length === 0) {
    return (
      <div className="bg-white shadow rounded-xl p-8 text-center">
        <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-blue-50">
          <User className="h-8 w-8 text-blue-500" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          {searchTerm ? "No customers found" : "No customers yet"}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {searchTerm
            ? "Try adjusting your search terms."
            : "Get started by adding your first customer."}
        </p>
        {!searchTerm && (
          <div className="mt-6">
            <button
              onClick={onAddCustomer}
              className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-medium  text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md hover:from-blue-700 hover:to-blue-600 hover:scale-105 
             active:scale-95 transition-all duration-200 focus:outline-none 
             focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add Customer
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      {/* Mobile Card View */}
      <div className="block sm:hidden">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            onEdit={onEditCustomer}
            onDelete={onDeleteCustomer}
          />
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block">
        <CustomerTable
          customers={customers}
          onEdit={onEditCustomer}
          onDelete={onDeleteCustomer}
        />
      </div>
    </div>
  );
};

export default CustomerList;
