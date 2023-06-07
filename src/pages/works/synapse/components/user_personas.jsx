import {
  Box,
  Divider,
  Flex,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { CONTENT_MAX_W } from "../../../../appConstants";

const data = [
  {
    bgImage1: "../images/img_circle_bg_1.svg",
    bgImage2: "../images/img_circle_bg_2.svg",
    user: {
      name: "Phuong Vo",
      old: 35,
      title: "High school diploma",
      subTitle: "Small-scale organic farmer",
      avatar: "../images/img_phuong.png",
    },
    items: [
      {
        title: "Goals",
        icon: "../icons/ic_goals.svg",
        content: [
          "Improve the sustainability of her farm, increase crop quality, reduce costs.",
        ],
      },
      {
        title: "Pain points",
        icon: "../icons/ic_pain_points.svg",
        content: [
          "Limited access to real-time data and insights.",
          "Challenges in monitoring crop health and weather conditions.",
        ],
      },
      {
        title: "Behaviors",
        icon: "../icons/ic_behaviors.svg",
        content: [
          "Phuong is passionate about organic farming and sustainable agriculture.",
          "She wants to improve the health and quality of her crops while minimizing her environmental impact.",
          "She is interested in using technology to optimize her farm operations but may be hesitant to invest in expensive tools.",
          "She is also interested in connecting with other sustainable farmers and learning from their experiences.",
        ],
      },
    ],
  },
  {
    bgImage1: "../images/img_circle_bg_3.svg",
    bgImage2: "../images/img_circle_bg_4.svg",
    user: {
      name: "Trung Nguyen",
      old: 28,
      title: "Some college education",
      subTitle: "The second-generation farmer",
      avatar: "../images/img_trung.png",
    },
    items: [
      {
        title: "Goals",
        icon: "../icons/ic_goals.svg",
        content: [
          "Increase crop yield, reduce costs, and expand the farm’s market share.",
        ],
      },
      {
        title: "Pain points",
        icon: "../icons/ic_pain_points.svg",
        content: [
          "It's stressful and confusing to figure out the right way to care for crops with so many different methods and products available.",
          "Managing multiple crops simultaneously.",
        ],
      },
      {
        title: "Behaviors",
        icon: "../icons/ic_behaviors.svg",
        content: [
          "Relies on the experience and knowledge passed down from his parents.",
          "Has a hands-on approach to farming, and is open to trying new farming practices and technologies.",
        ],
      },
    ],
  },
];

const UserPersonas = () => {
  const _renderBlock = (item) => {
    return (
      <Box
        key={item.user.name}
        bgImage={item.bgImage1}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="-237px 100%"
      >
        <Box
          display="block"
          position="relative"
          // border="1px solid red"
          borderRadius={8}
          css={{
            background:
              "linear-gradient(56.12deg, rgba(255, 255, 255, 0.4) 3.82%, rgba(255, 255, 255, 0.16) 97.69%);",
            backdropFilter: "blur(2px)",
            border: "4px solid",
            borderImageSource:
              "linear-gradient(56.34deg, rgba(255, 255, 255, 0.8) 2.47%, rgba(255, 255, 255, 0.32) 98.42%)",
          }}
        >
          <Flex
            flexDirection="column"
            p={{
              base: 4,
              lg: "16px 32px",
            }}
          >
            <Flex justifyContent="space-between" gap={4} alignItems="center">
              <Stack>
                <Flex gap={2} alignItems="center">
                  <Text textStyle="t7" fontWeight="700 !important">
                    {item.user.name}
                  </Text>
                  <img
                    src="../icons/ic_dot.svg"
                    style={{
                      width: 4,
                      height: 4,
                    }}
                  />
                  <Text textStyle="t7" fontWeight="700 !important">
                    {item.user.old} years old
                  </Text>
                </Flex>
                <Flex gap={2} alignItems="center">
                  <Text textStyle="t10">{item.user.title}</Text>
                  <img
                    src="../icons/ic_dot.svg"
                    style={{
                      width: 4,
                      height: 4,
                    }}
                  />
                  <Text textStyle="t10">{item.user.subTitle} years old</Text>
                </Flex>
              </Stack>
              <img
                src={item.user.avatar}
                style={{
                  width: "92px",
                  height: "92px",
                }}
              />
            </Flex>
          </Flex>
          <Divider bgColor="#FFF1F6" />
          <Stack
            spacing={4}
            p={{
              base: 4,
              lg: "16px 32px",
            }}
          >
            {item.items.map((x) => (
              <Stack key={x.title}>
                <Flex alignItems="center" gap={4}>
                  <img
                    src={x.icon}
                    alt=""
                    style={{
                      width: 32,
                      height: 32,
                    }}
                  />
                  <Text
                    textStyle="t7"
                    color="#0C0C0C"
                    fontWeight="700 !important"
                  >
                    {x.title}
                  </Text>
                </Flex>
                {x.content.length > 1 ? (
                  <UnorderedList listStylePosition="inside" pl={3}>
                    {x.content.map((t) => (
                      <ListItem textStyle="t7" key={t}>
                        {t}
                      </ListItem>
                    ))}
                  </UnorderedList>
                ) : (
                  <Text textStyle="t7">{x.content}</Text>
                )}
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>
    );
  };

  return (
    <Flex flexDirection="column" gap="32px" overflow="visible">
      {data.map((x) => _renderBlock(x))}
    </Flex>
  );
};

export default UserPersonas;
