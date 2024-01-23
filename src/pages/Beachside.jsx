import React from "react";
import { useLayoutEffect } from "react";
import AutoplayCarousel from "../components/AutoplayCarousel";

import Beach2 from "../assets/Beach2.png";
import Beach1 from "../assets/Beach1.png";
import BeachsideScreenDescription from "../components/BeachsideScreenDescription";
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
              project to{" "}
              <span className="font-semibold">
                enhance the customer’s experience by designing a food delivery
                tracking app
              </span>{" "}
              for a local oceanside restaurant named BeachSide SnackShop.
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
              I discovered that{" "}
              <span className="font-semibold">
                busy adults prioritize spending time on aspects of their lives
                that are important to them
              </span>
              , such as family, work, and hobbies, and are often{" "}
              <span className="font-semibold">
                determined to find a quick and efficient way to acquire healthy
                meals through online ordering and delivery
              </span>
              .
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
              <span className="font-semibold">
                The BeachSide SnackShop mobile app offers users a fast and
                efficient online food ordering experience with real-time
                delivery tracking.
              </span>{" "}
              Its objective is to{" "}
              <span className="font-semibold">
                empower busy adults to reclaim their free time
              </span>{" "}
              by enabling them to skip in-store lines and eliminate the hassle
              of preparing meals themselves.
            </p>
            <button className="text-[16px] hover:bg-black hover:text-offwhite transition-colors duration-200  font-helvetica font-normal px-6 py-3 mt-[30px] mb-[30px] rounded-full border-2 border-solid border-black">
              <a href="#mySolutionBeachside">Jump to solution</a>
            </button>
          </div>
        </div>
        <AutoplayCarousel gap="10px" slides={autoBeachsideCards} />
      </Section>
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
                  To acquire the most accurate insights, I decided to target{" "}
                  <span className="font-semibold">
                    adults, ages 18 years or older, of any gender, who are
                    working professionals, college students, retirees, or busy
                    parents.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
                What do I want to learn from the users?
              </h6>
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[16px] md:text-lg font-thin">
                  <span className="font-semibold">
                    Understand user’s needs and frustrations
                  </span>{" "}
                  when using a delivery tracking app, as well as their process
                  and behaviors with tasks related to my product so that I can
                  create the most effective mobile app.
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-xl md:text-2xl font-medium font-helvetica mb-[10px]">
                Plan of attack
              </h6>
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[16px] md:text-lg font-thin">
                  <span className="font-semibold">
                    Conduct a competitive audit and 1-on-1 interviews
                  </span>{" "}
                  to gather insights, challenges, and pain-points for our
                  potential users.
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
                Busy adults often find themselves{" "}
                <span className="font-semibold">
                  wasting time navigating through overwhelming and confusing
                  online food ordering systems,{" "}
                </span>
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
                tracking,{" "}
                <span className="font-semibold">
                  I observed that their interfaces can become overwhelming due
                  to the multitude of additional services they provide.
                </span>{" "}
                For first-time users,{" "}
                <span className="font-semibold">
                  it can be challenging to pinpoint exactly what they are
                  looking for
                </span>
                , whether it’s a specific restaurant or menu item.
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
                Users{" "}
                <span className="font-semibold">
                  value spending time on aspects of their lives that are
                  important to them,
                </span>{" "}
                like family and work
              </li>
              <li className="leading-7">
                Users{" "}
                <span className="font-semibold">
                  don't want to waste time using confusing and overwhelming
                  interfaces
                </span>
              </li>
              <li className="leading-7">
                Users want a{" "}
                <span className="font-semibold">
                  quick and easy way to order and track
                </span>{" "}
                food online
              </li>
            </ul>
          </div>
        </div>
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
                  <span className="font-semibold">
                    Consistent sizing and placement
                  </span>{" "}
                  of design elements using auto layout
                </li>
                <li className="text-[16px] md:text-lg font-thin">
                  Choose a{" "}
                  <span className="font-semibold">cohesive color palette</span>{" "}
                  that offers a sense of approachability
                </li>
                <li className="text-[16px] md:text-lg font-thin">
                  <span className="font-semibold">Simplify typography</span>{" "}
                  with clean typeface choices
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="mb-[30px] max-w-full">
          <ClickableCarousel
            slides={beachsideComparisonsArray}
            desiredWidth="200px"
          />
        </div>
      </Section>
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
                Prepare designs to{" "}
                <span className="font-semibold">meet WCAG guidelines</span>
              </li>
              <li className="leading-7">
                <span className="font-semibold">
                  Consider different accessibility features
                </span>
                : different language options and how the design can be optimized
                for screen readers
              </li>
              <li className="leading-7">
                <span className="font-semibold">
                  Conduct a third usability test
                </span>{" "}
                to pinpoint any features that may be missing or existing
                features that could be improved upon
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
                with auto layout. After experimenting with it,{" "}
                <span className="font-semibold">
                  I learned how helpful it was in creating consistent and well
                  spaced out layouts.
                </span>{" "}
                I also realized that{" "}
                <span className="font-semibold">
                  I can design screens that are scrollable,
                </span>{" "}
                meaning there was no need for me to cram every element into a
                fixed size screen.
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Beachside;
