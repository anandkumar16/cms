import { Edit, Trash2, Mail, Phone, MapPin } from "lucide-react";

const CustomerCard = ({ customer, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-5 border border-gray-100">
      <div className="flex justify-between items-start">
        {/* Customer Info */}
        <div className="flex-1 space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {customer.name}
          </h3>

          <div className="flex items-center text-sm text-gray-600">
            <Mail size={16} className="mr-2 text-blue-500" />
            {customer.email}
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Phone size={16} className="mr-2 text-green-500" />
            {customer.phone}
          </div>

          {customer.address && (
            <div className="flex items-center text-sm text-gray-500">
              <MapPin size={16} className="mr-2 text-red-400" />
              {customer.address}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => onEdit(customer)}
            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(customer.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
