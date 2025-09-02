import { User, Plus } from 'lucide-react';
import CustomerCard from './CustomerCard';
import CustomerTable from './CustomerTable';

const CustomerList = ({ 
  customers, 
  searchTerm, 
  onAddCustomer, 
  onEditCustomer, 
  onDeleteCustomer 
}) => {
  if (customers.length === 0) {
    return (
      <div className="text-center py-12">
        <User className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          {searchTerm ? 'No customers found' : 'No customers yet'}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          {searchTerm ? 'Try adjusting your search terms.' : 'Get started by adding your first customer.'}
        </p>
        {!searchTerm && (
          <div className="mt-6">
            <button
              onClick={onAddCustomer}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="-ml-1 mr-2 h-5 w-5" />
              Add Customer
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
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