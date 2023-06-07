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
  const synapse = data[0];
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

        <PostParagraph
          title="Target customer"
          description="Vietnamese farmers with varying levels of technological proficiency."
        />
        <PostParagraph
          title="User personas"
          description="I conducted 114 interviews and surveys with Vietnamese farmers in the central region of Vietnam to gather insights on their crop monitoring challenges, preferences, and requirements. Farmers were categorized based on age, technological literacy, farm size, and specific needs, resulting in the development of primary and secondary user personas."
        />
        <PostParagraph
          header="SOLUTION"
          title="Comprehensive farm insights at a glance"
          description="Provide users with a comprehensive view of their farm, offering real-time updates on pest alerts, weather conditions, wind forecast, and nutrient alerts."
        />
        <PostParagraph description="Provide interactive elements for users to access detailed information or take immediate actions based on the alerts received." />
        <PostParagraph description="Enable users to make immediate decisions based on accurate and up-to-date information, ensuring effective crop monitoring and management." />
        <PostParagraph
          title="Crop performance insights: enhancing field productivity"
          description="Offer users a comprehensive analysis of crop performance, highlighting potential issues causing lower crop levels in the current season compared to previous seasons."
        />
        <PostParagraph
          title="Field recommendations for maximum crop performance"
          description="Simplify the field creation process with a step-by-step wizard, supplemented by an accessible help center for any assistance while adding new fields."
        />
        <PostParagraph description="Provide clear explanations for the recommendations, detailing the rationale behind each suggestion." />
        <PostParagraph
          title="Continuous guidance and support: accessing expert advice anytime"
          description="Enable in-app chat for seamless communication between users and support team members, as well as the ability to talk to experts for professional advice on topics such as pest management and fertilizer effectiveness."
        />
        <PostParagraph description="Enable users to add events for irrigation and fertilizer while having video chats with experts helps them maintain a comprehensive record of their farming activities." />
        <PostNavigator current={0} />
      </Flex>
    </Box>
  );
};

export default Synapse;
