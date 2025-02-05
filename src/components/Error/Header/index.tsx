import { Link } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

import Logo from "@/assets/react.svg";

const Header = () => {
  return (
    <AppBar color="transparent" className="shadow-none">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to={"/"}>
            <img src={Logo} alt={import.meta.env.VITE_APP_NAME} className="w-[40px] h-[40px]" />
          </Link>
        </Box>
        <IconButton>
          <SettingsTwoToneIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
