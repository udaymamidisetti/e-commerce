import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { PhoneIcon, MailIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
const navigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '/about-us' },
        { name: 'Disclaimer', href: '/disclaimer' },
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Return Policy', href: '/return-policy' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/kazaricollection',
            icon: (props) => (
                <FaFacebook  {...props} />
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/kazari.collection/',
            icon: (props) => (
                <FaInstagram {...props} />
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/kazaricollection',
            icon: (props) => (
                <FaLinkedin {...props} />
            ),
        },
    ],
}

function Footer() {
    return (
        <footer className="bg-gray-800 px-10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-3 gap-8 xl:col-span-2">
                        {/* <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-span-2">
                            <div className="max-w-lg mx-auto">
                                <h2 className="text-2xl font-extrabold tracking-tight text-gray-100 sm:text-3xl">Get in touch</h2>

                                <dl className="mt-8 text-base text-gray-200">
                                    <div>
                                        <dt className="sr-only">Postal address</dt>
                                        <dd>
                                            <p>Kazari Collection 1/602,“C” Wing, Akshata APartments, </p>Tilak Nagar, Chembur (W),Mumbai– 400089 India
                                        </dd>
                                    </div>
                                    <div className="mt-6">
                                        <dt className="sr-only">Phone number</dt>
                                        <dd className="flex">
                                            <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-200" aria-hidden="true" />
                                            <span className="ml-3"><a href="tel:+919372457898">+91-93724-57898</a></span>
                                        </dd>
                                    </div>
                                    <div className="mt-3">
                                        <dt className="sr-only">Email</dt>
                                        <dd className="flex">
                                            <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-200" aria-hidden="true" />
                                            <span className="ml-3"><a href="mailto:helpdesk@kazaricollection.com" >helpdesk@kazaricollection.com</a></span>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div className="">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.company.map((item, i) => (
                                        <li key={i}>
                                            <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-300 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="mt-8 xl:mt-0">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            Subscribe to our newsletter
                        </h3>
                        <p className="mt-4 text-base text-gray-300">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>
                        <form className="mt-4 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full bg-kazari-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-kazari-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-kazari-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {navigation.social.map((item, i) => (
                            <a key={i} href={item.href} className="text-gray-400 hover:text-gray-300">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; {new Date().getFullYear()} KAZARI COLLECTION PRIVATE LIMITED. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;