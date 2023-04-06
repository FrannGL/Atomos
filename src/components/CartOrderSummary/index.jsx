import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../Context';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useEffect } from 'react';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 'auto',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 3,
};

export default function CartOrderSummary() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const { itemsAdded } = useContext(Context);
	const { totalPrice } = useContext(Context);
	const { total } = useContext(Context);

	useEffect(() => {
		totalPrice();
	}, [itemsAdded]);

	return (
		<>
			<Button
				onClick={handleOpen}
				variant='outlined'
				color='info'
				startIcon={<OpenInNewIcon />}
			>
				RESUMEN DEL PEDIDO
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
					>
						RESUMEN DEL PEDIDO
					</Typography>
					<ul
						style={{
							textDecoration: 'none',
							listStyle: 'none',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						{itemsAdded.map((product) => (
							<React.Fragment key={product.id}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										gap: 3,
										width: 700,
										marginRight: 6,
									}}
								>
									<li>
										<img
											src={product.image}
											width='50'
											alt={product.name}
										/>
									</li>
									<li>
										<span style={{ fontWeight: 'bold' }}>
											Producto:
										</span>
										{product.name}
									</li>
									<li>
										<span style={{ fontWeight: 'bold' }}>
											Cantidad:{' '}
										</span>
										{product.cantidad}
									</li>
									<li>
										<span style={{ fontWeight: 'bold' }}>
											Precio:{' '}
										</span>
										${product.price}
									</li>
									<li>
										<span style={{ fontWeight: 'bold' }}>
											Subtotal:{' '}
										</span>
										${product.price * product.cantidad}
									</li>
								</Box>
							</React.Fragment>
						))}
						<Box
							sx={{
								width: '93%',
								display: 'flex',
								justifyContent: 'end',
								mt: 5,
							}}
						>
							<Typography>
								<span style={{ fontWeight: 'bold' }}>
									Total de la Compra:
								</span>{' '}
								<span style={{ fontSize: 20 }}>$ {total}</span>
							</Typography>
						</Box>
					</ul>
				</Box>
			</Modal>
		</>
	);
}
