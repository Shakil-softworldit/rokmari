import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const ElectroFooter = () => {
    return (
        <footer className="bg-[#111827] text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-primary rounded-lg p-2">
                                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                                    <span className="text-primary font-bold text-sm">E</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Electro</h3>
                                <p className="text-xs text-[var(--color-footer-muted)]">Electronics Store</p>
                            </div>
                        </div>

                        <p className="text-sm text-[var(--color-footer-muted)] mb-6 leading-relaxed">
                            Electro is your trusted partner for all electronics needs. We offer the latest technology products at
                            competitive prices with exceptional customer service.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-[var(--color-footer-muted)]">
                                    123 Tech Street, Electronics City,
                                    <br />
                                    Mumbai, India
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-[var(--color-footer-muted)]">+91-9876-543-210</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-[var(--color-footer-muted)]">support@electro.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
                        <ul className="space-y-3">
                            {[
                                "Help Center",
                                "Returns & Refunds",
                                "Shipping Info",
                                "Warranty",
                                "Track Your Order",
                                "Contact Support",
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-[var(--color-footer-muted)] hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Information</h4>
                        <ul className="space-y-3">
                            {[
                                "About Electro",
                                "Careers",
                                "Press & Media",
                                "Affiliate Program",
                                "Privacy Policy",
                                "Terms & Conditions",
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-[var(--color-footer-muted)] hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
                        <p className="text-sm text-[var(--color-footer-muted)] mb-4">
                            Subscribe to get updates on new products and exclusive offers!
                        </p>

                        <div className="flex gap-2 mb-6">
                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white text-gray-900 border-0 text-sm"
                            />
                            <Button className="bg-primary hover:bg-primary/90 text-white px-4">
                                <span className="text-sm">→</span>
                            </Button>
                        </div>

                        <p className="text-xs text-[var(--color-footer-muted)] mb-4">Follow us on social media:</p>
                        <div className="flex gap-3 mb-6">
                            {[
                                { icon: Facebook, label: "Facebook" },
                                { icon: Twitter, label: "Twitter" },
                                { icon: Instagram, label: "Instagram" },
                                { icon: Youtube, label: "YouTube" },
                                { icon: Linkedin, label: "LinkedIn" },
                            ].map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-primary transition-colors"
                                    aria-label={label}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>

                        <div>
                            <p className="text-xs text-[var(--color-footer-muted)] mb-2">We Accept:</p>
                            <div className="flex gap-2">
                                {["VISA", "MC", "AMEX", "PayPal"].map((payment) => (
                                    <div key={payment} className="bg-white rounded px-2 py-1 text-xs font-medium text-gray-900">
                                        {payment}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-[var(--color-footer-muted)]">
                            © 2024 Electro Electronics Store. All rights reserved. Built with ❤️ for technology enthusiasts.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-[var(--color-footer-muted)] hover:text-primary">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-[var(--color-footer-muted)] hover:text-primary">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-[var(--color-footer-muted)] hover:text-primary">
                                Sitemap
                            </a>
                            <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span className="text-xs text-[var(--color-footer-muted)]">100% Secure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ElectroFooter;
