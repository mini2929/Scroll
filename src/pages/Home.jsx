import { useEffect, useState } from 'react';
import Banner from '../components/main/Banner';
import Pics from '../components/main/Pics';
import Vids from '../components/main/Vids';
import Visual from '../components/main/Visual';

export default function Home() {
	const [Scrolled, setScrolled] = useState(0);
	const handleScroll = () => {
		setScrolled(window.scrollY);
	}

	useEffect(()=> {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
		}, []);

	return (
		<main>
			<Visual />
			<Pics Scrolled={Scrolled}/>
			<Vids />
			<Banner />
		</main>
	);
}
