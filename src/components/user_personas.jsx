import {
  Box,
  Divider,
  Flex,
  Image,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const UserPersonas = ({
  title = "USER PERSONAS",
  info: { name, age, position, avatar },
  data = [],
}) => {
  return (
    <Box
      bgColor="#EDF4D7"
      borderRadius={8}
      paddingBlock="60px"
      paddingInline="50px"
    >
      <Box>
        <Divider w="36px" bgColor="#C7C7C7" h="4px" mb={2} />
        <Text textStyle="t10">{title}</Text>
      </Box>
      <Spacer h="30px" />
      <Flex gap="64px">
        <Flex flexDirection="column" gap={2} alignItems="center">
          <Image src={avatar} />
          <Spacer display="block" h="16px" />
          <Text textStyle="t6" fontWeight={700}>
            {name}
          </Text>
          <Text textStyle="t8">{age} years old</Text>
          <Text textStyle="t8">{position}</Text>
        </Flex>
        <Flex flexDirection="column" gap="30px">
          {data.map((x) => (
            <Box key={x.title} bgColor="rgba(255, 255, 255, 0.7)" p="32px">
              <Text textStyle="t6" fontWeight={700}>
                {x.title}
              </Text>
              <Spacer h="10px" />
              <UnorderedList>
                {x.items.map((t) => (
                  <ListItem textStyle="t7" key={t}>
                    {t}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserPersonas;
