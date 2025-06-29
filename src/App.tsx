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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const modules = [
    {
      title: "Requirements Refinement",
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
        "Market Research Reports",
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
        "Acquisition Plan Generation",
        "Determinations & Findings", 
        "Risk Matrix Development",
        "Logoistics & Sustainment Considerations"
      ]
    },
    {
      title: "Solicitation",
      icon: Mail,
      description: "Generate professional RFQs and RFPs with automated SAM.gov integration.",
      features: [
        "Vendor Outreach Management, Industry RFIs, & Sources Sought",
        "Request for Quote Generation",
        "Request for Proposal Generation",
        "Recommend CLIN Structure, Provisions, & Clauses"
      ]
    },
    {
      title: "Evaluation",
      icon: Award,
      description: "Streamlined vendor evaluation with automated scoring and compliance checks.",
      features: [
        "Technical Review Automation",
        "Pricing Analysis Tools",
        "Past Performance Reviews",
        "Fair & Reasonable Determination"
      ]
    },
    {
      title: "Award",
      icon: Trophy,
      description: "Complete contract generation and award processing with COR appointment automation.",
      features: [
        "Contract Generation",
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
      description: "Direct API integration for automated posting and vendor verification"
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
                <img src="/emblems/nasa.svg" alt="NASA" className="h-12 w-auto inline-block" />
                <img src="/emblems/fbi.svg" alt="FBI" className="h-12 w-auto inline-block" />
                <img src="/emblems/doj.svg" alt="DOJ" className="h-12 w-auto inline-block" />
                <img src="/emblems/dod.svg" alt="DoD" className="h-12 w-auto inline-block" />
                <img src="/emblems/dhs.svg" alt="DHS" className="h-12 w-auto inline-block" />
                <img src="/emblems/doe.svg" alt="DOE" className="h-12 w-auto inline-block" />
                <img src="/emblems/gsa.svg" alt="GSA" className="h-12 w-auto inline-block" />
                <img src="/emblems/usda.svg" alt="USDA" className="h-12 w-auto inline-block" />
                <img src="/emblems/hhs.svg" alt="HHS" className="h-12 w-auto inline-block" />
                <img src="/emblems/treasury.svg" alt="Treasury" className="h-12 w-auto inline-block" />
                <img src="/emblems/epa.svg" alt="EPA" className="h-12 w-auto inline-block" />
                <img src="/emblems/usaid.svg" alt="USAID" className="h-12 w-auto inline-block" />
                <img src="/emblems/commerce.svg" alt="Commerce" className="h-12 w-auto inline-block" />
                <img src="/emblems/labor.svg" alt="Labor" className="h-12 w-auto inline-block" />
                <img src="/emblems/va.svg" alt="VA" className="h-12 w-auto inline-block" />
                <img src="/emblems/state.svg" alt="State" className="h-12 w-auto inline-block" />
                {/* Repeat for seamless loop */}
                <img src="/emblems/nasa.svg" alt="NASA" className="h-12 w-auto inline-block" />
                <img src="/emblems/fbi.svg" alt="FBI" className="h-12 w-auto inline-block" />
                <img src="/emblems/doj.svg" alt="DOJ" className="h-12 w-auto inline-block" />
                <img src="/emblems/dod.svg" alt="DoD" className="h-12 w-auto inline-block" />
                <img src="/emblems/dhs.svg" alt="DHS" className="h-12 w-auto inline-block" />
                <img src="/emblems/doe.svg" alt="DOE" className="h-12 w-auto inline-block" />
                <img src="/emblems/gsa.svg" alt="GSA" className="h-12 w-auto inline-block" />
                <img src="/emblems/usda.svg" alt="USDA" className="h-12 w-auto inline-block" />
                <img src="/emblems/hhs.svg" alt="HHS" className="h-12 w-auto inline-block" />
                <img src="/emblems/treasury.svg" alt="Treasury" className="h-12 w-auto inline-block" />
                <img src="/emblems/epa.svg" alt="EPA" className="h-12 w-auto inline-block" />
                <img src="/emblems/usaid.svg" alt="USAID" className="h-12 w-auto inline-block" />
                <img src="/emblems/commerce.svg" alt="Commerce" className="h-12 w-auto inline-block" />
                <img src="/emblems/labor.svg" alt="Labor" className="h-12 w-auto inline-block" />
                <img src="/emblems/va.svg" alt="VA" className="h-12 w-auto inline-block" />
                <img src="/emblems/state.svg" alt="State" className="h-12 w-auto inline-block" />
              </div>
            </div>
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AI-powered procurement platform for simplified acquisitions. Streamline FAR 13 
                commercial supplies and services procurement with intelligent automation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl animate-pulse focus:ring-2 focus:ring-blue-400">
                Start Free Trial
              </button>
              <button className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Watch Demo
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
              Seven integrated modules covering the entire procurment workflow from requirements definition through contract award and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              if (index === modules.length - 1) {
                return (
                  <div
                    key={index}
                    className="bg-gray-850 rounded-2xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-3xl group relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-transparent before:hover:border-gradient-to-br before:hover:from-pink-500 before:hover:to-blue-500 before:pointer-events-none"
                    data-aos="fade-up"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{module.description}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>Spend Analytics</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>Performance Dashboard</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>Compliance Reporting</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>Trend Analysis</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  className="bg-gray-850 rounded-2xl p-8 border border-gray-700 hover:border-teal-400/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-3xl group relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-transparent before:hover:border-gradient-to-br before:hover:from-pink-500 before:hover:to-blue-500 before:pointer-events-none"
                  data-aos="fade-up"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{module.description}</p>
                  </div>
                  <div className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Individual to Enterprise Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for government contracting professionals with security, compliance, 
              and integration at the core.
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
              <div className="text-4xl font-bold text-teal-400 mb-2">95%</div>
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
            Ready to Transform Your Procurement Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of contracting professionals who have streamlined their 
            FAR 13 acquisitions with AI-powered automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl animate-pulse focus:ring-2 focus:ring-blue-400">
              Start 30-Day Free Trial
            </button>
            <button className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Schedule Demo
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
                AI-powered procurement platform for simplified acquisitions under FAR 13.
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