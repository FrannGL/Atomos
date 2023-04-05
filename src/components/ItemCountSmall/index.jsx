import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { Context } from '../../Context';
import { ThemeContext } from '../../ThemeContextProvider';

export default function ItemCountSmall({ product }) {
	const { addToCart } = useContext(Context);
	const { isDarkMode } = useContext(ThemeContext);

	const handleCount = (quantity) => {
		addToCart(product, quantity);
	};

	return (
		<>
			{isDarkMode ? (
				<Box width='10%' textAlign='center' sx={{ mt: 1 }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								border: 1,
								backgroundColor: 'black',
								height: '100%',
							}}
						>
							<IconButton
								color='black'
								sx={{
									padding: 0,
									color: 'white',
								}}
								onClick={() => handleCount(-1)}
							>
								<RemoveIcon fontSize='small' />
							</IconButton>
						</Box>
						<Box
							sx={{
								border: 1,
								width: '100%',
								backgroundColor: 'black',
							}}
						>
							<Typography
								sx={{
									fontSize: 20,
									fontWeight: 'bold',
									color: '#fff',
								}}
							>
								{product.cantidad}
							</Typography>
						</Box>
						<Box
							sx={{
								border: 1,
								backgroundColor: 'black',
								height: '100%',
							}}
						>
							<IconButton
								color='black'
								sx={{ padding: 0, color: 'white' }}
								onClick={() => handleCount(1)}
							>
								<AddIcon fontSize='small' />
							</IconButton>
						</Box>
					</Box>
				</Box>
			) : (
				<Box width='10%' textAlign='center' sx={{ mt: 1 }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								border: 1,
								backgroundColor: 'white',
								height: '100%',
							}}
						>
							<IconButton
								color='black'
								sx={{ padding: 0, color: 'black' }}
								onClick={() => handleCount(-1)}
							>
								<RemoveIcon fontSize='small' />
							</IconButton>
						</Box>
						<Box
							sx={{
								border: 1,
								width: '100%',
							}}
						>
							<Typography
								sx={{
									fontSize: 20,
									fontWeight: 'bold',
									color: 'black',
								}}
							>
								{product.cantidad}
							</Typography>
						</Box>
						<Box
							sx={{
								border: 1,
								backgroundColor: 'white',
								height: '100%',
							}}
						>
							<IconButton
								color='black'
								sx={{ padding: 0, color: 'black' }}
								onClick={() => handleCount(1)}
							>
								<AddIcon fontSize='small' />
							</IconButton>
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
}
