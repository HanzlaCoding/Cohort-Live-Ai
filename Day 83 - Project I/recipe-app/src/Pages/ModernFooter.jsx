import React from 'react';

const ModernFooter = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-16 px-4 md:px-8 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                <div>
                    <h3 className="text-4xl font-bold font-serif text-indigo-400 mb-4">Recipiee</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        Discover, create, and share culinary masterpieces from around the globe. Your kitchen, reimagined.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200" aria-label="Facebook">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.793l.353-2H14v-2c0-.66.33-1 1-1h1.707V7.07C15.607 6.13 14.545 6 13.439 6c-2.484 0-4.043 1.258-4.043 4.295V13.5H7v2.001h2.4V22h3.2V15.5h2.793z"></path></svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200" aria-label="Instagram">
                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zm-.2 2A2.88 2.88 0 0 0 5 7.02v8.1c0 1.5.7 2.48 2.6 2.48h8.2c1.5 0 2.48-.7 2.48-2.6V7.02c0-1.5-.7-2.48-2.48-2.48H7.6zm9.6 1.8A1.2 1.2 0 1 1 17.2 7a1.2 1.2 0 0 1 0-.02zm-5.6 3.4c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9-2.2-4.9-4.9-4.9zm0 8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z"></path></svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200" aria-label="Pinterest">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.585 7.842 6.242 9.308.57.104.778-.246.778-.543v-1.992c-2.502.545-3.033-1.213-3.033-1.213-.41-.983-.997-1.246-.997-1.246-.816-.558.061-.547.061-.547.903.064 1.378.932 1.378.932.805 1.378 2.115.98 2.62.75.081-.585.315-.98.572-1.204-1.996-.226-4.09-1-4.09-4.52C7 8.077 7.72 7.06 8.805 6.25c-.09-.226-.39-1.077.085-2.25 0 0 .736-.234 2.404.91.69-.192 1.42-.288 2.15-.288.73 0 1.46.096 2.15.288 1.668-1.144 2.404-.91 2.404-.91.476 1.173.176 2.024.085 2.25C16.28 7.06 17 8.077 17 9.48c0 3.53-2.096 4.294-4.097 4.517.322.28.614.83.614 1.666v2.47c0 .296.208.647.778.542C19.415 19.842 22 16.237 22 12c0-5.523-4.477-10-10-10z"></path></svg>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-semibold font-sans text-indigo-400 mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">Home</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">Recipes</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">Submit A Recipe</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">About Us</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold font-sans text-indigo-400 mb-6">Categories</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">Appetizers</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">Main Courses</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">Desserts</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">Breakfast</a></li>
                        <li><a href="#" className="hover:text-indigo-300 transition-colors duration-200">Beverages</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-semibold font-sans text-indigo-400 mb-6">Get In Touch</h4>
                    <p className="mb-4 text-sm text-gray-400">
                        Have questions or suggestions? We'd love to hear from you!
                    </p>
                    <ul className="space-y-3 mb-6 text-sm text-gray-300">
                        <li>Email: <a href="mailto:info@recipiee.com" className="hover:text-indigo-300 transition-colors duration-200">info@recipiee.com</a></li>
                        <li>Phone: <a href="tel:+1234567890" className="hover:text-indigo-300 transition-colors duration-200">+1 (234) 567-890</a></li>
                        {/* Corrected: Removed extraneous </a> tag from here */}
                        <li>Address: 123 Culinary Way, Foodie Town, FN 12345</li>
                    </ul>
                    
                    <h4 className="text-lg font-semibold font-sans text-gray-300 mb-4">Newsletter</h4>
                    <p className="text-sm text-gray-400 mb-3">
                        Join our newsletter for fresh recipes and culinary tips straight to your inbox!
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow p-3 rounded-l-md bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-5 rounded-r-md hover:bg-indigo-700 transition-colors duration-200"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Recipiee. All rights reserved. | <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</a> | <a href="#" className="hover:text-indigo-400 transition-colors duration-200">Terms of Service</a>
            </div>
        </footer>
    );
};

export default ModernFooter;