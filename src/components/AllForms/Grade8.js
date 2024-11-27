// import React from "react";
// import {
//   Typography,
//   Paper,
//   Box,
//   Card,
//   CardContent,
//   Stack,
//   Button,
//   TextField,
// } from "@mui/material";
// import { useForm, Controller } from "react-hook-form";
// import SingleSelect from "./Forms/SingleSelect"; // Ensure this path is correct
// import AxiosInstance from "./Axios"

// const Grade8 = () => {
//   const defaultValues = {
//     name: '',
//     age: '',
//     sex: '',
//     gradeLevel: '',
//     section: '',
//     conduct: '',
//     self_image: '',
//     worry: '',
//     neg_perl_rel: '',
//     antisocial: '',
//     lie: '',
//     problem_index: '',
//     c: '',
//     si: '',
//     w: '',
//     npr: '',
//     a_s: '',
//     l: '',
//     pi: '',
//   }

//   const { control, handleSubmit, reset, setValue } = useForm({defaultValues:defaultValues});

//   const submission = (data) => {
//     AxiosInstance.post(`/grade_eight/`, {
//       name: data.name,
//     age: data.age,
//     sex: data.sex,
//     gradeLevel: data.gradeLevel,
//     section: data.section,
//     conduct: data.conduct,
//     self_image: data.self_image,
//     worry: data.worry,
//     neg_perl_rel: data.neg_perl_rel,
//     antisocial: data.antisocial,
//     lie: data.lie,
//     problem_index: data.problem_index,
//     c: data.c,
//     si: data.si,
//     w: data.w,
//     npr: data.npr,
//     a_s: data.a_s,
//     l: data.l,
//     pi: data.pi,
//     }).then(response => {
//       console.log("Data submitted successfully:", response.data);
//       reset(); // Reset form after successful submission
//     })
//     .catch(error => {
//       console.error("Error submitting data:", error);
//     });
    
//   };

//   return (
//     <form onSubmit={handleSubmit(submission)}>
//     <Card elevation={3} sx={{ maxWidth: "900px", margin: "20px auto" }}>
//       <CardContent>
//         <Typography variant="h5" gutterBottom align="center">
//           Grade 8
//         </Typography>
//         <Paper
//           elevation={3}
//           sx={{
//             padding: "40px",
//             borderRadius: "8px",
//             backgroundColor: "#f7f9fc",
//             minHeight: "50vh",
//           }}
//         >
//           <Stack spacing={2}>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="name"
//                 control={control}
//                 render={({field}) => (
//               <TextField
//                 label="Student Name:"
//                 {...field}
//               />
//                 )}
//                 />
//             </Stack>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="age"
//                 control={control}
//                 render={({field}) => (
//               <TextField label="Age:" {...field} />
//                 )}
//                 />
//               <Controller
//                 name="sex"
//                 control={control}
//                 render={({field}) => (  
//               <SingleSelect
//                 label="Sex:"
//                 {...field}
//                 options={["M", "F"]}
//               />
//                 )}
//                 />
//             </Stack>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="gradeLevel"
//                 control={control}
//                 render={({field}) => (
//               <TextField
//                 label="Grade Level:"
//                 {...field}
//               />
//                 )} />
//               <Controller
//                 name="section"
//                 control={control}
//                 render={({field}) => (  
//               <SingleSelect
//                 label="Section:"
//                 {...field}
//                 options={[
//                   "Gabriel",
//                   "Michael",
//                   "Judiel",
//                   "Raphael",
//                   "Sealtiel",
//                   "Uriel",
//                 ]}
//               />
//                 )} />
//             </Stack>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="conduct"
//                 control={control}
//                 render={({field}) => (
//               <SingleSelect
//                 label="Conduct:"
//                 {...field}
//                 options={["Below Average", "Average", "Above Average "]}
//               />
//                 )} />
//               <Controller 
//                 name="self_image"
//                 control={control}
//                 render={({field}) => (  
//               <SingleSelect
//                 label="Self Image:"
//                 {...field}
//                 options={["Below Average", "Average", "Above Average "]}
//               />
//                 )} />
//             </Stack>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="worry"
//                 control={control}
//                 render={({field}) => (
//               <SingleSelect
//                 label="Worry:"
//                 {...field}
//                 options={["Below Average", "Average", "Above Average "]}
//               />
//                 )} />
//               <Controller
//                 name="neg_perl_rel"
//                 control={control}
//                 render={({field}) => (  
//               <SingleSelect
//                 label="Neg.Perl.Rel:"
//                 {...field}
//                 options={["Below Average", "Average", "Above Average "]}
//               />
//                 )} />
//             </Stack>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="antisocial"
//                 control={control}
//                 render={({field}) => (
//               <SingleSelect
//                 label="AntiSocial:"
//                 {...field}
//                 options={["Below Average", "Average", "Above Average "]}
//               />
//                 )} />
//               <Controller
//                 name="lie"
//                 control={control}
//                 render={({field}) => (  
//               <SingleSelect
//                 label="Lie:"
//                 {...field}
//                 options={["Tapat", "Medya - Medya", "Sinungaling "]}
//               />
//                 )} />
//             </Stack>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="problem_index"
//                 control={control}
//                 render={({field}) => (
//               <SingleSelect
//                 label="Problem Index:"
//                 {...field}
//                 options={["Below Average", "Average", "Above Average "]}
//               />
//                 )} />
//               <Controller  
//                 name="c" control={control}
//                 render={({field}) => (
//               <TextField label="C:" {...field}/>
//                 )} />
//             </Stack>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="si" control={control}
//                 render={({field}) => (
//               <TextField label="SI:" {...field} />
//                 )} />
//               <Controller  
//                 name="w" control={control}
//                 render={({field}) => (
//               <TextField label="W:" {...field} />
//                 )} />
//             </Stack>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="npr" control={control}
//                 render={({field}) => (
//               <TextField label="NPR:" {...field} />
//                 )} />
//               <Controller  
//                 name="a_s" control={control}
//                 render={({field}) => (
//               <TextField label="AS:" {...field} />
//                 )} />
//             </Stack>
//             <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//               <Controller
//                 name="l" control={control}
//                 render={({field}) => (
//               <TextField label="L:" {...field} />
//                 )} />
//               <Controller  
//                 name="pi" control={control}
//                 render={({field}) => (
//               <TextField label="PI:" {...field} />
//                 )} />
//             </Stack>
//           </Stack>

