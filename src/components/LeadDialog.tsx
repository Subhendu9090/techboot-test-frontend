import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../util';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Lost';
};

type Props = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

const EditLeadDialog: React.FC<Props> = ({ id, isOpen, onClose }) => {
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getLead = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}lead/${id}`);
      setLead(res.data);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id && isOpen) {
      getLead();
    }
  }, [id, isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!lead) return;
    const { name, value } = e.target;
    setLead({ ...lead, [name]: value });
  };

  const handleSave = async () => {
    if (!lead) return;
    setSaving(true);
    setError('');
    try {
      await axios.put(`${API_BASE_URL}lead/${id}`, lead);
      onClose(); // Close dialog after save
    } catch (err) {
      setError('Failed to update lead.');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!lead) return;
    setDeleting(true);
    setError('');
    try {
      await axios.delete(`${API_BASE_URL}lead/${id}`);
      onClose(); // Close dialog after delete
    } catch (err) {
      setError('Failed to delete lead.');
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-teal-800">Edit Lead</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : lead ? (
          <div>
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
              type="text"
              name="phone"
              value={lead.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
              placeholder="Phone Number"
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

            <div className="flex justify-between">
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>

              <div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 mr-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
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
        ) : (
          <p className="text-red-600">Failed to load lead data.</p>
        )}
      </div>
    </div>
  );
};

export default EditLeadDialog;
