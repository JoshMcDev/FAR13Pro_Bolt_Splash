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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

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
      description: "Human-in-the-loop and full AI automation options with team coordination"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
                <BookOpenCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">FAR 13 Pro</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#capabilities" className="text-gray-300 hover:text-white transition-colors">Capabilities</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-400 transition-colors">
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
              <button className="w-full bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 animated-gradient">
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
              <h1 className="rubik-glitch-regular text-5xl md:text-6xl text-red-600 text-center">FAR 13 Pro</h1>
            </div>
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AI-powered procurement file generation for simplified acquisitions.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-8">
                Streamline commercial supply and service requirements with intelligent automation.
              </p>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mt-8">
                <DecryptedText 
                  text="Demystify and decrypt the process." 
                  className="text-red-600" 
                  encryptedClassName="text-red-600"
                  animateOn="view" 
                  revealDirection="start" 
                  sequential={true}
                  speed={105}
                  maxIterations={25}
                  pauseBetweenAnimations={1500}
                />
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl animate-pulse focus:ring-2 focus:ring-blue-400">
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
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-850/50">
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
                  className="bg-gray-850 rounded-2xl p-8 border border-gray-700 w-96 h-[400px] mx-4 flex flex-col justify-between items-center shadow-lg hover:border-teal-400/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center break-words">{module.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-center break-words whitespace-pre-line text-wrap">{module.description}</p>
                  <div className="mt-4 flex flex-col gap-2 w-full">
                    {module.features && module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
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
      <section className="flex justify-center items-center h-[70vh] bg-[#0B0B0F] w-full">
        <img
          src="/macbook.png"
          alt="Dashboard demo"
          className="max-w-full h-auto"
          style={{ maxWidth: '800px', maxHeight: '70vh' }}
        />
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Individual to Enterprise Scaling Capability</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for government contracting professionals with <span className="text-red-600">efficiency</span>, <span className="text-red-600">compliance</span>, 
              and <span className="text-red-600">integration</span> at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-800 transition-colors">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Procurement Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of contracting professionals who have streamlined their 
            FAR 13 acquisitions with AI-powered automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl animate-pulse focus:ring-2 focus:ring-blue-400">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
                  <BookOpenCheck className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">FAR 13 Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered procurement studio for simplified acquisitions under FAR 13.
              </p>
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