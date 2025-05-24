import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Globe,
  Database,
  UserCheck,
  Settings,
  FileText,
  Clock,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Joura</span>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Header */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">
            Transparent & Secure
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            Effective Date: June 1, 2024
          </p>
          <p className="text-lg text-blue-100">
            Your privacy is fundamental to our mission. Learn how we protect and
            handle your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Joura We is committed to protecting your
              privacy and ensuring transparency in how we collect, use, and
              safeguard your information when you use the Joura mobile
              application (the "App"). This Privacy Policy explains our
              practices in detail and your rights regarding your personal data.
            </p>
          </div>

          {/* Quick Overview */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-900">
                <Eye className="w-5 h-5" />
                <span>Privacy at a Glance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-800">Minimal data collection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-800">Secure data storage</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-800">User control over data</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information We Collect - Expanded */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-600" />
                <span>1. Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  <span>1.1 Personal Information</span>
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div>
                    <strong className="text-gray-900">Email Address:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Required for account creation, authentication, password
                      recovery, and important service communications. We use
                      industry-standard encryption for email storage.
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-900">
                      Profile Information (Optional):
                    </strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Display name and profile picture if you choose to
                      personalize your account. This information helps build
                      community trust and recognition.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>1.2 Location Data</span>
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div>
                    <strong className="text-gray-900">Precise Location:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      GPS coordinates are collected only when you create a
                      report to accurately pinpoint road hazards. This data is
                      essential for municipalities to locate and address issues
                      effectively.
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-900">General Location:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      City/region information to display relevant reports in
                      your area and provide localized content. This helps you
                      see nearby road conditions and community activity.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Important:</strong> Location data is only
                      collected when you actively use the reporting feature.
                      Background location tracking is never performed.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Settings className="w-4 h-4 text-blue-600" />
                  <span>1.3 Technical Information</span>
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <strong>Device Information:</strong> Device type,
                      operating system version, app version, and unique device
                      identifiers
                    </li>
                    <li>
                      <strong>Usage Analytics:</strong> App interactions,
                      feature usage frequency, session duration, and crash
                      reports
                    </li>
                    <li>
                      <strong>Network Information:</strong> IP address, internet
                      service provider, and connection type
                    </li>
                    <li>
                      <strong>Performance Data:</strong> App load times, error
                      logs, and performance metrics for optimization
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>1.4 User-Generated Content</span>
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div>
                    <strong className="text-gray-900">Photos and Media:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Images you voluntarily upload to document road hazards.
                      Photos are processed to remove personal metadata (EXIF
                      data) before storage for privacy protection.
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-900">
                      Report Descriptions:
                    </strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Text descriptions, severity ratings, and other details you
                      provide about reported issues.
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-900">
                      Community Interactions:
                    </strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Confirmations, comments, and other interactions with
                      community reports that help verify and prioritize road
                      safety issues.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Your Information - Expanded */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>2. How We Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900 mb-2">
                    Core Service Delivery
                  </h5>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Process and display road hazard reports</li>
                    <li>• Maintain interactive map functionality</li>
                    <li>• Track and update report statuses</li>
                    <li>• Enable community verification features</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900 mb-2">
                    Communication & Support
                  </h5>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Send important service updates</li>
                    <li>• Provide customer support assistance</li>
                    <li>• Notify about report status changes</li>
                    <li>• Share community achievements</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900 mb-2">
                    Analytics & Improvement
                  </h5>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Analyze usage patterns and trends</li>
                    <li>• Identify areas for app improvement</li>
                    <li>• Generate insights for municipalities</li>
                    <li>• Optimize app performance</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-900 mb-2">
                    Safety & Security
                  </h5>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Prevent spam and fraudulent reports</li>
                    <li>• Ensure data integrity and accuracy</li>
                    <li>• Maintain platform security</li>
                    <li>• Comply with legal requirements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing - Expanded */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span>3. How We Share Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h5 className="font-semibold text-red-900 mb-2">
                  What We Never Do
                </h5>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>✗ Sell your personal information to third parties</li>
                  <li>✗ Share your data for marketing purposes</li>
                  <li>
                    ✗ Provide access to your private messages or personal
                    details
                  </li>
                  <li>✗ Track your location outside of active app usage</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3">
                  Authorized Data Sharing
                </h5>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h6 className="font-medium text-gray-900">
                      Municipal Partners
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      Aggregated, anonymized report data to help prioritize
                      infrastructure improvements. Individual user identities
                      are never shared - only location and severity of reported
                      issues.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h6 className="font-medium text-gray-900">
                      NGO Collaborators
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      Statistical summaries and trend analyses to support
                      community development initiatives. All data is aggregated
                      and cannot be traced back to individual users.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h6 className="font-medium text-gray-900">
                      Service Providers
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      Cloud hosting, analytics, and technical infrastructure
                      providers who help us operate the service. These partners
                      are bound by strict confidentiality agreements and data
                      processing addendums.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h6 className="font-medium text-gray-900">
                      Legal Compliance
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      When required by law, court order, or government
                      investigation. We will notify users whenever legally
                      possible and challenge overly broad requests.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security - Expanded */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-blue-600" />
                <span>4. Data Security & Protection</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h5 className="font-semibold text-gray-900 mb-3">
                  Technical Safeguards
                </h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h6 className="font-medium text-gray-900 mb-2">
                      Encryption
                    </h6>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• AES-256 encryption for data at rest</li>
                      <li>• TLS 1.3 for data in transit</li>
                      <li>
                        • End-to-end encryption for sensitive communications
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h6 className="font-medium text-gray-900 mb-2">
                      Access Control
                    </h6>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Multi-factor authentication for admin access</li>
                      <li>• Role-based access permissions</li>
                      <li>• Regular access audits and reviews</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3">
                  Operational Security
                </h5>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ul className="text-blue-800 text-sm space-y-2">
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Continuous monitoring for suspicious activities</li>
                    <li>
                      • Automated backup systems with geographic redundancy
                    </li>
                    <li>
                      • Incident response plan for potential security breaches
                    </li>
                    <li>• Employee security training and background checks</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h6 className="font-semibold text-yellow-900 mb-2">
                  Security Limitations
                </h6>
                <p className="text-yellow-800 text-sm">
                  While we implement robust security measures, no system can
                  guarantee absolute security. We encourage users to protect
                  their account credentials and report any suspicious activity
                  immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>5. Data Retention & Deletion</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h6 className="font-semibold text-blue-900 mb-2">
                    Account Data
                  </h6>
                  <p className="text-2xl font-bold text-blue-900 mb-1">
                    Active
                  </p>
                  <p className="text-blue-800 text-sm">
                    Retained while account is active
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h6 className="font-semibold text-green-900 mb-2">
                    Report Data
                  </h6>
                  <p className="text-2xl font-bold text-green-900 mb-1">
                    5 Years
                  </p>
                  <p className="text-green-800 text-sm">
                    For infrastructure planning
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h6 className="font-semibold text-purple-900 mb-2">
                    Analytics Data
                  </h6>
                  <p className="text-2xl font-bold text-purple-900 mb-1">
                    2 Years
                  </p>
                  <p className="text-purple-800 text-sm">
                    Aggregated statistics only
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-2">
                  Deletion Process
                </h6>
                <p className="text-gray-700 text-sm mb-3">
                  When you delete your account or request data deletion:
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Personal identifiers are immediately removed</li>
                  <li>• Account access is permanently disabled</li>
                  <li>
                    • Reports are anonymized but preserved for public safety
                  </li>
                  <li>• Complete deletion is processed within 48 hours</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights - Expanded */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5 text-blue-600" />
                <span>6. Your Privacy Rights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h6 className="font-semibold text-gray-900">
                      Access Rights
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      Request a copy of all personal data we hold about you,
                      including reports, account information, and usage
                      analytics.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h6 className="font-semibold text-gray-900">
                      Correction Rights
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      Update or correct any inaccurate personal information in
                      your account or report history.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h6 className="font-semibold text-gray-900">
                      Deletion Rights
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      Request complete account deletion or removal of specific
                      data types, subject to legal retention requirements.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h6 className="font-semibold text-gray-900">
                      Portability Rights
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      Export your data in a structured, machine-readable format
                      for transfer to another service.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h6 className="font-semibold text-gray-900">
                      Consent Withdrawal
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      Withdraw consent for data processing activities, though
                      this may limit app functionality.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h6 className="font-semibold text-gray-900">
                      Objection Rights
                    </h6>
                    <p className="text-gray-700 text-sm mt-1">
                      Object to specific data processing activities or request
                      restriction of processing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h6 className="font-semibold text-blue-900 mb-2">
                  How to Exercise Your Rights
                </h6>
                <p className="text-blue-800 text-sm mb-3">
                  Contact our privacy team through any of these methods:
                </p>
                <div className="space-y-1 text-blue-800 text-sm">
                  <p>📞 Phone: +961 71 432 362 or +971 50 275 9139</p>
                  <p>🌐 Website: joura.info</p>
                  <p>📱 In-app: Settings → Privacy → Data Rights</p>
                </div>
                <p className="text-blue-800 text-sm mt-3">
                  We respond to all privacy requests within 30 days and provide
                  status updates for complex requests.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-600" />
                <span>7. International Data Transfers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Your data may be transferred to and processed in countries other
                than Lebanon for cloud hosting and technical infrastructure
                purposes. We ensure adequate protection through:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h6 className="font-semibold text-gray-900 mb-2">
                    Legal Safeguards
                  </h6>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Data Processing Agreements (DPAs)</li>
                    <li>• Standard Contractual Clauses</li>
                    <li>• Adequacy decisions where applicable</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h6 className="font-semibold text-gray-900 mb-2">
                    Technical Measures
                  </h6>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Encryption during transfer and storage</li>
                    <li>• Access controls and monitoring</li>
                    <li>• Regular compliance audits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-blue-600" />
                <span>8. Children's Privacy Protection</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 mb-3">
                  <strong>Age Requirement:</strong> Joura is designed for users
                  aged 13 and above. We do not knowingly collect personal
                  information from children under 13.
                </p>
                <p className="text-orange-800 text-sm">
                  If we discover that we have collected personal information
                  from a child under 13, we will immediately delete that
                  information. Parents who believe their child has provided
                  information to us should contact our support team immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Updates */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>9. Policy Updates & Contact Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h6 className="font-semibold text-gray-900 mb-3">
                  Policy Updates
                </h6>
                <p className="text-gray-700 mb-3">
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices, technology, or legal requirements.
                  When we make significant changes:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>
                    We'll provide 30 days advance notice through the app and
                    email
                  </li>
                  <li>We'll highlight key changes in plain language</li>
                  <li>
                    We'll request renewed consent for material changes affecting
                    data processing
                  </li>
                  <li>
                    The updated policy will be posted on our website with a new
                    effective date
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h6 className="font-semibold text-gray-900 mb-4">
                  Contact Our Privacy Team
                </h6>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2 block">
                      General Inquiries
                    </h6>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p>📞 +961 71 432 362</p>
                      <p>📞 +971 50 275 9139</p>
                      <p>🌐 joura.info</p>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2 block">
                      Privacy-Specific Requests
                    </h6>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <p>📱 In-app: Settings → Privacy</p>
                      <p>⏱️ Response time: Within 48 hours</p>
                      <p>🔒 Secure communication available</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h6 className="font-semibold text-blue-900 mb-2">
                  Our Privacy Commitment
                </h6>
                <p className="text-blue-800 text-sm">
                  Privacy is not just a policy for us—it's a fundamental value.
                  We're committed to transparency, user control, and continuous
                  improvement of our privacy practices. If you have any concerns
                  or suggestions about how we can better protect your privacy,
                  please don't hesitate to reach out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
