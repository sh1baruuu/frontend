import {React, useState} from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Grade7 from './AllForms/Grade7';
import Grade2 from './AllForms/Grade2';
import CareerTrackingTable from './AllForms/Tables/CareerTrackingTable';
import RoutineInterviewTable from './AllForms/Tables/RoutineInterviewTable';
import ConferenceFormTable from './AllForms/Tables/ConferenceFormTable';

const Psychometrician_Forms = () => {

  const [activeForm, setActiveForm] = useState('grade_seven');

  const formOptions = [
    {value: 'grade_seven', label: 'Grade Seven'},
    {value: 'grade_two', label: 'Grade Two'},
    {value: 'routine_interview', label: 'Routine Interview'},
    {value: 'careertracking', label: 'Career Tracking'},
    {value: 'conferenceform', label: 'Conference Form'},
  ]

  return (
    <div>
      <FormControl fullWidth style={{ marginBottom: '20px' }}>
      <InputLabel>Select Record</InputLabel>
        <Select
          label='Select Record'
          value={activeForm}
          onChange={(e) => setActiveForm(e.target.value)} // Update the state based on selection
          style={{width: "300px"}}
        >
          {/* Map through form options to create menu items */}
          {formOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Render forms based on the selected option from the dropdown */}
      {activeForm === 'grade_seven' && <Grade7 />}
      {activeForm === 'grade_two' && <Grade2 />}
      {activeForm === 'routine_interview' && <RoutineInterviewTable />}
      {activeForm === 'careertracking' && <CareerTrackingTable />}
      {activeForm === 'conferenceform' && <ConferenceFormTable />}

    </div>
  )
}

export default Psychometrician_Forms