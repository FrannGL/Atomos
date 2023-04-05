// COMPONENTES MATERIAL-UI
import { Box, Card, List, ListItem, Typography } from '@mui/material';

export default function BookingOfficesDetail({ item }) {
	return (
		<>
			<Card sx={{ mt: 10, mb: 5, minWidth: 450, p: 2 }}>
				<Typography variant='h5'>{item?.sede}</Typography>
				<Box
					sx={{
						borderBottom: 1,
						width: '25%',
						mb: 3,
						marginRight: 23,
						py: 0.3,
					}}
				></Box>
				<Typography variant='h6'>
					{item?.nombre} | {item?.telefono}
				</Typography>
				<Typography variant='p'>{item?.email}</Typography>
				<List>
					{item?.categoriaA}
					<ListItem>$ {item?.x20a}.-</ListItem>
					<ListItem>$ {item?.x30a}.-</ListItem>
					<ListItem>$ {item?.x50a}.-</ListItem>
				</List>
				<List>
					{item?.categoriaB}
					<ListItem>$ {item?.x20b}.-</ListItem>
					<ListItem>$ {item?.x30b}.-</ListItem>
					<ListItem>$ {item?.x50b}.-</ListItem>
				</List>
			</Card>
		</>
	);
}
