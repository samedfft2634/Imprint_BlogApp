import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
	palette: {
	
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<AppRouter />
				</Provider>
				<ToastContainer />
			</ThemeProvider>
		</>
	);
}

export default App;
