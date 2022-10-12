import { Avatar, Button, IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVerticalIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
const StyledContainer = styled.div`
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  border-right: 1px solid whitesmoke;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`;

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 2px;
`;

const StyledUserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const StyledSearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`;

const StyledSidebarButton = styled(Button)`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;
const Sidebar = () => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledContainer>
      <StyledHeader>
        <Tooltip title="user email" placement="right">
          <StyledUserAvatar />
        </Tooltip>

        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVerticalIcon />
          </IconButton>
          <IconButton onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </div>
      </StyledHeader>

      <StyledSearch>
        <SearchIcon />
        <StyledSearchInput></StyledSearchInput>
      </StyledSearch>

      <StyledSidebarButton> Start A new conversation</StyledSidebarButton>
    </StyledContainer>
  );
};

export default Sidebar;
