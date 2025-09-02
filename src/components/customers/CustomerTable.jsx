import { Edit, Trash2 } from 'lucide-react';

const CustomerTable = ({ customers, onEdit, onDelete }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Phone
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Address
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
       <tbody className="divide-y divide-gray-200">
          {customers.map((customer, idx) => (
            <tr
              key={customer.id}
              className={`${
                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-blue-50/40 transition-colors`}
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {customer.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {customer.email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {customer.phone}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                {customer.address || "No address"}
              </td>
              <td className="px-6 py-4 text-sm text-right">
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => onEdit(customer)}
                    className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(customer.id)}
                    className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default CustomerTable;