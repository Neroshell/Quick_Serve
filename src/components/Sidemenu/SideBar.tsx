import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import Box from '@mui/material/Box';

interface SideBarProps {
  firstText: string;
  secondText: string;
  thirdText: string;
}

const SideBar: React.FC<SideBarProps> = ({ firstText, secondText, thirdText }) => {
  return (
    <div>
      <Box
        component="section"
        sx={{
          height: '89vh',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          position: 'fixed',
          top: '69px',
          width: '20%',
        }}
      >
        <List component="nav">
          <ListItem disablePadding sx={{ width: '100%', margin: '0 auto', ':hover': {
                backgroundColor: 'var(--light-hover)',
                borderRadius: '15px ',
                color: 'var(--primary-color)',
                fontWeight: 'bolder'
              },  
          }}>
            <Box sx={{ width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <ListItemButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '10px',
                  padding: '8px 16px',
                  ':hover': {
                     backgroundColor: 'transparent',
                  },
                }}
              >
                <HomeIcon fontSize="medium" sx={{ minWidth: '24px', maxWidth: '24px' }} />
                <ListItemText
                  primary={firstText}  // First text from props
                  sx={{
                    margin: 0,
                    minWidth: 'auto',
                    flex: '1',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    ':hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                />
              </ListItemButton>
            </Box>
          </ListItem>
        
          <ListItem disablePadding sx={{ width: '100%', margin: '0 auto', ':hover': {
                backgroundColor: 'var(--light-hover)',
                borderRadius: '15px',
                color: 'var(--primary-color)',
                fontWeight: 'bolder'
              },  }}>
            <Box sx={{ width: '80%', margin: '0 auto', display: 'flex', ':hover': {
              backgroundColor: 'var(--light-hover)',
            } }}>
              <ListItemButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '50%',
                  gap: '10px',
                  padding: '8px 16px',
                  ':hover': {
                     backgroundColor: 'transparent',
                  },
                }}
              >
                <BorderColorIcon fontSize="medium" sx={{ minWidth: '24px', maxWidth: '24px' }} />
                <ListItemText
                  primary={secondText}  // Second text from props
                  sx={{
                    margin: '0 auto',
                    minWidth: 'auto',
                    flex: '1',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                />
              </ListItemButton>
            </Box>
          </ListItem>

          <ListItem disablePadding sx={{ margin: '0 auto', width: '100%', ':hover': {
                backgroundColor: 'var(--light-hover)',
                borderRadius: '15px', 
                color: 'var(--primary-color)',
                fontWeight: 'bolder'
              }, }}>
            <Box sx={{ width: '80%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <ListItemButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '50%',
                  gap: '10px',
                  padding: '8px 16px',
                  ':hover': {
                     backgroundColor: 'transparent',
                  },
                }}
              >
                <ForwardToInboxIcon fontSize="medium" sx={{ minWidth: '24px', maxWidth: '24px' }} />
                <ListItemText
                  primary={thirdText}  // Third text from props
                  sx={{
                    margin: 0,
                    minWidth: 'auto',
                    flex: '1',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                />
              </ListItemButton>
            </Box>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default SideBar;
