import React, { useMemo,useEffect, useState } from "react";
import { MaterialReactTable, MRT_ActionMenuItem } from "material-react-table";
import AxiosInstance from "../Axios";
import { Edit, Delete } from '@mui/icons-material';
import { IconButton, Dialog, DialogContent, DialogTitle, Button } from "@mui/material";
import { useQuery, useQueryClient } from "react-query";
import Grade11 from '../Grade11';

const fetchData = async () => {
  const response = await AxiosInstance.get(`/grade_eleven/`);
  console.log(response.data)
  return response.data;
};

const Grade11Table = () => {

  const queryClient = useQueryClient();

  const { data: myData = [], isLoading, error, isFetching } = useQuery('grade_elevenData', fetchData);

  const [editData, setEdit] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState({open: false, row: null})

  const handleEdit = (row) => {
    setEdit(row.original);
    setOpen(true);
  };

  const handleClose = () => {
    setEdit(null);
    setOpen(false);
  }

  const handleDelete = async (row) => {
    try {
      await AxiosInstance.delete(`/grade_eleven/${row.original.id}/`);
      queryClient.invalidateQueries('grade_elevenData');
      setConfirmDelete({open: false, row: null});
      console.log("Deleted Successfully");
    } catch (error) {
      console.log("Error deleting", error);
    }
  }

  useEffect(() => {
    console.log('Fetching data for Grade Eleven...');
  }, [myData]);


  const columns = useMemo(
    () => [
      { accessorKey: "studentname", header: "Student Name", size: 150 },
      { accessorKey: "age", header: "Age", size: 150 },
      { accessorKey: "sex", header: "Sex", size: 200 },
      { accessorKey: "gradelevel", header: "Grade Level", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { accessorKey: "top 1", header: "Top 1", size: 150 },
      { accessorKey: "top 2", header: "Top 2", size: 200 },
      { accessorKey: "top 3", header: "Top 3", size: 200 },
      { accessorKey: "warmth", header: "Warmth", size: 200 },
      { accessorKey: "reasoning", header: "Reasoning", size: 200 },
      { accessorKey: "emotion", header: "Emotion", size: 200 },
      { accessorKey: "dominance", header: "Dominance", size: 200 },
      { accessorKey: "acquiescence", header: "Acquiescence", size: 200 },
      { accessorKey: "liveliness", header: "Liveliness", size: 200 },
      { accessorKey: "conciousness", header: "Conciousness", size: 200 },
      { accessorKey: "socialboldness", header: "Social Boldness", size: 200 },
      { accessorKey: "sensitivity", header: "Sensitivity", size: 200 },
      { accessorKey: "vigilance", header: "Vigilance", size: 200 },
      { accessorKey: "abstract", header: "Abstract", size: 200 },
      { accessorKey: "privateness", header: "Privateness", size: 200 },
      { accessorKey: "apprehension", header: "Apprehension", size: 200 },
      { accessorKey: "selfreliance", header: "Self Reliance", size: 200 },
      { accessorKey: "perfectionism", header: "Perfectionism", size: 200 },
      { accessorKey: "tension", header: "Tension", size: 200 },
    ],
    []
  );

  if (isLoading) return <p>Loading...</p>;
  if (isFetching) return <p>Fetching data...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "60vh",
        overflow: "auto",
        marginTop: "1in",
        marginBottom: "16px",
      }}
    >
     <div style={{ maxWidth: "1000px", width: "100%", height: "100%" }}>
      <MaterialReactTable 
          columns={columns} 
          data={myData} 
          
          enableRowActions
          renderRowActionMenuItems={({ row, table }) => [
            <MRT_ActionMenuItem //or just use a normal MUI MenuItem component
              icon={
              <IconButton>
              <Edit />
              </IconButton>
            }
              key="edit"
              label="Edit"
              onClick={() => handleEdit(row)}
              table={table}
            />,
            <MRT_ActionMenuItem
              icon={
                <IconButton>
                <Delete />
                </IconButton>
              }
              key="delete"
              label="Delete"
              onClick={() => setConfirmDelete({open: true, row})}
              table={table}
            />,
          ]}
            />
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
              <DialogTitle>Edit Grade Eleven Form</DialogTitle>
              <DialogContent>
                <Grade11 initialData={editData} onClose={handleClose}/>
              </DialogContent>
            </Dialog>

            <Dialog open={confirmDelete.open} onClose={() => setConfirmDelete({open: false, row: null})}>
              <DialogTitle>Confirm Delete</DialogTitle>
              <DialogContent>
                <p>Are you sure you want to delete this record?</p>
                <div style={{display: "flex", justifyContent: "flex-end", gap: "10px"}}>
                  <Button variant="outlined" onClick={() => setConfirmDelete({open: false, row: null})}>
                    Cancel
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(confirmDelete.row)}>
                    Delete
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
      </div>
    </div>
  );
};

export default Grade11Table;
