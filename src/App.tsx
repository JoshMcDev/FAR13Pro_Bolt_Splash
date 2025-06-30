import React, { useState } from 'react';
import { 
  FileText, 
  TrendingUp, 
  Calendar, 
  Mail, 
  Award, 
  Trophy, 
  BarChart3,
  ShieldCheck,
  Users,
  Search,
  Building2,
  ClipboardList,
  DollarSign,
  Eye,
  Lock,
  Download,
  Globe,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  BookOpenCheck
} from 'lucide-react';
import CountUp from 'react-countup';
import DecryptedText from './DecryptedText';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import Hyperspeed from './ui/Hyperspeed';
import { hyperspeedPresets } from './ui/hyperspeed-presets';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [billing, setBilling] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>('apprentice');

  const modules = [
    {
      title: "Requirements",
      icon: FileText,
      description: "Clarify requirements and create comprehensive work statements with AI-powered assistance.",
      features: [
        "Technical Specifications",
        "Statement of Objectives", 
        "Performance Work Statement",
        "Quality Assurance Surveillance Plan"
      ]
    },
    {
      title: "Market Intelligence", 
      icon: TrendingUp,
      description: "Deep market research and competitive analysis to inform your acquisition strategy.",
      features: [
        "Market Research Report",
        "Historical Pricing Analysis",
        "Competitive Analysis",
        "Commercial Item Determination"
      ]
    },
    {
      title: "Planning & Coordination",
      icon: Calendar,
      description: "Comprehensive acquisition planning with automated D&Fs and justifications.",
      features: [
        "Acquisition Plan",
        "Determinations & Findings", 
        "Justifications & Approvals",
        "Risk Management Considerations"
      ]
    },
    {
      title: "Solicitation",
      icon: Mail,
      description: "Generate professional RFQs and RFPs with optional SAM.gov integration.",
      features: [
        "Industry RFIs & Sources Sought Generation",
        "Evaluation Criteria",
        "RFQ/RFP Scaffolding",
        "CLIN Structure, Provisions, & Clauses"
      ]
    },
    {
      title: "Evaluation",
      icon: Award,
      description: "Streamlined offeror evaluation with automated review and compliance checks.",
      features: [
        "Abstract of Submissions",
        "Pricing Analysis",
        "Past Performance Reviews",
        "Fair & Reasonable Determination"
      ]
    },
    {
      title: "Award",
      icon: Trophy,
      description: "Complete contract generation and award processing with COR appointment automation.",
      features: [
        "Contract Scaffolding",
        "Clause Generator",
        "COR Appointments",
        "Unsuccessful Offeror Debriefings"
      ]
    },
    {
      title: "Procurement Analytics",
      icon: BarChart3,
      description: "Advanced reporting and analytics to optimize your procurement operations.",
      features: [
        "Spend Analytics",
        "Performance Dashboard",
        "Compliance Reporting",
        "Trend Analysis"
      ]
    }
  ];

  const capabilities = [
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description: "Google SSO integration with role-based access controls"
    },
    {
      icon: Globe,
      title: "SAM.gov Integration", 
      description: "Direct API integration for optional automated posting and vendor verification"
    },
    {
      icon: Download,
      title: "Document Management",
      description: "Template uploads, automated naming, and bulk document export capabilities"
    },
    {
      icon: Users,
      title: "Collaborative Workflow",
      description: "Human-in-the-loop and full AI automation options for selectable modules."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <BookOpenCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">FAR 13 Pro</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors">Capabilities</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button className="bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white px-4 py-2 rounded-lg font-medium hover:brightness-110 focus:ring-2 focus:ring-red-400 transition-all">
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-850 border-t border-gray-700">
            <div className="px-4 py-3 space-y-3">
              <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
              <a href="#capabilities" className="block text-gray-300 hover:text-white">Capabilities</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
              <button className="w-full bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white px-4 py-2 rounded-lg font-medium hover:brightness-110 focus:ring-2 focus:ring-red-400 transition-all">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Animated Federal Agency Emblems Marquee */}
            <div className="overflow-hidden w-full mb-8">
              <div className="flex items-center gap-12 animate-marquee whitespace-nowrap grayscale hover:grayscale-0 transition-all duration-300" style={{ minWidth: '200%' }}>
                {/* Emblems, duplicated for seamless loop */}
                {[
                  'AFARS', 'AGAR', 'AIDAR', 'CAR', 'DAFFARS', 'DARS', 'DEAR', 'DFARS', 'DIAR', 'DLAD', 'DOLAR', 'DOSAR', 'DTAR', 'EDAR', 'EPAAR', 'FEHBAR', 'GSAM', 'HHSAR', 'HSAR', 'HUDAR', 'IAAR', 'JAR', 'LIFAR', 'NFS', 'NMCARS', 'NRCAR', 'SOFARS', 'TAR', 'TRANSFARS', 'VAAR'
                ].map((emblem) => (
                  <img
                    key={emblem + '-1'}
                    src={`/emblems/${emblem}.png`}
                    alt={emblem}
                    className="h-12 w-auto inline-block"
                  />
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  'AFARS', 'AGAR', 'AIDAR', 'CAR', 'DAFFARS', 'DARS', 'DEAR', 'DFARS', 'DIAR', 'DLAD', 'DOLAR', 'DOSAR', 'DTAR', 'EDAR', 'EPAAR', 'FEHBAR', 'GSAM', 'HHSAR', 'HSAR', 'HUDAR', 'IAAR', 'JAR', 'LIFAR', 'NFS', 'NMCARS', 'NRCAR', 'SOFARS', 'TAR', 'TRANSFARS', 'VAAR'
                ].map((emblem) => (
                  <img
                    key={emblem + '-2'}
                    src={`/emblems/${emblem}.png`}
                    alt={emblem}
                    className="h-12 w-auto inline-block"
                  />
                ))}
              </div>
            </div>
            {/* FAR 13 Pro Glitch Title */}
            <div className="mb-4">
              <h1 className="rubik-glitch-regular text-4xl sm:text-5xl md:text-6xl bg-gradient-to-br from-red-600 via-red-500 to-red-800 bg-clip-text text-transparent text-center">FAR 13 Pro</h1>
            </div>
            <div className="mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl md:max-w-4xl mx-auto leading-relaxed">
                AI-powered procurement file generation for simplified acquisitions.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl md:max-w-4xl mx-auto leading-relaxed mt-8">
                Streamline commercial supply and service requirements with intelligent automation.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl max-w-2xl md:max-w-4xl mx-auto leading-relaxed mt-8">
                <DecryptedText 
                  text="Demystify and decrypt the process." 
                  className="bg-gradient-to-br from-red-600 via-red-500 to-red-800 bg-clip-text text-transparent" 
                  encryptedClassName="bg-gradient-to-br from-red-600 via-red-500 to-red-800 bg-clip-text text-transparent"
                  animateOn="view" 
                  revealDirection="start" 
                  sequential={true}
                  speed={60}
                  maxIterations={25}
                  pauseBetweenAnimations={1500}
                  characters="abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=,.?"
                />
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:brightness-110 hover:shadow-2xl focus:ring-2 focus:ring-red-400 transition-all duration-200">
                Start Free Trial
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              {/* Removed compliance badges */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Acquisition Studio</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seven integrated modules covering procurment workflow from requirements definition through contract award and analytics.
            </p>
          </div>

          <InfiniteMovingCards
            items={modules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700 w-full max-w-xs sm:max-w-sm md:max-w-md min-w-[16rem] sm:min-w-[18rem] md:min-w-[20rem] h-[420px] sm:h-[420px] md:h-[420px] mx-2 sm:mx-4 flex flex-col justify-between items-center shadow-lg hover:border-teal-400/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="mb-4 flex items-center justify-center w-16 h-16">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex flex-col items-stretch h-full w-full">
                    <h3 className="mt-4 text-lg sm:text-xl font-semibold mb-3 text-center break-words">{module.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-center break-words whitespace-pre-line text-wrap text-sm sm:text-base flex-1">
                      {module.description}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col gap-2 w-full">
                    {module.features && module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            direction="left"
            speed="fast"
          />
        </div>
      </section>

      {/* Dashboard Demo Section */}
      <section className="flex justify-center items-center min-h-[300px] max-h-[70vh] bg-black w-full">
        <img
          src="/macbook4.png"
          alt="Dashboard demo"
          className="w-full max-w-2xl h-auto rounded-xl shadow-xl"
        />
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">From One Click to Compliance Chaos</h2>
            <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-red-600 via-red-500 to-red-800 bg-clip-text text-transparent">Handled Beautifully</div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              For the lone buyer or the entire agency, we automate the hard parts of procurement so you don't have to explain another spreadsheet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:brightness-110 transition-colors">
                    <IconComponent className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-teal-400 mb-2">91.7%</div>
              <div className="text-gray-300">Time Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">Contracting Officers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.3B</div>
              <div className="text-gray-300">Contracts Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 min-h-[36vh] px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
          <Hyperspeed effectOptions={hyperspeedPresets.four} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:brightness-110 hover:shadow-2xl focus:ring-2 focus:ring-red-400 transition-all duration-200">
              Start Free Trial
            </button>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Procurement?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of contracting professionals who have streamlined their 
            FAR 13 acquisitions with AI-powered automation.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Simple, transparent pricing. Start with a free trial, then choose the plan that fits your workflow. All plans include a monthly token allowance and the option to purchase more as you grow.
          </p>
          <div className="flex justify-center items-center gap-4 mt-8">
            <span className="text-gray-400 font-medium">Billed:</span>
            <button
              className={`px-4 py-2 rounded-l-lg font-semibold transition-all ${billing === 'monthly' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg font-semibold transition-all ${billing === 'annual' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
              onClick={() => setBilling('annual')}
            >
              Annual <span className="ml-1 text-green-400 font-bold">(2 months free)</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Trial Plan */}
          <div
            className={`bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 border ${selectedPlan === 'free' ? 'border-2 border-red-600' : 'border-gray-700'} flex flex-col h-full items-center shadow-lg cursor-pointer transition-all`}
            onClick={() => setSelectedPlan('free')}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">Free Trial</h3>
            <div className="text-4xl font-bold text-green-400 mb-2">$0</div>
            <div className="text-gray-400 mb-4">7 days</div>
            <ul className="text-gray-300 text-sm mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              <li><span className="font-bold text-white">10,000</span> tokens included</li>
              <li>All features unlocked</li>
              <li>Export documents</li>
              <li>Email support</li>
              <li>No credit card required</li>
            </ul>
            <button className={`w-full font-semibold py-3 rounded-lg shadow-lg hover:brightness-110 transition-all mt-auto ${selectedPlan === 'free' ? 'bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white' : 'bg-gradient-to-br from-green-500 to-teal-400 text-black'}`}>Start Free</button>
          </div>
          {/* Apprentice Plan */}
          <div
            className={`bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 border ${selectedPlan === 'apprentice' ? 'border-2 border-red-600' : 'border-gray-700'} flex flex-col h-full items-center shadow-lg cursor-pointer transition-all`}
            onClick={() => setSelectedPlan('apprentice')}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">Apprentice</h3>
            <div className="text-4xl font-bold text-red-400 mb-2">
              {billing === 'annual' ? '$490' : '$49'}
              <span className="text-lg font-normal text-gray-300">{billing === 'annual' ? '/yr' : '/mo'}</span>
            </div>
            {billing === 'annual' && (
              <div className="text-green-400 text-xs mb-2 font-semibold">Save $98/year</div>
            )}
            <div className="text-gray-400 mb-4">100,000 tokens/mo</div>
            <ul className="text-gray-300 text-sm mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              <li><span className="font-bold text-white">100,000</span> tokens/month</li>
              <li>All core modules</li>
              <li>Basic reporting</li>
              <li>For SAT buys &amp; below (&lt;$250K)</li>
              <li>Document export</li>
              <li>Email support</li>
              <li><span className="font-bold">$2</span> per 10,000 extra tokens</li>
            </ul>
            <button className={`w-full font-semibold py-3 rounded-lg shadow-lg hover:brightness-110 transition-all mt-auto ${selectedPlan === 'apprentice' ? 'bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white' : 'bg-gradient-to-br from-green-500 to-teal-400 text-black'}`}>Choose Apprentice</button>
          </div>
          {/* Professional Plan */}
          <div
            className={`bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 border ${selectedPlan === 'professional' ? 'border-2 border-red-600' : 'border-gray-700'} flex flex-col h-full items-center shadow-lg cursor-pointer transition-all`}
            onClick={() => setSelectedPlan('professional')}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">Professional</h3>
            <div className="text-4xl font-bold text-blue-400 mb-2">
              {billing === 'annual' ? '$1990' : '$199'}
              <span className="text-lg font-normal text-gray-300">{billing === 'annual' ? '/yr' : '/mo'}</span>
            </div>
            {billing === 'annual' && (
              <div className="text-green-400 text-xs mb-2 font-semibold">Save $398/year</div>
            )}
            <div className="text-gray-400 mb-4">500,000 tokens/mo</div>
            <ul className="text-gray-300 text-sm mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              <li><span className="font-bold text-white">500,000</span> tokens/month</li>
              <li>Everything in Apprentice</li>
              <li>Advanced reporting</li>
              <li>Deep Research and Reasoning</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
              <li>API access</li>
              <li><span className="font-bold">$1.50</span> per 10,000 extra tokens</li>
            </ul>
            <button className={`w-full font-semibold py-3 rounded-lg shadow-lg hover:brightness-110 transition-all mt-auto ${selectedPlan === 'professional' ? 'bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white' : 'bg-gradient-to-br from-green-500 to-teal-400 text-black'}`}>Choose Professional</button>
          </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-12 max-w-2xl mx-auto">
          <span className="font-semibold text-white">What's a Token?</span><br /><br />
          Think of a token as a small unit of text — roughly 4 characters in English. Every plan comes with a monthly token allowance, which powers the core activities you'll be doing: running workflows, generating reports, and completing acquisition tasks.<br /><br />
          Our pricing is designed to match real-world usage — so you're not paying for more than you need, but you'll still have the flexibility to scale when needed. If you ever hit a busy month or need to handle a last-minute requirement, you can always purchase extra tokens on demand.<br /><br />
          It's a simple, scalable model — use what you need, when you need it.
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 flex items-center justify-center">
                  <BookOpenCheck className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">FAR 13 Pro</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 FAR 13 Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showConfetti && <div className="fixed inset-0 pointer-events-none z-50 confetti-burst"></div>}
    </div>
  );
}

export default App;