import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function ItemCountSmall({ product }) {
	const { addToCart } = useContext(Context);

	const handleCount = (quantity) => {
		addToCart(product, quantity);
	};

	return (
		<>
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
		</>
	);
}
