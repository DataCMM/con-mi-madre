import React from "react";

import EventsGallery from "./EventsGallery";
import Logo from "../../../images/stacked/text-only.png";

const Services = () => {
  return (
    <div className="bg-blue-500">
      <div className="banner-image w-full h-full">
        <div
          style={{
            backgroundImage: "url(/images/events/EventsBanner.jpg)",
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
              <div id="title1">Events</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 text-gray-500 pt-6">
        <h3 className="event-header text-4xl font-semibold text-center">
          Annual Corazón Awards
        </h3>
        <p className="current-awards text-center text-2xl font-light pb-6">
          <a
            href="https://conmimadre.z2systems.com/np/clients/conmimadre/event.jsp?event=8"
            className="hover:text-pink-500 font-semibold text-3xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
          &nbsp;for more details and to register for this year’s Corazón Awards.
        </p>
      </div>
      <div className="past-awards bg-gray-500 text-center p-6 pb-12">
        <h3 className="text-4xl font-semibold  pb-6">Past Corazón Awards</h3>
        <EventsGallery className="text-2xl text-gray-500 pb-6" />
        <h3 className="text-4xl font-semibold pb-6">Past Honorees</h3>
        <div className="con-mi-madre-award">
          <u className="text-3xl font-semibold pb-3 text-pink-500">
            The Con Mi MADRE Award
          </u>
          <p className="text-2xl font-light pb-3">
            An educated successful Latina; an example of what we would like to
            see as a product of our program; someone who is living out our
            mission.
          </p>
          <a
            href="/conMiMadrePast.pdf"
            className="hover:text-pink-500 text-2xl font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>Past Honorees</i>
          </a>
        </div>
        <div className="corazon-award pt-6">
          <u className="text-3xl font-semibold pb-3 text-blue-500">
            The Corazón Award
          </u>
          <p className="text-2xl font-light pb-3">
            A leader in the community who has made significant contributions to
            the education and empowerment of Latinas; someone who has "poured
            their heart" into the success of Latina youth and this was outside
            their job requirements.
          </p>
          <a
            href="/corazonPast.pdf"
            className="hover:text-pink-500 text-2xl font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>Past Honorees</i>
          </a>
        </div>
        <div className="mariposa-award pt-6">
          <u className="text-3xl font-semibold pb-3 text-purple-500">
            The Mariposa Award
          </u>
          <p className="text-2xl font-light pb-3">
            Someone closely associated with Con Mi MADRE (e.g., alum, previous
            employee) who has made significant contributions in their field AND
            has brought recognition to Con Mi MADRE through those contributions.
            This is someone whose efforts have helped CMM "spread its wings and
            fly."
          </p>
          <a
            href="/mariposaPast.pdf"
            className="hover:text-pink-500 text-2xl font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>Past Honorees</i>
          </a>
        </div>
      </div>

      {/* 2021 Upcoming Event */}
      {/* <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10">
        <h3 className="text-4xl font-semibold pb-6">
          Con Mi MADRE Annual Corazón Awards - 2021
        </h3>
        <p className="font-light">
          Information coming soon! Please follow us on social media to be
          notified about this year’s event!
        </p>
      </div> */}

      {/* Past Awards Honorees */}
      {/* <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-4xl font-semibold pb-6">
          Past Annual Corazón Honorees
        </h3>
        <h3 className="text-3xl font-semibold pb-6">The Con Mi MADRE Award</h3>
        <p className="font-light">
          An educated successful Latina; an example of what we would like to see
          as a product of our program; someone who is living out our mission
        </p>
      </div> */}

      {/* <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-6">The Corazón Award</h3>
        <p className="font-light">
          A leader in the community who has made significant contributions to
          the education and empowerment of Latinas; someone who has "poured
          their heart" into the success of Latina youth and this was outside
          their job requirements
        </p>
      </div> */}
      {/* <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-6">The Mariposa Award</h3>
        <p className="font-light">
          Someone closely associated with Con Mi MADRE (e.g., alum, previous
          employee) who has made significant contributions in their field AND
          has brought recognition to Con Mi MADRE through those contributions.
          This is someone whose efforts have helped CMM "spread its wings and
          fly."
        </p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2020</h3>
        <p className="font-light">Blanca & Bianca Garcia</p>
        <p className="font-light">Lupe Morin</p>
        <p className="font-light">
          Texas Capital Bank, Chris Rios & Robert Fraco Robert Franco
        </p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2019</h3>
        <p className="font-light">Yvette Ruiz</p>
        <p className="font-light">Applied Materials Foundation</p>
        <p className="font-light">Sonia/Briana Cuero</p>
        <p className="font-light">Priscilla/Savannah Zambrano</p>
        <p className="font-light">Patricia/Elizabeth Zarate</p>
        <p className="font-light">Maria Evelia/Ideyanira Rodriguez</p>
        <p className="font-light">Connie Suarez/Karen Gonzalez</p>
        <p className="font-light">Bernarda Juarez/Irais & Alma Romero</p>
        <p className="font-light">Pilar/Anais Cruz</p>
        <p className="font-light">Edelmira/Cynthia De La Cruz</p>
        <p className="font-light">Santos Gomez/Katie & Diana Garcia</p>
        <p className="font-light">Silvia/Esmeralda & Laura Aguilar</p>
      </div>
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2018</h3>
        <p className="font-light">Lloyd/Libby Doggett</p>
        <p className="font-light">Dr. Judith Loredo</p>
        <p className="font-light">Sandy Alcala</p>
        <p className="font-light">Sonia Castellanos</p>
        <p className="font-light">Austin ISD</p>
        <p className="font-light">Cindy Maciel-Reyes</p>
        <p className="font-light">The Colmenero Family</p>
        <p className="font-light">EL Paso ISD</p>
        <p className="font-light">Google</p>
        <p className="font-light">The Junior League of Austin</p>
        <p className="font-light">Trellis Foundation</p>
        <p className="font-light">University of Texas School of Social Work</p>
      </div> */}
      {/* 
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2017</h3>
        <p className="font-light">Council Member Delia Garza</p>
        <p className="font-light">Fayruz M. Benyouse</p>
        <p className="font-light">Texas Pioneer Foundation</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2016</h3>
        <p className="font-light">Dr. Teresa Lozano Long</p>
        <p className="font-light">Sylvia Acevedo</p>
        <p className="font-light">Seton Healthcare Family</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2015</h3>
        <p className="font-light">Maria Del Rosario Castro</p>
        <p className="font-light">Nikki Graham</p>
        <p className="font-light">The Junior League of Austin</p>
      </div> */}

      {/* <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2014</h3>
        <p className="font-light">Rudy Colmenero</p>
        <p className="font-light">Nora Comstock</p>
        <p className="font-light">Sonia Castellanos</p>
      </div>

      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2013</h3>
        <p className="font-light">Edna Butts</p>
        <p className="font-light">Victor Saenz</p>
        <p className="font-light">RGK Foundation</p>
      </div> */}

      {/* <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2012</h3>
        <p className="font-light">Gigi Edwards Bryant</p>
        <p className="font-light">Laura Duran Villa</p>
        <p className="font-light">Silvia Martinez</p>
        <p className="font-light">MariBen Ramsey</p>
      </div> */}
      {/* 
      <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2011</h3>
        <p className="font-light">Jeanna Goka</p>
        <p className="font-light">Rosie Mendoza</p>
        <p className="font-light">Diana Riojas</p>
        <p className="font-light">UTSSW Dean Barbara White /Kathy Armenta</p>
      </div> */}

      {/* <div className="bg-blue-500 text-2xl text-gray-500 shadow-xl h-auto w-full text-center p-6 pb-10 pt-10">
        <h3 className="text-3xl font-semibold pb-3">2010</h3>
        <p className="font-light">Cookie Gregory Ruiz</p>
        <p className="font-light">The Honorable Orlinda Naranjo</p>
        <p className="font-light">The Honorable Elizabeth Ames Jones</p>
        <p className="font-light">Dr. Tracy Eilers</p>
        <p className="font-light pb-10">Sonya Band</p>
      </div> */}
    </div>
  );
};

export default Services;
