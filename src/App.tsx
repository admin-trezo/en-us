import React from 'react';
import { Shield, Lock, Wallet, ChevronRight, ArrowRight, HelpCircle, Settings, Download } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white font-sans">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
                Get Started with <span className="text-indigo-600">Trezor.io/start</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Your complete guide to setting up and securing your Trezor hardware wallet for safe cryptocurrency storage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#setup-guide" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition duration-300">
                  Start Setup <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#faq" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 shadow-sm transition duration-300">
                  Learn More <HelpCircle className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Trezor hardware wallet" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <Shield className="h-10 w-10 text-indigo-600" />
                  <div>
                    <p className="font-bold text-gray-900">100% Secure</p>
                    <p className="text-sm text-gray-600">Your keys, your crypto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
            Why Choose Trezor.io/start?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maximum Security</h3>
              <p className="text-gray-600">
                Trezor.io/start guides you through setting up the most secure hardware wallet solution for your cryptocurrency assets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Setup Process</h3>
              <p className="text-gray-600">
                Follow our step-by-step Trezor.io/start guide to configure your device in minutes, even if you're a beginner.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Wallet className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Currency Support</h3>
              <p className="text-gray-600">
                Trezor.io/start helps you configure your wallet to store Bitcoin, Ethereum, and thousands of other cryptocurrencies.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Guide Section */}
        <section id="setup-guide" className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
            Complete Trezor.io/start Setup Guide
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Download Trezor Suite</h3>
                  <p className="text-gray-600 mb-4">
                    Visit Trezor.io/start and download the Trezor Suite application for your operating system. This official software will guide you through the setup process and serve as your interface for managing cryptocurrencies.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">Windows</span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">macOS</span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">Linux</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Connect Your Trezor Device</h3>
                  <p className="text-gray-600 mb-4">
                    Unbox your Trezor hardware wallet and connect it to your computer using the USB cable provided. The Trezor.io/start process will automatically detect your device and guide you through the initial setup.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    <li>Ensure you're using the original USB cable that came with your device</li>
                    <li>Connect directly to your computer (avoid USB hubs)</li>
                    <li>Make sure your Trezor screen turns on when connected</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Create a New Wallet</h3>
                  <p className="text-gray-600 mb-4">
                    Through the Trezor.io/start process, you'll be guided to create a new wallet. This involves setting up a PIN code and generating a recovery seed phrase that serves as the backup for your wallet.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-2">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Lock className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          <strong>Important Security Note:</strong> Write down your recovery seed on the provided recovery card. Never store it digitally or take photos of it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Verify Your Recovery Seed</h3>
                  <p className="text-gray-600 mb-4">
                    The Trezor.io/start process will ask you to verify your recovery seed by entering specific words in a random order. This ensures you've correctly written down your seed phrase.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  5
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Start Using Your Trezor</h3>
                  <p className="text-gray-600 mb-4">
                    Once setup is complete, you can use Trezor Suite to manage your cryptocurrencies. The Trezor.io/start process concludes with a brief overview of the features available in Trezor Suite.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    <li>Send and receive cryptocurrencies</li>
                    <li>Monitor your portfolio</li>
                    <li>Exchange between different cryptocurrencies</li>
                    <li>Connect to third-party services securely</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
            Frequently Asked Questions About Trezor.io/start
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What is Trezor.io/start?</h3>
              <p className="text-gray-600">
                Trezor.io/start is the official starting point for setting up your Trezor hardware wallet. It provides access to Trezor Suite software and guides you through the initial configuration process to ensure your cryptocurrencies are stored securely.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is Trezor.io/start safe to use?</h3>
              <p className="text-gray-600">
                Yes, Trezor.io/start is the official website for Trezor wallet setup. Always ensure you're on the genuine site by checking the URL and looking for security indicators in your browser. Never download Trezor software from unofficial sources.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How long does the Trezor.io/start setup process take?</h3>
              <p className="text-gray-600">
                The complete Trezor.io/start setup process typically takes 10-15 minutes. This includes downloading Trezor Suite, connecting your device, creating a wallet, and verifying your recovery seed. The process is designed to be straightforward while ensuring maximum security.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What should I do if I lose my Trezor device?</h3>
              <p className="text-gray-600">
                If you lose your Trezor device, your funds remain safe as long as you have your recovery seed. You can purchase a new Trezor device and restore your wallet using the recovery seed during the Trezor.io/start setup process. This will give you access to all your cryptocurrencies.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 border-t border-gray-200">
          <div className="bg-indigo-700 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to secure your crypto with Trezor.io/start?
                  </h2>
                  <p className="text-indigo-100 mb-8 text-lg">
                    Join millions of users who trust Trezor hardware wallets for cryptocurrency security. Get started today with our easy setup process.
                  </p>
                  <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 shadow-md transition duration-300">
                    Get Your Trezor Now <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Trezor hardware wallet in use" 
                    className="rounded-xl shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;