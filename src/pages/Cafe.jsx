import React from "react";
import { useLayoutEffect } from "react";
import HomeImg from "../assets/Home.png";
import MatchImg from "../assets/Match.png";
import FoundMatch from "../assets/FoundMatch.png";
import MatchExample from "../assets/MatchExample.png";
import Connect from "../assets/Connect.png";
import Populate from "../assets/Populate.png";
import MatchProfile from "../assets/MatchProfile.png";
import Meeting from "../assets/Meeting.png";
import Ideas1 from "../assets/Ideas1.png";
import Ideas2 from "../assets/Ideas2.png";
import Ideas3 from "../assets/Ideas3.png";
import Ideas4 from "../assets/Ideas4.png";
import CafeSketch1 from "../assets/CafeSketch1.png";
import CafeSketch2 from "../assets/CafeSketch2.png";
import CafeSketch3 from "../assets/CafeSketch3.png";
import PodcastChat from "../assets/PodcastChat.png";
import ScreenDescription from "../components/ScreenDescription";
import AutoplayCarousel from "../components/AutoplayCarousel";
import { autoCardDetails } from "../components/carousel-config.jsx";
import ClickableCarousel from "../components/ClickableCarousel";
import Section from "../components/Section";
import HeroSectionWrapper from "../components/HeroSectionWrapper";
import ConnectionVideo from "../assets/ConnectionVideo.mp4";
import VideoCard from "../components/VideoCard.jsx";
import {
  cardArray,
  mockupArray,
  personaArray,
} from "../components/carousel-config.jsx";

