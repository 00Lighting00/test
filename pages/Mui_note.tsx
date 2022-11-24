import * as React from 'react';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

/*function MyApp() {
    return (

        <div>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <Button variant="contained">Hello World</Button>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
    );
}

export default MyApp;*/

/*export default function ComboBox() {
    const gender = [
        { label: "男性" },
        { label: "女性" },
        { label: "その他" },
    ]
    return (
        <Autocomplete
            disablePortal
            id="gender"
            options={gender}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField{...params} label="性別" />}
        />
    )
}*/


/* default function BasicButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    );
}*/

/*export default function TextButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="https://myportal.osakac.ac.jp/">My portal</Button>
        </Stack>
    )
}*/

/*
export default function BasicSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}*/


/*export default function SliderSizes() {
    return (
        <Box width={300}>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    );
}*/


export default function SwitchLabels() {
    return (
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="English" /> { /*lavel = "表示したいラベル名を書く" */}
            <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </FormGroup>
    );
}
