
import { CreditCardIcon, KeyIcon, SquaresPlusIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import MyOrder from './MyOrders';
import Account from './Profile/Account';
import Address from './Profile/Address';
import Orders from './Profile/Orders';

const nav = [
    { name: 'Account', elem: <Account />, icon: UserCircleIcon, current: true },
    { name: 'Address', elem: <Address />, icon: KeyIcon, current: false },
    { name: 'Orders', elem: <MyOrder />, icon: CreditCardIcon, current: false },
    // { name: 'Team', elem: '#', icon: UserGroupIcon, current: false },
    // { name: 'Integrations', href: '#', icon: SquaresPlusIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Profile() {
    const [navigation, setNavigation] = useState(nav);
    useEffect(() => {
        const body = document.querySelector('#root');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)

    }, []);
    return (
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
                <nav className="space-y-1">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            className={classNames(
                                item.current
                                    ? 'bg-gray-50 text-kazari-700 hover:text-kazari-900 hover:bg-white'
                                    : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                            )}
                            onClick={() => {
                                setNavigation(navigation.map((elem) => item.name === elem.name ? { ...elem, current: true } : { ...elem, current: false }));
                            }}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <item.icon
                                className={classNames(
                                    item.current
                                        ? 'text-kazari-500 group-hover:text-kazari-500'
                                        : 'text-gray-400 group-hover:text-gray-500',
                                    'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            <span className="truncate">{item.name}</span>
                        </a>
                    ))}
                </nav>
            </aside>

            <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
                {navigation.map((item) => item.current ? item.elem : "")}
            </div>
        </div>
    )
}
