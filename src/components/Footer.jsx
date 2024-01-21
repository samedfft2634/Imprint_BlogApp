import { Box, Container, Paper, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";

const Footer = () => {
	return (
		<Paper
			sx={{
				marginTop: "calc(10% + 60px)",
				bottom: 0,
				bgcolor: deepPurple[300],
			}}
			component="footer"
			square
			variant="outlined"
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						flexGrow: 1,
						justifyContent: "center",
						display: "flex",
						my: 1,
					}}
				></Box>

				<Box
					sx={{
						flexGrow: 1,
						justifyContent: "center",
						display: "flex",
						mb: 2,
					}}
				>
					<Typography variant="caption" color="initial">
						Copyright ©2022. SF Production
					</Typography>
				</Box>
			</Container>
		</Paper>
	);
};
export default Footer;
