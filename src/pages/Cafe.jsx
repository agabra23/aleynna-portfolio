import React from "react";
import { useLayoutEffect } from "react";
import HomeImg from "../assets/Home.png";
import MatchImg from "../assets/Match.png";
import FoundMatch from "../assets/FoundMatch.png";
import MatchExample from "../assets/MatchExample.png";
import Mockup1 from "../assets/Mockup1.png";
import Mockup2 from "../assets/Mockup2.png";
import Mockup3 from "../assets/Mockup3.png";
import Connect from "../assets/Connect.png";
import Populate from "../assets/Populate.png";
import MatchProfile from "../assets/MatchProfile.png";
import Meeting from "../assets/Meeting.png";
import MattAvatar from "../assets/MattAvatar.png";
import KatAvatar from "../assets/KatAvatar.png";
import Ideas1 from "../assets/Ideas1.png";
import Ideas2 from "../assets/Ideas2.png";
import Ideas3 from "../assets/Ideas3.png";
import Ideas4 from "../assets/Ideas4.png";
import Sticky1 from "../assets/Sticky1.png";
import Sticky2 from "../assets/Sticky2.png";
import CafeSketch1 from "../assets/CafeSketch1.png";
import CafeSketch2 from "../assets/CafeSketch2.png";
import CafeSketch3 from "../assets/CafeSketch3.png";
import PodcastChat from "../assets/PodcastChat.jpg";
import ScreenDescription from "../components/ScreenDescription";
import UserPersona from "../components/UserPersona";
import AutoplayCarousel from "../components/AutoplayCarousel";
import ClickableCarousel from "../components/ClickableCarousel";
import Section from "../components/Section";

