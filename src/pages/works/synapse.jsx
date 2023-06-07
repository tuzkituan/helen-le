import React from "react";
import data from "../../projects.json";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { CONTENT_MAX_W, MAIN_MAX_W } from "../../appConstants";
import PostHeader from "../../components/post_header";
import PostBannerImage from "../../components/post_banner_image";
import PostParagraph from "../../components/post_paragraph";
import PostNavigator from "../../components/post_navigator";

const Synapse = () => {
  const synapse = data[2];
  const pain_points = [
    {
      label: "Monitor effectively ",
      image: "../images/img_synapse_key_result_1.png",
    },
    {
      label: "Boosting productivity",
      image: "../images/img_synapse_key_result_2.png",
    },
    {
      label: "Sustainability",
      image: "../images/img_synapse_key_result_3.png",
    },
  ];
  return (
    <Box maxWidth={MAIN_MAX_W} w="100%" margin="auto">
      <Box maxW={CONTENT_MAX_W} w="100%" margin="auto">
        <Breadcrumb
          textStyle={{
            base: "t9",
            lg: "t8",
          }}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Work</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/synapse">Synapse</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Spacer height={4} />
      <Flex
        gap={{
          base: 10,
          lg: 20,
        }}
        flexDirection="column"
      >
        <PostHeader
          title="Enhances farm operations for Vietnamese farmers."
          description="A crop monitoring platform empowers Vietnamese farmers to monitor their farms effectively, boosting productivity, and sustainability."
        />
        <PostBannerImage
          color={synapse.color}
          images={synapse.images}
          backgroundImage={synapse.backgroundImage}
        />
        <PostParagraph
          header="SUMMARY"
          title="Objective"
          description={`To create a user-friendly platform and app that provides farmers with real-time data and insights to help them manage their farms more efficiently.`}
        />
        <PostParagraph title="Key results">
          <Flex
            gap={{
              lg: "40px",
              base: 4,
            }}
            justifyContent="space-between"
            flexDirection={{
              base: "column",
              lg: "row",
            }}
            maxW={CONTENT_MAX_W}
            margin="0 auto"
            w="100%"
          >
            {pain_points.map((x) => (
              <Flex
                key={x.label}
                flexDirection="column"
                gap={4}
                // justifyContent="center"
                alignItems="center"
                flex={1}
              >
                <Image src={x.image} w="100%" />
                <Text
                  textStyle={{
                    base: "t8",
                    lg: "t7",
                  }}
                  textAlign="center"
                >
                  {x.label}
                </Text>
              </Flex>
            ))}
          </Flex>
        </PostParagraph>
        <PostParagraph
          title="Target customer"
          description="Vietnamese farmers with varying levels of technological proficiency."
        />
        <PostParagraph title="Pain points" />
        <PostParagraph header="PRODUCT RESEARCH" title="5 WHY" />
        <PostParagraph
          title="User personas"
          description="I conducted 114 interviews and surveys with Vietnamese farmers in the central region of Vietnam to gather insights on their crop monitoring challenges, preferences, and requirements. Farmers were categorized based on age, technological literacy, farm size, and specific needs, resulting in the development of primary and secondary user personas."
        />
        <PostParagraph
          title="Solution"
          description="I conducted 114 interviews and surveys with Vietnamese farmers in the central region of Vietnam to gather insights on their crop monitoring challenges, preferences, and requirements. Farmers were categorized based on age, technological literacy, farm size, and specific needs, resulting in the development of primary and secondary user personas."
        />
        <PostNavigator current={2} />
      </Flex>
    </Box>
  );
};

export default Synapse;
