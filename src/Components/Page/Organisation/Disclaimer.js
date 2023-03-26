import { useEffect } from "react";

function Disclaimer() {
  let url = window.location.origin;
  useEffect(() => {
    const body = document.querySelector("#root");

    body.scrollIntoView(
      {
        behavior: "smooth",
      },
      500
    );
  }, []);
  return (
    <div className="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem] pb-[2.75rem]">
      <img
        src="/img/beams-basic.png"
        alt=""
        className="absolute top-0 left-1/2 -ml-[39rem] w-[113.125rem] max-w-none"
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[40.5rem] pt-20 text-center pb-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-kazari sm:text-5xl">
            Disclaimer
          </h1>
          {/* <p className="mt-4 text-base leading-7 text-slate-600">Last updated on November 2, 2021</p> */}
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto  max-w-[45rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
          <p>
            This information contained in this website is for general
            information purposes only. The information is provided by E-COMMERCE
            and while we endeavour to maintain the information upto date and
            accurate, we make no representation or warranties of any kind,
            express or implied, about the accuracy, completeness, reliability
            ,suitability or availability with respect to the website or the
            information, products, services or related graphics, images and
            contents contained on the website for any purpose. Any reliance you
            place on such information is therefore strictly at your own risk.
          </p>
          <br />
          <p>
            Under no circumstances will we be liable for any loss or damage
            including without limitation , indirect or consequential loss or
            damage, or any loss or damage whatsoever arising from loss of data
            or profits arising out of ,or in connection with ,the use of this
            website.
          </p>
          <br />
          <p>
            Through this website you are able to link to other websites which
            are not under the control of E-commerce. We have not control or
            domain over the nature, content and availability of those sites. The
            inclusion of any links does not necessarily imply a recommendation
            or endorse the views expressed within them.
          </p>
          <br />
          <p>
            Every effort is made to keep the website up and running smoothly.
            However E-commerce takes no responsibility for, and will not be
            liable for ,the website being temporarily unavailable due to
            technical issues beyond our control.
          </p>
          <br />
          <p>
            While the information on this website has been verified to the best
            of our abilities ,we cannot guarantee that there are no mistakes or
            errors.
          </p>
          <br />
          <p>
            We reserve the right to change this policy at any given time, of
            which you may be promptly updated . If you want to make sure that
            you are up to date with the latest changes, we advise you to
            frequently visit this page.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
