function PrivacyPolicy() {
    let url = window.location.origin;
    return (
        <div className="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem] pb-[2.75rem]">
            <img src="/img/beams-basic.png" alt="" className="absolute top-0 left-1/2 -ml-[39rem] w-[113.125rem] max-w-none" />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="relative mx-auto max-w-[40.5rem] pt-20 text-center pb-24">
                    <h1 className="text-4xl font-extrabold tracking-tight text-kazari sm:text-5xl">Privacy policy</h1>
                    {/* <p className="mt-4 text-base leading-7 text-slate-600">Last updated on November 2, 2021</p> */}
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto  max-w-[45rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
                    <p>
                        This Privacy Notice discloses the privacy practices for <span className="font-semibold">{url}</span> privacy notice applies solely to information collection by this website. It will notify you of the following:-

                        <ul className="list-disc px-10 mt-2">
                            <li>The details of the personally identifiable information which is collected from you through website, how it is used and with whom it may be shared</li>
                            <li>The choices available to you regarding the use of your data</li>
                            <li>The security procedures in place to protect the misuse of your information</li>
                            <li>The procedure for correcting any inaccuracies in the information</li>
                        </ul>
                    </p>
                    <h2 className="pt-10 pb-4">Information Collection, Use and Sharing</h2>
                    <p>
                        We are the sole owners of the information collection on this site. We state that we only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell, assign or rent this information to anyone.

                        We will use your information to respond to you, regarding the reason you contact us. We will not share your information with any third party outside of our organisation, other than as necessary to fulfil your request,e.g ship an order as placed by you.

                        <span className="font-semibold">KAZARI COLLECTION</span> may transfer your personal data to :
                        <ul className="list-disc px-10 mt-2">
                            <li>Other Kazari Collection companies or third parties- example sales partners or suppliers in connection with your use of the Kazari Collection Offerings or our business relationship with you.</li>
                            <li>Third parties which provide IT services to Kazari Collection and which process such data only for the purpose of such services (e.g ,hosting or IT maintenance and support services): and /or</li>
                            <li>Third parties in connection with complying with legal obligations or establishing, exercising or defending rights or claims (e.g. court proceedings, arbitration proceedings, to law enforcement authorities and regulators and other competent legal authorities )</li>
                            <li>Unless you ask us not to, we may contact you via email in future to tell you about new launches, new products, special products or services or changes to this privacy policy.</li>
                        </ul>
                    </p>
                    <h2 className="pt-10 pb-4">Why we collect this information</h2>
                    <p>
                        We collect this information to understand our website use <span className="font-semibold">{url}</span> and to monitor and protect the security of our website.
                    </p>
                    <h2 className="pt-10 pb-4">The Access to you and Control over Information</h2>
                    <p>
                        We collect this information to understand our website use <span className="font-semibold">{url}</span> and to monitor and protect the security of our website.
                    </p>
                    <h2 className="pt-10 pb-4">The Access to you and Control over Information</h2>
                    <p>
                        You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:

                        <ul className="list-disc px-10 mt-2">
                            <li>
                                Check what date we have about you, if any
                            </li>
                            <li>

                                Change/correct any data we have about you.
                            </li>
                            <li>
                                Have us delete any data we have about you
                            </li>
                            <li>
                                Express any concern you have about our use of your data.
                            </li>
                        </ul>
                    </p>
                    <h2 className="pt-10 pb-4">Security Precautions by Kazari Collection</h2>
                    <p>
                        We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.

                        Wherever we collect sensitive information(e.g. credit card ,debit card data),that information is encrypted and transmitted to us in a secure way. You can verify this by looking for icon in the address bar and looking for “https” at the beginning of the address of the web page.

                        While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computer/servers in which we store personally identifiable information are kept in a secure environment.

                        If you feel that we are not abiding by this privacy policy, you can contact us immediately via telephone at <a href="tel:+919372457898" className=" text-blue-600">+91-93724-57898</a> or via <a href="mailto:helpdesk@kazaricollection.com" className=" text-blue-600">helpdesk@kazaricollection.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;