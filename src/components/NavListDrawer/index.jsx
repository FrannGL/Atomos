// COMPONENTES MATERIAL UI
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// MATERIAL ICONS
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// HOOKS REACT
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENTES PROPIOS
import MUISwitch from '../MUIswitch';
import CartWidget from '../CartWidget/index';
import { Box } from '@mui/material';
import { ThemeContext } from '../../ThemeContextProvider';
import { useContext } from 'react';

export default function NavListDrawer() {
	const [openMenu, setOpenMenu] = useState(false);
	const { isDarkMode } = useContext(ThemeContext);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>
			{isDarkMode ? (
				<List
					sx={{
						width: 300,
						bgcolor: 'background.paper',
					}}
					component='nav'
					aria-labelledby='nested-list-subheader'
					subheader={
						<ListSubheader
							component='div'
							id='nested-list-subheader'
						>
							Juguetes Perdidos Tienda Virtual
						</ListSubheader>
					}
				>
					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<SportsBarIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<ListItemText primary='NUESTRAS CERVEZAS' />
						{openMenu ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={openMenu} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<ArrowRightIcon
										style={{ color: 'white' }}
									/>
								</ListItemIcon>
								<NavLink
									to={'/category/rubia'}
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									<ListItemText primary='CERVEZAS RUBIAS' />
								</NavLink>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<ArrowRightIcon
										style={{ color: 'white' }}
									/>
								</ListItemIcon>
								<NavLink
									to={'/category/roja'}
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									<ListItemText primary='CERVEZAS ROJAS' />
								</NavLink>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<ArrowRightIcon
										style={{ color: 'white' }}
									/>
								</ListItemIcon>
								<NavLink
									to={'/category/negra'}
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									<ListItemText primary='CERVEZAS NEGRAS' />
								</NavLink>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<ArrowRightIcon
										style={{ color: 'white' }}
									/>
								</ListItemIcon>
								<NavLink
									to={'/products'}
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									<ListItemText primary='VER TODAS' />
								</NavLink>
							</ListItemButton>
						</List>
					</Collapse>

					<ListItemButton>
						<ListItemIcon>
							<SendIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<NavLink
							to={'/nosotros'}
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							<ListItemText primary='NOSOTROS' />
						</NavLink>
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<DraftsIcon style={{ color: 'white' }} />
						</ListItemIcon>
						<NavLink
							to={'/reservas'}
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							<ListItemText primary='RESERVAS' />
						</NavLink>
					</ListItemButton>
					<ListItemButton>
						<ListItemText primary='Screen Mode' />
						<MUISwitch />
					</ListItemButton>
					<ListItemButton>
						<ListItemText primary='Carrito de Compras' />
						<Box sx={{ mr: 4 }}>
							<CartWidget />
						</Box>
					</ListItemButton>
				</List>
			) : (
				<List
					sx={{
						width: 300,
						bgcolor: 'background.paper',
					}}
					component='nav'
					aria-labelledby='nested-list-subheader'
					subheader={
						<ListSubheader
							component='div'
							id='nested-list-subheader'
						>
							Juguetes Perdidos Tienda Virtual
						</ListSubheader>
					}
				>
					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<SportsBarIcon />
						</ListItemIcon>
						<ListItemText primary='NUESTRAS CERVEZAS' />
						{openMenu ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={openMenu} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<ArrowRightIcon />
								</ListItemIcon>
								<NavLink
									to={'/category/rubia'}
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									<ListItemText primary='CERVEZAS RUBIAS' />
								</NavLink>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<ArrowRightIcon />
								</ListItemIcon>
								<NavLink
									to={'/category/roja'}
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									<ListItemText primary='CERVEZAS ROJAS' />
								</NavLink>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<ArrowRightIcon />
								</ListItemIcon>
								<NavLink
									to={'/category/negra'}
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									<ListItemText primary='CERVEZAS NEGRAS' />
								</NavLink>
							</ListItemButton>
							<ListItemButton>
								<ListItemIcon>
									<ArrowRightIcon />
								</ListItemIcon>
								<NavLink
									to={'/products'}
									style={{
										textDecoration: 'none',
										color: 'inherit',
									}}
								>
									<ListItemText primary='VER TODAS' />
								</NavLink>
							</ListItemButton>
						</List>
					</Collapse>

					<ListItemButton>
						<ListItemIcon>
							<SendIcon />
						</ListItemIcon>
						<NavLink
							to={'/nosotros'}
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							<ListItemText primary='NOSOTROS' />
						</NavLink>
					</ListItemButton>

					<ListItemButton>
						<ListItemIcon>
							<DraftsIcon />
						</ListItemIcon>
						<NavLink
							to={'/reservas'}
							style={{
								textDecoration: 'none',
								color: 'inherit',
							}}
						>
							<ListItemText primary='RESERVAS' />
						</NavLink>
					</ListItemButton>
					<ListItemButton>
						<ListItemText primary='Screen Mode' />
						<MUISwitch />
					</ListItemButton>
					<ListItemButton>
						<ListItemText primary='Carrito de Compras' />
						<Box sx={{ mr: 4 }}>
							<CartWidget />
						</Box>
					</ListItemButton>
				</List>
			)}
		</>
	);
}
