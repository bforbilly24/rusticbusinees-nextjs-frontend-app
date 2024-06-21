import PropTypes from 'prop-types';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Thumbs, EffectFade]);

function SwiperComps({ children, sliderCName, settings }) {
	const sliderOptions = {
		...settings,
	};
	return (
		<Swiper className={`${sliderCName}`} {...sliderOptions}>
			{children}
		</Swiper>
	);
}

export { SwiperSlide as Slide };

SwiperComps.propTypes = {
	children: PropTypes.instanceOf(Array).isRequired,
	settings: PropTypes.shape({
		spaceBetween: PropTypes.number,
		breakpoints: PropTypes.shape({}),
	}),
	sliderCName: PropTypes.string,
};

export default SwiperComps;
