import { useEffect, useState } from 'react';
import Table from '../components/Table';
import EditLeadDialog from '../components/LeadDialog';
import CreateLeadDialog from '../components/AddLead';
import axios from 'axios';
import { API_BASE_URL } from '../util';

function Home() {
  type Lead = {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: 'New' | 'Contacted' | 'Qualified' | 'Lost';
  };
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const fetchAllLeads = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}lead`);
      setLeads(res.data);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    }
  };
  useEffect(() => {
    fetchAllLeads();
  }, [isCreateDialogOpen, isDialogOpen]);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Status', accessor: 'status' },
    { header: 'Action', accessor: 'action' },
  ];

  const handleEdit = (id: string) => {
    setSelectedId(id);
    setIsDialogOpen(true);
  };

  const openDialog = () => setIsCreateDialogOpen(true);
  const closeDialog = () => setIsCreateDialogOpen(false);

  return (
    <div className="p-4">
      <EditLeadDialog
        id={selectedId || ''}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      <CreateLeadDialog isOpen={isCreateDialogOpen} onClose={closeDialog} />
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-teal-800">Lead Table</h1>
        <button
          onClick={openDialog}
          className="px-4 py-2 text-white transition bg-teal-800 rounded cursor-pointer hover:bg-teal-700"
        >
          Add Lead
        </button>
      </div>
      <Table columns={columns} data={leads} actionClicked={handleEdit} />
    </div>
  );
}

export default Home;