//           {/* Submit Button */}
//           <Box
//             sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
//           >
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               sx={{ marginTop: "10px" }}
//             >
//               Submit
//             </Button>
//           </Box>
//         </Paper>
//       </CardContent>
//     </Card>
//     </form>
//   );
// };

// export default Grade8;

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
import { useForm, Controller } from "react-hook-form";
import SingleSelect from "./AllForms/Forms/SingleSelect"; // Ensure this path is correct
import AxiosInstance from "./AllForms/Axios";

const Grade8 = () => {
  const defaultValues = {
    name: '',
    age: '',
    sex: '',
    gradeLevel: '',
    section: '',
    conduct: '',
    self_image: '',
    worry: '',
    neg_perl_rel: '',
    antisocial: '',
    lie: '',
    problem_index: '',
    c: '',
    si: '',
    w: '',
    npr: '',
    a_s: '',
    l: '',
    pi: '',
  };

  const { control, handleSubmit, reset, setValue } = useForm({ defaultValues:defaultValues });

  const submission = (data) => {
    AxiosInstance.post(`/grade_eight/`, {
      name: data.name,
      age: data.age,
      sex: data.sex,
      gradeLevel: data.gradeLevel,
      section: data.section,
      conduct: data.conduct,
      self_image: data.self_image,
      worry: data.worry,
      neg_perl_rel: data.neg_perl_rel,
      antisocial: data.antissocial,
      lie: data.lie,
      problem_index: data.problem_index,
      c: data.c,
      si: data.si,
      w: data.w,
      npr: data.npr,
      a_s: data.a_s,
      l: data.l,
      pi: data.pi,
    })
      .then(response => {
        console.log("Data submitted successfully:", response.data);
        reset(); // Reset form after successful submission
      })
      .catch(error => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(submission)}>
      <Card elevation={3} sx={{ maxWidth: "900px", margin: "20px auto" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Grade 8
          </Typography>
          <Paper
            elevation={3}
            sx={{
              padding: "40px",
              borderRadius: "8px",
              backgroundColor: "#f7f9fc",
              minHeight: "60vh",
            }}
          >
            <Stack spacing={3}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    label="Student Name"
                    {...field}
                    fullWidth
                  />
                )}
              />

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ flexWrap: "wrap" }}>
                <Controller
                  name="age"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Age"
                      {...field}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
                <Controller
                  name="sex"
                  control={control}
                  render={({ field }) => (
                    <SingleSelect
                      label="Sex"
                      {...field}
                      options={["M", "F"]}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
                <Controller
                  name="gradeLevel"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Grade Level"
                      {...field}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ flexWrap: "wrap" }}>
                <Controller
                  name="section"
                  control={control}
                  render={({ field }) => (
                    <SingleSelect
                      label="Section"
                      {...field}
                      options={["Gabriel", "Michael", "Judiel", "Raphael", "Sealtiel", "Uriel"]}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
                <Controller
                  name="conduct"
                  control={control}
                  render={({ field }) => (
                    <SingleSelect
                      label="Conduct"
                      {...field}
                      options={["Below Average", "Average", "Above Average"]}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
                <Controller
                  name="self_image"
                  control={control}
                  render={({ field }) => (
                    <SingleSelect
                      label="Self Image"
                      {...field}
                      options={["Below Average", "Average", "Above Average"]}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ flexWrap: "wrap" }}>
                <Controller
                  name="worry"
                  control={control}
                  render={({ field }) => (
                    <SingleSelect
                      label="Worry"
                      {...field}
                      options={["Below Average", "Average", "Above Average"]}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
                <Controller
                  name="neg_perl_rel"
                  control={control}
                  render={({ field }) => (
                    <SingleSelect
                      label="Neg. Perl. Rel."
                      {...field}
                      options={["Below Average", "Average", "Above Average"]}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
                <Controller
                  name="antisocial"
                  control={control}
                  render={({ field }) => (
                    <SingleSelect
                      label="AntiSocial"
                      {...field}
                      options={["Below Average", "Average", "Above Average"]}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ flexWrap: "wrap" }}>
                <Controller
                  name="lie"
                  control={control}
                  render={({ field }) => (
                    <SingleSelect
                      label="Lie"
                      {...field}
                      options={["Tapat", "Medya-Medya", "Sinungaling"]}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
                <Controller
                  name="problem_index"
                  control={control}
                  render={({ field }) => (
                    <SingleSelect
                      label="Problem Index"
                      {...field}
                      options={["Below Average", "Average", "Above Average"]}
                      sx={{ flex: 1, minWidth: "200px" }}
                    />
                  )}
                />
                <Controller
                  name="c"
                  control={control}
                  render={({ field }) => (
                    <TextField label="C" {...field} sx={{ flex: 1, minWidth: "200px" }} />
                  )}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ flexWrap: "wrap" }}>
                <Controller
                  name="si"
                  control={control}
                  render={({ field }) => (
                    <TextField label="SI" {...field} sx={{ flex: 1, minWidth: "200px" }} />
                  )}
                />
                <Controller
                  name="w"
                  control={control}
                  render={({ field }) => (
                    <TextField label="W" {...field} sx={{ flex: 1, minWidth: "200px" }} />
                  )}
                />
                <Controller
                  name="npr"
                  control={control}
                  render={({ field }) => (
                    <TextField label="NPR" {...field} sx={{ flex: 1, minWidth: "200px" }} />
                  )}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ flexWrap: "wrap" }}>
                <Controller
                  name="a_s"
                  control={control}
                  render={({ field }) => (
                    <TextField label="AS" {...field} sx={{ flex: 1, minWidth: "200px" }} />
                  )}
                />
                <Controller
                  name="l"
                  control={control}
                  render={({ field }) => (
                    <TextField label="L" {...field} sx={{ flex: 1, minWidth: "200px" }} />
                  )}
                />
                <Controller
                  name="pi"
                  control={control}
                  render={({ field }) => (
                    <TextField label="PI" {...field} sx={{ flex: 1, minWidth: "200px" }} />
                  )}
                />
              </Stack>

              {/* Submit Button */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ marginTop: "10px" }}
                >
                  Submit
                </Button>
              </Box>
            </Stack>
          </Paper>
        </CardContent>
      </Card>
    </form>
  );
};

export default Grade8;