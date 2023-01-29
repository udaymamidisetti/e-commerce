import { useEffect } from "react";

function ReturnPolicy() {
    let url = window.location.origin;
    useEffect(() => {
        const body = document.querySelector('#root');

        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)

    }, []);
    return (
        <div className="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem] pb-[2.75rem]">
            <img src="/img/beams-basic.png" alt="" className="absolute top-0 left-1/2 -ml-[39rem] w-[113.125rem] max-w-none" />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="relative mx-auto max-w-[40.5rem] pt-20 text-center pb-24">
                    <h1 className="text-4xl font-extrabold tracking-tight text-kazari sm:text-5xl">Return policy</h1>
                    {/* <p className="mt-4 text-base leading-7 text-slate-600">Last updated on November 2, 2021</p> */}
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto  max-w-[45rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
                    <p>
                        Kazari Collection accepts returns only in the following cases:
                        <ul className="list-disc px-10 mt-2">
                            <li>Products are received in damaged condition.</li>
                            <li>Products received are different from those ordered.</li>
                            <li>While returning the product, the original product including tags should be returned within 7 days from the date of delivery ( including holidays).</li>
                            <li>The video about the opening of the product can be emailed.</li>
                            <li>In any of these cases, customers can return the products to Kazari Collection. Kazari Collection will replace the product within 30 working days.</li>
                        </ul>
                    </p>
                    <h2 className="pt-10 pb-4">Customer should adhere to following guidelines for returning products:</h2>
                    <p>
                        Please inform Kazari Collection customer care through email on the receipt of the product about damage or problems on help@kazaricollection.com

                    </p>
                    <br />
                    <p>
                        Please retain original packing including tags, labels and products should be returned in the same conditions as delivered. Please note that if any wear/tear, altercations to products are found which are obvious to be done by customer, return won’t be accepted.

                    </p>
                    <br />
                    <p>
                        Based on the instructions from Kazari Collection executives, customer can ship the product through courier back to Kazari Collection.

                    </p>
                    <br />
                    <p>
                        Please ship the courier to following address

                    </p>
                    <br />
                    <p>
                        1/602, “C” Wing, Akshata Apts.,Tilak Nagar, Chembur (W), Mumbai – 400089

                    </p>
                    <br />
                    <p>
                        Please mention your name, order number and mobile number on the box.

                    </p>
                    <br />
                    <p>
                        Customer should intimate about the courier and tracking ID to Kazari Collection team as soon as product/s is/are dispatched.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ReturnPolicy;