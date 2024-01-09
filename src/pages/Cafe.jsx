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
import ScreenDescription from "../components/ScreenDescription";
import UserPersona from "../components/UserPersona";

const Cafe = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="relative -z-10 mx-[50px] md:mx-[130px] lg:mx-[200px] xl:mx-[340px] font-garamond max-w-full">
      <section className="font-garamond pt-[75px] lg:pb-[110px] pb-[50px] border-b border-b-black/40 max-w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] md:gap-[65px] max-w-full">
          <div className="flex justify-center gap-[15px] lg:max-w-[calc(100%-415px)] max-w-full mb-[30px]">
            <img
              className="min-w-[90px] max-w-[200px] h-auto"
              src={HomeImg}
              alt="Cafe Home"
            />
            <img
              className="min-w-[90px] max-w-[200px] h-auto"
              src={MatchImg}
              alt="Cafe Menu"
            />
          </div>
          <div className="text-center md:text-left flex items-center md:items-start flex-col gap-[10px] lg:gap-[15px]">
            <h6 className="uppercase text-center md:text-left font-thin font-helvetica text-[20px] lg:text-[24px]">
              ACADEMIC PROJECT
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] lg:text-[64px] font-bold">
              Connection
              <br />
              Café
            </h3>
            <p className="text-center md:text-left text-[16px] lg:text-[24px] font-thin">
              Encouraging in-person and digital interactions through a love for
              podcasts.
            </p>
          </div>
        </div>
      </section>
      <section className="font-garamond py-[50px] lg:py-[110px] border-b border-b-black/40">
        <ul className="grid grid-cols-2 gap-y-[40px] md:flex md:justify-evenly md:gap-[50px]">
          <li>
            <h6 className="font-helvetica font-normal text-2xl mb-2">Role</h6>
            <p className="text-lg font-garamond font-thin">UX Researcher</p>
            <p className="text-lg font-garamond font-thin">UX Designer</p>
          </li>
          <li className="text-right md:text-left md:max-w-[300px] md:min-w-[150px]">
            <h6 className="font-helvetica font-normal text-2xl mb-2">Team</h6>
            <p className="text-lg font-garamond font-thin">
              Aleynna Quiñones, Alexa Sciacca, Elizabeth Leifheit, Amine Mena
            </p>
          </li>
          <li>
            <h6 className="font-helvetica font-normal text-2xl mb-2">
              Timeline
            </h6>
            <p className="text-lg font-garamond font-thin">8 Weeks</p>
          </li>
          <li className="text-right md:text-left">
            <h6 className="font-helvetica font-normal text-2xl mb-2">Tools</h6>
            <p className="text-lg font-garamond font-thin">Figma</p>
            <p className="text-lg font-garamond font-thin">GetFloorPlan</p>
          </li>
        </ul>
      </section>
      <section className="font-garamond py-[50px] lg:py-[110px] border-b border-b-black/40 flex flex-col gap-[30px] md:flex-row md:gap-[50px]">
        <div>
          <h6 className="uppercase md:text-right font-thin font-helvetica text-[20px] lg:text-[24px] md:w-max">
            Project Overview
          </h6>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="font-helvetica font-normal text-2xl mb-[10px]">
              The Spoken Word On-Demand Audio Space
            </h4>
            <p className="text-[16px] font-thin md:text-lg">
              This project aims to find and address a problem in the Spoken Word
              On-Demand Audio space, with a specific focus on improving the
              overall experience for adult podcast listeners.
            </p>
          </div>
          <div>
            <h4 className="font-helvetica font-normal text-2xl mb-[10px]">
              Increase human connection between adult podcast listeners
            </h4>
            <p className="text-[16px] font-thin md:text-lg">
              We discovered that adult podcast listeners seek human connection
              and fresh perspectives. They desire a way to share their favorite
              podcasts and newfound knowledge beyond their phones, and connect
              with like-minded individuals who share similar interests.
            </p>
          </div>
          <div>
            <h4 className="font-helvetica font-normal text-2xl mb-[10px]">
              The Connection Café
            </h4>
            <p className="text-[16px] font-thin md:text-lg">
              The proposed solution, the Connection Café, provides a seamless
              integration of the physical and digital world. Its goal is to
              improve community mental health by facilitating in-person
              interactions through encouraging users to meet face-to-face in the
              café, hosting live podcast events, and providing equipment to
              record their own podcasts.
            </p>
          </div>
        </div>
      </section>
      <section className="font-garamond pt-[50px] lg:pt-[110px] lg:pb-[150px] pb-[50px] border-b border-b-black/40 flex flex-col gap-[30px] md:block">
        <div className="md:grid md:grid-cols-4 md:gap-x-[50px] md:mb-[60px]">
          <h6 className="uppercase md:text-right font-thin font-helvetica text-[20px] lg:text-[24px] mb-[30px]">
            Our Solution
          </h6>
          <div className="mb-[20px] col-span-3">
            <h4 className="mb-[10px] text-2xl md:text-3xl font-medium font-helvetica">
              The Connection Café physical space
            </h4>
            <p className="font-thin text-[16px] md:text-2xl">
              A versatile space where{" "}
              <span className="font-semibold">
                digital interaction meets in-person interaction.
              </span>
            </p>
          </div>
          <div className="md:col-span-4 md:flex-row bg-white p-9 rounded-3xl flex flex-col gap-5 mb-[20px]">
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
          <div className="mb-[30px] col-span-3">
            <h4 className="mb-[10px] md:mb-[20px] text-3xl font-medium font-helvetica">
              Visitors can...
            </h4>
            <ul className="list-disc list-inside pl-3 text-2xl">
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

        <h4 className="mb-[20px] text-center text-2xl md:text-3xl font-medium font-helvetica">
          The Connection Café App
        </h4>
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
      </section>
      <section className="font-garamond py-[50px] lg:py-[110px] border-b border-b-black/40 flex flex-col gap-5 md:gap-10 justify-center items-center">
        <p className="uppercase max-w-[75%] font-helvetica text-[16px] md:text-2xl font-thin text-center">
          Want to learn more about our process?
        </p>
        <h4 className="font-helvetica text-3xl font-medium text-center md:text-5xl">
          Let’s dig deeper...
        </h4>
        <svg
          className="md:w-6"
          width="20px"
          height="auto"
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
      </section>
      <section className="font-garamond py-[50px] lg:py-[110px] border-b border-b-black/40 flex flex-col gap-8 md:flex-row">
        <div>
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[20px] lg:text-[24px] md:w-max">
            Our starting point
          </h4>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div>
            <h6 className="text-2xl font-medium max-w-[85%] mb-[10px] font-helvetica">
              What do we want to target in the podcast space?
            </h6>
            <p className="text-16px font-thin md:text-lg">
              As a team, we decided to hone in on a specific area of the podcast
              space:{" "}
              <span className="font-semibold">
                adult podcast listeners and their listening experience.
              </span>
            </p>
          </div>
          <div>
            <h6 className="text-2xl font-medium max-w-[85%] mb-[10px] font-helvetica">
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
            <h6 className="text-2xl font-medium max-w-[85%] mb-[10px] font-helvetica">
              Plan of attack
            </h6>
            <p className="text-16px font-thin md:text-lg">
              Conduct{" "}
              <span className="font-semibold">
                secondary research and 1-on-1 interviews
              </span>{" "}
              to gather insights, challenges, and pain-points for our potential
              users.
            </p>
          </div>
        </div>
      </section>
      <section className="font-garamond py-[50px] lg:py-[110px] border-b border-b-black/40 flex flex-col">
        <div className="md:grid md:grid-cols-4 md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[20px] lg:text-[24px] mb-[30px] md:col-span-1">
            What did we find?
          </h4>
          <div className="mb-[50px] md:col-span-3">
            <h6 className="text-2xl font-medium font-helvetica mb-[10px]">
              Secondary and primary research key findings
            </h6>
            <ul className="list-disc list-inside pl-3">
              <li className="text-[16px] font-thin leading-7">
                Podcast listeners search for a way to connect with others
                through podcasts.
              </li>
              <li className="text-[16px] font-thin leading-7">
                Podcast listening is a chance to build community.
              </li>
              <li className="text-[16px] font-thin leading-7">
                Adults need a way to disconnect from real life that continues to
                stimulate them.
              </li>
              <li className="text-[16px] font-thin leading-7">
                Adults need an engaging way to discuss podcast content with
                friends.
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[20px] lg:text-[24px] mb-[30px] md:col-span-1">
            Say What?
          </h4>
          <div className="mb-[50px] md:col-span-3">
            <h6 className="text-2xl font-medium font-helvetica mb-[20px]">
              What our users have to say
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] font-thin leading-7">
                “When people consume content independently but can discuss it
                later, it{" "}
                <span className="font-semibold">helps build community</span> in
                a low-stakes, relaxed fashion.” Lindsay Harris Friel, The
                Podcast Host
              </li>
              <li className="text-[16px] font-thin leading-7">
                “I’m with other people who I know won’t be as interested,{" "}
                <span className="font-semibold">
                  I’ll choose a podcast more catered to general entertainment
                </span>
                .” Logan, 26 yrs old
              </li>
              <li className="text-[16px] font-thin leading-7">
                “I like to discuss with people but{" "}
                <span className="font-semibold">
                  sometimes people don’t care.
                </span>
                ” Pam, 53 yr old
              </li>
              <li className="text-[16px] font-thin leading-7">
                “...podcasts are a social experience... most listeners say they
                recommend podcasts to someone else, [and]{" "}
                <span className="font-semibold">
                  discuss the content they hear with others
                </span>
                ...” Pew Research
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[20px] lg:text-[24px] mb-[30px] md:mb-5 md:col-span-1 place-self-end">
            User Personas
          </h4>
          <h6 className="text-2xl w-max font-medium font-helvetica mb-[20px] justify-self-start md:mb-5 md:col-span-3">
            Meet Matt and Kat
          </h6>
        </div>
        <div className="flex flex-col gap-12 md:gap-10">
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
            description={
              "Matt listens to motivational podcasts during his free time to refocus his energy.  He engages with podcast communities online, sharing his favorite episodes and seeking recommendations from like-minded listeners."
            }
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
            description={
              "A naturally curious individual with a passion for learning. Kat is always eager to share any new findings she learns with the people in her life, but sometimes they aren’t interested or don't care."
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Cafe;
