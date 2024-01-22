import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { PersistGate } from "redux-persist/integration/react";

const theme = createTheme({
	palette: {},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<PersistGate persistor={persistor}>
					<Provider store={store}>
						<AppRouter />
					</Provider>
				</PersistGate>

				<ToastContainer />
			</ThemeProvider>
		</>
	);
}

export default App;
