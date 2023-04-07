// COMPONENTES MATERIAL-UI
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';

// COMPONENTES PROPIOS
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

// FOTOS
import foto1 from '../../public/assets/images/fabrica.jpg';
import foto2 from '../../public/assets/images/fabrica(2).jpg';
import foto3 from '../../public/assets/images/fabrica(3).jpg';

export default function Nosotros() {
	return (
		<>
			<NavBar />
			<Grid
				container
				sx={{
					display: 'flex',
					mt: 3,
					width: '100%',
					height: '100%',
					mx: 'auto',
					px: 5,
					py: 5,
					gap: 2,
					flexDirection: { xs: 'column', sm: 'column', md: 'row' },
					justifyContent: { xs: 'center', sm: 'center' },
					alignItems: { xs: 'center', sm: 'center' },
				}}
			>
				<Grid
					item
					sx={{
						minWidth: { xs: '100%', sm: '100%', md: '35%' },
						height: 300,
					}}
				>
					<Card>
						<CardMedia
							image={foto1}
							sx={{ height: 300 }}
						></CardMedia>
					</Card>
				</Grid>
				<Grid
					item
					sx={{
						width: { sm: '100%', md: '63%' },
						height: 300,
					}}
				>
					<Typography variant='h2'>MISIÓN</Typography>
					<Typography
						variant='p'
						sx={{
							display: 'flex',
							justifyContent: 'start',
							alignItems: 'center',
						}}
					>
						Nos esforzamos para que cada cerveza producida sea
						reflejo de dedicación, compromiso y orgullo diario de
						todo nuestro equipo de trabajo.
					</Typography>
				</Grid>
				<Box
					sx={{
						display: 'flex',
						flexDirection: {
							xs: 'column',
							sm: 'column',
							md: 'row-reverse',
						},
					}}
				>
					<Grid
						item
						sx={{
							backgroundColor: 'red',
							minWidth: { xs: '100%', sm: '100%', md: '35%' },
							height: 300,
						}}
					>
						<Card>
							<CardMedia
								image={foto2}
								sx={{ height: 300 }}
							></CardMedia>
						</Card>
					</Grid>
					<Grid
						item
						sx={{
							width: { sm: '100%', md: '63%' },
							height: 300,
							mr: 3,
							mt: { xs: 1, md: 0 },
						}}
					>
						<Typography variant='h2' align='right'>
							VISIÓN
						</Typography>
						<Typography
							variant='p'
							align='right'
							sx={{
								display: 'flex',
								justifyContent: 'end',
								alignItems: 'center',
							}}
						>
							Aspiramos a ser los Artesanos Cerveceros líderes en
							generar experiencias únicas, brindándole a la
							comunidad nuestra calidad humana, fusionando la
							cerveza con el arte y la gastronomía.
						</Typography>
					</Grid>
				</Box>
				<Grid
					item
					sx={{
						backgroundColor: 'red',
						minWidth: { xs: '100%', sm: '100%', md: '35%' },
						height: 300,
					}}
				>
					<Card>
						<CardMedia
							image={foto3}
							sx={{ height: 300 }}
						></CardMedia>
					</Card>
				</Grid>
				<Grid
					item
					sx={{ width: { sm: '100%', md: '63%' }, height: 300 }}
				>
					<Typography variant='h2'>VALORES</Typography>
					<Typography
						variant='p'
						sx={{
							display: 'flex',
							justifyContent: 'start',
							alignItems: 'center',
						}}
					>
						“El respeto, el compromiso y la búsqueda de la mejora
						continua es reflejo de orgullo y excelencia. Somos un
						equipo que busca representarse en cada área a través de
						un sentimiento compartido de esfuerzo, dedicación y
						responsabilidad, tratando de capitalizar las
						experiencias para luego compartirlas con amigos,
						proveedores y clientes, construyendo día a día el
						Espíritu Artesanal que nos caracteriza”
					</Typography>
				</Grid>
			</Grid>
			<Footer />
		</>
	);
}
