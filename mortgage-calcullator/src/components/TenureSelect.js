import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const TenureSelect = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({
      ...data,
      loanTerm: e.target.value,
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id='tenure-select-label'>Tenure</InputLabel>
      <Select
        labelId='tenure-select-label'
        id='tenure-select'
        value={data.loanTerm}
        label='Tenure'
        defaultValue={5}
        onChange={handleChange}
      >
        <MenuItem value={5}>5 years</MenuItem>
        <MenuItem value={10}>10 years</MenuItem>
        <MenuItem value={15}>15 years</MenuItem>
        <MenuItem value={20}>20 years</MenuItem>
        <MenuItem value={25}>25 years</MenuItem>
        <MenuItem value={30}>30 years</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TenureSelect;
