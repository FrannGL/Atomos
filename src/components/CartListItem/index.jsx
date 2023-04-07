// COMPONENTES MATERIAL-UI
import {
	Box,
	Card,
	CardMedia,
	Container,
	IconButton,
	Typography,
} from '@mui/material';

// ICONOS MATERIAL-UI
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { Context } from '../../Context';
import ItemCountSmall from '../ItemCountSmall';
import { NavLink } from 'react-router-dom';

export default function CartListItem({ product }) {
	const { showAlert } = useContext(Context);

	return (
		<>
			<Container
				disableGutters
				maxWidth='xl'
				sx={{
					width: '100%',
					height: 'auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					mb: 5,
				}}
			>
				<Card
					sx={{
						width: { xs: '95%', sm: '90%', md: '80%' },
						height: { md: 150 },
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: {
							xs: 'column',
							sm: 'column',
							md: 'row',
						},
						pb: 2,
					}}
				>
					<Box sx={{ width: '20%' }}>
						<NavLink to={`/descripcion/${product.id}`}>
							<CardMedia
								component='img'
								image={product.image}
								height='100%'
							/>
						</NavLink>
					</Box>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'end',
								height: { sm: 'auto', md: 80 },
							}}
						>
							<Typography
								sx={{
									width: { xs: '20%', sm: '30%', md: '50%' },
								}}
								textAlign='center'
								variant='h6'
								fontSize={12}
								fontWeight='bold'
							>
								PRODUCTO
							</Typography>
							<Typography
								minWidth='15%'
								textAlign='center'
								variant='h6'
								fontSize={12}
								fontWeight='bold'
							>
								PRECIO
							</Typography>
							<Typography
								minWidth='10%'
								textAlign='center'
								variant='h6'
								fontSize={12}
								fontWeight='bold'
							>
								CANTIDAD
							</Typography>
							<Typography
								minWidth='15%'
								textAlign='center'
								variant='h6'
								fontSize={12}
								fontWeight='bold'
							>
								SUBTOTAL
							</Typography>
							<Typography
								minWidth='10%'
								textAlign='center'
								variant='h6'
								fontSize={12}
								fontWeight='bold'
							>
								ELIMINAR
							</Typography>
						</Box>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Box
								textAlign='center'
								sx={{
									mt: 1,
									fontSize: { sm: '1.2rem', md: '1.5rem' },
									width: { xs: '20%', sm: '30%', md: '50%' },
								}}
							>
								<Typography variant='p' textAlign='center'>
									{product.name}
								</Typography>
							</Box>
							<Box width='15%' textAlign='center' sx={{ mt: 1 }}>
								<Typography
									variant='p'
									textAlign='center'
									fontSize='1.2rem'
								>
									$ {product.price}
								</Typography>
							</Box>

							<ItemCountSmall product={product} />

							<Box width='15%' textAlign='center' sx={{ mt: 1 }}>
								<Typography
									variant='p'
									textAlign='center'
									fontSize='1.2rem'
								>
									$ {product.price * product.cantidad}
								</Typography>
							</Box>
							<Box width='10%' textAlign='center'>
								<IconButton
									aria-label='delete'
									color='error'
									onClick={() => showAlert(product)}
								>
									<DeleteIcon />
								</IconButton>
							</Box>
						</Box>
					</Box>
				</Card>
			</Container>
		</>
	);
}
