import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

type Props = {
  label: string
  id: string
  handleChange: (event: SelectChangeEvent) => void
}

const SelectBox = ({ label, id, handleChange }: Props) => {
  return (
    <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={id}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value='INTJ'>INTJ</MenuItem>
        <MenuItem value='INTP'>INTP</MenuItem>
        <MenuItem value='ENTJ'>ENTJ</MenuItem>
        <MenuItem value='ENTP'>ENTP</MenuItem>
        <MenuItem value='INFJ'>INFJ</MenuItem>
        <MenuItem value='INFP'>INFP</MenuItem>
        <MenuItem value='ENFJ'>ENFJ</MenuItem>
        <MenuItem value='ENFP'>ENFP</MenuItem>
        <MenuItem value='ISTJ'>ISTJ</MenuItem>
        <MenuItem value='ISFJ'>ISFJ</MenuItem>
        <MenuItem value='ESTJ'>ESTJ</MenuItem>
        <MenuItem value='ESFJ'>ESFJ</MenuItem>
        <MenuItem value='ISTP'>ISTP</MenuItem>
        <MenuItem value='ISFP'>ISFP</MenuItem>
        <MenuItem value='ESTP'>ESTP</MenuItem>
        <MenuItem value='ESFP'>ESFP</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectBox
