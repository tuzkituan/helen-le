import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import PostHeader from "../../components/post_header";
import PostBannerImage from "../../components/post_banner_image";
import PostParagraph from "../../components/post_paragraph";
import data from "../../projects.json";
import UserPersonas from "../../components/user_personas";
import PainPoints from "../../components/pain_points";
import PostFontPreview from "../../components/post_font_preview";
import PostColorPreview from "../../components/post_color_preview";
import IphoneMockup from "../../components/iphone_mockup";

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
      <Flex gap="112px" flexDirection="column">
        <PostHeader
          title="Healthy recipe planner & delivery app"
          description="Provide personalized meal planning, and ingredient delivery for users looking to improve their health and wellness."
        />
        <PostBannerImage color={nurix.color} images={nurix.images} />
        <PostParagraph
          title="Challenges"
          description="Busy health-conscious individuals often struggle to maintain a healthy diet due to time constraints, leading to unhealthy food choices or skipped meals. This can impact their health goals, causing issues such as weight gain and low energy levels."
        />
        <PostParagraph
          title="User research"
          description="To better understand our target audience, I conducted interviews with a diverse group of individuals aged 18-32. This group included health-conscious individuals, busy professionals, home cooks, fitness enthusiasts, and parents. During the interviews, I gathered insights on their daily routines, dietary habits, and experiences with meal planning and delivery services."
        />
        <UserPersonas
          info={{
            name: "Sarah Tran",
            age: 26,
            position: "Marketing Manager",
            avatar: "images/nurix_image_4.png",
          }}
          data={[
            {
              title: "🎯 Goals",
              items: [
                "Sarah wants to improve her diet to feel better and have more energy.",
                "But needs a solution that fits into her busy lifestyle.",
              ],
            },
            {
              title: "😡 Frustrations",
              items: [
                "Limited time to plan and prepare meals.",
                "Lack of knowledge about nutrition..",
                "Difficulty finding healthy options when eating out.",
              ],
            },
          ]}
        />
        <PainPoints
          data={[
            {
              image: "images/nurix_image_2.png",
              title: "Difficulty in manually planning recipes",
            },
            {
              image: "images/nurix_image_3.png",
              title: "Lack of knowledge about nutritional needs",
            },
            {
              image: "images/nurix_image_1.png",
              title: "Time and energy constraints in meal preparation",
            },
          ]}
        />
        <PostParagraph
          title="Design"
          description="The design should be clean, modern, and easy to navigate. The design should be focused on showcasing the healthy recipes and ingredients, making it easy for users to find and choose the recipes that meet their dietary preferences."
          image="images/nurix_image_5.png"
        />
        <PostParagraph
          title="Typography"
          description="I want to make it easy for users to choose from the variety of meal and ingredient options available, especially since meal names and other details can be lengthy. Relying solely on images may not be enough, so I need to ensure that the font used is highly readable and legible, especially on small screens. That's why I chose DM Sans, a modern font that is easy to read and perfect for mobile devices."
        />
        <PostFontPreview
          titleImg="images/nourix_font_1.svg"
          descriptionImg="images/nourix_font_2.svg"
          mockup="images/nurix_image_6.png"
        />
        <PostParagraph
          title="Color"
          description="Color of the app is associated with health, wellness, and vitality. It also highly legible and easy on the eyes, making it easy for users to find and read the recipes and other content in the app."
        />
        <PostColorPreview
          colors={["#A4C639", "#F3E0A9", "#C72686", "#3E659F"]}
        />
        <Text textStyle="t10" textTransform="uppercase">
          Nurix app walkthrough
        </Text>
        <PostParagraph
          title="Improved speed to log in"
          description="Because of user preference quiz. I included one-click login options such as Facebook, Google or Apple to improve speed to log in."
          mockup={<IphoneMockup image="images/nurix_image_7.png" />}
        />
        <PostParagraph
          title="Relieve stress when personalizing"
          description="During the user preference quiz, using a progress bar can provide users with a sense of control and a clear indication of how far they are in the process. It can also help to reduce the perceived time it takes to complete the quiz."
          mockup={<IphoneMockup />}
        />
        <PostParagraph
          title="Providing feedback"
          description="After the quiz, providing feedback to the user to keep them noticed that they completed the process and have chance to double check all their personalized quiz."
          mockup={<IphoneMockup />}
        />
        <PostParagraph
          title="Quickly find recipes"
          description="Easier for users to find what they need and narrow down choices."
          image="images/img_nurix_8.png"
        />
        <PostParagraph
          title="Without manually recipe planner"
          description={`"Add ingredient to cart" button to each recipe can make it easier for users to create a grocery cart without having to manually write down each ingredient.`}
          mockup={<IphoneMockup />}
        />
        <PostParagraph
          title="Real-time order tracking"
          description={`Help users stay up-to-date on the status of their order, including when it is being prepared, when it is out for delivery, and when it has been delivered.`}
          mockup={<IphoneMockup />}
        />
        <PostParagraph
          title="Full app walkthrough"
          description={`Full app walkthrough included Login & User personal preferences, Browse and Add to favorites, Buy ingredients. Checkout and Tracking order.`}
          mockup={<IphoneMockup />}
        />
      </Flex>
    </Box>
  );
};

export default Nurix;
