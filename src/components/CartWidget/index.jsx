// COMPONENTES MATERIAL-UI
import { Box, styled, Badge, IconButton } from '@mui/material';

// ICONOS MATERIAL-UI
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useContext } from 'react';
import { Context } from '../../Context';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContextProvider';

const StyledBadge = styled(Badge)(() => ({
	'& .MuiBadge-badge': {
		right: -5,
		top: 15,
		border: '1px solid',
		fontSize: 16,
		paddingX: 10,
	},
}));

export default function CartWidget() {
	const { cartQuantity } = useContext(Context);
	const { itemsAdded } = useContext(Context);
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<Box>
			<IconButton aria-label='cart'>
				<NavLink to={'../../cart'}>
					{isDarkMode ? (
						<StyledBadge
							badgeContent={
								itemsAdded.length === 0 ? '0' : cartQuantity()
							}
							color='info'
						>
							<LocalMallIcon color='base' fontSize='medium' />
						</StyledBadge>
					) : (
						<StyledBadge
							badgeContent={
								itemsAdded.length === 0 ? '0' : cartQuantity()
							}
							color='info'
						>
							<LocalMallIcon
								style={{ color: 'black' }}
								fontSize='medium'
							/>
						</StyledBadge>
					)}
				</NavLink>
			</IconButton>
		</Box>
	);
}
