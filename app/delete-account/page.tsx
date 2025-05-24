import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  MapPin,
  ArrowLeft,
  Trash2,
  AlertTriangle,
  User,
  Menu,
  Settings,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  Download,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">Account Management</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Delete Your Account</h1>
          <p className="text-xl text-red-100">
            Learn how to permanently delete your Joura account and all associated data
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Important:</strong> Account deletion is permanent and cannot be undone. Please read this guide
            carefully before proceeding.
          </AlertDescription>
        </Alert>

        {/* Step-by-Step Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trash2 className="w-5 h-5 text-red-600" />
              <span>How to Delete Your Account</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                    <User className="w-4 h-4 text-blue-600" />
                    <span>Open Your Profile</span>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    In the Joura app, tap the <strong>Profile Menu Icon</strong> located in the top-right corner of your
                    screen or in the navigation menu.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <Menu className="w-6 h-6 text-blue-600" />
                      <span className="text-blue-800 font-medium">
                        Look for the menu icon (three lines) or your profile picture
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-blue-600" />
                    <span>Navigate to Account Settings</span>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    In the profile menu, scroll down to find the <strong>"Account Settings"</strong> or{" "}
                    <strong>"Settings"</strong> section.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700 text-sm">
                      You may need to scroll down in the menu to see all available options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                    <Trash2 className="w-4 h-4 text-red-600" />
                    <span>Find Delete Account Button</span>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Look for the <strong>"Delete Account"</strong> button, usually located at the bottom of the settings
                    page. It may be colored red to indicate its permanent nature.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <span className="text-red-800 font-medium">
                        This button is typically at the bottom of the settings menu
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span>Confirmation Dialog</span>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    After tapping "Delete Account", you'll see a confirmation dialog with important information about
                    what will be deleted.
                  </p>

                  {/* Mock Dialog */}
                  <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
                    <div className="text-center mb-4">
                      <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-3" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Delete Account?</h4>
                      <p className="text-gray-600 text-sm">
                        This action will permanently delete all your data including:
                      </p>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4 mb-4">
                      <ul className="text-red-800 text-sm space-y-1">
                        <li>• Your account profile and settings</li>
                        <li>• All submitted reports and photos</li>
                        <li>• Report history and confirmations</li>
                        <li>• Community interactions and comments</li>
                      </ul>
                    </div>

                    <p className="text-center text-gray-700 text-sm mb-6">
                      <strong>This action cannot be undone.</strong>
                    </p>

                    <div className="flex space-x-3">
                      <Button variant="outline" className="flex-1 border-gray-300 text-gray-700">
                        <XCircle className="w-4 h-4 mr-2" />
                        No, Keep Account
                      </Button>
                      <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Yes, Delete Everything
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Choose Your Option</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center space-x-2">
                        <XCircle className="w-4 h-4" />
                        <span>If you select "No"</span>
                      </h4>
                      <ul className="text-green-800 text-sm space-y-1">
                        <li>• Your account remains active</li>
                        <li>• All data is preserved</li>
                        <li>• You return to the menu page</li>
                        <li>• No changes are made</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>If you select "Yes"</span>
                      </h4>
                      <ul className="text-red-800 text-sm space-y-1">
                        <li>• Account is permanently deleted</li>
                        <li>• All data is removed within 48 hours</li>
                        <li>• You're redirected to login page</li>
                        <li>• Cannot be undone</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Gets Deleted */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-red-600" />
              <span>What Gets Deleted</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold  mb-3 text-red-600">✗ Permanently Removed</h4>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <ul className="text-red-800 text-sm space-y-2">
                    <li>• Your email address and login credentials</li>
                    <li>• Profile information and settings</li>
                    <li>• Personal photos and uploaded images</li>
                    <li>• Report descriptions and comments</li>
                    <li>• Account preferences and notifications</li>
                    <li>• Usage history and analytics data</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-semibold  mb-3 text-green-600">✓ Preserved for Public Safety</h4>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <ul className="text-green-800 text-sm space-y-2">
                    <li>• Anonymous location data of reported issues</li>
                    <li>• Aggregated statistics for municipalities</li>
                    <li>• Road hazard locations (without personal info)</li>
                    <li>• Community safety trends and patterns</li>
                  </ul>
                  <p className="text-green-700 text-xs mt-3 italic">
                    This anonymized data helps maintain road safety for the community
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>Deletion Timeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">0h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Immediate</h4>
                  <p className="text-gray-600 text-sm">Account access is disabled, you're logged out automatically</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-semibold text-sm">24h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Within 24 Hours</h4>
                  <p className="text-gray-600 text-sm">
                    Personal identifiers and account data are removed from active systems
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-semibold text-sm">48h</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Within 48 Hours</h4>
                  <p className="text-gray-600 text-sm">Complete data deletion from all systems and backups</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Before You Delete */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="w-5 h-5 text-blue-600" />
              <span>Before You Delete</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Consider These Options First</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Download className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-900">Export Your Data</h5>
                    <p className="text-blue-800 text-sm">
                      Download a copy of your reports and data before deletion (available in Settings → Privacy → Export
                      Data)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Settings className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-900">Adjust Privacy Settings</h5>
                    <p className="text-blue-800 text-sm">
                      You can limit data collection or disable certain features without deleting your account
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-blue-900">Contact Support</h5>
                    <p className="text-blue-800 text-sm">
                      Speak with our team about your concerns - we may be able to address them without account deletion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Need Help */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-600" />
              <span>Need Help?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Having Trouble?</h4>
                <p className="text-gray-700 text-sm mb-4">
                  If you can't find the delete account option or encounter any issues during the process, our support
                  team is here to help.
                </p>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p>
                    📞 <strong>Phone:</strong> +961 71 432 362
                  </p>
                  <p>
                    📞 <strong>Phone:</strong> +971 50 275 9139
                  </p>
                  <p>
                    🌐 <strong>Website:</strong> joura.info
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Alternative Methods</h4>
                <p className="text-gray-700 text-sm mb-4">
                  You can also request account deletion by contacting our support team directly. We'll process your
                  request within 48 hours.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    <strong>Email us</strong> with "Delete My Account" in the subject line and we'll handle the rest.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Warning */}
        <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
            <div>
              <h4 className="font-semibold text-red-900 mb-2">Final Reminder</h4>
              <p className="text-red-800 text-sm">
                Account deletion is permanent and irreversible. Once deleted, you'll need to create a new account to use
                Joura again, and all your previous reports and community contributions will be lost forever. Please make
                sure this is what you want before proceeding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
