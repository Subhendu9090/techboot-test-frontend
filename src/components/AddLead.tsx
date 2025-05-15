import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../util';

type Lead = {
  name: string;
  email: string;
  phone: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Lost' | '';
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateLeadDialog: React.FC<Props> = ({ isOpen, onClose }) => {
  const [lead, setLead] = useState<Lead>({
    name: '',
    email: '',
    phone: '',
    status: '',
  });

  const [saving, setSaving] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!lead.name || !lead.email || !lead.phone || !lead.status) {
      alert('Please fill all fields');
      return;
    }

    try {
      setSaving(true);
      const res = await axios.post(`${API_BASE_URL}lead`, lead);
      console.log(res);
      
      setSaving(false);
      onClose();
    } catch (error) {
      setSaving(false);
      alert('Failed to create lead');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-teal-800">Add New Lead</h2>

        <input
          type="text"
          name="name"
          value={lead.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={lead.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded"
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          value={lead.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          placeholder="Phone"
        />

        <select
          name="status"
          value={lead.status}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-800"
        >
          <option value="">Select Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 text-white bg-teal-800 rounded hover:bg-teal-700"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateLeadDialog;
