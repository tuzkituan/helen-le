import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import PostHeader from "../../components/post_header";
import PostBannerImage from "../../components/post_banner_image";
import PostParagraph from "../../components/post_paragraph";

import data from "../../projects.json";

const Nurix = () => {
  const nurix = data[0];
  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Work</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="/nurix">Nurix</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Spacer height={4} />
      <Flex gap={16} flexDirection="column">
        <PostHeader
          title="Healthy recipe planner & delivery app"
          description="Provide personalized meal planning, and ingredient delivery for users looking to improve their health and wellness."
        />
        <Spacer height="112px" />
        <PostBannerImage color={nurix.color} images={nurix.images} />
        <PostParagraph
          title="Challenges"
          description="Busy health-conscious individuals often struggle to maintain a healthy diet due to time constraints, leading to unhealthy food choices or skipped meals. This can impact their health goals, causing issues such as weight gain and low energy levels."
        />
        <PostParagraph
          title="User research"
          description="To better understand our target audience, I conducted interviews with a diverse group of individuals aged 18-32. This group included health-conscious individuals, busy professionals, home cooks, fitness enthusiasts, and parents. During the interviews, I gathered insights on their daily routines, dietary habits, and experiences with meal planning and delivery services."
        />
      </Flex>
    </Box>
  );
};

export default Nurix;
