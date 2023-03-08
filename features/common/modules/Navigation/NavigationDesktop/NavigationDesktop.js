import { Box, Divider, Flex, Image, Input, Link, Text } from '@chakra-ui/react'
import { RiSearch2Line} from "react-icons/ri"
import { SlLocationPin } from "react-icons/sl"
import { BsBasket } from "react-icons/bs"
import { RiUserLine } from "react-icons/ri"
import {React, useState} from 'react'
import { Menu, MenuButton, MenuList, MenuItem, useMenuButton } from "@chakra-ui/react";
import { navigationConts } from '@myapp/features/data/navConts';

const NavigationDesktop = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };


  return (
    <>
    <Box
      maxWidth="1280px"
      w="100%"
      paddingY="0.625rem"
      marginX="auto"
      px="1.5rem"
      bg={{lg: "red", md: "yellow", sm: "green"}}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        gap="1rem"
      >
      <Image 
        src="/Logo.png"
          w="119px"
          h="28px"
          alt="logo"
      />

      <Flex
          maxWidth="530px"
          w="100%"
          position="relative"
        > 
          <Box
            position="absolute"
            zIndex={5}
            top="50%"
            transform="translateY(-50%)"
            left="1rem"
          >
          <RiSearch2Line 
            color='#9A9EA6'
            cursor="pointer"
          />
          </Box>


          <Input 
            maxWidth="400px"
            w="100%"
            padding="0.85rem 1.125rem"
            bg="#F0F1F2"
            placeholder='Cari apapun disini...'
            borderRadius="1.5rem"
            fontSize="12px"
            position="relative"
            paddingLeft="2.5rem"
          />

      </Flex>

      <Flex>
          <Menu>
            <MenuButton 
              color="#9A9EA6"
              fontWeight="400"
              fontSize="sm"
              minWidth="120px"
            >
              {selectedItem ? `${selectedItem}` : " Bahasa Indonesia"}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleSelect("Indonesia, Yogyakarta")}>Indonesia, Yogyakarta</MenuItem>
              <MenuItem onClick={() => handleSelect("Czech Republic, Prague")}>Czech Republic, Prague</MenuItem>
              <MenuItem onClick={() => handleSelect("USA, Ohio")}>USA, Ohio</MenuItem>
            </MenuList>
          </Menu>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="flex-start"
      >
        <Box
          bg="#E3EBFD"
          h="40px"
          w="40px"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SlLocationPin 
            color="#4475F2"
            size={16}
          />
        </Box>
        <Flex
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          minWidth="150px"
        >
          <Text color="#9A9EA6" fontSize="0.75rem" marginLeft="16px" marginBottom="-6px">Lokácia:</Text>

          <Menu>
            <MenuButton 
              py={1} px={4} 
              color="#4475F2"
              fontWeight="600"
            >
              {selectedItem ? `${selectedItem}` : "Slovensko"}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleSelect("Indonesia, Yogyakarta")}>Indonesia, Yogyakarta</MenuItem>
              <MenuItem onClick={() => handleSelect("Czech Republic, Prague")}>Czech Republic, Prague</MenuItem>
              <MenuItem onClick={() => handleSelect("USA, Ohio")}>USA, Ohio</MenuItem>
            </MenuList>
          </Menu>


        </Flex>
      </Flex>

      </Flex>
    </Box>

    <Divider />
    
    <Box
      maxWidth="1280px"
      w="100%"
      paddingY="0.5rem"
      marginX="auto"
      px="1.5rem"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="2rem"
          fontSize="md"
        >
          {navigationConts.map((item) => (
            <NavigationLinks key={item.title} {...item} />
          ))}
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          gap="0.5rem"
        >
          <Flex
            w="48px"
            h="48px"
            borderRadius="full"
            bg="#4475F2"
            alignItems="center"
            justifyContent="center"
            color="white"
            cursor="pointer"
          >
            <BsBasket size={18}/>
          </Flex>
          <Flex
            w="48px"
            h="48px"
            borderRadius="full"
            bg="#E3EBFD"
            alignItems="center"
            justifyContent="center"
            color="#4475F2"
            cursor="pointer"
          >
            <RiUserLine size={18}/>
          </Flex>
        </Box>
      </Flex>
    </Box>
    </>

    
  )
}

export default NavigationDesktop

const NavigationLinks = ({ title, link}) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem" color="#9A9EA6">
        {title}
      </Flex>
    </Link>
  )
}