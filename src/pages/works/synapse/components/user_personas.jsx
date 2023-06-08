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
    dividerColor: "#FFF1F6",
    user: {
      name: "Phuong Vo",
      old: 35,
      title: "High school diploma",
      subTitle: "Small-scale organic farmer",
      avatar:
        "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rtDHT6kevzldyElDwjU8zlDwf2S1gKOz_0mgfMKo4gaZ72rfWGGITuv58nmkC3ZBeudbvmERIGKFop0rT9DPr4HSOd4g=s1600",
    },
    items: [
      {
        title: "Goals",
        icon: "../icons/ic_goals_pink.svg",
        content: [
          "Improve the sustainability of her farm, increase crop quality, reduce costs.",
        ],
      },
      {
        title: "Pain points",
        icon: "../icons/ic_pain_points_pink.svg",
        content: [
          "Limited access to real-time data and insights.",
          "Challenges in monitoring crop health and weather conditions.",
        ],
      },
      {
        title: "Behaviors",
        icon: "../icons/ic_behaviors_pink.svg",
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
    dividerColor: "#E7F8F4",
    user: {
      name: "Trung Nguyen",
      old: 28,
      title: "Some college education",
      subTitle: "The second-generation farmer",
      avatar:
        "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pJMOVAXm34-N4A6yA0PSssbCRDEC0ePhUvyLFmzDPqHfUfeytXC69S8uNKdJvBIH8DhkMBb78howcwrlMw-WVtVXU1CA=s1600",
    },
    items: [
      {
        title: "Goals",
        icon: "../icons/ic_goals_green.svg",
        content: [
          "Increase crop yield, reduce costs, and expand the farm’s market share.",
        ],
      },
      {
        title: "Pain points",
        icon: "../icons/ic_pain_points_green.svg",
        content: [
          "It's stressful and confusing to figure out the right way to care for crops with so many different methods and products available.",
          "Managing multiple crops simultaneously.",
        ],
      },
      {
        title: "Behaviors",
        icon: "../icons/ic_behaviors_green.svg",
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
        position="relative"
        zIndex={0}
        _before={{
          content: '""',
          position: "absolute",
          backgroundImage: `url(${item.bgImage1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "600px",
          left: 0,
          width: "100%",
          height: "100%",
          top: 0,
          marginTop: "-173px",
          marginLeft: "-251px",
        }}
        _after={{
          content: '""',
          position: "absolute",
          backgroundImage: `url(${item.bgImage1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "232px",
          right: 0,
          width: "232px",
          height: "232px",
          top: 0,
          marginTop: "-50px",
          marginRight: "-50px",
          zIndex: 0,
        }}
      >
        <Box
          display="block"
          position="relative"
          // border="1px solid red"
          borderRadius={8}
          zIndex={4}
          css={{
            background:
              "linear-gradient(56.12deg, rgba(255, 255, 255, 0.4) 3.82%, rgba(255, 255, 255, 0.16) 97.69%);",
            backdropFilter: "blur(2px)",
            border: "4px solid #fff",
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
                  display: "block",
                  position: "relative",
                  zIndex: 2,
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "50%",
                  border: "4px solid #fff",
                  boxShadow: "0px 15px 30px -4px rgba(9, 26, 47, 0.25)",
                }}
              />
            </Flex>
          </Flex>
          <Divider borderColor={item.dividerColor} />
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
    <Flex
      flexDirection="column"
      gap="32px"
      overflow="visible"
      position="relative"
    >
      {data.map((x) => _renderBlock(x))}
    </Flex>
  );
};

export default UserPersonas;