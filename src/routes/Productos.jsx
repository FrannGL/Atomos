import { Container } from '@mui/material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ItemListContainer from '../components/ItemListContainer';

export default function Productos() {
	return (
		<>
			<NavBar />
			<Container disableGutters maxWidth={false} sx={{ height: '100%' }}>
				<ItemListContainer />
			</Container>
			<Footer />
		</>
	);
}
