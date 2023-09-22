import Script from "next/script";
import React from "react";

// <Script strategy="afterInteractive|beforeInteractive|lazyOnload|worker>"
// default = afterInteractive, so no need to specify in this case
const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=mockId" />
      <Script id="google-analytics-pretend">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag("js", new Date()); gtag("config", "GE720JHXSJ1");`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
