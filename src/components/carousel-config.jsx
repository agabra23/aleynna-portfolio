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
import PinkLogin from "../assets/PinkLogin.png";
import PinkMenu from "../assets/PinkMenu.png";
import PinkDetails from "../assets/PinkDetails.png";
import PinkCart from "../assets/PinkCart.png";
import PinkCheckout from "../assets/PinkCheckout.png";
import PinkConfirmation from "../assets/PinkConfirmation.png";
import PinkDriver from "../assets/PinkDriver.png";
import PinkTracking from "../assets/PinkTracking.png";
import BlueLogin from "../assets/BlueLogin.png";
import BlueLogin2 from "../assets/BlueLogin2.png";
import BlueMenu from "../assets/BlueMenu.png";
import BlueDetails from "../assets/BlueDetails.png";
import BlueDetails2 from "../assets/BlueDetails2.png";
import BlueDetails3 from "../assets/BlueDetails3.png";
import BlueCart from "../assets/BlueCart.png";
import BlueCheckout from "../assets/BlueCheckout.png";
import BlueCheckout2 from "../assets/BlueCheckout2.png";
import BlueConfirmation from "../assets/BlueConfirmation.png";
import BlueConfirmation2 from "../assets/BlueConfirmation2.png";
import BlueDriver from "../assets/BlueDriver.png";
import BlueTracking from "../assets/BlueTracking.png";

import DS_1 from "../assets/DS1.png";
import DS_2 from "../assets/DS2.png";
import FO from "../assets/FO.png";
import GC from "../assets/GC.png";
import MG from "../assets/MG.png";
import PDT from "../assets/PDT.png";
import WII from "../assets/WII.png";
import IMH from "../assets/IMH.png";
import IC from "../assets/IC.png";
import ArtPiece from "./ArtPiece";

const artCards = [
  <ArtPiece
    imgSrc={DS_1}
    medium="Acrylic on canvas"
    title="Dear Somebody #1"
    maxWidth="800px"
  />,
  <ArtPiece
    imgSrc={DS_2}
    medium="Acrylic on canvas"
    title="Dear Somebody #2"
    maxWidth="800px"
  />,
  <ArtPiece
    imgSrc={GC}
    medium="Acrylic on canvas"
    title="Guilty Conscience"
    maxWidth="400px"
  />,
  <ArtPiece imgSrc={MG} medium="Acrylic on panel" title="The Male Gaze" />,
  <ArtPiece imgSrc={FO} medium="Graphite on paper" title="Frank Ocean" />,
  <ArtPiece
    imgSrc={PDT}
    medium="Digital on Procreate"
    title="Please Don't Touch The Artwork"
  />,
  <ArtPiece imgSrc={WII} medium="Digital on Procreate" title="What Is It?" />,
  <ArtPiece imgSrc={IMH} medium="Digital on Procreate" title="In My Head" />,
  <ArtPiece imgSrc={IC} medium="Digital on Procreate" title="My Inner Child" />,
];

const autoCardDetails = {
  0: {
    imgUrl: Carousel1,
    title: "Home Screen",
  },

  1: {
    imgUrl: Carousel10,
    title: "Edit Profile Screen",
  },

  2: {
    imgUrl: Carousel2,
    title: "Connection Screen",
  },

  3: {
    imgUrl: Carousel3,
    title: "Top 5 Screen",
  },

  4: {
    imgUrl: Carousel4,
    title: "Found a Match Screen",
  },

  5: {
    imgUrl: Carousel5,
    title: "Match Screen",
  },

  6: {
    imgUrl: Carousel6,
    title: "Match Profile Screen",
  },

  7: {
    imgUrl: Carousel7,
    title: "Table Screen",
  },

  8: {
    imgUrl: Carousel9,
    title: "Message Screen",
  },
};

const autoBeachsideCards = {
  0: {
    imgUrl: BlueLogin,
    title: "Login Screen",
  },

  1: {
    imgUrl: BlueMenu,
    title: "Menu",
  },

  2: {
    imgUrl: BlueDetails,
    title: "Item Details",
  },

  3: {
    imgUrl: BlueDetails3,
    title: "Add to cart confirmation",
  },

  4: {
    imgUrl: BlueDetails2,
    title: "Item added",
  },

  5: {
    imgUrl: BlueCart,
    title: "Cart screen",
  },

  6: {
    imgUrl: BlueCheckout,
    title: "Checkout screen",
  },

  7: {
    imgUrl: BlueCheckout2,
    title: "Checkout Confirmation",
  },

  8: {
    imgUrl: BlueConfirmation,
    title: "Order confirmation",
  },

  9: {
    imgUrl: BlueDriver,
    title: "Driver information",
  },

  10: {
    imgUrl: BlueTracking,
    title: "Driver tracking screen",
  },

  11: {
    imgUrl: BlueConfirmation2,
    title: "Enjoy your food screen",
  },
};

