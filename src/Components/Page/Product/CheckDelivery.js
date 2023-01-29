import axios from "axios";
import { useRef, useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

function CheckDelivery({ weight }) {
    const [check, setCheck] = useState({ status: null, message: "" });
    const input = useRef();
    const handleCheck = async () => {
        try {
            if (!Number.isInteger(weight)) {
                weight = 0.5;
            }
            var data = JSON.stringify({
                pickup_postcode: "411005",
                delivery_postcode: input.current.value,
                weight: weight,
            });

            var config = {
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL}api/address/check-delivery`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const response = await axios(config);
            if (response.data.status === 200) {
                setCheck({ status: true, message: `Delivery available to ${input.current.value}` })
            } else {
                setCheck({ status: false, message: `Delivery not available to ${input.current.value}` })
            }
        } catch (error) {
            setCheck({ status: false, message: `Delivery not available to ${input.current.value}` })
            console.log(`error occured =>  ${error.message}`);
        }
    }
    const handleLength = (e) => {
        e.currentTarget.value.slice(0, e.currentTarget.maxLength);
        return (e.currentTarget.value).length >= e.currentTarget.maxLength ? e.currentTarget.value = e.currentTarget.value.slice(0, e.currentTarget.maxLength) : "";
    }
    return (
        <div>
            <div className="mt-1 relative flex items-center">
                <input
                    type="Number"
                    name="search"
                    maxLength={6}
                    onChange={(e) => e.currentTarget.value.length == 6 ? e.currentTarget.value : e.currentTarget.value = e.currentTarget.value.substr(0, 6)}
                    id="search"
                    ref={input}
                    placeholder="Enter Delivery Pincode"
                    className="shadow-sm focus:ring-kazari-500 focus:border-kazari-500 block w-full pr-16 sm:text-sm border-gray-300 rounded-md"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    {/* <AiFillQuestionCircle className="h-5" /> */}
                    <button onClick={handleCheck} className="inline-flex items-center border focus:border-kazari-500 border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-600">
                        Check
                    </button>
                </div>
            </div>
            <p className={(check.message == "") ? "" : (check.status) ? "mt-2 text-sm text-green-600" : "mt-2 text-sm text-red-600"} id="email-error">
                {check.message}
            </p>
        </div>
    )
}
export default CheckDelivery;