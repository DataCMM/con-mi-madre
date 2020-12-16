import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

import Graduate from "../../images/cmm/additional-services/Scholarship-opportunities.jpg";
import BannerImage from "../../images/cmm/Donate-Banner.JPG";
import { FcGraduationCap, FcDiploma1 } from "react-icons/fc";
import { FaUserGraduate } from "react-icons/fa";

import ReactPlayer from "react-player";
import styled from "styled-components";

const Landing = () => {
  return (
    <>
      <Header />
      <Banner>
        <div>
          <Title>We are Mothers and Daughters</Title>
          <Title>Raising Expectations</Title>
          <Button>
            <Link to="/Donate" id="donate-today">
              Donate Today
            </Link>
          </Button>
        </div>
      </Banner>
      <Container>
        <ImpactBlueBG>
          <ImpactHeader>
            <h3 id="impact-header">OUR IMPACT</h3>
          </ImpactHeader>
          <Subtitle>
            <p>Over 4,000 mother and daughters served since 1992</p>
          </Subtitle>
          <ThreeBoxes>
            <ImageBox>
              <FcGraduationCap className="icon" />
              <ImpactLabels>98% High School</ImpactLabels>
              <ImpactLabels>Graduation Rate</ImpactLabels>
            </ImageBox>

            <ImageBox>
              <FcDiploma1 className="icon" />
              <ImpactLabels>79% College</ImpactLabels>
              <ImpactLabels>Enrollment Rate</ImpactLabels>
            </ImageBox>

            <ImageBox>
              <FaUserGraduate className="icon" />
              <ImpactLabels>93% College</ImpactLabels>
              <ImpactLabels>Retention Rate</ImpactLabels>
            </ImageBox>
          </ThreeBoxes>
        </ImpactBlueBG>
        <MissionSection>
          <ImpactWhiteBG style={{ padding: 0 }}>
            <div>
              <h3 className="title">OUR MISSION</h3>
              <p className="content">
                Empower young Latinas and their mothers through the education
                and support services that increase preparedness, participation,
                and success in post-secondary education.
              </p>
            </div>
            <div>
              <h3 className="title">OUR VISION</h3>
              <p className="content">
                To see Latina students, equipped with knowledge and support,
                rewrite the narrative of her family and community.
              </p>
            </div>
          </ImpactWhiteBG>
          <Image>
            <img id="grad" src={Graduate} alt="Female graduate" />
          </Image>
        </MissionSection>
        <MissionSection id="pillars">
          <Video className="video">
            <ReactPlayer url="https://www.youtube.com/watch?v=ajyPvDS-_kY" />
          </Video>
          <ImpactWhiteBG>
            <h3 className="title">OUR PILLARS</h3>
            <h4 className="sub-title">Parental Engagement</h4>
            <p className="content">
              At CMM we believe that creating opportunities for parents to
              engage in their child's education will lead to post-secondary
              success.
            </p>
            <h4 className="sub-title">Educate Holistically</h4>
            <p className="content">
              We provide mothers and daughters the social-emotional skills they
              need to become emotionally intelligent.
            </p>
            <h4 className="sub-title">Empowerment</h4>
            <p className="content">
              At CMM, we equip mothers and daughters with the knowledge and
              advocacy skills to succeed in spite of systemic barriers.
            </p>
            <h4 className="sub-title">Community-Centered</h4>
            <p className="content">
              We unite with local organizations and individuals to better meet
              the needs of the community.
            </p>
          </ImpactWhiteBG>
        </MissionSection>
        <Footer />
      </Container>
    </>
  );
};

export default Landing;

const Container = styled.main`
  margin: 0 2rem;
`;

const Banner = styled.div`
  height: 95vh;
  background-image: url(${BannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 700;
  color: var(--grey);
  letter-spacing: 1rem;
  font-size: var(--xtra-big-heading);
  text-align: center;
`;

const Button = styled.div`
  text-align: center;
`;

const ImpactBlueBG = styled.div`
  background-color: var(--blue);
  margin: 2rem;
  box-shadow: 5px 5px 20px;
`;

const ImpactHeader = styled.div`
  text-align: center;
  color: var(--grey);
  font-size: var(--heading-one);
  letter-spacing: 0.3rem;
`;

const ImpactLabels = styled.p`
  color: var(--grey);
  font-size: var(--heading-three);
`;

const Subtitle = styled.div`
  text-align: center;
  color: var(--grey);
  font-size: var(--heading-two);
  letter-spacing: 0.2rem;
  margin-top: 0;
`;

const ThreeBoxes = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MissionSection = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: space-around;
  padding: 5rem 0;
`;

const ImpactWhiteBG = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  padding: 0 10rem;
`;

const Video = styled.div`
  display: flex;
  align-self: center;
  margin-left: 5rem;
  box-shadow: 0 0 10px;
`;
const Image = styled.div`
  display: flex;
  align-self: center;
  box-shadow: 5px 5px 20px;
`;
