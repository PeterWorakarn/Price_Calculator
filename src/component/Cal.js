import React, { useState } from 'react';
import { FaUserAlt, FaRegGrinTongueSquint, FaUserFriends, FaRegGrimace } from 'react-icons/fa';
import { RiPriceTagFill } from 'react-icons/ri';
import img from './Card_Payment.svg';
import '../addon.css';


export default function Cal() {
    const [allCustomer, setAllcustomer] = useState(500);
    const [customer, setCustomer] = useState(100);
    const [price, setPrice] = useState(1500);
    const [ratio, setRatio] = useState(10);
    const calculator = () => {
        const missingProfit = (allCustomer - customer) * price;
        const newMargin = ((missingProfit / 100) * ratio) / customer;
        const finalPrice = newMargin + price;
        return finalPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <section className="max-w-6xl mx-auto px-2 py-4 sm:p-4 flex">
            <div className="bg-gray-100 text-gray-500 rounded-xl shadow-xl w-full overflow-hidden">
                <div className="flex flex-col-reverse md:flex md:flex-row w-full">

                    <form className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-left px-3 mb-5">
                            <h1 className="font-fontMain font-bold text-2xl sm:text-4xl text-gray-900 uppercase tracking-wide leading-tight mb-3">High Season <br /> Price Calculator</h1>
                            <p className="font-fontText">อ้างอิงจาก หนังสือเขาตั้งราคาอย่างไรถึงได้กำไรสูงสุด <br /> โดย เซนงะ ฮิเดโนบุ</p>
                        </div>
                        <div className="w-full px-2 mb-5">
                            <label className="font-fontText px-1" htmlFor="allCustomer">จำนวนลูกค้าทั้งหมดที่ติดต่อเข้ามา </label>
                            <div className="flex mt-2">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><FaUserFriends /></div>
                                <input className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-brand" type="number" name="allCustomer" value={allCustomer} onChange={(e) => { setAllcustomer(parseInt(e.target.value)) }} />
                            </div>
                        </div>

                        <div className="w-full px-3 mb-5">
                            <label className="font-fontText px-1" htmlFor="Customer">จำนวนลูกค้าที่รองรับได้ </label>
                            <div className="flex mt-2">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><FaUserAlt /></div>
                                <input className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-brand" type="number" name="Customer" value={customer} onChange={(e) => { setCustomer(parseInt(e.target.value)) }} />
                            </div>
                        </div>

                        <div className="w-full px-3 mb-5">
                            <label className="font-fontText px-1" htmlFor="Price">ราคาสินค้า หรือบริการต่อคน (บาท) </label>
                            <div className="flex mt-2">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><RiPriceTagFill /></div>
                                <input className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-brand" type="number" name="Price" value={price} onChange={(e) => { setPrice(parseInt(e.target.value)) }} />
                            </div>
                        </div>


                        <div className="w-full px-3 mb-5">
                            <label className="font-fontText px-1" htmlFor="ratio">ระดับความหน้าเลือด: {ratio} %</label>
                            <div className="flex mt-2">

                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><FaRegGrimace /></div>
                                <input type="range" min="5" max="100" step="5" name="ratio" value={ratio} onChange={(e) => { setRatio(parseInt(e.target.value)) }} />
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><FaRegGrinTongueSquint /></div>
                            </div>
                        </div>
                    </form>
                    <div className="md:block md:w-1/2 bg-indigo-500 p-4 md:p-10 ">
                        {/* reference https://codepen.io/cassidoo/pen/eZPmMe */}

                        <div className="ticket">
                            <div className="stub">
                                <h2 className="font-fontTicket text-9xl text-bold hidden md:block">1</h2>
                                <div className="invite font-fontMain text-white font-bold leading-snug">
                                    Price for you
                                </div>
                            </div>
                            <div className="check flex flex-col align-center justify-between">
                                <div>
                                <h2 className="font-fontMain text-sm">ราคาพิเศษ</h2>
                                <p className="font-fontMain text-gray-800 text-xl sm:text-4xl">{calculator()} บาท</p>
                                </div>
                                <div className="info md:flex justify-between mt-8  hidden md:block">
                                    <section className="section">
                                        <div className="title uppercase font-bold text-gray-800">Date</div>
                                        <div className="text-gray-800 font-normal font-fontMain">{(new Date()).toLocaleDateString('en-GB')}</div>
                                    </section>
                                    <section className="section">
                                        <div className="title uppercase text-gray-800 font-bold">Issued By</div>
                                        <div className="text-gray-800 font-normal font-fontMain uppercase">Datayolk</div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <img className="hidden md:block md:w-full" src={img} alt="payment" />
                    </div>
                </div>

            </div>

        </ section>
    )
}
