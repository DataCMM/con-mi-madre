import React from 'react';
import Social from '../Social';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

import Graduate from '../../images/cmm/additional-services/Scholarship-opportunities.jpg';
import BannerImage from '../../images/cmm/Donate-Banner.jpg';
import { FcGraduationCap, FcDiploma1 } from 'react-icons/fc';
import { FaUserGraduate } from 'react-icons/fa';

import ReactPlayer from 'react-player';

const Landing = () => {
	return (
		<>
			<div className='z-10'>
				<Social />
			</div>
			<div
				style={{
					backgroundImage: `url(${BannerImage})`,
				}}
				className='flex z-0 opacity-75 shadow-2xl flex-col w-full h-screen bg-center bg-cover bg-no-repeat'>
				<div className='z-100 pt-4'>
					<Header />
				</div>
				<div className='flex flex-col pt-56 text-center '>
					<h1 className='text-2xl text-gray-500 font-bold tracking-widest sm:text-xl md:text-4xl lg:text-6xl '>
						We are Mothers and Daughters
					</h1>
					<h1 className='text-2xl text-gray-500 font-bold tracking-widest pb-8 sm:text-xl md:text-4xl lg:text-6xl'>
						Raising Expectations
					</h1>
					<button>
						<Link
							className='text-white text-xl p-2 rounded shadow-xl text-center bg-green-400 md:text-xl lg:text-4xl '
							to='/Donate'>
							Donate Today
						</Link>
					</button>
				</div>
			</div>
			<br />
			{/* Our Impact Section */}
			<div className='bg-blue-500 shadow-xl m-auto w-11/12 h-auto flex flex-col w-full'>
				<div className='flex flex-col text-center pb-10'>
					<h3 className='text-3xl text-white'>OUR IMPACT</h3>
					<p className='text-2xl text-white'>
						Over 4,000 mother and daughters served since 1992
					</p>
				</div>
				<div className='flex flex-col md:flex-row justify-around pb-10 '>
					<div className='text-center pt-5'>
						<FcGraduationCap className='h-40 w-full' />
						<h3 className='text-3xl text-white'>98% High School</h3>
						<h3 className='text-3xl text-white'>Graduation Rate</h3>
					</div>

					<div className='text-center pt-5'>
						<FcDiploma1 className='h-40 w-full' />
						<h3 className='text-3xl text-white'>79% College</h3>
						<h3 className='text-3xl text-white'>Enrollment Rate</h3>
					</div>

					<div className='text-center pt-5'>
						<FaUserGraduate className='h-40 w-full' />
						<h3 className='text-3xl text-white'>93% College</h3>
						<h3 className='text-3xl text-white'>Retention Rate</h3>
					</div>
				</div>
			</div>
			{/* Our Mission Section */}
			<div className='flex flex-col gap-6 pt-6 p-4 bg-gray-500'>
				<div>
					<h3 className='text-2xl text-pink-500'>Our Mission</h3>
					<p className='content'>
						Empower young Latinas and their mothers through the education and
						support services that increase preparedness, participation, and
						success in post-secondary education.
					</p>
				</div>
				<div>
					<h3 className='text-2xl text-pink-500'>Our Vision</h3>
					<p className='content'>
						To see Latina students, equipped with knowledge and support, rewrite
						the narrative of her family and community.
					</p>
				</div>
				<div>
					<img id='grad' src={Graduate} alt='Female graduate' />
				</div>
			</div>
			{/* Our Pillars Section */}
			<div className='flex flex-col p-4 pt-6'>
				<div className='pb-4'>
					<h3 className='text-purple-500'>OUR PILLARS</h3>
					<h4 className='text-2xl text-orange-500'>Parental Engagement</h4>
					<p className='content'>
						At CMM we believe that creating opportunities for parents to engage
						in their child's education will lead to post-secondary success.
					</p>
					<h4 className='text-2xl text-orange-500'>Educate Holistically</h4>
					<p className='content'>
						We provide mothers and daughters the social-emotional skills they
						need to become emotionally intelligent.
					</p>
					<h4 className='text-2xl text-orange-500'>Empowerment</h4>
					<p className='content'>
						At CMM, we equip mothers and daughters with the knowledge and
						advocacy skills to succeed in spite of systemic barriers.
					</p>
					<h4 className='text-2xl text-orange-500'>Community-Centered</h4>
					<p className='content'>
						We unite with local organizations and individuals to better meet the
						needs of the community.
					</p>
				</div>
				<div className='w-auto h-auto'>
					{/* <ReactPlayer url='https://www.youtube.com/watch?v=ajyPvDS-_kY' /> */}
					<h3>*** Video player will be here ***</h3>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Landing;
