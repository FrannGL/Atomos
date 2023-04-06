import { useState } from 'react';
import Background from '../components/Background';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export default function Inicio() {
	const [loading, setLoading] = useState(true);
	const fakePromise = () =>
		new Promise((resolve) => setTimeout(resolve, 2000));

	const getData = async () => {
		try {
			await fakePromise();
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{loading ? (
				<>
					<Box
						sx={{
							width: '100%',
							height: '100vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<CircularProgress size={100} />
						<Typography variant='h2' sx={{ mt: 3, fontSize: 30 }}>
							CARGANDO...
						</Typography>
					</Box>
				</>
			) : (
				<Background />
			)}
		</>
	);
}
