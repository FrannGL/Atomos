import { Container } from '@mui/material';
import Footer from '../components/Footer';
import ItemListContainer from '../components/ItemListContainer';

export default function Productos() {
	return (
		<>
			<Container disableGutters maxWidth={false} sx={{ height: '100%' }}>
				<ItemListContainer />
				<Footer />
			</Container>
		</>
	);
}
