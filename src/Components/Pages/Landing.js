import React from 'react';
import Header from '../Header';
import Graduate from '../../images/cmm/additional-services/Scholarship-opportunities.jpg';

import styled from 'styled-components';

const Landing = () => {
	return (
		<>
			<Header />
			<Container>
				<ImpactBlueBG>
					<ImpactHeader>
						<h3 id='impact-header'>OUR IMPACT</h3>
					</ImpactHeader>
					<Subtitle>
						<p>Over 4,000 mother and daughters served since 1992</p>
					</Subtitle>
					<ThreeBoxes>
						<ImageBox>
							<img src='' alt='' />
							<p>98% High School</p>
							<p>Graduation Rate</p>
						</ImageBox>
						{/* <hr /> */}
						<ImageBox>
							<p>79% College</p>
							<p>Enrollment Rate</p>
						</ImageBox>
						{/* <hr /> */}
						<ImageBox>
							<p>93% College</p>
							<p>Retention Rate</p>
						</ImageBox>
					</ThreeBoxes>
				</ImpactBlueBG>
				<MissionSection>
					<ImpactWhiteBG>
						<div>
							<h3 className='mission-title'>OUR MISSION</h3>
							<p className='mission-content'>
								Empower young Latinas and their mothers through the education
								and support services that increase preparedness, participation,
								and success in post-secondary education.
							</p>
						</div>
						<div>
							<h3 className='mission-title'>OUR VISION</h3>
							<p className='mission-content'>
								To see Latina students, equipped with knowledge and support,
								rewrite the narrative of her family and community.
							</p>
						</div>
					</ImpactWhiteBG>
					<GradPic>
						<img id='grad' src={Graduate} alt='Female graduate' />
					</GradPic>
				</MissionSection>
			</Container>
		</>
	);
};

export default Landing;

const Container = styled.main`
	margin: 0 2rem;
`;

const ImpactBlueBG = styled.div`
	background-color: var(--blue);
`;

const ImpactHeader = styled.div`
	text-align: center;
	color: var(--grey);
	font-size: var(--heading-one);
	letter-spacing: 0.3rem;
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
	color: var(--grey);
	font-size: var(--heading-three);
`;

const MissionSection = styled.div`
	display: flex;
`;

const ImpactWhiteBG = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	justify-content: center;
	padding: 0 10rem;
`;

const GradPic = styled.div`
	width: 30%;
`;
