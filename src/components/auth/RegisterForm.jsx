import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import {
	Box,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<Box component="form" noValidate sx={{ mt: 3 }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						autoComplete="given-name"
						name="firstName"
						required
						fullWidth
						id="firstName"
						label="First Name"
						autoFocus
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						fullWidth
						id="lastName"
						label="Last Name"
						name="lastName"
						autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="family-name"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="image"
						label="Image"
						name="image"
						autoComplete="image"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						id="bio"
						label="Bio"
						name="bio"
						autoComplete="bio"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControl
						sx={{ width: "100%" }}
						variant="outlined"
					>
						<InputLabel htmlFor="outlined-adornment-password">
							Password
						</InputLabel>
						<OutlinedInput
							label="Password"
							id="password"
							name="password"
							type={showPassword ? "text" : "password"}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Grid>
			</Grid>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2, bgcolor: deepPurple[400] }}
			>
				Sign Up
			</Button>
			<Grid container justifyContent="flex-start">
				<Grid item>
					<Typography component="span">
						<Link
							to="/auth"
							style={{ textDecoration: "none", color: "black" }}
						>
							Already have an account?
							<Typography
								component="span"
								variant="body2"
								sx={{ color: "red" }}
							>
								Sign in
							</Typography>
						</Link>
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default RegisterForm;
