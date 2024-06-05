import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-scroll';
import menuItems from '../../../compositions/page-structure/menu-items';


const drawer = (
  <div>
    <List>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.target}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          color="inherit"
        >
          <ListItem button>
            <ListItemText primary={item.label} />
          </ListItem>
        </Link>
      ))}
    </List>
  </div>
  );

export default drawer;