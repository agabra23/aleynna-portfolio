import React from "react";
import { useLayoutEffect } from "react";
import UserPersona from "../components/UserPersona";
import AutoplayCarousel from "../components/AutoplayCarousel";

import Beach2 from "../assets/Beach2.png";
import Beach1 from "../assets/Beach1.png";
import BeachsideMenu from "../assets/BeachsideMenu.png";
import BeachsideDetails from "../assets/BeachsideDetails.png";
import BeachsideCheckout from "../assets/BeachsideCheckout.png";
import BeachsideConfirmation from "../assets/BeachsideConfirmation.png";
import BeachsideTracking1 from "../assets/BeachsideTracking1.png";
import BeachsideTracking2 from "../assets/BeachsideTracking2.png";
import LisaAvatar from "../assets/LisaAvatar.png";
import JoseAvatar from "../assets/JoseAvatar.png";
import LofiFlow from "../assets/LofiFlow.png";
import LofiHome1 from "../assets/LofiHome1.png";
import LofiHome2 from "../assets/LofiHome2.png";
import LofiCheckout from "../assets/LofiCheckout.png";
import LofiConfirmation from "../assets/LofiConfirmation.png";
import LofiTracking from "../assets/LofiTracking.png";
import LofiDriver from "../assets/LofiDriver.png";
import PinkLogin from "../assets/PinkLogin.png";
import PinkMenu from "../assets/PinkMenu.png";
import PinkDetails from "../assets/PinkDetails.png";
import PinkCart from "../assets/PinkCart.png";
import PinkCheckout from "../assets/PinkCheckout.png";
import PinkConfirmation from "../assets/PinkConfirmation.png";
import PinkDriver from "../assets/PinkDriver.png";
import PinkTracking from "../assets/PinkTracking.png";
import BlueLogin from "../assets/BlueLogin.png";
import BlueMenu from "../assets/BlueMenu.png";
import BlueDetails from "../assets/BlueDetails.png";
import BlueCart from "../assets/BlueCart.png";
import BlueCheckout from "../assets/BlueCheckout.png";
import BlueConfirmation from "../assets/BlueConfirmation.png";
import BlueDriver from "../assets/BlueDriver.png";
import BlueTracking from "../assets/BlueTracking.png";
import BeachsideScreenDescription from "../components/BeachsideScreenDescription";
import BeachsideComparisons from "../components/BeachsideComparisons";
import Section from "../components/Section";
import HeroSectionWrapper from "../components/HeroSectionWrapper";
import UberEatsScreenshot from "../assets/UberEats.jpg";
import DoorDashScreenshot from "../assets/DoorDash.png";
import PaperWireframe1 from "../assets/PaperWireframe1.jpg";
import PaperWireframe2 from "../assets/PaperWireframe2.jpg";
import PaperWireframe3 from "../assets/PaperWireframe3.jpg";
import PaperWireframe4 from "../assets/PaperWireframe4.jpg";
import InitialWireframe1 from "../assets/InitialWireframe1.png";
import InitialWireframe2 from "../assets/InitialWireframe2.png";
import InitialWireframe3 from "../assets/InitialWireframe3.png";
import InitialWireframe4 from "../assets/InitialWireframe4.png";
import InitialWireframe5 from "../assets/InitialWireframe5.png";
import AfterWireframe1 from "../assets/AfterWireframe1.png";
import AfterWireframe2 from "../assets/AfterWireframe2.png";
import AfterWireframe3 from "../assets/AfterWireframe3.png";
import ClickableCarousel from "../components/ClickableCarousel";
import VideoCard from "../components/VideoCard";
import BeachsideVideo from "../assets/BeachsideVideo.mp4";
import {
  autoBeachsideCards,
  beachsideCards,
  beachsideComparisonsArray,
  cardArray,
  personaArray,
} from "../components/carousel-config";

