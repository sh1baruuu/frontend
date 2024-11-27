import React, { useState, useEffect } from "react";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  TextField,
  Card,
  CardContent,
  Stack,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import AxiosInstance from "./AllForms/Axios";

const Appointment = () => {
  const defaultValues = {
    sr_code: "",
    name: "",
    grade: "",
    section: "",
    date: "",
    time: "",
    purpose: "",
    other_purpose: "",
  };

  const { control, handleSubmit, reset, watch } = useForm({ defaultValues });
  const purpose = watch("purpose");

  const [appointments, setAppointments] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // State for delete confirmation dialog
  const [appointmentToDelete, setAppointmentToDelete] = useState(null); // Track the appointment to delete

  useEffect(() => {
    // Fetch existing appointments
    const fetchAppointments = async () => {
      try {
        const response = await AxiosInstance.get("/appointment/", {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const onSubmit = async (data) => {
    if (!data.sr_code) {
      alert("Please provide a valid Student Number.");
      return;
    }

    try {
      const response = await AxiosInstance.post("/appointment/", data, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      setAppointments((prev) => [...prev, response.data]); // Add new appointment to list
      reset();
      setOpenDialog(false); // Close dialog after submission
    } catch (error) {
      console.error("Error creating appointment:", error.response?.data || error.message);
      alert("Error creating appointment.");
    }
  };

  const confirmDelete = (id) => {
    setAppointmentToDelete(id); // Set the appointment to delete
    setOpenDeleteDialog(true); // Open delete confirmation dialog
  };

  const handleDelete = async () => {
    if (appointmentToDelete === null) return;

    // Optimistically remove the appointment from the UI
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentToDelete
    );
    setAppointments(updatedAppointments);

    try {
      await AxiosInstance.delete(`/appointment/${appointmentToDelete}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      setOpenDeleteDialog(false); // Close delete dialog on success
    } catch (error) {
      console.error("Error deleting appointment:", error.response?.data || error.message);
      alert("Error deleting appointment.");
      setAppointments(appointments); // Revert if deletion fails
      setOpenDeleteDialog(false); // Close delete dialog on error
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Appointment Scheduler
      </Typography>

      {/* Add Appointment Button */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
          Add Appointment
        </Button>
      </Box>

      {/* Appointment Cards */}
      <Grid container spacing={2}>
        {appointments.length === 0 ? (
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
              <Typography variant="h6" color="textSecondary">
                No appointments scheduled yet.
              </Typography>
            </Paper>
          </Grid>
        ) : (
          appointments.map((appointment, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6">{appointment.name}</Typography>
                  <Typography>Student Number: {appointment.sr_code}</Typography>
                  <Typography>Grade: {appointment.grade}</Typography>
                  <Typography>Section: {appointment.section}</Typography>
                  <Typography>Date: {appointment.date}</Typography>
                  <Typography>Time: {appointment.time}</Typography>
                  <Typography>Purpose: {appointment.purpose}</Typography>
                  <Typography>Counselor: {appointment.counselor_user}</Typography>
                  {appointment.purpose === "Others" && (
                    <Typography>Other Purpose: {appointment.other_purpose}</Typography>
                  )}
                  <Box sx={{ textAlign: "center", marginTop: 2 }}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => confirmDelete(appointment.id)}
                    >
                      Done
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {/* Dialog for Adding Appointment */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add New Appointment</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="sr_code"
                control={control}
                rules={{ required: "Student Number is required" }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Student Number"
                    error={!!error}
                    helperText={error ? error.message : ""}
                  />
                )}
              />
              <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField {...field} label="Name" />}
              />
              <Controller
                name="grade"
                control={control}
                render={({ field }) => <TextField {...field} label="Grade" />}
              />
              <Controller
                name="section"
                control={control}
                render={({ field }) => <TextField {...field} label="Section" />}
              />
              <Controller
                name="date"
                control={control}
                render={({ field }) => <TextField {...field} type="date" />}
              />
              <Controller
                name="time"
                control={control}
                render={({ field }) => <TextField {...field} type="time" />}
              />
              <FormControl fullWidth>
                <InputLabel>Purpose</InputLabel>
                <Controller
                  name="purpose"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} label="Purpose">
                      <MenuItem value="Routine Interview">Routine Interview</MenuItem>
                      <MenuItem value="Referral">Referral</MenuItem>
                      <MenuItem value="Individual Planning">Individual Planning</MenuItem>
                      <MenuItem value="Counseling">Counseling</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              {purpose === "Others" && (
                <Controller
                  name="other_purpose"
                  control={control}
                  render={({ field }) => <TextField {...field} placeholder="Specify if others" />}
                />
              )}
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit)} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Deleting Appointment */}
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to mark this appointment as done?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Appointment;
