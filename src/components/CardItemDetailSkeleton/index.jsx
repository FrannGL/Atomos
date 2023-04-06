// COMPONENTES MATERIAL-UI
import { Card, Skeleton, Stack } from '@mui/material';

export default function CardItemDetailSkeleton() {
	return (
		<Card
			sx={{
				py: 3,
				width: '90%',
				height: { sm: 'auto', md: 'auto', md: 410 },
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: { xs: 'column', sm: 'column', md: 'row' },
			}}
		>
			{/* ------------- IMAGEN --------------- */}
			<Stack
				sx={{
					width: '40%',
					height: { xs: 175, sm: 175, md: 'auto' },
					mx: { md: 2 },
					mt: { xs: 2, sm: 2 },
				}}
			>
				<Skeleton variant='rectangular' height={350} />
			</Stack>

			<Stack
				sx={{
					width: '100%',
					height: 'auto',
					mx: 2,
					my: { md: 2 },
				}}
			>
				{/* --------- TITULO - INFO ---------- */}
				<Stack
					direction={{ xs: 'column', sm: 'column', md: 'row' }}
					sx={{
						width: '100%',
						height: 'auto',
						gap: { xs: 2, sm: 2, md: 10 },
						my: 2,
						display: 'flex',
						justifyContent: { xs: 'center', sm: 'center' },
						alignItems: { xs: 'center', sm: 'center' },
					}}
				>
					<Skeleton
						variant='rounded'
						sx={{
							height: { xs: 35, md: 60 },
							width: { xs: '70%', md: '50%' },
						}}
					/>
					<Skeleton
						variant='rounded'
						sx={{
							height: { xs: 40, md: 60 },
							width: { xs: '50%', md: '25%' },
						}}
					/>
				</Stack>

				<Stack
					direction={{ xs: 'column', sm: 'column', md: 'row' }}
					sx={{
						width: '100%',
						height: 'auto',
						gap: { md: 7 },
						my: { md: 2 },
						display: 'flex',
						justifyContent: { xs: 'center', sm: 'center' },
						alignItems: { xs: 'center', sm: 'center' },
					}}
				>
					{/* -------------- PRECIO ------------- */}
					<Skeleton
						variant='rounded'
						sx={{
							height: { xs: 40, md: 60 },
							width: { xs: '30%', md: '25%' },
						}}
					/>

					{/* ------------- DESCRIPCION ---------- */}
					<Skeleton
						variant='text'
						sx={{
							width: { xs: '80%', md: '80%' },
							height: { xs: 150, md: 100 },
						}}
					/>
				</Stack>

				{/* ---------- ITEM-COUNT - BOTON AGREGAR ------- */}
				<Stack
					sx={{ width: '100%', height: 'auto', gap: 3 }}
					direction='row'
					justifyContent={{ xs: 'center', md: 'start' }}
				>
					<Skeleton
						variant='text'
						sx={{
							height: { xs: 60, md: 70 },
							width: { xs: '40%', md: '30%' },
						}}
					/>
					<Skeleton
						variant='text'
						sx={{
							height: { xs: 60, md: 70 },
							width: { xs: '30%', md: '30%' },
						}}
					/>
				</Stack>

				{/* ------------ SEGUIR COMPRANDO ----------- */}
				<Skeleton variant='rounded' height='35%' width='25%' />
			</Stack>
		</Card>
	);
}
