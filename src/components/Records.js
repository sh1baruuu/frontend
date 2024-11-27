import {React, useState} from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ConferenceFormTable from './AllForms/Tables/ConferenceFormTable';
import CareerTrackingTable from './AllForms/Tables/CareerTrackingTable';
import RoutineInterviewTable from './AllForms/Tables/RoutineInterviewTable';
import IndividualRecordFormTable from './AllForms/Tables/IndividualRecordFormTable';

const Records = () => {

  const [activeForm, setActiveForm] = useState('individual_record_form');

  const formOptions = [
    {value: 'individual_record_form', label: 'Individual Record Form'},
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
      {activeForm === 'individual_record_form' && <IndividualRecordFormTable />}
      {activeForm === 'routine_interview' && <RoutineInterviewTable />}
      {activeForm === 'careertracking' && <CareerTrackingTable />}
      {activeForm === 'conferenceform' && <ConferenceFormTable />}

    </div>
  )
}

export default Records