const Cafe = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const mattDescriptionElement = (
    <p className="col-span-2 text-[16px] md:text-lg">
      Matt listens to motivational podcasts during his free time to refocus his
      energy. He engages with podcast communities online, sharing his favorite
      episodes and seeking recommendations from like-minded listeners.
    </p>
  );
  const katDescriptionElement = (
    <p className="col-span-2 text-[16px] md:text-lg">
      A naturally curious individual with a passion for learning. Kat is always
      eager to share any new findings she learns with the people in her life,
      but sometimes they aren’t interested or don't care.
    </p>
  );

  return (
    <div className="relative -z-10 font-garamond max-w-full">
      <Section>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] md:gap-[65px] max-w-full">
          <div className="flex justify-center gap-[15px] lg:max-w-[calc(100%-415px)] max-w-full md:mb-0 mb-[30px]">
            <img
              className="min-w-[120px] max-w-[200px] h-auto scale-110"
              src={HomeImg}
              alt="Cafe Home"
            />
            <img
              className="min-w-[120px] max-w-[200px] h-auto scale-110"
              src={MatchImg}
              alt="Cafe Menu"
            />
          </div>
          <div className="text-center md:text-left flex items-center md:items-start flex-col gap-[10px] lg:gap-[15px]">
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
          </div>
        </div>
      </Section>
      <Section>
        <ul className="grid grid-cols-2 gap-y-[40px] md:flex md:justify-evenly md:gap-[50px]">
          <li>
            <h6 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
              Role
            </h6>
            <p className="text-[16px] md:text-lg font-garamond font-thin">
              UX Researcher
            </p>
            <p className="text-[16px] md:text-lg font-garamond font-thin">
              UX Designer
            </p>
          </li>
          <li className="text-right md:text-left  md:max-w-[250px] md:min-w-[150px] flex flex-col items-end md:block">
            <h6 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px] place-self-end">
              Team
            </h6>
            <p className="text-[16px] md:text-lg font-garamond font-thin max-w-[250px]">
              Aleynna Quiñones, Alexa Sciacca, Elizabeth Leifheit, Amine Mena
            </p>
          </li>
          <li>
            <h6 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
              Timeline
            </h6>
            <p className="text-[16px] md:text-lg font-garamond font-thin">
              8 Weeks
            </p>
          </li>
          <li className="text-right md:text-left">
            <h6 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
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
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h6 className="md:justify-self-end uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:w-max mb-[10px] md:mb-0">
            Project Overview
          </h6>
          <div className="flex flex-col gap-[30px] col-span-2">
            <div>
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
            <div>
              <h4 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
                Increase human connection between adult podcast listeners
              </h4>
              <p className="text-[16px] font-thin md:text-lg">
                We discovered that adult podcast listeners seek human connection
                and fresh perspectives.{" "}
                <span className="font-semibold">
                  They desire a way to share their favorite podcasts and
                  newfound knowledge beyond their phones
                </span>
                , and connect with like-minded individuals who share similar
                interests.
              </p>
            </div>
            <div>
              <h4 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
                The Connection Café
              </h4>
              <p className="text-[16px] font-thin md:text-lg">
                <span className="font-semibold">
                  The proposed solution, the Connection Café, provides a
                  seamless integration of the physical and digital world
                </span>
                . Its goal is to improve community mental health by facilitating
                in-person interactions through encouraging users to meet
                face-to-face in the café, hosting live podcast events, and
                providing equipment to record their own podcasts.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h6 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px]">
            Our Solution
          </h6>
          <div className="mb-[10px] col-span-2">
            <h4 className="mb-[10px] text-xl md:text-2xl font-medium font-helvetica">
              The Connection Café physical space
            </h4>
            <p className="font-thin text-[16px] md:text-lg">
              A versatile space where{" "}
              <span className="font-semibold">
                digital interaction meets in-person interaction.
              </span>
            </p>
          </div>
          <div className="md:col-span-3 md:flex-row md:justify-center bg-white p-9 rounded-3xl flex flex-col gap-[10px] mb-[30px] md:max-w-[1000px] w-full justify-self-center">
            <img
              className="object-cover md:max-w-[325px] md:min-w-[100px] h-auto"
              src={Mockup1}
              alt=""
            />
            <img
              className="object-cover md:max-w-[325px] md:min-w-[100px] h-auto"
              src={Mockup2}
              alt=""
            />
            <img
              className="object-cover md:max-w-[325px] md:min-w-[100px] h-auto"
              src={Mockup3}
              alt=""
            />
          </div>
          <div></div>
          <div className="mb-[30px] col-span-2">
            <h4 className="mb-[10px]  text-xl md:text-2xl font-medium font-helvetica">
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
          <div></div>
          <h4 className="mb-[10px] text-xl md:text-2xl font-medium font-helvetica col-span-2">
            The Connection Café App
          </h4>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <ScreenDescription
            imageSrc1={Connect}
            imageSrc2={Populate}
            cap1="Connect to listening platforms"
            cap2="Unique population of podcasts"
            p1="Upon check-in or sign-up, users are directed to the initial screen where
        they can link their preferred podcast platforms, redirecting outside the
        app upon selection."
            p2="After successful connections, the subsequent screen displays a
        consolidated list of their podcasts from all linked platforms, allowing
        users to pick their top 5 for display on their profile when connecting
        with others."
          />
          <ScreenDescription
            imageSrc1={FoundMatch}
            imageSrc2={MatchExample}
            cap1="Your match confirmation"
            cap2="Your match"
            p1="After choosing their top 5 podcasts, the app uses the list to match the user with others in the café."
            p2="Although the app can potentially match the user with multiple people, for simplicity, it displays a single match, like Angela, whom users can learn more about on a dedicated page from the previous screen."
          />
          <ScreenDescription
            imageSrc1={MatchProfile}
            imageSrc2={Meeting}
            cap1="Your match profile"
            cap2="Meeting confirmation"
            p1="Upon selecting to learn more, users access their match's profile, featuring a brief bio, favorite podcast genres, and top 5 podcasts."
            p2="The pivotal aspect of this interaction is the personal connection; users can either meet their match immediately at the café or initiate communication through the app, with the option to be directed to a designated table for in-person conversation."
          />
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-center gap-[10px]">
          <p className="uppercase max-w-[75%] font-helvetica text-[16px] md:text-lg font-thin text-center self-center">
            Want to learn more about our process?
          </p>
          <h4 className="font-helvetica md:text-2xl font-medium text-center text-xl self-center">
            Let’s dig deeper...
          </h4>
          <svg
            className="mx-auto"
            width="20px"
            height="100%"
            viewBox="0 0 23 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Arrow 1"
              d="M10.4393 30.0607C11.0251 30.6464 11.9749 30.6464 12.5607 30.0607L22.1066 20.5147C22.6924 19.9289 22.6924 18.9792 22.1066 18.3934C21.5208 17.8076 20.5711 17.8076 19.9853 18.3934L11.5 26.8787L3.01472 18.3934C2.42893 17.8076 1.47919 17.8076 0.893399 18.3934C0.307612 18.9792 0.307612 19.9289 0.893399 20.5147L10.4393 30.0607ZM10 6.55671e-08L10 29L13 29L13 -6.55671e-08L10 6.55671e-08Z"
              fill="black"
            />
          </svg>
        </div>
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
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px]">
            What did we find?
          </h4>
          <div className="mb-[50px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              Secondary and primary research key findings
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
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:col-span-1">
            Say What?
          </h4>
          <div className="mb-[50px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              What our users have to say
            </h6>
            <ul className="flex flex-col gap-[30px]">
              <li className=" md:text-lg font-thin leading-7">
                “When people consume content independently but can discuss it
                later, it{" "}
                <span className="font-semibold">helps build community</span> in
                a low-stakes, relaxed fashion.” Lindsay Harris Friel, The
                Podcast Host
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                “I’m with other people who I know won’t be as interested,{" "}
                <span className="font-semibold">
                  I’ll choose a podcast more catered to general entertainment
                </span>
                .” Logan, 26 yrs old
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                “I like to discuss with people but{" "}
                <span className="font-semibold">
                  sometimes people don’t care.
                </span>
                ” Pam, 53 yr old
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                “...podcasts are a social experience... most listeners say they
                recommend podcasts to someone else, [and]{" "}
                <span className="font-semibold">
                  discuss the content they hear with others
                </span>
                ...” Pew Research
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:mb-[10px] md:col-span-1 place-self-end">
            User Personas
          </h4>
          <h6 className="md:text-2xl text-xl w-max font-medium font-helvetica mb-[10px] justify-self-start md:col-span-2">
            Meet Matt and Kat
          </h6>
        </div>
        <div className="flex flex-col gap-12 md:gap-10 items-center">
          <UserPersona
            avatar={MattAvatar}
            name={"Matt"}
            alias={"the motivated professional"}
            occupation={"Engineer, remote"}
            frustrations={[
              "Feels like he doesn’t have time to connect with others because he is constantly focused on work",
            ]}
            goals={[
              "Maintain work life balance",
              "Excel in his career while also taking care of his mental and emotional well-being",
            ]}
            age={"44"}
            description={mattDescriptionElement}
          />
          <UserPersona
            avatar={KatAvatar}
            name={"Kat"}
            alias={"the curious sharer"}
            occupation={"Business analyst"}
            frustrations={[
              "Wants to share what she learns through podcasts but people in her life don’t care",
            ]}
            goals={[
              "Socialize with people who have the same interests as her",
              "Discover new podcasts that constantly keep her engaged and stimulated",
            ]}
            age={"32"}
            description={katDescriptionElement}
          />
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
                After a taxing day at work, adult podcast listeners are seeking
                a hassle-free and relaxed way to engage with fellow listeners
                beyond their phone screens, in hopes of diverting their minds
                from work stress.
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:col-span-1">
            Thus, we asked
          </h4>
          <div className="mb-[50px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica">
              How can we provide adult podcast listeners with a means to unwind
              after a busy day while maintaining a sense of connection with
              others?
            </h6>
          </div>
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[30px] md:col-span-1">
            Ideation
          </h4>
          <div className="md:mb-[10px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              Brainstorming and affinity maps
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                After brainstorming over 100 solutions to our problem via
                brainwriting and mash-ups techniques, my team and I honed in on
                two we thought were best.
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 justify-center grid-rows-2 bg-white rounded-3xl gap-2 p-9">
          <img src={Ideas1} alt="Ideation" />
          <img src={Ideas2} alt="Ideation" />
          <img src={Ideas3} alt="Ideation" />
          <img src={Ideas4} alt="Ideation" />
        </div> */}
        <div className="grid grid-cols-2 mt-4 md:mt-8 gap-y-3 md:gap-y-7 gap-x-5 md:gap-x-36 mb-[50px] max-w-[1000px] self-center">
          {/* <svg
            className="md:w-8 place-self-center"
            width="20px"
            height="100%"
            viewBox="0 0 23 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Arrow 1"
              d="M10.4393 30.0607C11.0251 30.6464 11.9749 30.6464 12.5607 30.0607L22.1066 20.5147C22.6924 19.9289 22.6924 18.9792 22.1066 18.3934C21.5208 17.8076 20.5711 17.8076 19.9853 18.3934L11.5 26.8787L3.01472 18.3934C2.42893 17.8076 1.47919 17.8076 0.893399 18.3934C0.307612 18.9792 0.307612 19.9289 0.893399 20.5147L10.4393 30.0607ZM10 6.55671e-08L10 29L13 29L13 -6.55671e-08L10 6.55671e-08Z"
              fill="black"
            />
          </svg>
          <svg
            className="md:w-8 place-self-center"
            width="20px"
            height="100%"
            viewBox="0 0 23 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Arrow 1"
              d="M10.4393 30.0607C11.0251 30.6464 11.9749 30.6464 12.5607 30.0607L22.1066 20.5147C22.6924 19.9289 22.6924 18.9792 22.1066 18.3934C21.5208 17.8076 20.5711 17.8076 19.9853 18.3934L11.5 26.8787L3.01472 18.3934C2.42893 17.8076 1.47919 17.8076 0.893399 18.3934C0.307612 18.9792 0.307612 19.9289 0.893399 20.5147L10.4393 30.0607ZM10 6.55671e-08L10 29L13 29L13 -6.55671e-08L10 6.55671e-08Z"
              fill="black"
            />
          </svg> */}
          <div className="max-w-[250px] justify-self-center place-self-start justify-center flex ">
            <img src={Sticky1} alt="Sticky Note 1" />
          </div>
          <div className="max-w-[250px] justify-self-center place-self-start justify-center flex ">
            <img src={Sticky2} alt="Sticky Note 2" />
          </div>
        </div>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <div></div>
          <div className="md:mb-[30px] mb-[10px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              Visualizing our solutions
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-lg md:text-lg font-thin">
                After selecting our two best ideas, we moved on to creating
                gallery sketches.{" "}
                <span className="font-semibold">
                  This step aimed to provide a visual representation of what our
                  solutions might entail and facilitated the collection of user
                  feedback.
                </span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 bg-white p-9 rounded-3xl flex flex-col md:flex-row md:justify-center md:justify-self-center gap-5 md:gap-[90px] items-center mb-[50px] max-w-[1000px]">
            <div>
              <p className="uppercase text-center font-helvetica font-thin text-[16px]">
                Podcast Chat
              </p>
              <img src={PodcastChat} alt="Podcast Chat Sketches" />
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
        <div className="flex flex-col items-center gap-[10px]">
          <h4 className="font-helvetica text-xl font-medium text-center md:text-2xl">
            Let’s wrap this up...
          </h4>
          <svg
            width="20px"
            height="100%"
            viewBox="0 0 23 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Arrow 1"
              d="M10.4393 30.0607C11.0251 30.6464 11.9749 30.6464 12.5607 30.0607L22.1066 20.5147C22.6924 19.9289 22.6924 18.9792 22.1066 18.3934C21.5208 17.8076 20.5711 17.8076 19.9853 18.3934L11.5 26.8787L3.01472 18.3934C2.42893 17.8076 1.47919 17.8076 0.893399 18.3934C0.307612 18.9792 0.307612 19.9289 0.893399 20.5147L10.4393 30.0607ZM10 6.55671e-08L10 29L13 29L13 -6.55671e-08L10 6.55671e-08Z"
              fill="black"
            />
          </svg>
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px]">
            The End
          </h4>
          <div className="mb-[30px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              The Connection Café
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                Connection Café is a community initiative designed to connect
                people who share an interest in podcasts. Its goal is to improve
                community mental health by facilitating in-person interactions
                in today’s technology-focused world.
              </li>
            </ul>
          </div>

          {/* Carousel */}
          <div className="col-span-3 mb-11 md:mb-[50px] bg-white">
            <AutoplayCarousel />
          </div>
          <div className="col-span-3 mb-11 md:mb-[50px]">
            <ClickableCarousel />
          </div>

          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px]">
            What did I learn?
          </h4>
          <div className="mb-[50px] md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[20px]">
              UX Research is cool and people yearn for in-person interaction
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                Although we live in a social media driven world, people don’t
                necessarily feel the desire to foster more digital interactions
                and relationships. People appreciate and yearn for in-person
                interaction.{" "}
                <span className="font-semibold">
                  I believe utilizing that fact, along with the technology we
                  are so lucky to have access to, can help to provide many more
                  solutions for people outside of the podcast space.
                </span>
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px]">
            What’s next?
          </h4>
          <div className=" md:col-span-2">
            <h6 className="md:text-2xl text-xl font-medium font-helvetica mb-[10px]">
              User Testing and Implementation
            </h6>
            <ul className="list-disc list-inside pl-3 text-[16px] md:text-lg font-thin">
              <li className="leading-7">
                Does our physical space prototype provide the best options to
                facilitate in-person interaction?
              </li>
              <li className="leading-7">
                What can be improved upon in our app? What accessibility
                features can we take into account?
              </li>
              <li className="leading-7">
                What would the income generating model entail for a solution
                like this?
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col items-center gap-[10px]">
          <h4 className="font-helvetica md:text-2xl font-medium text-center text-[20px]">
            Thank you for diving in!
          </h4>
          <svg
            className="md:w-10"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="100%"
            viewBox="0 0 29 28"
            fill="none"
          >
            <circle cx="10.3025" cy="10.2196" r="1.6425" fill="black" />
            <circle cx="18.5151" cy="10.2196" r="1.6425" fill="black" />
            <circle
              cx="14.5"
              cy="13.6875"
              r="12.6875"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M7.93005 17.3369C10.8534 22.1057 18.3514 22.3005 21.0701 17.3369"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </Section>
    </div>
  );
};

export default Cafe;
