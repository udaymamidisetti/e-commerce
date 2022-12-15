import img from "../../Assets/aboli_about.jpg";
function AboutUs() {
    let url = window.location.origin;
    return (
        <div className="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem] pb-[2.75rem]">
            <img src="/img/beams-basic.png" alt="" className="absolute top-0 left-1/2 -ml-[39rem] w-[113.125rem] max-w-none" />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="relative mx-auto max-w-[40.5rem] pt-20 text-center pb-24">
                    <h1 className="text-4xl font-extrabold tracking-tight text-kazari sm:text-5xl">Kazari Collection: A place where craft meets you and stays.</h1>
                    {/* <p className="mt-4 text-base leading-7 text-slate-600">Last updated on November 2, 2021 </p><br/> */}
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto  max-w-[45rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
                    <h2 className="pt-10 pb-4">Company Details</h2>
                    <p>
                        Kazari Collection is a trademark registered company. Established in 2019, Kazari Collection is a platform for customers to buy unique and hand-made home décor items along with apparel and accessories. All the products displayed on Kazari Collection are 100% genuine India made and hand-made.
                    </p><br />
                    <p>
                        Ensuring to actively participate in the social domain, the company was set up with the intention to demonstrate the various skilled labours that are present in our Indian handloom industry. An online platform to display their talents is to establish so that masses become aware of the diverse artistic skills Indian artists hold. The wall pieces are niche in market so they make an excellent gifting option to give as a family or individual. Evolving the traditional and blending traditional/ethnic with modern aesthetics is the basis of designs.
                    </p><br />
                    <p>
                        Kazari Collection aspires to build up the art form of handloom and to expose the local art for wider audience; for it to become a canon for handicraft upholding the values of traditions and novelty.
                    </p><br />
                    <p>
                        There is something for everyone.
                    </p><br />
                    <h2 className="pt-10 pb-4">Our Motive</h2>
                    <p>
                        Demonstrating Indian handloom industry and its very skilled artisans onnnational and global platform?.Much attention is given to customer’s requirements and needs, as each product is produced keeping in mind people’s satisfaction towards the art of handloom.Personalised and customised products according to the customer’s requirements. A distinct type of gifting option than the generic kind.
                    </p><br />
                    <h2 className="pt-10 pb-4">Founder</h2>
                    <div className="flex flex-row justify-between">
                        <div className=" basis-1/3 mx-5">
                            <img src={img} alt={"Aboli Image"} className="w-full h-full object-contain" />
                        </div>
                        <div className=" basis-2/3">
                            <p>
                                Aboli Kulkarni got her Masters in Political Science from Mumbai University in 2018. She was always inspired by her family to be socially aware and conscious which in turn influenced her decision to work in the field that would create social impact. She worked for an organization as a research associate before starting the company in 2019. The intention was to make the handloom artform completely digital as “modern problems require modern solutions”. The idea of Kazari Collection was born with the aim of actively participating in reviving handloom industry. With no experience in fine arts herself, she is driven to give karigars a platform to shine bright on the international stage.
                            </p><br />

                        </div>
                    </div>
                    <h2 className="pt-10 pb-4">TEAM OF ARTISTS:</h2>
                    <h2 className="py-2">Rajendra Ankam</h2>
                    <p>
                        Rajendra Ankam is a national award-winning handloom artist and one of the only few remaining masters of personalized handloom portraits. He has an experience of 35+ years and worked tirelessly to promote handloom when he joined hands with Kazari Collection. Ankam works exclusively with Kazari to develop and popularize handloom wall art.
                    </p><br />

                </div>
            </div>
        </div>
    );
}

export default AboutUs;