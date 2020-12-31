import React from "react";

const Purpose = () => {
  return (
    <div>
      <div className="bg-yellow-500 flex justify-start content-start w-full h-1/3 bg-center bg-cover bg-no-repeat">
        <div className="text-gray-500 text-2xl font-bold tracking-widest pt-40 sm:text-xl md:text-4xl lg:text-5xl lg:pt-40">
          <h1>Our Purpose</h1>
        </div>
      </div>
      {/* Future Section */}
      <div className="flex flex-col p-4 gap-4 text-lg bg-blue-500 text-gray-500">
        <h2 className="text-xl">LATINAS ARE THE FUTURE</h2>
        <p>
          In the next few years, the majority of all women in Texas will be
          Latina.
        </p>
        <p>
          Latinas are the most at risk for suffering from mental health issues
          due to social, economic, political, cultural, and environmental
          factors.
        </p>
      </div>
      {/* Our Future */}
      <div className="flex flex-col p-4 gap-4 text-lg bg-gray-500 text-blue-500">
        <h2 className="text-xl">OUR HISTORY</h2>
        <p>
          The drive behind the founding of Con Mi MADRE stemmed from a statistic
          that a Latina baby had less than a 1% chance of obtaining a college
          education. Initially named the Hispanic Mother-Daughter Program (HMDP)
          in 1992 as a project of the Junior League of Austin, the program set
          out to create positive change in the lives of young Latinas by
          empowering them to earn a college education. In 2008, the HDMP
          transitioned into its own organization, adopting the name Con Mi
          MADRE, becoming a freestanding and independent 501(c)(3) nonprofit
          organization.
        </p>
        <p>
          From inception, Con Mi MADRE’s focus has been on helping young Latinas
          graduate from high school, enroll in college, and successfully earn a
          college degree. We believe and understand the importance of parent
          engagement in the educational process and intentionally engage mothers
          in every aspect of our programming. To date, CMM has assisted over
          3,000 mother-daughter teams on their journey to and through
          post-secondary education. We are building our nation’s educated
          workforce and the next generation of confident and diverse female
          leaders. We will add text here
        </p>
      </div>
      {/* Reports */}
      <div className="flex flex-col p-4 gap-4 text-lg bg-blue-500 text-gray-500">
        <h2 className="text-xl">CON MI MADRE REPORTS</h2>
        <h3>Annual Reports</h3>
        <ul>
          <li>Links to PDFs</li>
        </ul>
        <h3>Statements</h3>
        <ul>
          <li>Links to PDFs</li>
        </ul>
      </div>
      {/* Our Team */}
      <div className="bg-gray-500">
        <div className="bg-yellow-500 h-48">Our Team Banner Here</div>
        <div>
          <h3>Staff Pics with Bios</h3>
        </div>
        <div>
          <h2>Board</h2>
          <p>Executive Committee</p>
          <p>Additional Board Members</p>
        </div>
      </div>
      {/* Careers */}
      <div className="bg-blue-500 text-gray-500 flex flex-col gap-4 p-4">
        <h2>Careers</h2>
        <p>
          Con Mi MADRE is looking for passionate, self-starters who want to
          contribute to building our Nation's future Latina leaders and educated
          workforce. With our five-pillars, unique curriculum and over 20 years
          working with young Latinas and their mothers, we believe we have what
          it takes to achieve our vision!
        </p>
        <p>
          Please look at our current openings for opportunities to join our
          familia!
        </p>
        <h2>Current Openings</h2>
        <p>There are no openings at this time</p>
        <h2>Interships</h2>
        <h3>Programming Intern (Central Texas & Fort Worth chapters)</h3>
        <p>
          Con Mi MADRE offers opportunities for current social work students to
          help with the implementation and execution of programming services.
          Interested students must reach out to their School of Social Work
          Field Office to initiate this process.
        </p>
        <h3>Communications Intern (Central Texas or Fort Worth chapter)</h3>
        <p>
          Con Mi MADRE is seeking a creative and dynamic student to assist in
          marketing and communications efforts (part-time). Click here for more
          information
        </p>
        <h3>Development Intern (Central Texas chapter)</h3>
        <p>
          Con Mi MADRE is seeking an organized and passionate student to assist
          with fundraising, grants, and events (part-time). Click here for more
          information
        </p>
      </div>
    </div>
  );
};

export default Purpose;
