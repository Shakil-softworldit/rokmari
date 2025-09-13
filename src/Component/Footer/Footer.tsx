import { Facebook, Twitter, MessageCircle, Phone, Linkedin, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export default function BengaliFooter() {
    return (
        <footer className="bg-gray-50  p-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-green-600 mb-2">অনলাইনকম</h2>
                            <p className="text-sm text-gray-600">Best Online Shop</p>
                        </div>

                        <div className="space-y-4 text-sm text-gray-700">
                            <div>
                                <p className="font-semibold mb-2">Customer Care</p>
                                <p>
                                    Contact us at <span className="text-blue-600">Live Chat</span>
                                </p>
                                <p>
                                    Send us an email: <span className="text-blue-600">care@rokomari.com</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-xs">📧</span>
                                </div>
                                <div>
                                    <p>
                                        To be a seller Email Us <span className="text-blue-600">seller@rokomari.com</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p>
                                        Corporate Sales: <span className="font-semibold">01708146238</span> (Whatsapp Message)
                                    </p>
                                    <p className="text-blue-600">sales@rokomari.com</p>
                                    <p className="text-xs text-gray-500">
                                        (e.g. Pharmaceuticals, Banks, Insurance & other Corporate Houses)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-xs">🏪</span>
                                </div>
                                <div>
                                    <p>
                                        Retailer Only: <span className="font-semibold">01708146185</span> (Whatsapp Message)
                                    </p>
                                    <p className="text-blue-600">wholesale@rokomari.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mt-1">
                                    <span className="text-xs">📍</span>
                                </div>
                                <div>
                                    <p>
                                        Address: <span className="font-semibold">2/1/E, Eden Center, Arambagh, Motijheel, Dhaka-1000</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-xs">✉️</span>
                                </div>
                                <div>
                                    <p>Email Us</p>
                                    <p className="text-blue-600">admin@rokomari.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">হোম</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    বই
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    ইলেকট্রনিক্স
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    ইন্সট্রুমেন্টস
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    গিফট কার্ড
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    স্টেশনারি
                                </a>
                            </li>
                        </ul>

                        <h3 className="font-semibold text-gray-800 mb-4 mt-8">শপ করি</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    বই ক্যাটাগরি
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    ইন্সট্রুমেন্টস ক্যাটাগরি
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    বই মেলা ২০২৫
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    সাহিত্য বই
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    ইসলামিক বই
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    নাটক
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    বিজ্ঞান বই
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    উপন্যাস
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    স্টেশনারি
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">পণ্যসমূহ</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    বেস্টসেলস
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    প্রি-অর্ডার
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    অফার
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    ভিডিও
                                </a>
                            </li>
                        </ul>

                        <h3 className="font-semibold text-gray-800 mb-4 mt-8">সাপোর্ট</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    অর্ডার ট্র্যাক করুন
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    মোবাইল এপ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    প্রশ্ন উত্তর
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    সাপোর্ট টিকেট
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    মেইল করুন
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    গোপনীয়তার নীতিমালা
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    রিটার্ন নীতিমালা
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">আমাদের সম্পর্কে জানুন</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    আমাদের সম্পর্কে
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    সাইট ম্যাপ
                                </a>
                            </li>
                        </ul>
                        <h3 className="font-semibold text-gray-800 mt-12">পলিসি</h3>
                        <ul className="space-y-2 text-sm text-gray-600 mt-7">
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    শর্তাবলী
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    গোপনীয়তা পলিসি
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    রিটার্ন পলিসি
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600">
                                    বিনিময় পলিসি
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">Stay Connected</h3>

                        {/* Social Icons */}
                        <div className="flex gap-2 mb-6">
                            <a
                                href="#"
                                className="w-7 h-7 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 p-2"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-7 h-7 bg-blue-400 text-white rounded flex items-center justify-center hover:bg-blue-500 p-2"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-7 h-7 bg-blue-500 text-white rounded flex items-center justify-center hover:bg-blue-600 p-2"
                            >
                                <MessageCircle className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-7 h-7 bg-green-500 text-white rounded flex items-center justify-center hover:bg-green-600 p-2"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-7 h-7 bg-blue-700 text-white rounded flex items-center justify-center hover:bg-blue-800 p-2"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-7 h-7 bg-pink-500 text-white rounded flex items-center justify-center hover:bg-pink-600 p-2"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="#"
                                className="w-7 h-7 bg-red-600 text-white rounded flex items-center justify-center hover:bg-red-700 p-2"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Download App */}
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="text-orange-500">📱</span>
                                Download App
                            </h4>
                            <div className="flex gap-3">
                                <a href="#" className="block">
                                    <Image
                                        src="/google-play-download-button.png"
                                        alt="Get it on Google Play"
                                        width={120}      
                                        height={40}       
                                        className="rounded-lg"
                                    />
                                </a>
                                <a href="#" className="block">
                                    <Image
                                        src="/google-play-download-button.png"
                                        alt="Get it on Google Play"
                                        width={120}      
                                        height={40}       
                                        className="rounded-lg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>



                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 mt-12 pt-6 flex justify-center md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-600">© 2012-2025 Rokomari.com</p>
                </div>
            </div>
        </footer>
    )
}
