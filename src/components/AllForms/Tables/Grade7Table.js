import React, { useMemo, useEffect, useState } from "react";
import { MaterialReactTable, MRT_ActionMenuItem } from "material-react-table";
import AxiosInstance from "../Axios";
import { Edit, Delete } from "@mui/icons-material";
import {
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { useQuery, useQueryClient } from "react-query";
import Grade7 from "../Grade7";

const fetchData = async () => {
  const response = await AxiosInstance.get(`/grade_seven/`);
  console.log(response.data);
  return response.data;
};

const Example = () => {
  const queryClient = useQueryClient();

  const {
    data: myData = [],
    isLoading,
    error,
    isFetching,
  } = useQuery("grade_sevenData", fetchData);

  const [editData, setEdit] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState({
    open: false,
    row: null,
  });

  const handleEdit = (row) => {
    setEdit(row.original);
    setOpen(true);
  };

  const handleClose = () => {
    setEdit(null);
    setOpen(false);
  };

  const handleDelete = async (row) => {
    try {
      await AxiosInstance.delete(`/grade_seven/${row.original.id}/`);
      queryClient.invalidateQueries("grade_sevenData");
      setConfirmDelete({ open: false, row: null });
      console.log("Deleted Successfully");
    } catch (error) {
      console.log("Error deleting", error);
    }
  };

  useEffect(() => {
    console.log("Fetching data for Grade Seven...");
  }, [myData]);

  const columns = useMemo(
    () => [
      { accessorKey: "studentname", header: "Student Name", size: 150 },
      { accessorKey: "age", header: "Age", size: 150 },
      { accessorKey: "sex", header: "Sex", size: 200 },
      { accessorKey: "gradelevel", header: "Grade Level", size: 150 },
      { accessorKey: "section", header: "Section", size: 150 },
      { accessorKey: "tot", header: "Total Score", size: 150 },
      { accessorKey: "beh", header: "Behavioral Adjustment", size: 200 },
      {
        accessorKey: "int",
        header: "Intellectual and School Status",
        size: 200,
      },
      {
        accessorKey: "phv",
        header: "Pysical Apperance and Attribute",
        size: 200,
      },
      { accessorKey: "fre", header: "Freedom from Anxiety", size: 200 },
      { accessorKey: "pop", header: "Popularity", size: 200 },
      { accessorKey: "hap", header: "Happiness and Satisfaction", size: 200 },
      { accessorKey: "py", header: "PY (Numerical)", size: 200 },
      { accessorKey: "beh", header: "BEH (Numerical)", size: 200 },
      { accessorKey: "int", header: "INT (Numerical)", size: 200 },
      { accessorKey: "phy", header: "PHY (Numerical)", size: 200 },
      { accessorKey: "fre", header: "FRE (Numerical)", size: 200 },
      { accessorKey: "pop", header: "POP (Numerical)", size: 200 },
      { accessorKey: "hap", header: "HAP (Numerical)", size: 200 },
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
      <div style={{ width: "1200px", height: "600px" }}>
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
              onClick={() => setConfirmDelete({ open: true, row })}
              table={table}
            />,
          ]}
        />
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle>Edit Grade Seven Form</DialogTitle>
          <DialogContent>
            <Grade7 initialData={editData} onClose={handleClose} />
          </DialogContent>
        </Dialog>

        <Dialog
          open={confirmDelete.open}
          onClose={() => setConfirmDelete({ open: false, row: null })}
        >
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to delete this record?</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => setConfirmDelete({ open: false, row: null })}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(confirmDelete.row)}
              >
                Delete
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Example;
