import React from 'react'

export default function Saidebar() {
    let isTab =useMediaQuery({ query: '(max-width:768px)' });

	const [isOpen, setIsOpen] = useState(isTab ? false : true);

	const sidebar_animation = isTab
		? {
				
				open: {
					x: 0,
					width: '16rem',
					transition: {
						damping: 30,
					},
				},
				close: {
					x: -250,
					width: 0,
					transition: {
						damping: 30,
						delay: 0.15,
					},
				},
		  }
		: {
				// system view
				open: {
					width: '16rem',
					transition: {
						damping: 30,
					},
				},
				close: {
					width: '4rem',
					transition: {
						damping: 30,
					},
				},
		  };

	useEffect(() => {
		if (isTab) {
			// mobile
			setIsOpen(false);
		} else {
			//system
			setIsOpen(true);
		}
	}, [isTab]);

	const logo_variant = {
		open: {
			fontSize: '2.25rem',
			lineHeight: '2.5rem',
		},
		close: {
			fontSize: '1.25rem',
			lineHeight: '1.5rem',
		},
	};

	const item_variant = {
		open: {},
		close: {
			display: 'none',
			transition: {
				damping: 30,
			},
		},
	};

    return (
		<div>
			<div
				onClick={() => setIsOpen(false)}
				className={`md:hidden fixed inset-0 max-h-full z-[998] bg-black/50 ${
					isOpen ? 'block' : 'hidden'
				}`}
			></div>

			<motion.div				variants={sidebar_animation}
				animate={isOpen ? 'open' : 'close'}
				className='bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-full overflow-hidden md:relative fixed'
			>
				<div
					onClick={() => setIsOpen(!isOpen)}
					className='absolute w-fit z-50 right-4 top-5 cursor-pointer md:block hidden'
				>
					<MenuRoundedIcon />
				</div>
				<motion.div
					variants={logo_variant}
					className='text-4xl whitespace-wrap text-center font-bold py-9 my-5 text-blue-950'
				>
					Notes App
				</motion.div>
				<div className='flex flex-col h-screen'>
					<ul className='h-full'>
						<li className='link active '>
							<DescriptionOutlinedIcon/>
							<motion.div variants={item_variant}>Notes</motion.div>
						</li>
					</ul>
				</div>
			</motion.div>

			<div className='m-3 md:hidden' onClick={() => setIsOpen(true)}>
				<MenuRoundedIcon/>
			</div>
		</div>
	);
}

