import React from 'react';

const ModernFooter = () => {
    return (
        <footer className="bg-zinc-900 text-gray-200 py-16 px-4 md:px-8 font-[imter]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                <div>
                    <h3 className="text-4xl font-bold font-[daffiys] text-orange-500 uppercase mb-4">Recipiee</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        Discover, create, and share culinary masterpieces from around the globe. Your kitchen, reimagined.
                    </p>
                    <div className="flex space-x-4">
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-semibold font-[Inter] text-zinc-400 mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">Home</a></li>
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">Recipes</a></li>
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">Submit A Recipe</a></li>
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">About Us</a></li>
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold font-[Inter] text-zinc-400 mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">Home</a></li>
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">Recipes</a></li>
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">Submit A Recipe</a></li>
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">About Us</a></li>
                        <li><a href="#" className="text-lg hover:text-orange-300 transition-colors duration-200">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold font-[Inter] text-zinc-400 mb-6">Get In Touch</h4>
                    <p className="mb-4 text-sm text-gray-400">
                        Have questions or suggestions? We'd love to hear from you!
                    </p>
                    <ul className="space-y-3 mb-6 text-sm text-gray-300">
                        <li>Email: <a href="mailto:info@recipiee.com" className="hover:text-zinc-300 transition-colors duration-200">info@recipiee.com</a></li>
                        <li>Phone: <a href="tel:+1234567890" className="hover:text-zinc-300 transition-colors duration-200">+1 (234) 567-890</a></li>
                        {/* Corrected: Removed extraneous </a> tag from here */}
                        <li>Address: 123 Culinary Way, Foodie Town, FN 12345</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;