import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyWidget = ({ username, duration }) => {
  return (
    <div>
      <InlineWidget
        url={`https://calendly.com/bysubliminal/15min`}
        styles={{
          height: "1000px",
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        }}
        prefill={{
          email: "example@example.com",
          firstName: "",
          lastName: "",
          name: " ",
          customAnswers: {
            a1: "Tell us a little about your project !",
          },
        }}
        utm={{
          utmCampaign: "Spring Sale 2019",
          utmContent: "Shoe and Shirts",
          utmMedium: "Ad",
          utmSource: "Facebook",
          utmTerm: "Spring",
        }}
      />
    </div>
  );
};

export default CalendlyWidget;