const Cafe = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="relative -z-10 font-garamond max-w-full">
      <HeroSectionWrapper>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] md:gap-[65px] max-w-full">
          <div className="flex justify-center  max-w-full md:mb-0 mb-[30px]">
            <img
              className="min-w-[120px] max-w-[220px] h-auto "
              src={HomeImg}
              alt="Cafe Home"
            />
            <img
              className="min-w-[120px] max-w-[220px] h-auto"
              src={MatchImg}
              alt="Cafe Menu"
            />
          </div>
          <div className="text-center md:text-left flex items-center md:items-start flex-col">
            <h6 className="uppercase text-center md:text-left font-thin font-helvetica text-[16px] md:text-lg">
              ACADEMIC PROJECT
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] lg:text-4xl font-bold">
              Connection Café
            </h3>
            <p className="text-center md:text-left text-[16px] md:text-lg font-thin">
              Encouraging in-person and digital interactions through a love for
              podcasts.
            </p>
            <ul className="hidden md:grid grid-cols-2 gap-y-[30px] mt-[50px] max-w-screen-lg">
              <li>
                <h6 className="font-helvetica font-normal text-lg md:text-xl">
                  Role
                </h6>
                <p className="text-[16px] md:text-lg font-garamond font-thin">
                  UX Researcher
                </p>
                <p className="text-[16px] md:text-lg font-garamond font-thin">
                  UX Designer
                </p>
              </li>
              <li className="text-right md:text-left  md:max-w-[250px] flex flex-col items-end md:block">
                <h6 className="font-helvetica font-normal text-lg md:text-xl place-self-end">
                  Team
                </h6>
                <p className="text-[16px] md:text-lg font-garamond font-thin max-w-[250px]">
                  Aleynna Quiñones, Alexa Sciacca, Elizabeth Leifheit, Amine
                  Mena
                </p>
              </li>
              <li>
                <h6 className="font-helvetica font-normal text-lg md:text-xl">
                  Timeline
                </h6>
                <p className="text-[16px] md:text-lg font-garamond font-thin">
                  8 Weeks
                </p>
              </li>
              <li className="text-right md:text-left">
                <h6 className="font-helvetica font-normal text-lg md:text-xl">
                  Tools
                </h6>
                <p className="text-[16px] md:text-lg font-garamond font-thin">
                  Figma
                </p>
                <p className="text-[16px] md:text-lg font-garamond font-thin">
                  GetFloorPlan
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="md:hidden grid grid-cols-2 gap-y-[40px] mt-[30px] text-center">
            <li>
              <h6 className="font-helvetica font-normal text-xl md:text-2xl">
                Role
              </h6>
              <p className="text-[16px] md:text-lg font-garamond font-thin">
                UX Researcher
              </p>
              <p className="text-[16px] md:text-lg font-garamond font-thin">
                UX Designer
              </p>
            </li>
            <li className=" md:max-w-[250px] md:min-w-[150px] flex flex-col">
              <h6 className="font-helvetica font-normal text-xl md:text-2xl">
                Team
              </h6>
              <p className="text-[16px] md:text-lg font-garamond font-thin max-w-[180px]">
                Aleynna Quiñones, Alexa Sciacca, Elizabeth Leifheit, Amine Mena
              </p>
            </li>
            <li>
              <h6 className="font-helvetica font-normal text-xl md:text-2xl">
                Timeline
              </h6>
              <p className="text-[16px] md:text-lg font-garamond font-thin">
                8 Weeks
              </p>
            </li>
            <li>
              <h6 className="font-helvetica font-normal text-xl md:text-2xl">
                Tools
              </h6>
              <p className="text-[16px] md:text-lg font-garamond font-thin">
                Figma
              </p>
              <p className="text-[16px] md:text-lg font-garamond font-thin">
                GetFloorPlan
              </p>
            </li>
          </ul>
        </div>
      </HeroSectionWrapper>

      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h6 className="md:justify-self-end uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:w-max mb-[10px] md:mb-0">
            The Context
          </h6>
          <div className="col-span-2 mb-[50px]">
            <h4 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
              The Spoken Word On-Demand Audio Space
            </h4>
            <p className="text-[16px] font-thin md:text-lg">
              This project aims to{" "}
              <span className="font-semibold">
                find and address a problem in the Spoken Word On-Demand Audio
                space
              </span>
              , with a specific focus on improving the overall experience for
              adult podcast listeners.
            </p>
          </div>
          <h6 className="md:justify-self-end uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:w-max mb-[10px] md:mb-0">
            The Problem
          </h6>
          <div className="col-span-2 mb-[50px]">
            <h4 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
              Increase human connection between adult podcast listeners
            </h4>
            <p className="text-[16px] font-thin md:text-lg">
              We discovered that adult podcast listeners seek human connection
              and fresh perspectives.{" "}
              <span className="font-semibold">
                They desire a way to share their favorite podcasts and newfound
                knowledge beyond their phones
              </span>
              , and connect with like-minded individuals who share similar
              interests.
            </p>
          </div>
          <h6 className="md:justify-self-end uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:w-max mb-[10px] md:mb-0">
            The Solution
          </h6>
          <div className="col-span-2">
            <h4 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
              The Connection Café
            </h4>
            <p className="text-[16px] font-thin md:text-lg">
              <span className="font-semibold">
                The proposed solution, the Connection Café, provides a seamless
                integration of the physical and digital world
              </span>
              . Its goal is to improve community mental health by facilitating
              in-person interactions through encouraging users to meet
              face-to-face in the café, hosting live podcast events, and
              providing equipment to record their own podcasts.
            </p>
            <button className="text-[16px] hover:bg-black hover:text-offwhite transition-colors duration-200  font-helvetica font-normal px-6 py-3 mt-[30px] mb-[30px] rounded-full border-2 border-solid border-black">
              <a href="#ourSolutionCafe">Jump to solution</a>
            </button>
          </div>
        </div>
        <AutoplayCarousel slides={autoCardDetails} />
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="justify-self-center uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:w-max mb-[10px] md:mb-0">
            Our starting point
          </h4>
          <div className="flex flex-col gap-[30px] col-span-2">
            <div>
              <h6 className="md:text-2xl text-xl font-medium max-w-[85%] mb-[10px] font-helvetica">
                What do we want to target in the podcast space?
              </h6>
              <p className="text-[16px] font-thin md:text-lg">
                As a team, we decided to hone in on a specific area of the
                podcast space:{" "}
                <span className="font-semibold">
                  adult podcast listeners and their listening experience.
                </span>
              </p>
            </div>
            <div>
              <h6 className="md:text-2xl text-xl font-medium max-w-[85%] mb-[10px] font-helvetica">
                What do we want to learn?
              </h6>
              <p className="text-16px font-thin md:text-lg">
                How their listening experience{" "}
                <span className="font-semibold">
                  affects their overall mental health.
                </span>
              </p>
            </div>
            <div>
              <h6 className="md:text-2xl text-xl font-medium max-w-[85%] mb-[10px] font-helvetica">
                Plan of attack
              </h6>
              <p className="text-16px font-thin md:text-lg">
                Conduct{" "}
                <span className="font-semibold">
                  secondary research and 1-on-1 interviews
                </span>{" "}
                to gather insights, challenges, and pain-points for our
                potential users.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:col-span-1">
            The emerging problem
          </h4>
          <div className="mb-[50px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              Adult podcast enthusiasts have few opportunities to engage in
              in-person interactions with fellow listeners who have common
              interests.
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                After a taxing day at work,{" "}
                <span className="font-semibold">
                  adult podcast listeners are seeking a hassle-free and relaxed
                  way to engage with fellow listeners
                </span>{" "}
                beyond their phone screens, in hopes of diverting their minds
                from work stress.
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px]">
            But why?
          </h4>
          <div className="mb-[50px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              Research findings and pain points
            </h6>
            <ul className="list-disc list-inside pl-3">
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Podcast listeners{" "}
                <span className="font-semibold">
                  search for a way to connect
                </span>{" "}
                with others through podcasts.
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Podcast listening is a{" "}
                <span className="font-semibold">chance to build community</span>
                .
                <ul className="list-inside list-[circle] pl-[30px]">
                  <li className="text-[16px] md:text-lg font-thin leading-7">
                    “...podcasts are a social experience... most listeners say
                    they recommend podcasts to someone else, [and]{" "}
                    <span className="font-semibold">
                      discuss the content they hear with others
                    </span>
                    ...” Pew Research
                  </li>
                </ul>
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Adults need a way to{" "}
                <span className="font-semibold">disconnect from real life</span>{" "}
                that continues to stimulate them.
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Adults{" "}
                <span className="font-semibold">
                  need an engaging way to discuss
                </span>{" "}
                podcast content with friends.
                <ul className="list-inside list-[circle] pl-[30px]">
                  <li>
                    “I like to discuss with people but{" "}
                    <span className="font-semibold">
                      sometimes people don’t care.
                    </span>
                    ” Pam, 53 yr old
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:col-span-1">
            User Personas
          </h4>
          <div className="col-span-2 mb-[30px]">
            <h6 className="md:text-2xl text-xl w-max font-medium font-helvetica mb-[10px] justify-self-start md:col-span-2">
              Meet Matt and Kat
            </h6>
            <p className="text-16px font-thin md:text-lg">
              We created user personas, Matt and Kat, to help us better
              understand and empathize with our audience.
            </p>
          </div>
        </div>
        <div className="mb-[60px]">
          <ClickableCarousel slides={personaArray} desiredWidth="1000px" />
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:col-span-1">
            Synthesis
          </h4>
          <div className="md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              Now, with an understanding of the challenges adult podcast
              listeners face, we asked...
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                How can we provide adult podcast listeners with a means to
                unwind after a busy day while maintaining a sense of connection
                with others?
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[30px] md:col-span-1">
            Ideation
          </h4>
          <div className="md:mb-[10px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              Brainstorming and visualizing our solutions
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                We brainstormed over 100 solutions using{" "}
                <span className="font-semibold">
                  brainwriting and mashup techniques
                </span>
                . After honing in on two that we thought best addressed our
                user's needs, we created{" "}
                <span className="font-semibold">gallery sketches</span> to
                provide a visual representation of what our solutions might
                entail and to facilitate the collection of user feedback.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-[10px] rounded-3xl mt-[30px]">
          <div>
            <img className="max-w-[200px] w-full" src={Ideas1} alt="Ideation" />
          </div>
          <div>
            <img className="max-w-[200px] w-full" src={Ideas2} alt="Ideation" />
          </div>
          <div>
            <img className="max-w-[200px] w-full" src={Ideas3} alt="Ideation" />
          </div>
          <div>
            <img className="max-w-[200px] w-full" src={Ideas4} alt="Ideation" />
          </div>
        </div>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <div className="md:col-span-3  p-9 rounded-3xl flex flex-col md:flex-row md:justify-center md:justify-self-center gap-5 md:gap-[90px] items-center mb-[50px] max-w-[1000px]">
            <div>
              <p className="uppercase text-center font-helvetica font-thin text-[16px]">
                Podcast Chat
              </p>
              <img
                className="max-w-[250px]"
                src={PodcastChat}
                alt="Podcast Chat Sketches"
              />
            </div>
            <div>
              <p className="uppercase text-center font-helvetica font-thin text-[16px]">
                Connection Café
              </p>
              <div className="flex gap-1 justify-center max-w-full">
                <div className="max-w-[100px] md:max-w-[150px] h-auto">
                  <img src={CafeSketch1} alt="Cafe Sketch 1" />
                </div>
                <div className="max-w-[100px] md:max-w-[150px] h-auto">
                  <img src={CafeSketch2} alt="Cafe Sketch 2" />
                </div>
                <div className="max-w-[100px] md:max-w-[150px] h-auto">
                  <img src={CafeSketch3} alt="Cafe Sketch 3" />
                </div>
              </div>
            </div>
          </div>
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:col-span-1">
            Say What?
          </h4>
          <div className="md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              What our users have to say
            </h6>
            <ul className="flex flex-col gap-[15px] md:gap-10">
              <li className=" md:text-lg font-thin leading-7">
                “I really liked the Connection Café and I feel like{" "}
                <span className="font-semibold">
                  it’s the idea that would be most useful to me
                </span>
                . I could definitely see myself visiting one” Logan, 26 yrs old
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                “I think the combination of a having a place that serves food
                but also hosts social activities is the{" "}
                <span className="font-semibold">
                  perfect combination of the things I loves the most
                </span>
                .” Emily, 26 yrs old
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                “I think the Connection Café is a good idea... to have even{" "}
                <span className="font-semibold">
                  a tertiary encounter where two people exchange an inside-joke
                  or catchphrase
                </span>{" "}
                with one another would be really fun.” Gareth, 39 yrs old
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div
          id="ourSolutionCafe"
          className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]"
        >
          <h6 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px]">
            Our Solution
          </h6>
          <div className="mb-[30px] col-span-2">
            <h4 className="mb-[10px] text-xl md:text-2xl font-medium font-helvetica">
              The Connection Café
            </h4>
            <p className="font-thin text-[16px] md:text-lg">
              Connection Café is a{" "}
              <span className="font-semibold">
                community initiative designed to connect people who share an
                interest in podcasts
              </span>
              . Its goal is to{" "}
              <span className="font-semibold">
                improve community mental health by facilitating in-person
                interactions
              </span>{" "}
              in today’s technology-focused world.
            </p>
          </div>
          <div className="col-span-3 flex flex-col md:flex-row md:justify-evenly items-center gap-[10px] mb-[60px] max-w-full">
            <div className="flex justify-center">
              <VideoCard videoSrc={ConnectionVideo} />
            </div>
            <ClickableCarousel desiredWidth="250px" slides={cardArray} />
          </div>
          <div></div>
          <div className="mb-[30px] col-span-2">
            <h4 className="mb-[10px] text-xl md:text-2xl font-medium font-helvetica">
              With the Connection Café, users can...
            </h4>

            <ul className="list-none list-inside text-[16px] md:text-lg">
              <li className="">
                <span className="font-medium font-helvetica">Build:</span>{" "}
                <span>
                  They can{" "}
                  <span className="font-semibold">
                    cultivate and build meaningful friendships
                  </span>{" "}
                  with people in their community through messaging on the app
                  and meeting in person
                </span>
              </li>
              <li className="">
                <span className="font-medium font-helvetica">Trust:</span>{" "}
                <span>
                  They can feel{" "}
                  <span className="font-semibold">
                    confident that they'll be able to have engaging discussions
                    surrounding podcasts
                  </span>{" "}
                  with people they know will be interested in the same topics
                </span>
              </li>
              <li className="">
                <span className="font-medium font-helvetica">Disconnect:</span>{" "}
                <span>
                  They'll have a place to{" "}
                  <span className="font-semibold">
                    unwind after work while remaining stimulated and entertained
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div></div>
          <div className="mb-[30px] col-span-2">
            <h4 className="mb-[10px] text-xl md:text-2xl font-medium font-helvetica">
              The physical space and the mobile app
            </h4>

            <p className="font-thin text-[16px] md:text-lg">
              A versatile space where{" "}
              <span className="font-semibold">
                digital interaction meets in-person interaction.
              </span>
            </p>
          </div>
          <div className="md:col-span-3 md:flex-row md:justify-center flex flex-col gap-[10px] mb-[60px] md:max-w-[1000px] w-full justify-self-center">
            <ClickableCarousel slides={mockupArray} desiredWidth="325px" />
          </div>
          <div></div>
          <div className="mb-[50px] col-span-2">
            <h4 className="text-[16px] md:text-lg font-helvetica">
              Visitors can...
            </h4>
            <ul className="list-disc list-inside pl-3 text-[16px] md:text-lg">
              <li className="leading-7">
                <span className="font-semibold">
                  Check in to the café using the QR code
                </span>{" "}
                on the wall where they can get in contact with other visitors at
                the café (more on this below)
              </li>
              <li className="leading-7">
                Grab <span className="font-semibold">food and drink</span> at
                the counter
              </li>
              <li className="leading-7">
                Check out the{" "}
                <span className="font-semibold">daily top 5 podcasts</span>{" "}
                posted next to the menu
              </li>
              <li className="leading-7">
                <span className="font-semibold">Record their own podcasts</span>{" "}
                in soundproof booths with rented equipment
              </li>
              <li className="leading-7">
                Watch <span className="font-semibold">live podcast shows</span>{" "}
                on weekend evenings
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <ScreenDescription
            imageSrc1={Connect}
            imageSrc2={Populate}
            cap1="Connect to listening platforms"
            cap2="Unique population of podcasts"
            p1="Users can select their top 5 podcasts to appear on their profile for other users to view."
            p2=""
            heading="Link their profile to their favorite listening platforms"
          />
          <ScreenDescription
            imageSrc1={FoundMatch}
            imageSrc2={MatchExample}
            cap1="Your match confirmation"
            cap2="Your match"
            p1="After choosing their top 5 podcasts, the app uses the list to match the user with others in the café that share similar interests."
            p2=""
            reverse={true}
            heading="Match with other current visitors at the café"
          />
          <ScreenDescription
            imageSrc1={MatchProfile}
            imageSrc2={Meeting}
            cap1="Your match profile"
            cap2="Meeting confirmation"
            p1="Upon selecting to learn more, users access their match's profile featuring a brief bio, favorite podcast genres, and their top 5 podcasts. Users can then decide if they want to meet their match at a table at the café or if they'd prefer to message them first."
            p2=""
            reverse={false}
            heading="View their match's profile"
          />
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px]">
            Wishes
          </h4>
          <div className=" md:col-span-2 mb-[50px]">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              Test with more users
            </h6>
            <ul className="flex flex-col gap-[15px] mb-[30px]">
              <li className="text-[16px] md:text-lg font-thin">
                Due to the timeline of this project, we were unable to conduct
                more user testing after our final mockup.{" "}
                <span className="font-semibold">
                  It would have been helpful to know what could be improved upon
                  not only in the app, but with the overall business model as
                  well.
                </span>
              </li>
            </ul>
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              More time for low and mid-fidelity mockups
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                If we had been given more time with this project,{" "}
                <span className="font-semibold">
                  creating low and even mid-fidelity mockups prior to the final
                  high-fidelity mockup would have been helpful in refining our
                  final design
                </span>
                . I believe this was also a crucial step that we missed out on
                in the design process.
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px]">
            Learnings
          </h4>
          <div className="md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[20px]">
              UX Research is cool and people yearn for in-person interaction
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                Although we live in a social media driven world, people don’t
                necessarily feel the desire to foster more digital interactions
                and relationships.{" "}
                <span className="font-semibold">
                  People appreciate and yearn for in-person interaction
                </span>
                .{" "}
                <span className="font-semibold">
                  I believe utilizing that fact, along with the technology we
                  are so lucky to have access to, can help to provide many more
                  solutions for people outside of the podcast space.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Cafe;
