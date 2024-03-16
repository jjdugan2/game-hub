import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo2.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" marginLeft={"10px"}>
      <Image src={logo} boxSize="60px" borderRadius={8} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