const Beachside = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const formattedPar1 = (
    <p className="font-thin text-[16px] md:text-lg">
      “I was not able to add anything to my cart. I wasn’t sure because{" "}
      <span className="font-semibold">
        nothing added to my cart when I clicked the pictures
      </span>
      ” - Amarilys
    </p>
  );
  const formattedPar2 = (
    <p className="font-thin text-[16px] md:text-lg">
      “How am I supposed to know that they got my order after I check out?” -
      Emily
    </p>
  );
  const formattedPar3 = (
    <p className="font-thin text-[16px] md:text-lg">
      “I don’t know how to contact my delivery driver, what am I supposed to do?{" "}
      <span className="font-semibold">
        Would i have to call them from my own phone?
      </span>{" "}
      I don’t want to do all that.” - Jasmine
    </p>
  );

  const pinkImages1 = [
    {
      src: PinkLogin,
      alt: "Old Login Screen",
    },
    {
      src: PinkMenu,
      alt: "Old Menu Screen",
    },
    {
      src: PinkDetails,
      alt: "Old Details Screen",
    },
    {
      src: PinkCart,
      alt: "Old Cart Screen",
    },
  ];

  const blueImages1 = [
    {
      src: BlueLogin,
      alt: "New Login Screen",
    },
    {
      src: BlueMenu,
      alt: "New Menu Screen",
    },
    {
      src: BlueDetails,
      alt: "New Details Screen",
    },
    {
      src: BlueCart,
      alt: "New Cart Screen",
    },
  ];

  const pinkImages2 = [
    {
      src: PinkCheckout,
      alt: "Old Checkout Screen",
    },
    {
      src: PinkConfirmation,
      alt: "Old Confirmation Screen",
    },
    {
      src: PinkDriver,
      alt: "Old Driver Screen",
    },
    {
      src: PinkTracking,
      alt: "Old Tracking Screen",
    },
  ];

  const blueImages2 = [
    {
      src: BlueCheckout,
      alt: "New Checkout Screen",
    },
    {
      src: BlueConfirmation,
      alt: "New Confirmation Screen",
    },
    {
      src: BlueDriver,
      alt: "New Driver Screen",
    },
    {
      src: BlueTracking,
      alt: "New Tracking Screen",
    },
  ];

  return (
    <div className="relative -z-10 font-garamond max-w-full">
      <HeroSectionWrapper>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[30px] md:gap-[65px] max-w-full">
          <div className="flex justify-center gap-[15px] max-w-full mb-[30px] md:mb-0">
            <img
              className="min-w-[120px] max-w-[220px] h-auto"
              src={Beach1}
              alt="Beachside Snackshop Login Screen"
            />
            <img
              className="min-w-[120px] max-w-[220px] h-auto"
              src={Beach2}
              alt="Beachside Snackshop Item Detail Screen"
            />
          </div>
          <div className="text-center md:text-left flex items-center md:items-start flex-col">
            <h6 className="uppercase text-center md:text-left font-thin font-helvetica text-[16px] md:text-lg">
              GOOGLE UX CERTIFICATE PROJECT
            </h6>
            <h3 className="text-center md:text-left leading-none font-helvetica text-[30px] md:text-4xl font-bold">
              Beachside Snackshop
            </h3>
            <p className="text-center md:text-left text-[16px] md:text-lg font-thin max-w-[500px]">
              Order food online and track your delivery in real-time for a
              simple and efficient dining experience.
            </p>
            <ul className="hidden md:grid grid-cols-2 gap-y-[30px] gap-x-[50px] mt-[50px] max-w-screen-lg">
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
              <li className="text-right md:text-left flex flex-col items-end md:block">
                <h6 className="font-helvetica font-normal text-lg md:text-xl">
                  Team
                </h6>
                <p className="text-[16px] md:text-lg font-garamond font-thin">
                  Aleynna Quiñones
                </p>
              </li>
              <li>
                <h6 className="font-helvetica font-normal text-lg md:text-xl">
                  Timeline
                </h6>
                <p className="text-[16px] md:text-lg font-garamond font-thin">
                  6 months
                </p>
              </li>
              <li className="text-right md:text-left">
                <h6 className="font-helvetica font-normal text-lg md:text-xl">
                  Tools
                </h6>
                <p className="text-[16px] md:text-lg font-garamond font-thin">
                  Figma
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <ul className="md:hidden grid grid-cols-2 gap-y-[40px] gap-x-[30px] mt-[30px] text-center">
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
                Aleynna Quiñones
              </p>
            </li>
            <li>
              <h6 className="font-helvetica font-normal text-xl md:text-2xl">
                Timeline
              </h6>
              <p className="text-[16px] md:text-lg font-garamond font-thin">
                6 months
              </p>
            </li>
            <li>
              <h6 className="font-helvetica font-normal text-xl md:text-2xl">
                Tools
              </h6>
              <p className="text-[16px] md:text-lg font-garamond font-thin">
                Figma
              </p>
            </li>
          </ul>
        </div>
      </HeroSectionWrapper>
      {/* <Section>
        <ul className="grid grid-cols-2 gap-y-[40px] md:flex md:justify-evenly md:gap-[50px]">
          <li>
            <h6 className="font-helvetica font-normal md:text-2xl text-[20px] mb-2">
              Role
            </h6>
            <p className="text-[16px] md:text-lg font-garamond font-thin">
              UX Researcher
            </p>
            <p className="text-[16px] md:text-lg font-garamond font-thin">
              UX Designer
            </p>
          </li>
          <li className="text-right md:text-left md:max-w-[300px] md:min-w-[150px]">
            <h6 className="font-helvetica font-normal md:text-2xl text-[20px] mb-2">
              Team
            </h6>
            <p className="text-[16px] md:text-lg font-garamond font-thin">
              Aleynna Quiñones
            </p>
          </li>
          <li>
            <h6 className="font-helvetica font-normal md:text-2xl text-[20px] mb-2">
              Timeline
            </h6>
            <p className="text-[16px] md:text-lg font-garamond font-thin">
              6 months
            </p>
          </li>
          <li className="text-right md:text-left">
            <h6 className="font-helvetica font-normal md:text-2xl text-[20px] mb-2">
              Tools
            </h6>
            <p className="text-[16px] md:text-lg font-garamond font-thin">
              Figma
            </p>
          </li>
        </ul>
      </Section> */}
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h6 className="md:justify-self-end uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:w-max mb-[10px] md:mb-0">
            The Context
          </h6>
          <div className="col-span-2 mb-[50px]">
            <h4 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
              Design a food delivery tracking app for BeachSide SnackShop, a
              local oceanside restaurant.
            </h4>
            <p className="text-[16px] font-thin md:text-lg">
              As part of my Google UX Design Certificate course, I undertook a
              project to enhance the customer’s experience by designing a food
              delivery tracking app for a local oceanside restaurant named
              BeachSide SnackShop.
            </p>
          </div>
          <h6 className="md:justify-self-end uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:w-max mb-[10px] md:mb-0">
            The Problem
          </h6>
          <div className="col-span-2 mb-[50px]">
            <h4 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
              Busy adults need a quick and efficient way to order and track
              online food orders.
            </h4>
            <p className="text-[16px] font-thin md:text-lg">
              I discovered that busy adults prioritize spending time on aspects
              of their lives that are important to them, such as family, work,
              and hobbies, and are often determined to find a quick and
              efficient way to acquire healthy meals through online ordering and
              delivery.
            </p>
          </div>
          <h6 className="md:justify-self-end uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:w-max mb-[10px] md:mb-0">
            The Solution
          </h6>
          <div className="col-span-2">
            <h4 className="font-helvetica font-normal text-xl md:text-2xl mb-[10px]">
              BeachSide SnackShop mobile app
            </h4>
            <p className="text-[16px] font-thin md:text-lg">
              The BeachSide SnackShop mobile app offers users a fast and
              efficient online food ordering experience with real-time delivery
              tracking. Its objective is to empower busy adults to reclaim their
              free time by enabling them to skip in-store lines and eliminate
              the hassle of preparing meals themselves.
            </p>
            <button className="text-[16px] hover:bg-black hover:text-offwhite transition-colors duration-200  font-helvetica font-normal px-6 py-3 mt-[30px] mb-[30px] rounded-full border-2 border-solid border-black">
              <a href="#mySolutionBeachside">Jump to solution</a>
            </button>
          </div>
        </div>
        <AutoplayCarousel gap="10px" slides={autoBeachsideCards} />
      </Section>
      {/* <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:mb-0 md:col-span-1">
            Project Overview
          </h4>
          <div className="md:col-span-2 flex flex-col gap-[30px]">
            <div>
              <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
                Design a food delivery tracking app for BeachSide SnackShop, a
                local oceanside restaurant.
              </h6>
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[16px] md:text-lg font-thin">
                  As part of my Google UX Design Certificate course, I undertook
                  a project to enhance the customer’s experience by designing a
                  food delivery tracking app for a local oceanside restaurant
                  named BeachSide SnackShop.
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
                Busy adults need a quick and efficient way to order and track
                online food orders.
              </h6>
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[16px] md:text-lg font-thin">
                  I discovered that busy adults prioritize spending time on
                  aspects of their lives that are important to them, such as
                  family, work, and hobbies, and are often determined to find a
                  quick and efficient way to acquire healthy meals through
                  online ordering and delivery.
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
                BeachSide SnackShop mobile app
              </h6>
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[16px] md:text-lg font-thin">
                  The BeachSide SnackShop mobile app offers users a fast and
                  efficient online food ordering experience with real-time
                  delivery tracking. Its objective is to empower busy adults to
                  reclaim their free time by enabling them to skip in-store
                  lines and eliminate the hassle of preparing meals themselves.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section> */}
      {/* <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px] mb-[10px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] mb-[10px] md:mb-0 md:text-lg md:col-span-1">
            My solution
          </h4>
          <h6 className="text-xl md:text-2xl font-medium font-helvetica md:col-span-2">
            BeachSide SnackShop mobile app final mock ups
          </h6>
        </div>
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-center gap-[30px] md:gap-[60px]">
          <div className="max-w-80 flex md:flex-col justify-center self-center">
            <img src={Beach1} alt="Beachside Snackshop Login Screen" />
          </div>
          <div className="grid grid-cols-3 gap-x-[10px] gap-y-[15px] max-w-[350px] self-center">
            <img src={BeachsideMenu} alt="Snackshop Menu" />
            <img src={BeachsideDetails} alt="Snackshop Item Details" />
            <img src={BeachsideCheckout} alt="Snackshop Checkout" />
            <img
              className="self-end"
              src={BeachsideConfirmation}
              alt="Order Confirmation"
            />
            <img
              className="self-end"
              src={BeachsideTracking1}
              alt="Order Tracking 1"
            />
            <img
              className="self-end"
              src={BeachsideTracking2}
              alt="Order Tracking 2"
            />
          </div>
        </div>
      </Section> */}
      {/* <Section>
        <div className="flex flex-col items-center gap-[10px]">
          <p className="uppercase max-w-[75%] font-helvetica text-[16px] md:text-lg font-thin text-center">
            Want to learn more about our process?
          </p>
          <h4 className="font-helvetica text-xl md:text-2xl font-medium text-center">
            Let’s dig deeper...
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
      </Section> */}
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:col-span-1 mb-[10px] md:mb-0">
            The Starting Point
          </h4>
          <div className="md:col-span-2 flex flex-col gap-[30px]">
            <div>
              <h6 className="md:text-2xl text-[20px] font-medium font-helvetica mb-[10px]">
                Who is the target audience?
              </h6>
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[16px] md:text-lg font-thin">
                  To acquire the most accurate insights, I decided to target
                  adults, ages 18 years or older, of any gender, who are working
                  professionals, college students, retirees, or busy parents.
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
                What do I want to learn from the users?
              </h6>
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[16px] md:text-lg font-thin">
                  Understand user’s needs and frustrations when using a delivery
                  tracking app, as well as their process and behaviors with
                  tasks related to my product so that I can create the most
                  effective mobile app.
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
                Plan of attack
              </h6>
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[16px] md:text-lg font-thin">
                  Conduct a competitive audit and 1-on-1 interviews to gather
                  insights, challenges, and pain-points for our potential users.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:col-span-1">
            The emerging problem
          </h4>
          <div className="md:col-span-2 mb-[50px]">
            <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
              Online food ordering systems are confusing and overwhelming.
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                Busy adults often find themselves wasting time navigating
                through overwhelming and confusing online food ordering systems,
                diverting their focus from aspects of life that hold greater
                importance to them.
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:mb-0 md:col-span-1">
            But why?
          </h4>
          <div className="md:col-span-2 flex flex-col mb-[30px]">
            <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
              Research findings and pain points
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                In examining Uber Eats and DoorDash, two major competitors in
                the realm of online food ordering and real-time delivery
                tracking, I observed that their interfaces can become
                overwhelming due to the multitude of additional services they
                provide. For first-time users, it can be challenging to pinpoint
                exactly what they are looking for, whether it’s a specific
                restaurant or menu item.
              </li>
            </ul>
          </div>

          <div className="flex gap-[50px] justify-center col-span-3 mb-[30px] max-w-full">
            <img
              className="max-w-[200px] min-w-[90px]"
              src={UberEatsScreenshot}
              alt="Uber Eats Screen"
            />
            <img
              className="max-w-[200px] min-w-[90px]"
              src={DoorDashScreenshot}
              alt="DoorDash Screen"
            />
          </div>
          <div></div>
          <div className="md:col-span-2 flex flex-col">
            <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
              After conducting 1-on-1 interviews with potential users, we
              gathered more helpful insights
            </h6>
            <ul className="list-disc list-inside pl-3 text-[16px] md:text-lg font-thin">
              <li className="leading-7">
                Users value spending time on aspects of their lives that are
                important to them, like family and work
              </li>
              <li className="leading-7">
                Users don't want to waste time using confusing and overwhelming
                interfaces
              </li>
              <li className="leading-7">
                Users want a quick and easy way to order and track food online
              </li>
            </ul>
          </div>
          {/* <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:col-span-1 place-self-end">
            User Personas
          </h4>
          <h6 className="text-xl md:text-2xl w-max font-medium font-helvetica mb-[10px] justify-self-start md:col-span-2">
            Meet Lisa and José
          </h6> */}
        </div>
        {/* <div className="flex flex-col items-center gap-12 md:gap-[30px]">
          <UserPersona
            avatar={LisaAvatar}
            name={"Lisa"}
            alias={"the passionate mom"}
            occupation={"Psychologist"}
            frustrations={[
              `“I am always so busy during the day with work that I just want to come home and not have to think about anything other than spending time with my family.”`,
            ]}
            goals={["Balance work life with personal life"]}
            age={"34"}
            description={lisaDescriptionElement}
          />
          <UserPersona
            avatar={JoseAvatar}
            name={"José"}
            alias={"the go-getter"}
            occupation={"Marketing"}
            frustrations={[
              `“The apps I use to order food are so inaccurate with timing so the food is either cold when it gets here or I have to wait an extra 20 minutes.”`,
            ]}
            goals={[
              "Show his commitment to his job.",
              "Complete everyday work tasks as efficiently as possible",
              "Get promoted",
            ]}
            age={"23"}
            description={joseDescriptionElement}
          />
        </div> */}
      </Section>

      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:mb-0 md:col-span-1">
            Synthesis
          </h4>
          <div className="md:col-span-2">
            <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px] ">
              After understanding the challenges that users were facing with
              existing apps, as well as their own personal life experiences, we
              asked...
            </h6>
            <p className="text-[16px] text-lg font-thin">
              How can we design an intuitive mobile app for BeachSide SnackShop
              that provides a seamless online ordering system and accurate
              real-time tracking?
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:mb-0 md:col-span-1">
            Ideation
          </h4>
          <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[30px] md:col-span-2">
            Paper and digital wireframes
          </h6>
          <div className="grid grid-cols-2 md:flex md:justify-center gap-[10px] place-items-center col-span-3 mb-[30px]">
            <div className="justify-self-end">
              <img
                className="max-w-[200px] w-full"
                src={PaperWireframe1}
                alt=""
              />
            </div>
            <div className="justify-self-start">
              <img
                className="max-w-[200px] w-full"
                src={PaperWireframe2}
                alt=""
              />
            </div>
            <div className="justify-self-end">
              <img
                className="max-w-[200px] w-full"
                src={PaperWireframe3}
                alt=""
              />
            </div>
            <div className="justify-self-start">
              <img
                className="max-w-[200px] w-full"
                src={PaperWireframe4}
                alt=""
              />
            </div>
          </div>
          <div className="md:flex md:justify-center grid grid-cols-6 gap-[10px] items-center place-items-center col-span-3 mb-[50px]">
            <div className="col-span-2 justify-self-end">
              <img
                className="border border-black/20 max-w-[150px] w-full"
                src={InitialWireframe1}
                alt=""
              />
            </div>
            <div className="col-span-2">
              <img
                className="border border-black/20 max-w-[150px] w-full"
                src={InitialWireframe2}
                alt=""
              />
            </div>
            <div className="col-span-2 justify-self-start">
              <img
                className="border border-black/20 max-w-[150px] w-full"
                src={InitialWireframe3}
                alt=""
              />
            </div>
            <div className="col-span-2 col-start-2 justify-self-end">
              <img
                className="border border-black/20 max-w-[150px] w-full"
                src={InitialWireframe4}
                alt=""
              />
            </div>
            <div className="col-span-2 col-start-4 justify-self-start">
              <img
                className="border border-black/20 max-w-[150px] w-full"
                src={InitialWireframe5}
                alt=""
              />
            </div>
          </div>
          {/* <div className="md:bg-white md:rounded-3xl md:p-9 mb-[50px] md:col-span-3 max-w-[1000px] justify-self-center">
            <img src={LofiFlow} alt="Low Fidelity Flow" />
          </div> */}
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:mb-0 md:col-span-1">
            Usability study
          </h4>
          <div className="md:col-span-2 mb-[30px]">
            <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
              Refining my wireframes utilizing user feedback
            </h6>
            <p className="text-[16px] md:text-lg">
              After my initial low-fidelity prototype testing I discovered 3
              insights:
            </p>
            <ol className="list-decimal list-inside pl-3 text-[16px] md:text-lg font-thin mb-[30px]">
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Users need a more{" "}
                <span className="font-semibold">
                  intuitive way to add items to their cart
                </span>
                .
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Users need more{" "}
                <span className="font-semibold">
                  convenient options to contact their delivery driver
                </span>
                .
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Users need a more{" "}
                <span className="font-semibold">
                  intuitive check-out and order confirmation process
                </span>
                .
              </li>
            </ol>
            <p className="text-[16px] md:text-lg">
              To improve the user experience, I...
            </p>
            <ol className="list-decimal list-inside pl-3 text-[16px] md:text-lg font-thin">
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Increased{" "}
                <span className="font-semibold">
                  the size of the plus button icons
                </span>{" "}
                so they were more easily identifiable
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Created an{" "}
                <span className="font-semibold">
                  additional screen after the checkout process
                </span>{" "}
                that confirmed the user’s order
              </li>
              <li className="text-[16px] md:text-lg font-thin leading-7">
                Included a{" "}
                <span className="font-semibold">
                  “call” and “message” button
                </span>{" "}
                so users could contact their driver directly through the app
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto gap-[10px] md:gap-[30px] max-w-[1000px]">
          <BeachsideScreenDescription
            imageSrc1={InitialWireframe5}
            imageSrc2={AfterWireframe1}
            cap1="Before"
            cap2="After"
            heading="People were finding it difficult to add items to their cart."
            bullets={[
              "3 out of 5 participants tried clicking on the pictures to add items to the cart",
              "3 out of 5 participants saw use for having an additional pop-up when adding items to cart",
            ]}
            p1={formattedPar1}
            reverse={false}
          />
          <BeachsideScreenDescription
            imageSrc1={InitialWireframe2}
            imageSrc2={AfterWireframe2}
            cap1="Before"
            cap2="After"
            heading="People want to know that their order went through after checking out."
            bullets={[
              "3 out of 5 participants were asking for an order confirmation",
            ]}
            p1={formattedPar2}
            reverse={true}
          />
          <BeachsideScreenDescription
            imageSrc1={InitialWireframe3}
            imageSrc2={AfterWireframe3}
            cap1="Before"
            cap2="After"
            heading="People want to be able to contact their delivery driver."
            bullets={[
              "3 out of 5 participants were unable to contact the delivery driver.",
              "4 out of 5 participants expressed a desire to contact the delivery driver directly from the tracking page.",
            ]}
            p1={formattedPar3}
            reverse={false}
          />
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:mb-0 md:col-span-1">
            Usability Study #2
          </h4>
          <div className="md:col-span-2 flex flex-col gap-[30px]">
            <div className="mb-[30px]">
              <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
                Initial Mockups vs final mockups
              </h6>
              <p className="text-[16px] md:text-lg font-thin">
                After completing the first iteration of high-fidelity mockups, I
                facilitated another round of user testing. I discovered that...
              </p>
              <ol className="leading-7 list-decimal list-inside pl-3 mb-[10px] md:mb-[30px]">
                <li className="text-[16px] md:text-lg font-thin">
                  Design elements were way too{" "}
                  <span className="font-semibold">crowded</span>
                </li>
                <li className="text-[16px] md:text-lg font-thin">
                  There was <span className="font-semibold">inconsistency</span>{" "}
                  with spacing, button and icon sizes, and placement of design
                  elements
                </li>
                <li className="text-[16px] md:text-lg font-thin">
                  The color palette and typography were{" "}
                  <span className="font-semibold">distracting</span>
                </li>
                <li className="text-[16px] md:text-lg font-thin">
                  Certain page layouts were{" "}
                  <span className="font-semibold">confusing</span> and crowded
                </li>
              </ol>
              <p className="text-[16px] md:text-lg font-thin">
                I decided to make some changes:
              </p>
              <ol className="leading-7 list-decimal list-inside pl-3">
                <li className="text-[16px] md:text-lg font-thin">
                  Consistent sizing and placement of design elements using auto
                  layout
                </li>
                <li className="text-[16px] md:text-lg font-thin">
                  Choose a cohesive color palette that offers a sense of
                  approachability
                </li>
                <li className="text-[16px] md:text-lg font-thin">
                  Simplify typography with clean typeface choices
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-5 md:gap-[25px] md:flex-row">
          <BeachsideComparisons
            pinkImages={pinkImages1}
            blueImages={blueImages1}
          />
          <BeachsideComparisons
            pinkImages={pinkImages2}
            blueImages={blueImages2}
          />
        </div> */}
        <div className="mb-[30px] max-w-full">
          <ClickableCarousel
            slides={beachsideComparisonsArray}
            desiredWidth="200px"
          />
        </div>

        {/* <div className="flex justify-center">
          <VideoCard videoSrc={BeachsideVideo} />
        </div> */}
      </Section>
      {/* <Section>
        <div className="flex flex-col items-center gap-[10px]">
          <h4 className="font-helvetica text-xl md:text-2xl font-medium text-center">
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
      </Section> */}
      <Section>
        <div
          id="mySolutionBeachside"
          className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]"
        >
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:mb-0 md:col-span-1">
            The Solution
          </h4>
          <div className=" mb-[30px] md:col-span-2">
            <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
              BeachSide SnackShop mobile app
            </h6>
            <ul className="flex flex-col gap-[15px]">
              <li className="text-[16px] md:text-lg font-thin">
                With the BeachSide SnackShop mobile app, users can trust that
                they’ll have a seamless online food ordering experience.{" "}
                <span className="font-semibold">
                  The real-time delivery tracking will allow users to order at
                  any time during their day, empowering them to reclaim their
                  free time.
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-3 flex flex-col md:flex-row gap-5 md:gap-[60px] justify-center items-center mb-10 md:mb-[60px]">
            {/* Video */}
            <div className="flex justify-center">
              <VideoCard videoSrc={BeachsideVideo} />
            </div>

            <ClickableCarousel slides={beachsideCards} desiredWidth="225px" />

            {/* <div className="grid grid-cols-3 gap-x-[10px] gap-y-[15px] md:gap-y-0 max-w-[350px] self-center">
              <img src={BeachsideMenu} alt="Snackshop Menu" />
              <img src={BeachsideDetails} alt="Snackshop Item Details" />
              <img src={BeachsideCheckout} alt="Snackshop Checkout" />
              <img
                className="self-end"
                src={BeachsideConfirmation}
                alt="Order Confirmation"
              />
              <img
                className="self-end"
                src={BeachsideTracking1}
                alt="Order Tracking 1"
              />
              <img
                className="self-end"
                src={BeachsideTracking2}
                alt="Order Tracking 2"
              />
            </div> */}
          </div>
          <div className="col-span-2 col-start-2">
            <ul className="flex flex-col gap-[10px]">
              <li className="text-[16px] md:text-lg font-thin">
                <span className="font-semibold">Real-time tracking</span> and
                easy driver contacting allows users to feel confident that their
                order will arrive on time.
              </li>
              <li className="text-[16px] md:text-lg font-thin">
                <span className="font-semibold">
                  An intuitive layout and design
                </span>{" "}
                provides users with an easy and straightforward way to place
                their orders.
              </li>
              <li className="text-[16px] md:text-lg font-thin">
                Users can{" "}
                <span className="font-semibold">reclaim their free time</span>{" "}
                by directing their attention away from prepping home-cooked
                meals.
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <div className="md:grid md:grid-cols-[180px_1fr_1fr] md:gap-x-[50px]">
          <h4 className="uppercase md:text-right font-thin font-helvetica text-[16px] md:text-lg md:col-span-1 mb-[10px] md:mb-0">
            Wishes
          </h4>
          <div className="mb-[50px] md:col-span-2">
            <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
              Accessibility considerations and refining the UI
            </h6>
            <ul className="list-disc list-inside pl-3 text-[16px] md:text-lg font-thin">
              <li className="leading-7">
                Prepare designs to meet WCAG guidelines
              </li>
              <li className="leading-7">
                Consider different accessibility features: different language
                options and how the design can be optimized for screen readers
              </li>
              <li className="leading-7">
                Conduct a third usability test to pinpoint any features that may
                be missing or existing features that could be improved upon
              </li>
            </ul>
          </div>
          <h4 className="uppercase md:text-right justify-self-end font-thin font-helvetica text-[16px] md:text-lg mb-[10px] md:mb-0 md:col-span-1">
            Learnings
          </h4>
          <div className="md:col-span-2">
            <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
              Screens are scrollable and consistency in design elements is key
            </h6>
            <ul className="flex flex-col gap-[10px]">
              <li className="text-[16px] md:text-lg font-thin">
                When I designed my first high-fidelity mockup, I was unfamiliar
                with auto layout. After experimenting with it, I learned how
                helpful it was in creating consistent and well spaced out
                layouts. I also realized that I can design screens that are
                scrollable, meaning there was no need for me to cram every
                element into a fixed size screen.
              </li>
            </ul>
          </div>
        </div>
      </Section>
      {/* <Section>
        <div className="flex flex-col items-center gap-[10px]">
          <h4 className="font-helvetica text-xl md:text-2xl font-medium text-center">
            Thank you for sticking around!
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
      </Section> */}
    </div>
  );
};

export default Beachside;
