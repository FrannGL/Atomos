// COMPONENTES MATERIAL-UI
import { Box, Card, Skeleton, Stack } from '@mui/material';

export default function CardItemSkeleton() {
	return (
		<Box
			sx={{
				minHeight: '50vh',
				minWidth: '15%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Card
				sx={{
					width: 270,
					height: 500,
					display: 'flex',
				}}
			>
				<Stack
					spacing={1}
					sx={{ width: '100%', mx: 2, my: 2 }}
					alignItems='center'
				>
					<Skeleton variant='rounded' height='70%' width='80%' />
					<Skeleton variant='text' height='10%' width='70%' />
					<Skeleton variant='rectangular' height='10%' width='70%' />
					<Skeleton variant='text' height='20%' width='30%' />
					<Skeleton variant='text' height='15%' width='30%' />
					<Skeleton variant='text' height='20%' width='60%' />
					<Skeleton variant='text' height='15%' width='30%' />
				</Stack>
			</Card>
		</Box>
	);
}
