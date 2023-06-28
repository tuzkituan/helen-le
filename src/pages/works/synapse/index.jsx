import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { CONTENT_MAX_W, MAIN_MAX_W } from "../../../appConstants";
import PostBannerImage from "../../../components/post_banner_image";
import PostHeader from "../../../components/post_header";
import PostNavigator from "../../../components/post_navigator";
import PostParagraph from "../../../components/post_paragraph";
import data from "../../../projects.json";
import UserPersonas from "./components/user_personas";

const Synapse = () => {
  const [isSmallerThanSm] = useMediaQuery("(max-width: 480px)");
  const synapse = data[0];

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
          base: "48px",
          lg: "80px",
        }}
        flexDirection="column"
      >
        <PostHeader
          title="Enhances farm operations for Vietnamese farmers"
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
          image="https://drive.google.com/uc?id=1l7z-OlPsaLxHkrkt7-p0NYZCTiYZGYGb"
          maxW="100%s"
        />
        <PostParagraph
          title="Target customer"
          description="Vietnamese farmers with varying levels of technological proficiency."
        >
          <Box
            marginInline={{
              base: -8,
              lg: `calc(calc(${CONTENT_MAX_W} - 100vw) / 2)`,
            }}
          >
            <img
              style={{
                width: "100%",
              }}
              src="https://drive.google.com/uc?id=1sRuGT-OdE8005bWu47KGM3x3kQqiWIkM"
              alt=""
            />
          </Box>
        </PostParagraph>
        <Box>
          <img
            src={
              isSmallerThanSm
                ? "https://drive.google.com/uc?id=11ts4F1i_v2wbBwOH9DNpmD0NTzSvrTXR"
                : "https://drive.google.com/uc?id=1sHfCwjLXLPioR0kC3DDq2IyYft3Tklve"
            }
            alt=""
            style={{
              width: "100%",
            }}
          />
        </Box>
        <Box
          marginInline={{
            base: -8,
            lg: `calc(calc(${MAIN_MAX_W} - 100vw) / 2)`,
          }}
        >
          <img
            style={{
              width: "100%",
            }}
            src="https://drive.google.com/uc?id=1wlkEOcI1QjdLUmIbenZdUpEcAHOMWJJe"
            alt=""
          />
        </Box>
        <PostParagraph
          title="User personas"
          description="I conducted 114 interviews and surveys with Vietnamese farmers in the central region of Vietnam to gather insights on their crop monitoring challenges, preferences, and requirements. Farmers were categorized based on age, technological literacy, farm size, and specific needs."
        >
          <UserPersonas />
        </PostParagraph>
        <PostParagraph
          header="SOLUTION"
          title="Comprehensive farm insights at a glance"
          description="Provide users with a comprehensive view of their farm, offering real-time updates on pest alerts, weather conditions, wind forecast, and nutrient alerts."
        >
          <Box position="relative">
            <img
              src="https://drive.google.com/uc?id=1zPetK9I24tCkX2ALc8-pOJNkUTr6ltfw"
              alt=""
              style={{
                height: "auto",
                width: "100%",
              }}
            />
            <img
              src="https://drive.google.com/uc?id=1RaRYE4N_3o_-v8r5WE8pNA3FnQNnXyta"
              alt=""
              style={{
                position: "absolute",
                bottom: 0,
                height: "140%",
                left: "39%",
                top: "-23%",
                zIndex: 1,
              }}
            />
          </Box>
        </PostParagraph>
        <PostParagraph
          description="Provide interactive elements for users to access detailed information or take immediate actions based on the alerts received."
          image="https://drive.google.com/uc?id=1zPetK9I24tCkX2ALc8-pOJNkUTr6ltfw"
          maxW="100%"
        />
        <PostParagraph
          description="Enable users to make immediate decisions based on accurate and up-to-date information, ensuring effective crop monitoring and management."
          image="https://drive.google.com/uc?id=1o9-XHYd3PaUYtUErsW4A-Cp6Nv2itMFj"
          maxW="100%"
        />
        <PostParagraph
          title="Crop performance insights: enhancing field productivity"
          description="Offer users a comprehensive analysis of crop performance, highlighting potential issues causing lower crop levels in the current season compared to previous seasons."
          image="https://drive.google.com/uc?id=1FTN96AFmefYRuhhNSau_tldSG08lskF0"
          maxW="100%"
        />
        <PostParagraph
          title="Field recommendations for maximum crop performance"
          description="Simplify the field creation process with a step-by-step wizard, supplemented by an accessible help center for any assistance while adding new fields."
          image="https://drive.google.com/uc?id=1cYrVOqTbpK672pCeeISFMWdG5DzCjtIx"
          maxW="100%"
        />
        <PostParagraph
          description="Provide clear explanations for the recommendations, detailing the rationale behind each suggestion."
          image="https://drive.google.com/uc?id=1V1EAG5Wwn0I7J9GHbAqRfqd5rcNCDne-"
          maxW="100%"
        />
        <PostParagraph
          title="Continuous guidance and support: accessing expert advice anytime"
          description="Enable in-app chat for seamless communication between users and support team members, as well as the ability to talk to experts for professional advice on topics such as pest management and fertilizer effectiveness."
          image="https://drive.google.com/uc?id=1wx3KHnWgAURmkpxH2Sr0c_D6V2iotmML"
          maxW="100%"
        />
        <PostParagraph
          maxW="100%"
          image="https://drive.google.com/uc?id=18ivphi3UAR9guELYVszWV636C0Rchd2g"
          description="Enable users to add events for irrigation and fertilizer while having video chats with experts helps them maintain a comprehensive record of their farming activities."
        />
        <PostParagraph maxW="100%" title="Responsive design">
          <Box
            marginInline={{
              base: -8,
              lg: `calc(calc(${CONTENT_MAX_W} - 100vw) / 2)`,
            }}
          >
            <img
              style={{
                width: "100%",
              }}
              src="https://drive.google.com/uc?id=10WCUTZkK9eiVx75IYieqzwcv36Shdvfj"
              alt=""
            />
          </Box>
        </PostParagraph>
        <PostNavigator current={0} />
      </Flex>
    </Box>
  );
};

export default Synapse;
