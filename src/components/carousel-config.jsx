import Carousel1 from "../assets/carousel/Carousel1.png";
import Carousel2 from "../assets/carousel/Carousel2.png";
import Carousel3 from "../assets/carousel/Carousel3.png";
import Carousel4 from "../assets/carousel/Carousel4.png";
import Carousel5 from "../assets/carousel/Carousel5.png";
import Carousel6 from "../assets/carousel/Carousel6.png";
import Carousel7 from "../assets/carousel/Carousel7.png";
import Carousel8 from "../assets/carousel/Carousel8.png";
import Carousel9 from "../assets/carousel/Carousel9.png";
import Carousel10 from "../assets/carousel/Carousel10.png";
import Carousel11 from "../assets/carousel/Carousel11.png";
import UserPersona from "./UserPersona";
import MattAvatar from "../assets/MattAvatar.png";
import KatAvatar from "../assets/KatAvatar.png";
import Mockup1 from "../assets/Mockup1.png";
import Mockup2 from "../assets/Mockup2.png";
import Mockup3 from "../assets/Mockup3.png";

const autoCardDetails = {
  0: {
    imgUrl: Carousel1,
    title: "Home Screen",
  },

  1: {
    imgUrl: Carousel2,
    title: "Connection Screen",
  },

  2: {
    imgUrl: Carousel3,
    title: "Top 5 Screen",
  },

  3: {
    imgUrl: Carousel4,
    title: "Found a Match Screen",
  },

  4: {
    imgUrl: Carousel5,
    title: "Match Screen",
  },

  5: {
    imgUrl: Carousel6,
    title: "Match Profile Screen",
  },

  6: {
    imgUrl: Carousel7,
    title: "Table Screen",
  },

  7: {
    imgUrl: Carousel8,
    title: "New User Screen",
  },

  8: {
    imgUrl: Carousel9,
    title: "Message Screen",
  },

  9: {
    imgUrl: Carousel10,
    title: "Edit Profile Screen",
  },

  10: {
    imgUrl: Carousel11,
    title: "Thanks For Checking In Screen",
  },
};
const cardArray = [
  <img className={`w-full max-w-[250px]`} src={Carousel1} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel2} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel3} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel4} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel5} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel6} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel7} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel8} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel9} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel10} alt="" />,

  <img className={`w-full max-w-[250px]`} src={Carousel11} alt="" />,
];

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
    eager to share any new findings she learns with the people in her life, but
    sometimes they aren’t interested or don't care.
  </p>
);

const personaArray = [
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
  />,
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
  />,
];

const mockupArray = [
  <img
    className="object-cover md:max-w-[425px] md:min-w-[100px] h-auto"
    src={Mockup1}
    alt="Physical Space Mockup 1"
  />,
  <img
    className="object-cover md:max-w-[425px] md:min-w-[100px] h-auto"
    src={Mockup2}
    alt="Physical Space Mockup 2"
  />,
  <img
    className="object-cover md:max-w-[425px] md:min-w-[100px] h-auto"
    src={Mockup3}
    alt="Physical Space Mockup 3"
  />,
];

export { autoCardDetails, cardArray, personaArray, mockupArray };
