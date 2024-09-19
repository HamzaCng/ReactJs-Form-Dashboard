import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { Work as WorkIcon } from '@mui/icons-material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LanguageIcon from '@mui/icons-material/Language';
import { styled } from '@mui/material/styles';

const StyledList = styled(List)(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));

export default function InsetDividers() {

  return (
    <StyledList>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MilitaryTechIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Askerlik" secondary=" 2014" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="İş Deneyimi" secondary="CMIT - 1 Yıl" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LanguageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Adres" secondary="Ankara" />
      </ListItem>
    </StyledList>
  );
}
