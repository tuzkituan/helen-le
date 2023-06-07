import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
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
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81o4NWIleKOJOmkLyVi6YIml6ntpx1_PtltDO3cvbz0UAKo0fpimhPJkyKinac6fFRPTwXsUg7es4LFAdniPpCn5iZ0OIg=s1600"
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
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81q_syDlX7vlQXv4jm3VHGAN6Hy3CHEgpZo-QHVDsvPcDZask_oDbJgOak3PlPgeWiR3XmlUgIQgrs1gY_Yc4BTw5l-y=s1600"
              alt=""
            />
          </Box>
        </PostParagraph>

        <Box>
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81o-lpPoahmaVvUWkJ1CFZ84hA9yo5QLQRksihmsjGA1h1PAVEVYbo6KxxJdpD_k3m80K09K5hrDCsmLbL_sg_Ysfz3xsw=s1600"
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
            src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81p2lgxJ977V5YzIDD6yPB72acumYerdmm3hhCjU9sPBM9oTrDJd-woOis_tPxKFdz45U5HkS5v5jXDPx_GQF96LLMKFig=s1600"
            alt=""
          />
        </Box>

        <PostParagraph
          title="User personas"
          description="I conducted 114 interviews and surveys with Vietnamese farmers in the central region of Vietnam to gather insights on their crop monitoring challenges, preferences, and requirements. Farmers were categorized based on age, technological literacy, farm size, and specific needs, resulting in the development of primary and secondary user personas."
        >
          <UserPersonas />
        </PostParagraph>
        <PostParagraph
          header="SOLUTION"
          title="Comprehensive farm insights at a glance"
          description="Provide users with a comprehensive view of their farm, offering real-time updates on pest alerts, weather conditions, wind forecast, and nutrient alerts."
        />
        <PostParagraph
          description="Provide interactive elements for users to access detailed information or take immediate actions based on the alerts received."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qt88PKSgXoW2CUmb72j1j7k_9ql5nP74akkFoZPHlpvteaM298rTKa0_gUmbosj4_N-LqzQQFI2rBkPEbEzlc5OAqyXQ=s1600"
          maxW="100%"
        />
        <PostParagraph
          description="Enable users to make immediate decisions based on accurate and up-to-date information, ensuring effective crop monitoring and management."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pI4KKbEsxvdXJlA8iqrQryNoItBLpU_o2UMOvfTR4adEvguMrQwSIoiza237_c1WjYyQwRJLREEzBlPhg3tUVCBc31Iw=s1600"
          maxW="100%"
        />
        <PostParagraph
          title="Crop performance insights: enhancing field productivity"
          description="Offer users a comprehensive analysis of crop performance, highlighting potential issues causing lower crop levels in the current season compared to previous seasons."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qzIblrP8uvbP854VtetcCHCmetRjxnkl4H2qu7zn70sR2OJCRF_2LckyJ3aKoo5Et4UvYvSXf9ZuUSw7EObCWk_J4JJQ=s1600"
          maxW="100%"
        />
        <PostParagraph
          title="Field recommendations for maximum crop performance"
          description="Simplify the field creation process with a step-by-step wizard, supplemented by an accessible help center for any assistance while adding new fields."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81olSYt2LLRaeE-JK6H9Kbp55EebHoO9EPqQ1FLoYt0u_p_aLlOj-qx-SOc0fZy9h2rhlS9E7kA4e5hESSFN_KLKMH3A=s1600"
          maxW="100%"
        />
        <PostParagraph
          description="Provide clear explanations for the recommendations, detailing the rationale behind each suggestion."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pplMSOfp5WkHcrvflNITX41gC_qrdVByTQKn7rZuZoh_k8Lqr2R-2A2jqPiEAa5FK9cs_x7JMIXE1lQY8qbhSrqPfuFw=s1600"
          maxW="100%"
        />
        <PostParagraph
          title="Continuous guidance and support: accessing expert advice anytime"
          description="Enable in-app chat for seamless communication between users and support team members, as well as the ability to talk to experts for professional advice on topics such as pest management and fertilizer effectiveness."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81q4CwaqBzch6YNq-oLa3bcnINCfOJbXGO0Zg-T3fVSzJWGbjbC2w-Q_uO0EBm4rc59--yznWUoeIOf6jpx7j70bogprVA=s1600"
          maxW="100%"
        />
        <PostParagraph
          maxW="100%"
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oACYbioqiUS0iStxsL5Df1R6dTgYAcvd6Y3-j4CN0z9D17YPULBOD9Zc052vdmd8lQvUs5nGHXNNsRYZX8ujfJsT-wgA=s1600"
          description="Enable users to add events for irrigation and fertilizer while having video chats with experts helps them maintain a comprehensive record of their farming activities."
        />
        <PostNavigator current={0} />
      </Flex>
    </Box>
  );
};

export default Synapse;
