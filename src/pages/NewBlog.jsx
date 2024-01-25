import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { deepPurple } from "@mui/material/colors";

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "left" }}>
                <Typography component="h1" variant="h5" sx={{textAlign:"left"}}>
                    New Blog
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: "100%", justifyContent: "center" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Title"
                                name="title"
                                id="title"
                                type="text"
                                variant="filled"
                                required
                                fullWidth
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl required sx={{ width: "100%" }} variant="filled">
                                <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    label="Category *"
                                    // value={age}
                                    // onChange={handleChange}
                                >
                                    <MenuItem value=""><em>Please choose</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Image URL"
                                id="image"
                                name="image"
                                type="url"
                                variant="filled"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl required sx={{ width: "100%" }} variant="filled">
                                <InputLabel id="demo-simple-select-required-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    label="Status *"
                                    // value={age}
                                    // onChange={handleChange}
                                >
                                    <MenuItem value=""><em>Please choose</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Content"
                                id="content"
                                name="content"
                                placeholder="Add a content"
                                multiline
                                rows={6}
                                variant="filled"
                                fullWidth
                                sx={{
                                    mt: 2,
                                    "& label.Mui-focused": {
                                        color: deepPurple[500],
                                    },
                                    "& .MuiFilledInput-underline:after": {
                                        borderBottomColor: deepPurple[500],
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            bgcolor: deepPurple[400],
                            ":hover": {
                                bgcolor: deepPurple[300],
                            },
                        }}
                    >
                        NEW BLOG
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
