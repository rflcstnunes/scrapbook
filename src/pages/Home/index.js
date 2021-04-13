import React, {useState} from 'react';
import { Container, Button, Menu, MenuItem } from '@material-ui/core';
import ListSharpIcon from '@material-ui/icons/ListSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MeetingRoomSharpIcon from '@material-ui/icons/MeetingRoomSharp';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ScrapForm from '../../components/scrapForm';
import Box from '@material-ui/core/Box';

export default function Home() {
    const [anchorEl, setAnchorEl, ] = React.useState(null);
    const [openForm, setForm] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Container fixed>
            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <Fab color="primary" aria-label="add">
                        <ListSharpIcon fontSize="large"/>
                    </Fab>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                    <AccountCircleSharpIcon/>
                        Login
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <HomeSharpIcon/>
                        Home
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <SearchSharpIcon/>
                        Search
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <MeetingRoomSharpIcon/>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
            <div className="newScrap">
                <Box display="flex" justifyContent="flex-end" marginTop="-5.5%" >
                        <Button onClick={() => setForm(true)} fixed>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </Button>
                {openForm ?  <ScrapForm/> : null}
                </Box>
            </div>
        </Container>
    )
}