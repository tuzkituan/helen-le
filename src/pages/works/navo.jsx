import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import PostBannerImage from "../../components/post_banner_image";
import PostHeader from "../../components/post_header";
import PostNavigator from "../../components/post_navigator";
import PostParagraph from "../../components/post_paragraph";
import data from "../../projects.json";
import UserResearch from "../../components/user_research";
import { CONTENT_MAX_W, MAIN_MAX_W } from "../../appConstants";

const Navo = () => {
  const navo = data[1];
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
            <BreadcrumbLink href="/navo">Navo</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Spacer height={4} />
      <Flex
        gap={{
          base: 10,
          lg: "80px",
        }}
        flexDirection="column"
      >
        <PostHeader
          title="Improve the parking experience"
          description="A concept for a parking experience aims to help users save time when find parking near office, hospitals, events, and more."
        />
        <PostBannerImage color={navo.color} images={navo.images} />
        <PostParagraph
          title="Challenges"
          description="Users often have trouble finding available parking spaces near their location and remembering where they parked their vehicle."
        />
        <PostParagraph
          title="User research"
          description="I conducted user interviews with target user is urban commuters aged 20-40 who frequently drive to work and other destinations."
        >
          <UserResearch
            data={[
              {
                name: "Lewis Nguyen",
                position: "Developer | Photographer",
                content:
                  "I often struggle to find parking in unfamiliar areas due to circling around blocks.",
                image:
                  "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qVgJwe_gmaSx_T0o_DhbdFLRA7cpRtLBax_gGHxAG3kYi9tIOWokRfq1UjzfeRysxfxbztj67YE9oTVfhJ3FPnq5y5=s1600",
              },
              {
                name: "Minh Ha",
                position: "Social Media Executive",
                content:
                  "I frequently forget where I parked my motorbike, so time-consuming searches on foot.",
                image:
                  "https://lh3.googleusercontent.com/drive-viewer/AFGJ81o7r5F90iooFUw_Z6qzuK3KTrTagI0LK24Km4dXZTUWsJswmxNtyUIKBcuIvVOuuK0St2h6cr66KpL53ky0Du3seQp0Gw=s1600",
              },
              {
                name: "Lucy Nguyen",
                position: "Event Planner",
                content:
                  "I get frustrated when parking signs are not visible, even though they are available.",
                image:
                  "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pTjP5Sxfi5eLPpMQzMXtCEbADuoIJxM9W3lOsZfnucdf9tytB02pvCxrfdkmqk_E3Ew4yN1Zq4xsiGOJU4m2kfnJPJJQ=s1600",
              },
            ]}
          />
        </PostParagraph>

        <PostParagraph
          title="Design"
          description="The design prioritizes simplicity and user-friendliness to help user find available parking spots quickly and easily, regardless of the type of vehicle they are using. Whether you are driving a car, riding a motorcycle, or cycling. The color scheme, based on calming blue tones, is chosen to convey a sense of safety."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qVQE73O4RCDnqMob-RvfFU70f930cfVGU6893umOQpXFIM5--fGSPsCRwO4YLyqkYM7IYYCwJyaH71keoxQtnkcOH85g=s1600"
          maxW="100%"
        />
        <PostParagraph
          title="Typography & Color"
          description="The typography for this app need to be clear and legible, especially in potentially distracting or confusing environments such as busy streets or crowded parking lots. Work Sans' large x-height and generous spacing make it easy to read even at small sizes, which can be crucial in such situations. Additionally, I aim for harmony with the common color palette found in parking places."
          image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81osyFaV2hPg5tzbz3sXmYMTt8M-7L5cKqe6lVY5-3U3RrZaMCdpGDCuSnkkGiTAjx21ww6l84_EHTBFgVUYLeAgl1ivRA=s1600"
          maxW="100%"
        />
        <PostParagraph
          header="navo app walkthrough"
          title="Find parking nearby"
          description={`Providing a question “What location do you want to park?” and displaying the search query to confirm that their voice input was operated and recognized correctly in case they are on-the-go or in situations where they cannot easily use their hands to type.`}
          video="12U6L4aT9NxjUdULhKz1j74PBoEiniuh-"
        />
        <PostParagraph
          title="Park with ease"
          description={`Show real-time availability information to help users make informed decisions. Including photos and reviews of each parking option can help users get a better sense of what to expect, and can make the decision-making process easier and more reliable.`}
          video="10YpA0Y1_VwEcTupFf37iitxXB-qbjNyR"
        />
        <PostParagraph
          title="Let Navo find your vehicle"
          description={`Follow the directions on the user's smartphone camera view to guide user directly to their parked vehicle.`}
          video="1eRUJ7pqOXKBZ9bilXAPhJ5KgGVoyz6s8"
        />
        <PostParagraph
          title="Exiting the parking and making payment"
          description={`Ensure that users can easily view the parking fee before making a payment by displaying it upfront. Additionally, on the scan screen, provide clear and helpful parking details such as the parking place name, duration of parking, and total fee, so that users can review the information and verify it before making the payment.`}
          video="1HKbD-9C0xQUvMUDGuYBu3cJVS-5WbCok"
        />
        <PostParagraph
          title="Rating"
          description={`To maintain high-quality standards for parking places, users can rate their parking experience after their session is over. In addition, first-time users of the Navo app can receive discounts on future parking sessions as an incentive to use the app.`}
          video="17mdivtodOj-e-wJl06rYKpMGTJ7pdnpE"
        />
        <PostNavigator current={navo.id} />
      </Flex>
    </Box>
  );
};

export default Navo;
