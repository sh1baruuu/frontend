import React, { useState, useEffect } from "react";
import AxiosInstance from "./AllForms/Axios";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

function StudentAppointment() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await AxiosInstance.get("/appointment/", {
          headers: { Authorization: `Token ${localStorage.getItem("token")}` }
        });
        setSchedules(response.data);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    };
    fetchSchedules();
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Your Schedules
      </Typography>
      <Grid container spacing={2}>
        {schedules.length === 0 ? (
          <Grid item xs={12}>
            <Card sx={{ padding: 2, textAlign: "center" }}>
              <Typography variant="h6" color="textSecondary">
                No schedules yet.
              </Typography>
            </Card>
          </Grid>
        ) : (
          schedules.map((schedule) => (
            <Grid item xs={12} sm={6} md={4} key={schedule.id}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6">{schedule.purpose}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Date: {schedule.date}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Time: {schedule.time}
                  </Typography>
                  <Typography variant="body2">
                    Counselor: {schedule.counselor_user ? schedule.counselor_user : "N/A"}
                  </Typography>
                  <Typography variant="body2">
                    Grade: {schedule.grade} | Section: {schedule.section}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default StudentAppointment;
