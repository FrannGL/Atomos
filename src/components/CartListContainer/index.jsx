// COMPONENTES MATERIAL-UI
import { Alert, Box, Button, Chip, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

// ICONOS MATERIAL-UI
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

// HOOKS REACT
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';
import { NavLink } from 'react-router-dom';

// COMPONENTES PROPIOS
import CartListItem from '../CartListItem';

export default function CartListContainer() {
	const { itemsAdded } = useContext(Context);
	const { totalPrice } = useContext(Context);
	const { total } = useContext(Context);
	const { showClearAlert } = useContext(Context);
	const [loading, setLoading] = useState(true);

	const fakePromise = () =>
		new Promise((resolve) => setTimeout(resolve, 1000));

	const getProducts = async () => {
		try {
			await fakePromise();
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	useEffect(() => {
		totalPrice();
	}, [itemsAdded]);

	return (
		<>
			{/*  --------------------- CONTENEDOR ------------------- */}
			<Box
				sx={{
					height: { xs: '100%', md: '100vh' },
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					mt: 5,
					mb: 3,
				}}
			>
				{/* --------------------- TITLE ------------------------- */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				></Box>

				{/* ---- RENDERIZADO DE PRODUCTOS AGREGADOS AL CARRITO ----- */}

				{loading ? (
					<>
						<CircularProgress size={50} />
						<Typography sx={{ mt: 3, fontSize: 20 }}>
							CARGANDO...
						</Typography>
					</>
				) : (
					<>
						{itemsAdded.length >= 1 ? (
							<Typography variant='h5'>
								DETALLE DEL CARRITO
							</Typography>
						) : (
							''
						)}
						{itemsAdded.map((product) => (
							<CartListItem key={product.id} product={product} />
						))}
						{itemsAdded.length >= 1 ? (
							<>
								{/* ------------------- TOTAL DE LA COMPRA --------------- */}
								<Box
									sx={{
										width: { sm: '50%', md: '65' },
										height: 40,
										display: 'flex',
										justifyContent: 'end',
										alignItems: 'center',
									}}
								>
									<Typography variant='p' fontSize={18}>
										TOTAL DE LA COMPRA:{' '}
									</Typography>
									<Chip
										icon={
											<AttachMoneyIcon
												sx={{ fontSize: 30 }}
											/>
										}
										label={total}
										variant='outlined'
										sx={{ fontSize: 30, padding: 2 }}
									/>
								</Box>
								{/* ---------------- CONTROLES VACIAR CARRITO - SEGUIR COMPRANDO - PAGAR ------------ */}
								<Box
									sx={{
										width: {
											xs: '80%',
											sm: '90%',
											md: '80%',
										},
										height: 'auto',
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: { xs: 'center' },
										flexDirection: {
											xs: 'column',
											sm: 'row',
										},
										mt: { xs: 3, sm: 3, md: 5 },
										gap: { xs: 1 },
									}}
								>
									<Button
										sx={{
											fontSize: {
												sm: 10,
												md: 12,
												lg: 15,
											},
										}}
										variant='contained'
										color='error'
										startIcon={<DeleteIcon />}
										onClick={() => showClearAlert()}
									>
										Vaciar Carrito
									</Button>
									<NavLink
										to={'/products'}
										style={{
											textDecoration: 'none',
											color: 'white',
										}}
									>
										<Button
											sx={{
												fontSize: {
													sm: 10,
													md: 12,
													lg: 15,
												},
											}}
											variant='contained'
											color='info'
											startIcon={<AddShoppingCartIcon />}
										>
											Seguir Comprando
										</Button>
									</NavLink>
									<Box
										sx={{
											width: '50%',
											height: 'auto',
											display: 'flex',
											justifyContent: {
												xs: 'center',
												sm: 'end',
											},
											alignItems: 'center',
											mt: { xs: 3, sm: 0 },
										}}
									>
										<NavLink
											to={'/checkout'}
											style={{
												textDecoration: 'none',
												color: 'white',
												mt: 5,
											}}
										>
											<Button
												variant='contained'
												color='success'
												startIcon={<CheckCircleIcon />}
											>
												Ir a pagar
											</Button>
										</NavLink>
									</Box>
								</Box>
							</>
						) : (
							<Box
								sx={{
									width: '50%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
								}}
							>
								<Alert
									icon={
										<SentimentVeryDissatisfiedIcon
											fontSize='large'
											sx={{ my: 'auto' }}
										/>
									}
									severity='error'
									variant='outlined'
								>
									<Typography variant='h6' fontWeight='bold'>
										LO SIENTO
									</Typography>
									<Typography variant='p' fontSize={25}>
										El Carrito está vacio! -{' '}
										<strong>¡Agrega Productos!</strong>
									</Typography>
								</Alert>
								<NavLink
									to={'/products'}
									style={{
										textDecoration: 'none',
										color: 'black',
									}}
								>
									<Button
										variant='contained'
										size='large'
										sx={{ mt: 5 }}
									>
										VER PRODUCTOS
									</Button>
								</NavLink>
							</Box>
						)}
					</>
				)}
			</Box>
		</>
	);
}
