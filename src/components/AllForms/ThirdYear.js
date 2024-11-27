import React from "react";
import {
  Typography,
  Paper,
  Box,
  Card,
  CardContent,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import SingleSelect from "./AllForms/Forms/SingleSelect"; // Ensure this path is correct
import AxiosInstance from "./AllForms/Axios";

const ThirdYear = () => {
  const defaultValues = {
    name: "",
    age: "",
    sex: "",
    yearLevel: "",
    course: "",
    hypochondriasis: "",
    denial: "",
    interpersonal_problems: "",
    alienation: "",
    persecutory_ideas: "",
    anxiety: "",
    thinking_disorder: "",
    impulse_expression: "",
    social_isolation: "",
    self_depreciation: "",
    deviation: "",
  };

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: defaultValues,
  });

  // Submit handler
  const submission = (data) => {
    AxiosInstance.post(`/third_year/`, {
      name: data.name,
      age: data.age,
      sex: data.sex,
      yearLevel: data.yearLevel,
      course: data.course,
      hypochondriasis: data.hypochondriasis,
      denial: data.denial,
      interpersonal_problems: data.interpersonal_problems,
      alienation: data.alienation,
      persecutory_ideas: data.persecutory_ideas,
      anxiety: data.anxiety,
      thinking_disorder: data.thinking_disorder,
      impulse_expression: data.impulse_expression,
      social_isolation: data.social_isolation,
      self_depreciation: data.self_depreciation,
      deviation: data.deviation,
    })
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(submission)}>
      <Card elevation={3} sx={{ maxWidth: "900px", margin: "20px auto" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            3rd Year
          </Typography>
          <Paper
            elevation={3}
            sx={{
              padding: "40px",
              borderRadius: "8px",
              backgroundColor: "#f7f9fc",
              minHeight: "50vh",
            }}
          >
            <Stack spacing={2}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Student Name:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="age"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Age:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
                <SingleSelect
                  label="Sex:"
                  name="sex"
                  control={control}
                  options={["M", "F"]}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="yearLevel"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Year Level:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
                <SingleSelect
                  label="Course:"
                  name="course"
                  control={control}
                  options={["Course 1", "Course 2", "Course 3", "Course 4"]}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="hypochondriasis"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Hypochondriasis:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
                <Controller
                  name="denial"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Denial:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="interpersonal_problems"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Interpersonal Problems:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
                <Controller
                  name="alienation"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Alienation:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="persecutory_ideas"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Persecutory_Ideas:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
                <Controller
                  name="anxiety"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Anxiety:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="thinking_disorder"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Thinking Disorder:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
                <Controller
                  name="impulse_expression"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Impulse Expression:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="social_isolation"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Social_Isolation:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
                <Controller
                  name="self_depreciation"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Self Depreciation:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Stack>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Controller
                  name="deviation"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Deviation:"
                      {...field}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              </Stack>
            </Stack>

            {/* Submit Button */}
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(submission)}
                sx={{ marginTop: "10px" }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </CardContent>
      </Card>
    </form>
  );
};

export default ThirdYear;
