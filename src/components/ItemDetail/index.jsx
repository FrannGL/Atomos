// COMPONENTES MATERIAL-UI
import { Container } from '@mui/system';

// HOOKS REACT
import { useEffect, useState } from 'react';

// COMPONENTES PROPIOS
import CardItemDetail from '../CardItemDetail';
import CardItemDetailSkeleton from '../CardItemDetailSkeleton';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default function ItemDetail({ product }) {
	const [loading, setLoading] = useState(true);

	const fakePromise = () =>
		new Promise((resolve) => setTimeout(resolve, 2000));

	const data = async () => {
		try {
			await fakePromise();
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		data();
	}, []);

	return (
		<>
			<NavBar />
			<Container
				maxWidth='xl'
				disableGutters
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					height: '100vh',
				}}
			>
				{loading ? (
					<CardItemDetailSkeleton />
				) : (
					<CardItemDetail product={product} />
				)}
			</Container>
			<Footer />
		</>
	);
}
