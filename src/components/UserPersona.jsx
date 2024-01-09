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
        <div className="max-w-[375px] mb-[35px] h-auto mx-auto">
          <img src={avatar} alt={name} />
        </div>
        <div className="mb-[45px] md:mb-5">
          <div className="mb-[20px] gap-5 md:flex md:gap-5">
            <h6 className="font-helvetica font-medium text-2xl md:text-3xl">
              {name}
            </h6>
            <p className="font-thin text-lg">{alias}</p>
          </div>
          <div className="flex flex-col gap-[15px] mb-[20px]">
            <p className="text-xl">
              <span className="font-helvetica">AGE: </span>
              {age} years old
            </p>
            <p className="text-xl">
              <span className="font-helvetica">LOCATION: </span> Boston, MA
            </p>
            <p className="text-xl">
              <span className="font-helvetica">OCCUPATION: </span>
              {occupation}
            </p>
          </div>
        </div>

        <p className="col-span-2">{description}</p>
      </div>
      <div className="flex flex-col gap-5 md:text-xl font-thin">
        <div>
          <p className="font-helvetica mb-2">FRUSTRATIONS:</p>
          <ul className="list-disc list-inside">
            {frustrations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-helvetica mb-2">GOALS:</p>
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
