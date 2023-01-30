import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { Air } from '@mui/icons-material';



function Header() {
  const [{user}, dispatch] = useStateValue();
  const logout = () => {
    window.location.reload();
  }
  return (
    <div className='header'>
        <div className="header__left">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Fac
    ebook_f_logo_%282019%29.svg.png?20200820101156"
     alt="" 
    />
    <div className="header__input">
      <SearchIcon />
      <input type="text" placeholder='Search Facebook'/>
    </div>
    </div>
    <div className="header__center">
      <div className="header__option--active">
        <HomeIcon fontSize="large" />
      </div>
      <div className="header__option">
        <FlagIcon fontSize="large" />
      </div>
      <div className="header__option">
        <SubscriptionsOutlinedIcon  fontSize="large" />
      </div>
      <div className="header__option">
        <StorefrontIcon fontSize="large" />
      </div>
      <div className="header__option">
        <SupervisedUserCircleIcon fontSize="large" />
      </div>
    </div>

    <div className="header__right">
      <div className="header__info">
        <Avatar  src={user.photoURL} onClick={logout}/>
        <h4>{user.displayName}</h4>
      </div>
      <IconButton>
       <AddIcon />
     </IconButton>
     <IconButton>
    <ForumIcon />
     </IconButton>
     <IconButton>
      <NotificationsActiveIcon />
     </IconButton>
     <IconButton>
      <ExpandMoreIcon />
     </IconButton>
    </div>
    </div>
  )
}

export default Header