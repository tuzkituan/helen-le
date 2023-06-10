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
            src={
              isSmallerThanSm
                ? "https://lh3.googleusercontent.com/drive-viewer/AFGJ81r9Fq0gQgO0Mhq60sWJrn_XlutHPzrmsGhYuvhOJjeicNHNwYfJ4z36ovXfkbax9-bJXLr813zrh5yqFYyInGEZRKzfFw=s1600"
                : "https://lh3.googleusercontent.com/drive-viewer/AFGJ81o-lpPoahmaVvUWkJ1CFZ84hA9yo5QLQRksihmsjGA1h1PAVEVYbo6KxxJdpD_k3m80K09K5hrDCsmLbL_sg_Ysfz3xsw=s1600"
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
        >
          <Box position="relative">
            <img
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81p-dUKzmqwI42GNWjaX5KsVcW7kdy2xb2cXMA5kEbk_lr1V_M5_jGksCxRuah1tzq0T3wGahOgIjpiXIWo_oLflamPTNw=s1600"
              alt=""
              style={{
                height: "auto",
                width: "100%",
              }}
            />
            <img
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oX_ZLPRhZy48XQV9-Tlk1bo1jXw_tKPnkLMw0We0zuuC1EWdUVgGj2yxlrG68HBs9vED47JyAg2sq83dCe677KI2BLvw=s1600"
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
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81p-dUKzmqwI42GNWjaX5KsVcW7kdy2xb2cXMA5kEbk_lr1V_M5_jGksCxRuah1tzq0T3wGahOgIjpiXIWo_oLflamPTNw=s1600"
          maxW="100%"
        />
        <PostParagraph
          description="Enable users to make immediate decisions based on accurate and up-to-date information, ensuring effective crop monitoring and management."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qfcs6feFVG2Id9xDRgLLuJdWC7B0TO60iPNtMynhLS9Lh8ObG5VVogR-qr7RPKKJwwEYZJgUTwt41ntgF2YaCtzyGX8w=s1600"
          maxW="100%"
        />
        <PostParagraph
          title="Crop performance insights: enhancing field productivity"
          description="Offer users a comprehensive analysis of crop performance, highlighting potential issues causing lower crop levels in the current season compared to previous seasons."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qFZKpfwU560ertjpeElC7J5MIv7zoSv335RSwhaZcFulgplXyTy2d0ZerFP-4xNksBKOgFcnOI9k2qbUPVgcvNFw_nxQ=s1600"
          maxW="100%"
        />
        <PostParagraph
          title="Field recommendations for maximum crop performance"
          description="Simplify the field creation process with a step-by-step wizard, supplemented by an accessible help center for any assistance while adding new fields."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oWti81ll2-jIWwp_nhxYPojaimkZACBb-BXRYvlmLxJOYCggq59jvzMXpr2Xqvb8cmaaqTCz1OQDGqQ43AjazktktG=s1600"
          maxW="100%"
        />
        <PostParagraph
          description="Provide clear explanations for the recommendations, detailing the rationale behind each suggestion."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81o_szyCu6xCbsZt6cPDVZyV6pYfJH--5KnqyjJGlAubGg6wBNKswMpFJr5eao9H_k1_wcMzjRz_Z1kLhATGMEI9gf7hsQ=s1600"
          maxW="100%"
        />
        <PostParagraph
          title="Continuous guidance and support: accessing expert advice anytime"
          description="Enable in-app chat for seamless communication between users and support team members, as well as the ability to talk to experts for professional advice on topics such as pest management and fertilizer effectiveness."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pvE9YaseXVllfhU7XzduqGPnH64IxEgab96DcgcdkQt9K4aP91PYGQHtKn6PtD5wDzARAhMn91OCPctzeE0rMijd-dfg=s1600"
          maxW="100%"
        />
        <PostParagraph
          maxW="100%"
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81plMRrn28gfD4NtT8YnRGdT0plfhHk3mvWU5qqaQLnfF3udYenWUfwXjUeMlvHrzSemIxPG4kZZhnGogQo7kfIGr94vcQ=s1600"
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
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81o5_BJKtPtDcSfwcilSWjf5hbv8WDwrrBWT0XaOhsBVqNKOAcj7Y_Du2v8GeJkD-TWVHj-qoA2fMpao2lzX22_pMphRwg=s1600"
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
