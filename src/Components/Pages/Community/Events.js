import React from "react";

import EventsBanner from "../../../images/events/EventsBanner.jpg";
// import Event2017A from "../../../images/events/2017/Corazon-2017-1.jpg";
// import Event2017B from "../../../images/events/2017/Corazon-2017-2.jpg";
// import Event2017C from "../../../images/events/2017/Corazon-2017-3.jpg";
// import Event2017D from "../../../images/events/2017/Corazon-2017-4.jpg";
// import Event2018A from "../../../images/events/2018/Corazon-2018-1.jpg";
// import Event2018B from "../../../images/events/2018/Corazon-2018-2.jpg";
// import Event2018C from "../../../images/events/2018/Corazon-2018-3.jpg";
// import Event2019A from "../../../images/events/2019/Corazon-2019-1.jpg";
// import Event2019B from "../../../images/events/2019/Corazon-2019-2.jpg";
// import Event2019C from "../../../images/events/2019/Corazon-2019-3.jpg";
// import Event2019D from "../../../images/events/2019/Corazon-2019-4.jpg";

import EventsGallery from "./EventsGallery";

import Logo from "../../../images/stacked/text-only.png";

const Services = () => {
  return (
    <>
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: `url(${EventsBanner})`,
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

            <div className="career-title sticky z-10 flex self-end pr-4 pb-2 text-gray-500 text-4xl font-medium tracking-widest text-center">
              <div id="title1">Events</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl pt-6">
        <h3 className="text-3xl pb-6 text-center">Corazón Awards</h3>
        <EventsGallery />
      </div>

      {/* 2021 Upcoming Event */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">
          Con Mi MADRE Annual Corazón Awards - 2021
        </h3>
        <p>
          Information coming soon! Please follow us on social media to be
          notified about this year’s event!
        </p>
      </div>

      {/* Past Awards Honorees */}
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">Past Annual Corazón Honorees</h3>
        <h3 className="text-3xl pb-6">The Con Mi MADRE Award</h3>
        <p>
          An educated successful Latina; an example of what we would like to see
          as a product of our program; someone who is living out our mission
        </p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">The Corazón Award</h3>
        <p>
          A leader in the community who has made significant contributions to
          the education and empowerment of Latinas; someone who has "poured
          their heart" into the success of Latina youth and this was outside
          their job requirements
        </p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">The Mariposa Award</h3>
        <p>
          Someone closely associated with Con Mi MADRE (e.g., alum, previous
          employee) who has made significant contributions in their field AND
          has brought recognition to Con Mi MADRE through those contributions.
          This is someone whose efforts have helped CMM "spread its wings and
          fly."
        </p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2020</h3>
        <p>Blanca & Bianca Garcia</p>
        <p>Lupe Morin</p>
        <p>Texas Capital Bank, Chris Rios & Robert Fraco Robert Franco</p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2019</h3>
        <p>Yvette Ruiz</p>
        <p>Applied Materials Foundation</p>
        <p>Sonia/Briana Cuero</p>
        <p>Priscilla/Savannah Zambrano</p>
        <p>Patricia/Elizabeth Zarate</p>
        <p>Maria Evelia/Ideyanira Rodriguez</p>
        <p>Connie Suarez/Karen Gonzalez</p>
        <p>Bernarda Juarez/Irais & Alma Romero</p>
        <p>Pilar/Anais Cruz</p>
        <p>Edelmira/Cynthia De La Cruz</p>
        <p>Santos Gomez/Katie & Diana Garcia</p>
        <p>Silvia/Esmeralda & Laura Aguilar</p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2018</h3>
        <p>Lloyd/Libby Doggett</p>
        <p>Dr. Judith Loredo</p>
        <p>Sandy Alcala</p>
        <p>Sonia Castellanos</p>
        <p>AISD</p>
        <p>Cindy Maciel-Reyes</p>
        <p>The Colmenero Family</p>
        <p>EL Paso ISD</p>
        <p>Google</p>
        <p>The Junior League of Austin</p>
        <p>Trellis Foundation</p>
        <p>University of Texas School of Social Work</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2017</h3>
        <p>Council Member Delia Garza</p>
        <p>Fayruz M. Benyouse</p>
        <p>Texas Pioneer Foundation</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2016</h3>
        <p>Dr. Teresa Lozano Long</p>
        <p>Sylvia Acevedo</p>
        <p>Seton Healthcare Family</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2015</h3>
        <p>Maria Del Rosario Castro</p>
        <p>Nikki Graham</p>
        <p>The Junior League of Austin</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2014</h3>
        <p>Rudy Colmenero</p>
        <p>Nora Comstock</p>
        <p>Sonia Castellanos</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2013</h3>
        <p>Edna Butts</p>
        <p>Victor Saenz</p>
        <p>RGK Foundation</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2012</h3>
        <p>Gigi Edwards Bryant</p>
        <p>Laura Duran Villa</p>
        <p>Silvia Martinez</p>
        <p>MariBen Ramsey</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2011</h3>
        <p>Jeanna Goka</p>
        <p>Rosie Mendoza</p>
        <p>Diana Riojas</p>
        <p>UTSSW Dean Barbara White /Kathy Armenta</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl pb-6">2010</h3>
        <p>Cookie Gregory Ruiz</p>
        <p>The Honorable Orlinda Naranjo</p>
        <p>The Honorable Elizabeth Ames Jones</p>
        <p>Dr. Tracy Eilers</p>
        <p>Sonya Band</p>
      </div>
    </>
  );
};

export default Services;