const cardArray = [
  <img
    className={`w-full max-w-[250px]`}
    src={Carousel1}
    alt="Login Scscreenreen"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={Carousel10}
    alt="Edit profile screen"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={Carousel2}
    alt="Connection screen"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={Carousel3}
    alt="Select podcasts screen"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={Carousel4}
    alt="Match found page"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={Carousel5}
    alt="Match profile page"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={Carousel6}
    alt="Match profile extended"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={Carousel7}
    alt="Table meet-up screen"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={Carousel9}
    alt="Messaging screen"
  />,
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

const beachsideComparisonsArray = [
  <div className="flex justify-center gap-[10px] md:gap-[30px] w-full items-center">
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={PinkLogin}
        alt="Old Login Screen"
      />
    </div>
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={BlueLogin}
        alt="New Login Screen"
      />
    </div>
  </div>,
  <div className="flex justify-center gap-[10px] md:gap-[30px] w-full items-center">
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={PinkMenu}
        alt="Old Menu Screen"
      />
    </div>
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={BlueMenu}
        alt="New Menu Screen"
      />
    </div>
  </div>,
  <div className="flex justify-center gap-[10px] md:gap-[30px] w-full items-center">
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={PinkDetails}
        alt="Old Item Details Screen"
      />
    </div>
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={BlueDetails}
        alt="New Item Details Screen"
      />
    </div>
  </div>,
  <div className="flex justify-center gap-[10px] md:gap-[30px] w-full items-center">
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={PinkCart}
        alt="Old Cart Screen"
      />
    </div>
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={BlueCart}
        alt="New Cart Screen"
      />
    </div>
  </div>,
  <div className="flex justify-center gap-[10px] md:gap-[30px] w-full items-center">
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={PinkCheckout}
        alt="Old Checkout Screen"
      />
    </div>
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={BlueCheckout}
        alt="New Checkout Screen"
      />
    </div>
  </div>,
  <div className="flex justify-center gap-[10px] md:gap-[30px] w-full items-center">
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={PinkConfirmation}
        alt="Old Confirmation Screen"
      />
    </div>
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={BlueConfirmation}
        alt="New Confirmation Screen"
      />
    </div>
  </div>,
  <div className="flex justify-center gap-[10px] md:gap-[30px] w-full items-center">
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={PinkDriver}
        alt="Old Driver Screen"
      />
    </div>
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={BlueDriver}
        alt="New Driver Screen"
      />
    </div>
  </div>,
  <div className="flex justify-center gap-[10px] md:gap-[30px] w-full items-center">
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={PinkTracking}
        alt="Old Tracking Screen"
      />
    </div>
    <div className="flex-1">
      <img
        className="w-full max-w-[200px]"
        src={BlueTracking}
        alt="New Tracking Screen"
      />
    </div>
  </div>,
];

const beachsideCards = [
  <img className={`w-full max-w-[250px]`} src={BlueLogin} alt="Login screen" />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueLogin2}
    alt="Login screen"
  />,

  <img className={`w-full max-w-[250px]`} src={BlueMenu} alt="Menu screen" />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueDetails}
    alt="Item details screen"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueDetails3}
    alt="Add items pop-up"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueDetails2}
    alt="Items in cart"
  />,

  <img className={`w-full max-w-[250px]`} src={BlueCart} alt="Cart screen" />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueCheckout}
    alt="Checkout screen"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueCheckout2}
    alt="Checkout confirmation"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueConfirmation}
    alt="Order confirmation"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueDriver}
    alt="Driver information"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueTracking}
    alt="Driver tracking screen"
  />,

  <img
    className={`w-full max-w-[250px]`}
    src={BlueConfirmation2}
    alt="Enjoy your food screen"
  />,
];

export {
  autoCardDetails,
  cardArray,
  personaArray,
  mockupArray,
  beachsideComparisonsArray,
  autoBeachsideCards,
  beachsideCards,
  artCards,
};
