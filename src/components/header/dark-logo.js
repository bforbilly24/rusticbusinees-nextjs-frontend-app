import Image from 'next/image';
import Link from 'next/link';

function DarkLogo() {
	return (
		<Link href='/'>
			<a className='inline-block align-middle leading-[1]'>
				<Image src='/images/logo/logo-2.png' alt='Logo' width={70} height={70} />
			</a>
		</Link>
	);
}

export default DarkLogo;
