import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Avatar, CardMedia, Container, Grid } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";
import { deepPurple, teal, yellow } from "@mui/material/colors";

import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";

const Detail = () => {
	const { blogDetails } = useSelector((state) => state.blog);
	const { getBlogDetails } = useBlogCalls();
	const {
		title,
		image,
		content,
		createdAt,
		likes,
		comments,
		countOfVisitors,
		userId,
	} = blogDetails;
	console.log(blogDetails);
	useEffect(() => {
		getBlogDetails();
	}, []);
	return (
		<Container maxWidth="xl">
			<Grid container spacing={2} sx={{m:5}}>
				<Grid item xs={12} md={4}>
					<CardContent>
						<CardMedia
							component="img"
							src={image}
							loading="lazy"
							alt={title}
              sx={{ width: '100%', height: 'auto' }}
						/>
						<Box
							sx={{
								mt: 3,
								display: "flex",
								alignItems: "center",
								gap: 2,
							}}
						>
							<Avatar sx={{ color: "blue", bgcolor: "orange" }}>
								S
							</Avatar>
							<Typography>{userId?.username}</Typography>
						</Box>
						<Typography sx={{ mt: 1 }}>
							<b>Published at:</b>{" "}
							{new Date(createdAt).toLocaleDateString()},{" "}
							{new Date(createdAt).toLocaleTimeString()}
						</Typography>
					</CardContent>
				</Grid>
				<Grid item xs={12} md={8}>
					<CardContent>
						<Typography fontSize="xl" fontWeight="lg">
							{title}
						</Typography>
						<Typography
							level="body-sm"
							fontWeight="lg"
							fontSize="1.2rem"
							textColor="text.tertiary"
							sx={{ mb: 2, textAlign: "justify" }}
						>
							{content}
						</Typography>

						<Box
							sx={{
								display: "flex",
								gap: 1.5,
								"& > button": { flex: 1 },
							}}
						>
							<Box sx={{ flex: 2 }}>
								<IconButton
									aria-label="add to favorites"
									sx={{
										"&:hover": {
											bgcolor: teal[100],
											"& .MuiSvgIcon-root": {
												color: teal[400],
											},
											"& span": {
												color: teal[600],
											},
										},
									}}
								>
									<VisibilityIcon />
									<span>{countOfVisitors}</span>
								</IconButton>
								<IconButton
									aria-label="comment"
									sx={{
										"&:hover": {
											bgcolor: deepPurple[500],
											"& .MuiSvgIcon-root": {
												color: deepPurple[200],
											},
											"& span": {
												color: deepPurple[200],
											},
										},
									}}
								>
									<ForumIcon sx={{}} />
									<span>{comments?.length || 0}</span>
								</IconButton>
								<IconButton
									aria-label="visible"
									sx={{
										"&:hover": {
											bgcolor: yellow[500],
											"& .MuiSvgIcon-root": {
												color: yellow[800],
											},
											"& span": {
												color: yellow[800],
											},
										},
									}}
								>
									<ThumbUpIcon sx={{}} />
									<span>{likes?.length || 0}</span>
								</IconButton>
							</Box>

							{/* <Button
							variant="solid"
							sx={{
								bgcolor: deepPurple[200],
								"&:hover": { bgcolor: deepPurple[400] },
							}}
						>
							Read More
						</Button> */}
						</Box>
					</CardContent>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Detail;
