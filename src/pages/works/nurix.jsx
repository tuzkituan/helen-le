import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import PainPoints from "../../components/pain_points";
import PostBannerImage from "../../components/post_banner_image";
import PostColorPreview from "../../components/post_color_preview";
import PostFontPreview from "../../components/post_font_preview";
import PostHeader from "../../components/post_header";
import PostNavigator from "../../components/post_navigator";
import PostParagraph from "../../components/post_paragraph";
import UserPersonas from "../../components/user_personas";
import data from "../../projects.json";
import { CONTENT_MAX_W, MAIN_MAX_W } from "../../appConstants";

const Nurix = () => {
  const nurix = data[2];

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
            <BreadcrumbLink href="/nurix">Nurix</BreadcrumbLink>
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
            avatar: "../images/nurix_image_4.png",
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
                "Lack of knowledge about nutrition.",
                "Difficulty finding healthy options when eating out.",
              ],
            },
          ]}
        />
        <PainPoints
          data={[
            {
              image: "../images/nurix_image_2.png",
              title: "Difficulty in manually planning recipes",
            },
            {
              image: "../images/nurix_image_3.png",
              title: "Lack of knowledge about nutritional needs",
            },
            {
              image: "../images/nurix_image_1.png",
              title: "Time and energy constraints in meal preparation",
            },
          ]}
        />
        <PostParagraph
          title="Design"
          description="The design should be clean, modern, and easy to navigate. The design should be focused on showcasing the healthy recipes and ingredients, making it easy for users to find and choose the recipes that meet their dietary preferences."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oVoE2CgZE4pj6vq3f5Md5u0FACHkvNzxCAs1oaV5mXYS9H2gvAfTy9TM7KCMJ_jQS_TQKIOCza6dTjH9yHo2X0x2KiaA=s1600"
          maxW={CONTENT_MAX_W}
        />
        <PostParagraph
          title="Typography"
          description="I want to make it easy for users to choose from the variety of meal and ingredient options available, especially since meal names and other details can be lengthy. Relying solely on images may not be enough, so I need to ensure that the font used is highly readable and legible, especially on small screens. That's why I chose DM Sans, a modern font that is easy to read and perfect for mobile devices."
        />
        <PostFontPreview
          titleImg="../images/nourix_font_1.svg"
          descriptionImg="../images/nourix_font_2.svg"
          mockup="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pmeHpgW8ETRQDLs25wXPGYkgstj7cwgDwF4-nnornUNfrhd3qWltTM8lBuJxioxbCL6Bor0bGUmzJlBZEwWuhvvsgndA=s1600"
        />
        <PostParagraph
          title="Color"
          description="Color of the app is associated with health, wellness, and vitality. It also highly legible and easy on the eyes, making it easy for users to find and read the recipes and other content in the app."
        >
          <PostColorPreview
            colors={[
              {
                id: "#A4C639",
                textColor: "#000",
              },
              {
                id: "#F3E0A9",
                textColor: "#000",
              },
              {
                id: "#C72686",
                textColor: "#fff",
              },
              {
                id: "#3E659F",
                textColor: "#fff",
              },
            ]}
          />
        </PostParagraph>

        <PostParagraph
          header="NURIX APP WALKTHROUGH"
          title="Improved speed to log in"
          description="Because of user preference quiz. I included one-click login options such as Facebook, Google or Apple to improve speed to log in."
        >
          <Box
            paddingInline={{
              base: "23%",
            }}
          >
            <Image
              display="block"
              margin="0 auto"
              maxW={{
                base: "340px",
              }}
              w="100%"
              src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pO_WRjgTdsTRAnVmU5eSr9CyinNR_Z7REg_AtTu2JJEFeKFyg-m0b7iTLgafVapUo5_uqLw-XxClcUtv8WrRP3SRLZag=s1600"
            />
          </Box>
        </PostParagraph>
        <PostParagraph
          title="Relieve stress when personalizing"
          description="During the user preference quiz, using a progress bar can provide users with a sense of control and a clear indication of how far they are in the process. It can also help to reduce the perceived time it takes to complete the quiz."
          video="13J-TO-6GxHAvnyw9bLkoKGNUXlhSDm4h"
        />
        <PostParagraph
          title="Providing feedback"
          description="After the quiz, providing feedback to the user to keep them noticed that they completed the process and have chance to double check all their personalized quiz."
          video="1l3F1U9b8545JYsRjx0I2rL0IsUz3pKyM"
        />
        <PostParagraph
          title="Quickly find recipes"
          description="Easier for users to find what they need and narrow down choices."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oDFbNEdshiCSOjItLkVKvogFoKG9pLbEw2wess5fLaZRfz54BRY0ucwHXhx06wh49GGqmOZbB6aa6yUqdb6ZNzcGlk=s1600"
          maxW={MAIN_MAX_W}
        />
        <PostParagraph
          title="Without manually recipe planner"
          description={`"Add ingredient to cart" button to each recipe can make it easier for users to create a grocery cart without having to manually write down each ingredient.`}
          video="1WF8sOMcTZwMbMccA7UYIg0wu0rsoOU-G"
        />
        <PostParagraph
          title="Real-time order tracking"
          description={`Help users stay up-to-date on the status of their order, including when it is being prepared, when it is out for delivery, and when it has been delivered.`}
          video="1IFksTMfRlcFdVi0eCsY0Nd1oxzf5d2N6"
        />
        <PostParagraph
          title="Full app walkthrough"
          description={`Full app walkthrough included Login & User personal preferences, Browse and Add to favorites, Buy ingredients. Checkout and Tracking order.`}
          video="1iCR-bprJfj3XknOBvRil9dx1qKftrCcw"
        />
        <PostNavigator current={nurix.id} />
      </Flex>
    </Box>
  );
};

export default Nurix;
