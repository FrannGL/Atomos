// COMPONENTES MATERIAL-UI
import {
	Box,
	Card,
	CardMedia,
	IconButton,
	Popper,
	Typography,
} from '@mui/material';

// ICONOS MATERIAL-UI
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

// HOOKS REACT
import { useState } from 'react';

// COMPONENTES PROPIOS
import ItemCountLarge from '../ItemCountLarge';
import { Context } from '../../Context';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContextProvider';

export default function CardItemDetail({ product }) {
	const [openMenu, setOpenMenu] = useState(null);
	const { isDarkMode } = useContext(ThemeContext);

	const handleOpen = (event) => {
		setOpenMenu(openMenu ? null : event.currentTarget);
	};

	const open = Boolean(openMenu);
	const id = open ? 'simple-popper' : undefined;

	const { addToCart } = useContext(Context);

	const onAddCart = (cantidad) => {
		addToCart(product, cantidad);
	};

	return (
		<>
			{isDarkMode ? (
				<Card
					sx={{
						mt: 5,
						mb: 4,
						width: '90%',
						height: 400,
						display: 'flex',
					}}
				>
					{/* --- CONTENEDOR IMAGEN --- */}
					<Box sx={{ width: '40%', mx: 2, my: 2 }}>
						<CardMedia
							component='img'
							sx={{ height: '100%' }}
							image={product?.image}
							title={product?.name}
						/>
					</Box>

					{/* --- CONTENEDOR DETALLES --- */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
						}}
					>
						{/* --- CONTENEDOR TITULO */}
						<Box
							sx={{
								width: '97%',
								height: 'auto',
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'center',
								mr: 2,
								mt: 2,
								mb: 2,
							}}
						>
							<Typography align='center' variant='h4'>
								{product?.name}
							</Typography>

							{/* --- CONTENEDOR DETALLES DEL PRODUCTO --- */}
							<Card
								variant='outlined'
								sx={{
									width: 250,
									height: 60,
									mx: 'auto',
									mt: 2,
									color: 'black',
									display: 'flex',
									fontSize: 20,
								}}
							>
								<CardMedia
									image={product?.typeimage}
									sx={{
										width: 60,
										height: '100%',
										backgroundColor: '#040b16',
										border: 1,
										color: '#fff',
									}}
								></CardMedia>
								<Box sx={{ width: '100%' }}>
									<Box
										sx={{
											width: '100%',
											height: '50%',
											border: 1,
											textAlign: 'center',
											textTransform: 'uppercase',
											letterSpacing: 3,
											fontFamily: 'initial',
											fontWeight: 'bold',
											color: '#fff',
										}}
									>
										{product?.category}
									</Box>
									<Box
										sx={{
											width: '100%',
											height: '50%',
											border: 1,
											textAlign: 'center',
											fontSize: 18,
											color: '#fff',
										}}
									>
										{product?.abv} - {product?.ibu}
									</Box>
								</Box>
								<IconButton
									aria-describedby={id}
									type='button'
									onClick={handleOpen}
								>
									<HelpOutlineIcon />
								</IconButton>
								<Popper id={id} open={open} anchorEl={openMenu}>
									<Box
										sx={{
											border: 1,
											p: 1,
											bgcolor: 'background.paper',
											display: 'flex',
											flexDirection: 'column',
										}}
									>
										<Typography variant='p'>
											ABV: Alcohol By Volume, expresa el
											porcentaje de alcohol por volumen de
											cerveza.
										</Typography>
										<br />
										<Typography variant='p'>
											IBU: International Bitterness Unit,
											es la forma de medir el grado de
											amargor aportado por el lúpulo.
										</Typography>
									</Box>
								</Popper>
							</Card>
						</Box>

						{/* --- CONTENEDOR PRECIO --- */}
						<Box
							sx={{
								width: '97%',
								height: 'auto',
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'center',
								mr: 2,
								mb: 2,
							}}
						>
							<Typography align='center' variant='h4'>
								$ {product?.price}
							</Typography>
						</Box>

						{/* --- CONTENEDOR DESCRIPCION --- */}
						<Box
							sx={{
								width: '97%',
								height: 'auto',
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'start',
								flexDirection: 'column',
								mr: 2,
								mb: 2,
							}}
						>
							<Typography fontWeight='bold'>
								STOCK: {product?.stock}
							</Typography>
							<Typography
								align='justify'
								variant='h6'
								fontSize='1.1rem'
							>
								{product?.description}
							</Typography>
						</Box>

						{/* ------- CONTROLES -------- */}

						<ItemCountLarge onAddCart={onAddCart} />
					</Box>
				</Card>
			) : (
				<Card
					sx={{
						mt: 5,
						mb: 4,
						width: '90%',
						height: 400,
						display: 'flex',
					}}
				>
					{/* --- CONTENEDOR IMAGEN --- */}
					<Box sx={{ width: '40%', mx: 2, my: 2 }}>
						<CardMedia
							component='img'
							sx={{ height: '100%' }}
							image={product?.image}
							title={product?.name}
						/>
					</Box>

					{/* --- CONTENEDOR DETALLES --- */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
						}}
					>
						{/* --- CONTENEDOR TITULO */}
						<Box
							sx={{
								width: '97%',
								height: 'auto',
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'center',
								mr: 2,
								mt: 2,
								mb: 2,
							}}
						>
							<Typography align='center' variant='h4'>
								{product?.name}
							</Typography>

							{/* --- CONTENEDOR DETALLES DEL PRODUCTO --- */}
							<Card
								variant='outlined'
								sx={{
									width: 250,
									height: 60,
									mx: 'auto',
									mt: 2,
									color: 'black',
									display: 'flex',
									fontSize: 20,
								}}
							>
								<CardMedia
									image={product?.typeimage}
									sx={{
										border: 1,
										width: 60,
										height: '100%',
										backgroundColor: '#040b16',
									}}
								></CardMedia>
								<Box sx={{ width: '100%' }}>
									<Box
										sx={{
											width: '100%',
											height: '50%',
											border: 1,
											textAlign: 'center',
											textTransform: 'uppercase',
											letterSpacing: 3,
											fontFamily: 'initial',
											fontWeight: 'bold',
										}}
									>
										{product?.category}
									</Box>
									<Box
										sx={{
											width: '100%',
											height: '50%',
											border: 1,
											textAlign: 'center',
											fontSize: 18,
										}}
									>
										{product?.abv} - {product?.ibu}
									</Box>
								</Box>
								<IconButton
									aria-describedby={id}
									type='button'
									onClick={handleOpen}
								>
									<HelpOutlineIcon />
								</IconButton>
								<Popper id={id} open={open} anchorEl={openMenu}>
									<Box
										sx={{
											border: 1,
											p: 1,
											bgcolor: 'background.paper',
											display: 'flex',
											flexDirection: 'column',
										}}
									>
										<Typography variant='p'>
											ABV: Alcohol By Volume, expresa el
											porcentaje de alcohol por volumen de
											cerveza.
										</Typography>
										<br />
										<Typography variant='p'>
											IBU: International Bitterness Unit,
											es la forma de medir el grado de
											amargor aportado por el lúpulo.
										</Typography>
									</Box>
								</Popper>
							</Card>
						</Box>

						{/* --- CONTENEDOR PRECIO --- */}
						<Box
							sx={{
								width: '97%',
								height: 'auto',
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'center',
								mr: 2,
								mb: 2,
							}}
						>
							<Typography align='center' variant='h4'>
								$ {product?.price}
							</Typography>
						</Box>

						{/* --- CONTENEDOR DESCRIPCION --- */}
						<Box
							sx={{
								width: '97%',
								height: 'auto',
								display: 'flex',
								justifyContent: 'start',
								alignItems: 'start',
								flexDirection: 'column',
								mr: 2,
								mb: 2,
							}}
						>
							<Typography fontWeight='bold'>
								STOCK: {product?.stock}
							</Typography>
							<Typography
								align='justify'
								variant='h6'
								fontSize='1.1rem'
							>
								{product?.description}
							</Typography>
						</Box>

						{/* ------- CONTROLES -------- */}

						<ItemCountLarge onAddCart={onAddCart} />
					</Box>
				</Card>
			)}
		</>
	);
}
