// COMPONENTES MATERIAL-UI
import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

// HOOKS REACT
import { NavLink } from 'react-router-dom';

// HOJA DE ESTILOS PROPIA
import './estilos.css';

export default function Background() {
	return (
		<>
			<Grid
				container
				sx={{
					minWidth: '100%',
					minHeight: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				className='wrapper'
			>
				<Grid
					item
					xs={6}
					sm={8}
					md={10}
					lg={12}
					xl={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						width: '100%',
						mb: 15,
					}}
				>
					<Typography
						variant='h1'
						textAlign='center'
						style={{
							fontFamily: 'Oswald',
							color: 'white',
							letterSpacing: 10,
						}}
					>
						TIENDA ONLINE
					</Typography>
					<Typography
						variant='h6'
						textAlign='center'
						color='white'
						sx={{ letterSpacing: 5 }}
					>
						CALIDAD EN CERVEZAS ARTESANALES
					</Typography>
					<NavLink
						to={'/products'}
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<Button variant='contained' size='large' sx={{ mt: 5 }}>
							VER PRODUCTOS
						</Button>
					</NavLink>
				</Grid>
			</Grid>
		</>
	);
}
