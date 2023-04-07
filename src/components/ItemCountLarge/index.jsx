// COMPONENTES MATERIAL-UI
import { Box, Button, IconButton, Typography } from '@mui/material';

// ICONOS MATERIAL-UI
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// HOOKS REACT
import { useContext, useState } from 'react';
import { Context } from '../../Context';

import AlertSuccess from '../AlertSuccess';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../../ThemeContextProvider';

export default function ItemCountLarge({ onAddCart }) {
	const [productAdded, setProductAdded] = useState(false);
	const { handleOpen } = useContext(Context);
	const { count } = useContext(Context);
	const { setCount } = useContext(Context);
	const { isDarkMode } = useContext(ThemeContext);

	const countValidator = () => {
		if (count >= 1) {
			onAddCart(count);
			setProductAdded(true);
			<AlertSuccess />;
		}
	};

	return (
		<>
			{isDarkMode ? (
				<Box
					sx={{
						maxWidth: { xs: 'auto', md: '64%' },
						height: '100',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 5,
						mb: 5,
					}}
				>
					{!productAdded ? (
						<>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									border: 1,
									width: '45%',
								}}
							>
								<Box
									sx={{
										border: 1,
										backgroundColor: 'white',
										color: '#000',
									}}
								>
									<IconButton
										disabled={count === 1}
										onClick={() =>
											count > 0
												? setCount(count - 1)
												: setCount(0)
										}
									>
										<RemoveIcon />
									</IconButton>
								</Box>
								<Typography
									sx={{ fontSize: 20, fontWeight: 'bold' }}
								>
									{count}
								</Typography>
								<Box
									sx={{
										border: 1,
										backgroundColor: 'white',
										color: '#000',
										fontWeight: 'bold',
									}}
								>
									<IconButton
										sx={{ color: 'black' }}
										onClick={() => setCount(count + 1)}
									>
										<AddIcon />
									</IconButton>
								</Box>
							</Box>

							<Button
								sx={{ fontSize: { xs: 13, sm: '1rem' } }}
								variant='contained'
								color='info'
								onClick={() => {
									countValidator();
									handleOpen();
								}}
							>
								Agregar al carrito
							</Button>
						</>
					) : (
						<Box
							sx={{
								display: 'flex',
								gap: { xs: 2, sm: 2, md: 4 },
								my: 1,
								mx: 1,
							}}
						>
							<NavLink
								to={'/products'}
								style={{
									textDecoration: 'none',
									color: 'white',
								}}
							>
								<Button
									sx={{
										fontSize: { xs: 12, sm: 17, md: 14 },
									}}
									variant='outlined'
									color='info'
									startIcon={<AddShoppingCartIcon />}
								>
									Seguir Comprando
								</Button>
							</NavLink>

							<NavLink
								to={'/cart'}
								style={{
									textDecoration: 'none',
									color: 'white',
								}}
							>
								<Button
									sx={{
										fontSize: { xs: 12, sm: 17, md: 14 },
									}}
									variant='outlined'
									color='success'
									startIcon={<CheckCircleIcon />}
								>
									Finalizar Compra
								</Button>
							</NavLink>
						</Box>
					)}
				</Box>
			) : (
				<Box
					sx={{
						maxWidth: { xs: 'auto', md: '64%' },
						height: 'auto',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 5,
						mb: 5,
					}}
				>
					{!productAdded ? (
						<>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									border: 1,
									width: '45%',
								}}
							>
								<Box
									sx={{
										border: 1,
										backgroundColor: '#040b16',
									}}
								>
									<IconButton
										color='base'
										disabled={count === 1}
										onClick={() =>
											count > 0
												? setCount(count - 1)
												: setCount(0)
										}
									>
										<RemoveIcon />
									</IconButton>
								</Box>
								<Typography
									sx={{ fontSize: 20, fontWeight: 'bold' }}
								>
									{count}
								</Typography>
								<Box
									sx={{
										border: 1,
										backgroundColor: '#040b16',
									}}
								>
									<IconButton
										color='base'
										onClick={() => setCount(count + 1)}
									>
										<AddIcon />
									</IconButton>
								</Box>
							</Box>

							<Button
								sx={{ fontSize: { xs: 13, sm: '1rem' } }}
								variant='contained'
								color='primary'
								onClick={() => {
									countValidator();
									handleOpen();
								}}
							>
								Agregar al carrito
							</Button>
						</>
					) : (
						<Box
							sx={{
								display: 'flex',
								gap: { xs: 2, sm: 2, md: 4 },
								my: 1,
								mx: 1,
							}}
						>
							<NavLink
								to={'/products'}
								style={{
									textDecoration: 'none',
									color: 'white',
								}}
							>
								<Button
									sx={{
										fontSize: { xs: 12, sm: 17 },
									}}
									variant='outlined'
									color='info'
									startIcon={<AddShoppingCartIcon />}
								>
									Seguir Comprando
								</Button>
							</NavLink>

							<NavLink
								to={'/cart'}
								style={{
									textDecoration: 'none',
									color: 'white',
								}}
							>
								<Button
									sx={{
										fontSize: { xs: 12, sm: 17 },
									}}
									variant='outlined'
									color='success'
									startIcon={<CheckCircleIcon />}
								>
									Finalizar Compra
								</Button>
							</NavLink>
						</Box>
					)}
				</Box>
			)}
			<AlertSuccess />
		</>
	);
}
