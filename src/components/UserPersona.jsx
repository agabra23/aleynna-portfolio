import React from "react";

const UserPersona = ({
  avatar,
  name,
  alias,
  age,
  occupation,
  description,
  frustrations,
  goals,
}) => {
  return (
    <div className="bg-white rounded-3xl p-[35px] text-[16px] md:grid md:grid-cols-[1.5fr_1fr] gap-x-11">
      <div className="md:grid md:grid-cols-[1fr_1.5fr] gap-x-9 mb-[45px] md:mb-0">
        <div className="max-w-[375px] mb-[30px] h-auto mx-auto">
          <img src={avatar} alt={name} />
        </div>
        <div className="mb-[30px]">
          <div className="mb-[30px] gap-[10px] md:flex">
            <h6 className="font-helvetica font-medium md:text-2xl text-xl">
              {name}
            </h6>
            <p className="font-thin text-[16px] md:text-lg">{alias}</p>
          </div>
          <div className="flex flex-col">
            <p className="md:text-lg text-[16px] font-thin">
              <span className="font-helvetica">AGE: </span>
              {age} years old
            </p>
            <p className="md:text-lg text-[16px] font-thin">
              <span className="font-helvetica">LOCATION: </span> Boston, MA
            </p>
            <p className="md:text-lg text-[16px] font-thin">
              <span className="font-helvetica">OCCUPATION: </span>
              {occupation}
            </p>
          </div>
        </div>

        {description}
      </div>
      <div className="flex flex-col gap-5 md:text-lg text-[16px] font-thin">
        <div>
          <p className="font-helvetica mb-0 font-thin md:text-lg text-[16px] ">
            FRUSTRATIONS:
          </p>
          <ul className="list-disc list-inside">
            {frustrations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-helvetica mb-0 font-thin md:text-lg text-[16px] ">
            GOALS:
          </p>
          <ul className="list-disc list-inside">
            {goals.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserPersona;
