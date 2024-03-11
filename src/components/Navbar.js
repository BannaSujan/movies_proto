import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Unstable_Grid2';
import MovieCard from './MovieCard';
  
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const skillsData = [{
    "show_id": "s119",
    "type": "Movie",
    "title": "Gurgaon",
    "date_added": "September 2, 2021",
    "release_year": "2017",
    "rating": "TV-14",
    "duration": "106 min",
    "description": "When the daughter of a wealthy family returns from college, she gets a frosty welcome from her brother, who has problems – and plans – of his own."
},
{
    "show_id": "s122",
    "type": "TV Show",
    "title": "Hotel Del Luna",
    "date_added": "September 2, 2021",
    "release_year": "2019",
    "rating": "TV-14",
    "duration": "1 Season",
    "description": "When he's invited to manage a hotel for dead souls, an elite hotelier gets to know the establishment's ancient owner and her strange world."
},
{
    "show_id": "s379",
    "type": "Movie",
    "title": "Fantastic Fungi",
    "date_added": "July 28, 2021",
    "release_year": "2019",
    "rating": "TV-14",
    "duration": "81 min",
    "description": "Delve into the magical world of fungi, from mushrooms that clear oil spills to underground fungal networks that help trees communicate."
},
{
    "show_id": "s439",
    "type": "Movie",
    "title": "2 Weeks in Lagos",
    "date_added": "July 16, 2021",
    "release_year": "2020",
    "rating": "TV-PG",
    "duration": "107 min",
    "description": "A businessman returns home to Nigeria and falls in love with a friend's sister despite his family’s plan for him to marry a politician’s daughter."
},
{
    "show_id": "s481",
    "type": "Movie",
    "title": "Finding Hubby",
    "date_added": "July 9, 2021",
    "release_year": "2020",
    "rating": "TV-14",
    "duration": "105 min",
    "description": "Oyin and her two close friends are on the hunt for husbands, but find that they must grapple with their own expectations as they look for love."
},
{
    "show_id": "s487",
    "type": "Movie",
    "title": "Ratchet and Clank",
    "date_added": "July 9, 2021",
    "release_year": "2016",
    "rating": "PG",
    "duration": "94 min",
    "description": "Affable alien Ratchet longs to be a Galactic Ranger and might get the chance when rogue robot Clank tells him of evil Drek's plot to destroy a galaxy."
},
{
    "show_id": "s91",
    "type": "Movie",
    "title": "Paradise Hills",
    "date_added": "September 9, 2021",
    "release_year": "2019",
    "rating": "TV-MA",
    "duration": "95 min",
    "description": "Uma wakes up in a lush tropical facility designed to turn willful girls into perfect ladies. That’s bad enough, but its real purpose is even worse."
}];

  const movieCards = skillsData.map((item) => {
    return (
            <Grid xs={3}>
                <MovieCard show_id={item.show_id} type= {item.type} title= {item.title} release_year= {item.release_year} rating={item.rating}/>
            </Grid>
    );
});

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{background:'black'}}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" style={{fontWeight:'700'}}>
            Blink Movie!!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}
      
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: 'black',
          color:'inherit' // This line sets the drawer background color to black
        },
      }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{color:'inherit'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  color:'inherit',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color:'inherit',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4}} style={{margin:'0 0 0 0'}}>
                  {movieCards}
        </Grid>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
