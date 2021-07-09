import React, { useState, useEffect } from "react";
import sanityClient from "../../../client"
import Logo from "../../../images/stacked/text-only.png";

const Purpose = () => {

  const [ annualReports, setAnnualReports ] = useState([])
  const [ statements, setStatements ] = useState([])

  useEffect(()=>{
    getReports()
    getStatements()
  },[])

  async function getReports (){
    const data = await sanityClient
    .fetch(`*[_type == "annualReport"]{
      name,
      "pdfLink" : pdf.asset->url
    }`)
    setAnnualReports(data)
  }

  async function getStatements (){
    const data = await sanityClient
    .fetch(`*[_type == "statements"]{
      name,
      "pdfLink" : pdf.asset->url
    }`)
    setStatements(data)
  }

  return (
    <main>
      <article className="banner-image w-full h-full">
        <section
          style={{
            backgroundImage: "url(images/purpose/OurPurpose1.jpg)",
          }}
          className="w-full h-full md:h-full relative  bg-cover bg-top bg-no-repeat"
        >
          <span
            className="w-full h-full md:h-full absolute opacity-50 bg-black bg-cover"
            id="career-overlay"
          />

          <div className="banner-text sticky flex flex-col justify-between">
            <div className="sticky pt-4 pl-4 h-14 w-1/2">
              <img src={Logo} alt="Con mi madre logo" className="z-10" />
            </div>

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-white text-4xl font-medium tracking-widest text-center">
              <header id="title1">Our Purpose</header>
            </div>
          </div>
        </section>
      </article>

      <article>
        {/* Future Section */}
        <section className="bg-blue-500 text-xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-6">
          <h3 className="text-4xl font-semibold pb-3">Latinas Are The Future</h3>
          <p className="font-light">
            In the next few years, the majority of all women in Texas will be
            Latina. This is why we must invest in their social emotional and academic wellbeing.
          </p>
          <p className="font-light">
            Latinas are the most at risk for suffering from mental health issues
            due to social, economic, political, cultural, and environmental
            factors.
          </p>
        </section>

        {/* Our Future */}
        <section className="flex lg:pl-10 flex-col-reverse gap-6 p-6 bg-gray-500 lg:flex-row">
          <div className="flex flex-col justify-center lg:w-1/2">
            <h3 className="text-3xl font-semibold pb-3">Our History</h3>
            <p className="font-light pb-6">
              The drive behind the founding of Con Mi MADRE stemmed from a
              statistic that a Latina baby had less than a 1% chance of obtaining
              a college education. Initially named the Hispanic Mother-Daughter
              Program (HMDP) in 1992 as a project of the Junior League of Austin,
              the program set out to create positive change in the lives of young
              Latinas by empowering them to earn a college education. In 2008, the
              HDMP transitioned into its own organization, adopting the name Con
              Mi MADRE, becoming a freestanding and independent 501(c)(3)
              nonprofit organization.
            </p>
            <p className="font-light pt-6 pb-3">
              From inception, Con Mi MADRE’s focus has been on helping young
              Latinas graduate from high school, enroll in college, and
              successfully earn a college degree. We believe and understand the
              importance of parent engagement in the educational process and
              intentionally engage mothers in every aspect of our programming. To
              date, CMM has assisted over 3,000 mother-daughter teams on their
              journey to and through post-secondary education. We are building our
              nation’s educated workforce and the next generation of confident and
              diverse female leaders.
            </p>
          </div>
          <div className="flex flex-col justify-center lg:items-end lg:w-1/2 pt-3">
            <img
              id="participants"
              className="w-full h-auto lg:p-4 xl:p-8"
              src="/images/purpose/OurPurposePic.jpg"
              alt="Program participants"
            />
          </div>
        </section>

        {/* Reports */}
        <section className="bg-blue-500 space-y-3 text-lg text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-6">
          <h2 className="text-3xl pb-3 font-semibold">Con Mi MADRE Reports</h2>
          <div>
            <h3 className="text-xl font-semibold">Annual Reports:</h3>
            {annualReports && annualReports.map((report, idx) => (
              <div key={idx}>
                <a
                  className="hover:text-pink-500 font-light"
                  href={`${report.pdfLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {report.name}
                </a>
                <br />
              </div>
            ))}
          </div>
          <div>
            {statements.length >= 1 ? statements.map((statement, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold">Statements:</h3>
                <a
                  className="hover:text-pink-500 font-light"
                  href={`${statement.pdfLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {statement.name}
                </a>
                <br />
              </div>
            ))
            : null
            }
          </div>
        </section>
      </article>
    </main>
  );
};

export default Purpose;
