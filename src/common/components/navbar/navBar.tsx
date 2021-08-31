import { Disclosure } from '@headlessui/react';
import { HeartIcon, MenuIcon, SearchIcon, XIcon,PencilIcon} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../img/logo.svg';

const navigation = [
	{ name: 'All Places', href: '/', current: true, icon: SearchIcon },
	{ name: 'Saved Places', href: '/favorite', current: false, icon: HeartIcon },
	{ name: 'Add New Destination', href: '/addnew', current: false, icon: PencilIcon },
	
];



function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}
function onNavigationHandler(){
	console.log('Event raised');
}


export const NavBar = () => (	
	<Disclosure as="header" className="bg-white shadow">
		{({ open }) => (
			<>
				<div className="w-auto lg:divide-y lg:divide-gray-200 ">
					<div className="relative flex justify-between h-16 px-2 mx-auto sm:px-4 lg:px-6">
						<div className="relative z-10 flex px-2 lg:px-0">
							<div className="flex items-center flex-shrink-0">
								<Logo height="35" width="45%" />
							</div>
						</div>

						<div className="relative z-10 flex items-center lg:hidden">
							{/* Mobile menu button */}
							<Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<span className="sr-only">Open menu</span>
								{open ? (
									<XIcon className="block w-6 h-6" aria-hidden="true" />
								) : (
									<MenuIcon className="block w-6 h-6" aria-hidden="true" />
								)}
							</Disclosure.Button>
						</div>
						<div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
							
						</div>
					</div>
					<nav
						className="items-center justify-left hidden px-8 lg:px-32 lg:py-2 lg:flex "
						aria-label="Global">
						{navigation.map(item => (
							<Link onClick={onNavigationHandler}
                            to={item.href}
								key={item.name}
								className={classNames(
									item.current
										? 'bg-indigo-100 text-indigo-600'
										: 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
									'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium',
								)}
								aria-current={item.current ? 'page' : undefined}>
								<span className="mr-1">
									{item.icon({ height: '20px', width: '15px' })}
								</span>
								{item.name}
								
							</Link>
						))}
					</nav>
				</div>

				<Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
					<div className="px-2 pt-2 pb-3 space-y-1">
						{navigation.map(item => (
							<a
								key={item.name}
								href={item.href}
								className={classNames(
									item.current
										? 'bg-gray-100 text-gray-900'
										: 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
									'block rounded-md py-2 px-3 text-base font-medium',
								)}
								aria-current={item.current ? 'page' : undefined}>
								{item.name}
							</a>
						))}
					</div>
				</Disclosure.Panel>
			</>
		)}
	</Disclosure>
);
