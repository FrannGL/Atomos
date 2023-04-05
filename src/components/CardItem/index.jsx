// COMPONENTES MATERIAL-UI
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import ItemCountMedium from '../ItemCountMedium';

// HOOKS REACT
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContextProvider';

export default function CardItem({ product }) {
	const { id } = useParams();

	const { isDarkMode } = useContext(ThemeContext);

	return (
		<>
			{isDarkMode ? (
				<Card
					sx={{
						bgcolor: '#040b16',
						minWidth: 280,
						height: 500,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 0.8,
						borderRadius: 7,
						boxShadow: 10,
					}}
				>
					{/* ----- IMAGEN ------- */}
					<NavLink
						to={`/descripcion/${product.id}`}
						style={{ textDecoration: 'none', width: '100%' }}
					>
						<CardMedia
							component='img'
							alt={product.name}
							height='200'
							image={product.image}
						/>
					</NavLink>
					<CardContent
						sx={{
							padding: 0,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							gap: 1,
						}}
					>
						{/* ------ TITULO -------- */}
						<Typography
							variant='h5'
							component='div'
							align='center'
							sx={{
								color: '#fff',
								fontWeight: 'bold',
								mt: 1,
							}}
						>
							{product.name}
						</Typography>
						<Box
							sx={{
								width: 200,
								height: 50,
								margin: 'auto',
								color: '#fff',
								display: 'flex',
							}}
						>
							{/* ----- INFO -------- */}
							<CardMedia
								image={product.typeimage}
								sx={{
									border: 1,
									width: 60,
									height: '100%',
								}}
							></CardMedia>
							<Box sx={{ width: '100%' }}>
								{/* ------ CATEGORIA ------- */}
								<Box
									sx={{
										width: '100%',
										height: '50%',
										border: 1,
										textAlign: 'center',
										textTransform: 'uppercase',
										letterSpacing: 3,
									}}
								>
									{product.category}
								</Box>
								{/* ------ DETALLE PRODUCTO ------- */}
								<Box
									sx={{
										width: '100%',
										height: '50%',
										border: 1,
										textAlign: 'center',
									}}
								>
									{product.ibu} - {product.abv}
								</Box>
							</Box>
						</Box>
						{/* --------- PRECIO ---------- */}
						<Typography
							variant='body2'
							color='text.secondary'
							align='center'
							sx={{
								color: '#fff',
								fontSize: 25,
								mt: 1,
							}}
						>
							$ {product.price}
						</Typography>
					</CardContent>
					<ItemCountMedium product={product} />
				</Card>
			) : (
				<Card
					sx={{
						bgcolor: '#fff',
						minWidth: 280,
						height: 500,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 0.8,
						borderRadius: 7,
						boxShadow: 10,
					}}
				>
					{/* ----- IMAGEN ------- */}
					<NavLink
						to={`/descripcion/${product.id}`}
						style={{ textDecoration: 'none', width: '100%' }}
					>
						<CardMedia
							component='img'
							alt={product.name}
							height='200'
							image={product.image}
						/>
					</NavLink>
					<CardContent
						sx={{
							padding: 0,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							gap: 1,
							color: '000',
						}}
					>
						{/* ------ TITULO -------- */}
						<Typography
							variant='h5'
							component='div'
							align='center'
							sx={{
								fontWeight: 'bold',
								mt: 1,
							}}
						>
							{product.name}
						</Typography>
						<Box
							sx={{
								width: 200,
								height: 50,
								margin: 'auto',
								display: 'flex',
							}}
						>
							{/* ----- INFO -------- */}
							<CardMedia
								image={product.typeimage}
								sx={{
									border: 1,
									width: 60,
									height: '100%',
									backgroundColor: '#040b16',
								}}
							></CardMedia>
							<Box sx={{ width: '100%' }}>
								{/* ------ CATEGORIA ------- */}
								<Box
									sx={{
										width: '100%',
										height: '50%',
										border: 1,
										textAlign: 'center',
										textTransform: 'uppercase',
										letterSpacing: 3,
									}}
								>
									{product.category}
								</Box>
								{/* ------ DETALLE PRODUCTO ------- */}
								<Box
									sx={{
										width: '100%',
										height: '50%',
										border: 1,
										textAlign: 'center',
									}}
								>
									{product.ibu} - {product.abv}
								</Box>
							</Box>
						</Box>
						{/* --------- PRECIO ---------- */}
						<Typography
							variant='body2'
							color='text.secondary'
							align='center'
							sx={{
								color: '#000',
								fontSize: 25,
								mt: 1,
							}}
						>
							$ {product.price}
						</Typography>
					</CardContent>
					<ItemCountMedium product={product} />
				</Card>
			)}
		</>
	);
}
