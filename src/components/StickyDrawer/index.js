import * as React from 'react';
import {
    Toolbar,
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    List,
    IconButton,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import scrollToSection from '../../helper/scroollToSection';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ComputerIcon from '@mui/icons-material/Computer';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import InterestsIcon from '@mui/icons-material/Interests';
import FeedIcon from '@mui/icons-material/Feed';

export default function Index() {
    const [open, setOpen] = React.useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const mobileCss = { alignSelf: 'center', justifyContent: 'center' }; 

    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                    mt: 2
                }}
            >
                <IconButton onClick={toggleDrawer}>
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </Toolbar>
            <Divider />
            <List>
                <ListItemButton sx={{ pb: !open ? 2 : "", pt: !open ? 1.5 : "" }} onClick={() => scrollToSection('userInfo')}>
                    <ListItemIcon sx={!open ? mobileCss : {alignSelf: 'center'}}>
                        <EmojiPeopleIcon />
                    </ListItemIcon>
                    {open && <ListItemText primary="Kişisel Bilgiler" />}
                </ListItemButton>
                <ListItemButton sx={{ pb: !open ? 2 : "" }} onClick={() => scrollToSection('educationInfo')}>
                    <ListItemIcon sx={!open ? mobileCss :  {alignSelf: 'center'}}>
                        <SchoolIcon />
                    </ListItemIcon>
                    {open && <ListItemText primary="Eğitim Bilgileri" />}
                </ListItemButton>
                <ListItemButton sx={{ pb: !open ? 2 : "" }} onClick={() => scrollToSection('computerSkills')}>
                    <ListItemIcon sx={!open ? mobileCss : {alignSelf: 'center'}}>
                        <ComputerIcon />
                    </ListItemIcon>
                    {open && <ListItemText primary="Yetenekler" />}
                </ListItemButton>
                <ListItemButton sx={{ pb: !open ? 2 : "" }} onClick={() => scrollToSection('jobExperience')}>
                    <ListItemIcon sx={!open ? mobileCss : {alignSelf: 'center'}}>
                        <WorkIcon />
                    </ListItemIcon>
                    {open && <ListItemText primary="İş Deneyimleri" />}
                </ListItemButton>
                <ListItemButton sx={{ pb: !open ? 2 : "" }} onClick={() => scrollToSection('referenceInfo')}>
                    <ListItemIcon sx={!open ? mobileCss : {alignSelf: 'center'}}>
                        <ConnectWithoutContactIcon />
                    </ListItemIcon>
                    {open && <ListItemText primary="Referanslar" />}
                </ListItemButton>
                <ListItemButton sx={{ pb: !open ? 2 : "" }} onClick={() => scrollToSection('interestingInfo')}>
                    <ListItemIcon sx={!open ? mobileCss : {alignSelf: 'center'}}>
                        <InterestsIcon />
                    </ListItemIcon>
                    {open && <ListItemText primary="İlgi Alanları" />}
                </ListItemButton>
                <ListItemButton sx={{ pb: !open ? 2 : "" }} onClick={() => scrollToSection('otherInfo')}>
                    <ListItemIcon sx={!open ? mobileCss : {alignSelf: 'center'}}>
                        <FeedIcon />
                    </ListItemIcon>
                    {open && <ListItemText primary="Diğer Bilgiler" />}
                </ListItemButton>                
            </List>
        </Drawer>
    )
}

