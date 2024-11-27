import React from "react";
import {
  Container,
  Stack,
  Card,
  CardContent,
  Typography,
  TextField,
  Divider,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event"; // Academic Year icon
import PeopleIcon from "@mui/icons-material/People"; // No. of Students icon
import SchoolIcon from "@mui/icons-material/School"; // Grade Level icon

const Dashboard = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 6,
        backgroundColor: "#F9FAFB", // Light background color (off-white)
        color: "inherit", // Keep default text color (dark text)
      }}
    >
      <Stack spacing={6}>
        {/* Dashboard title */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          textAlign="left"
          fontSize="28px"
          fontWeight="600"
          color="black" // Keep text color dark (black for contrast)
        >
          Dashboard Overview
        </Typography>

        {/* First Section: School Info (3 cards) */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* School Year Card */}
          <Card
            sx={{
              width: "100%",
              maxWidth: "320px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FFFFFF", // White background for the card
              border: "2px solid #E5E7EB", // Light gray border
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center">
                <EventIcon sx={{ color: "#2563EB", fontSize: 30 }} />
                <Typography
                  variant="h6"
                  fontSize="1.125rem"
                  fontWeight="600"
                  color="black"
                >
                  Academic Year
                </Typography>
              </Stack>
              <FormControl fullWidth variant="outlined" sx={{ marginTop: 2 }}>
                <Select defaultValue="" label="">
                  <MenuItem value={1}>2024-2025</MenuItem>
                  <MenuItem value={2}>2023-2024</MenuItem>
                  <MenuItem value={3}>2022-2023</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>

          {/* No. of Students Card */}
          <Card
            sx={{
              width: "100%",
              maxWidth: "320px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FFFFFF", // White background for the card
              border: "2px solid #E5E7EB", // Light gray border
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center">
                <PeopleIcon sx={{ color: "#2563EB", fontSize: 30 }} />
                <Typography
                  variant="h6"
                  fontSize="1.125rem"
                  fontWeight="600"
                  color="black"
                >
                  No. of Students
                </Typography>
              </Stack>
              <TextField
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#F3F4F6", // Light gray background for input
                  borderRadius: "8px",
                  marginTop: 2,
                  "& .MuiInputBase-root": {
                    color: "black", // Keep text color dark in input fields
                  },
                }}
                inputProps={{
                  style: {
                    padding: "14px 16px",
                    fontSize: "1rem",
                  },
                }}
              />
            </CardContent>
          </Card>

          {/* Grade Level Card */}
          <Card
            sx={{
              width: "100%",
              maxWidth: "320px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FFFFFF", // White background for the card
              border: "2px solid #E5E7EB", // Light gray border
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center">
                <SchoolIcon sx={{ color: "#2563EB", fontSize: 30 }} />
                <Typography
                  variant="h6"
                  fontSize="1.125rem"
                  fontWeight="600"
                  color="black"
                >
                  Grade Level
                </Typography>
              </Stack>
              <FormControl fullWidth variant="outlined" sx={{ marginTop: 2 }}>
                <Select defaultValue="" label="">
                  <MenuItem value={1}>Grade 1</MenuItem>
                  <MenuItem value={2}>Grade 2</MenuItem>
                  <MenuItem value={3}>Grade 3</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Stack>

        {/* Divider for separating sections */}
        <Divider sx={{ borderColor: "#E5E7EB", marginY: 4 }} />

        {/* Second Section: Chart Cards */}
        <Stack spacing={4}>
          {/* Chart Card 1: Family Data */}
          <Card
            sx={{
              width: "100%",
              height: "320px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FFFFFF", // White background for the card
              border: "2px solid #E5E7EB", // Light gray border
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="700"
                color="black"
                marginBottom={2}
              >
                Family Data
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Content for chart 1 goes here. You can display a graph or other
                data visualization.
              </Typography>
            </CardContent>
          </Card>

          {/* Chart Card 2: Friends Insights */}
          <Card
            sx={{
              width: "100%",
              height: "320px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FFFFFF", // White background for the card
              border: "2px solid #E5E7EB", // Light gray border
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="700"
                color="black"
                marginBottom={2}
              >
                Friends Insights
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Content for chart 2 goes here. Displaying insights on friends or
                social interactions.
              </Typography>
            </CardContent>
          </Card>

          {/* Chart Card 3: Health Progress */}
          <Card
            sx={{
              width: "100%",
              height: "320px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FFFFFF", // White background for the card
              border: "2px solid #E5E7EB", // Light gray border
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="700"
                color="black"
                marginBottom={2}
              >
                Health Progress
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Content for chart 3 goes here. Can display health metrics or
                data related to health.
              </Typography>
            </CardContent>
          </Card>

          {/* Chart Card 4: Academic Development */}
          <Card
            sx={{
              width: "100%",
              height: "320px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FFFFFF", // White background for the card
              border: "2px solid #E5E7EB", // Light gray border
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="700"
                color="black"
                marginBottom={2}
              >
                Academic Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Content for academic progress chart. Can include grades,
                achievements, etc.
              </Typography>
            </CardContent>
          </Card>

          {/* Chart Card 5: Career Development */}
          <Card
            sx={{
              width: "100%",
              height: "320px",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#FFFFFF", // White background for the card
              border: "2px solid #E5E7EB", // Light gray border
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight="700"
                color="black"
                marginBottom={2}
              >
                Career Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Content for career development chart. Can show career goals,
                skills, etc.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Dashboard;
