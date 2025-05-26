import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowLeft, Shield, Eye, Lock, Trash2, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-screen bg-gray-50">
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

      {/* Privacy Policy Content */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Effective Date: June 1, 2024</p>
          </div>

          <div className="prose max-w-none">
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                Joura  is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you use the Joura mobile application (the
                "App"). By using the App, you consent to the practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <span>1. Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1.1 Personal Information:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Email address (for account creation and support)</li>
                    <li>Location data (for reporting and viewing potholes)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1.2 Non-Personal Information:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Device type and operating system</li>
                    <li>App usage data (e.g., frequency of reporting)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1.3 Photos:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>When voluntarily uploaded by users to accompany a report</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>2. How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>To allow users to report and view road hazards</li>
                  <li>To display reports on a map and track status</li>
                  <li>To contact users for support, feedback, or verification</li>
                  <li>To analyze trends and improve the App</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Share Your Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. How We Share Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We do not sell or rent your personal information. We may share data:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>With municipalities or NGOs to support road maintenance efforts</li>
                  <li>With third-party service providers (e.g., cloud hosting, analytics)</li>
                  <li>As required by law or to protect rights and safety</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-blue-600" />
                  <span>4. Data Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We use commercially reasonable measures to protect your information. However, no system can guarantee
                  absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Account Deletion */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trash2 className="w-5 h-5 text-blue-600" />
                  <span>5. Account Deletion</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 mb-4">
                  Users may request account deletion at any time by following these steps in the Joura mobile app:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">How to Delete Your Account:</h4>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                        1
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Go to Your Profile</h5>
                        <p className="text-gray-600 text-sm">
                          Open the Joura app and navigate to the "Profile" tab at the bottom of the screen. You'll see
                          your profile information including your name, email, and profile picture.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                        2
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Find "Delete Account" Option</h5>
                        <p className="text-gray-600 text-sm">
                          Scroll down in your profile menu to find the "Delete Account" option. It will be displayed
                          with a trash can icon among other profile settings like Edit Profile, My Reports, Support, and
                          Privacy Policy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-sm">
                        3
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Read the Notice and Confirm</h5>
                        <p className="text-gray-600 text-sm">
                          If you want to delete your account, tap on "Delete Account" and carefully read all the notices
                          and warnings that appear. Once you understand the consequences, click on the delete
                          confirmation button to proceed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-red-800 mb-2">⚠️ Important Warning</h5>
                      <p className="text-red-700 text-sm mb-3">
                        <strong>All your information will be permanently deleted</strong> when you confirm account
                        deletion. This includes:
                      </p>
                      <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                        <li>Your profile information and account details</li>
                        <li>All reports you have submitted</li>
                        <li>Your report history and activity data</li>
                        <li>Any photos or content you have uploaded</li>
                      </ul>
                      <p className="text-red-700 text-sm mt-3 font-medium">
                        <strong>Once deleted, this data cannot be recovered or undone.</strong> Please make sure you
                        want to permanently delete your account before proceeding with the deletion process in the app.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-sm">
                  Account deletion requests are processed within 48 hours. If you need assistance with account deletion
                  or have questions about this process, please contact our support team before proceeding.
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  The App is not intended for users under the age of 13. We do not knowingly collect data from children.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. Your Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Access the data we store about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent at any time by deleting your account</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  If you have questions or concerns about this policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <strong>Phone:</strong> +961 71 432 362 or +971 50 275 9139
                    </li>
                    <li>
                      <strong>Website:</strong> joura.info
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> We reserve the right to update this Privacy Policy from time to time. Any changes
                will be posted within the App and/or on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
