import {
	Alert,
	Box,
	Button,
	CardActions,
	IconButton,
	Snackbar,
	Typography,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function ItemCountMedium({ product }) {
	const [count, setCount] = useState(1);
	const [open, setOpen] = useState(false);
	const { addToCart } = useContext(Context);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<CardActions
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 1.3,
			}}
		>
			{/* -------- ITEM COUNT -------------- */}

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					border: 1,
					width: '40%',
					color: 'white',
				}}
			>
				<Box
					sx={{ border: 1, backgroundColor: 'white', height: '100%' }}
				>
					<IconButton
						color='black'
						disabled={count === 1}
						sx={{ padding: 0, color: 'black' }}
						onClick={() =>
							count > 0 ? setCount(count - 1) : setCount(0)
						}
					>
						<RemoveIcon />
					</IconButton>
				</Box>
				<Typography
					sx={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
				>
					{count}
				</Typography>
				<Box
					sx={{ border: 1, backgroundColor: 'white', height: '100%' }}
				>
					<IconButton
						color='black'
						sx={{ padding: 0, color: 'black' }}
						onClick={() => setCount(count + 1)}
					>
						<AddIcon />
					</IconButton>
				</Box>
			</Box>

			{/* ------- AGREGAR AL CARRITO ---------- */}
			<Button
				size='small'
				variant='contained'
				color='info'
				onClick={() => {
					addToCart(product, 1);
					handleClick();
				}}
			>
				Agregar al carrito
			</Button>
			{/* --------- VER MÁS ------------- */}
			<Button size='small' variant='outlined' color='base'>
				<NavLink
					to={`/descripcion/${product?.id}`}
					style={{ textDecoration: 'none', color: 'white' }}
				>
					Ver Más
				</NavLink>
			</Button>
			{/* ---------- ALERTA ------------- */}
			<Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity='success'
					variant='filled'
					sx={{ width: '100%' }}
				>
					Producto Agregado al Carrito
				</Alert>
			</Snackbar>
		</CardActions>
	);
}
