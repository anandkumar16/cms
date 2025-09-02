import { Edit, Trash2 } from 'lucide-react';

const CustomerCard = ({ customer, onEdit, onDelete }) => {
  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{customer.name}</h3>
          <p className="text-sm text-gray-600">{customer.email}</p>
          <p className="text-sm text-gray-600">{customer.phone}</p>
          {customer.address && (
            <p className="text-sm text-gray-500 mt-1">{customer.address}</p>
          )}
        </div>
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => onEdit(customer)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDelete(customer.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;