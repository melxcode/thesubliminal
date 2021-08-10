import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = ({ username, duration }) => {
  return (
    <div>
      <InlineWidget
        url={`https://calendly.com/${username}/${duration}`}
        styles={{
          height: "1000px",
        }}
        pageSettings={{}}
        prefill={{
          email: "example@mail.com",
          firstName: "",
          lastName: "",
          name: "",
          customAnswers: {
            a1: "Lets talk about your idea ! ",
          },
        }}
      />
    </div>
  );
};

export default CalendlyWidget;
