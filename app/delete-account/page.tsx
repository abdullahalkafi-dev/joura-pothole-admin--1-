import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowLeft, Shield, Eye, Lock, Trash2, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DeletePage() {
  return (
    <div className="w-screen bg-gray-50">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Account deletion Policy</h1>
          </div>

<div className="flex flex-col md:flex-row gap-8 justify-center mb-8">
  <div className="flex-1">
    <Image 
    width={500}
    height={800}
      src="/accountDelete1.png" 
      alt="Delete Account Step 1" 
      className="rounded-lg shadow-md w-full h-auto max-w-sm mx-auto" 
    />
    <p className="text-center text-sm text-gray-500 mt-2">Profile screen with Delete Account option</p>
  </div>
  
  <div className="flex-1">
    <Image
    width={500}
    height={800} 
      src="/accountDelete2.png" 
      alt="Delete Account Confirmation" 
      className="rounded-lg shadow-md w-full h-auto max-w-sm mx-auto" 
    />
    <p className="text-center text-sm text-gray-500 mt-2">Confirmation screen with warnings</p>
  </div>
</div>


          <div className="prose max-w-none">
        


            {/* Account Deletion */}
            <Card className="mb-8">
              
              <CardContent className="space-y-4 py-5">
                <p className="text-gray-700 dark:text-white mb-4">
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

                <p className="text-gray-700 dark:text-white  text-sm">
                  Account deletion requests are processed within 48 hours. If you need assistance with account deletion
                  or have questions about this process, please contact our support team before proceeding.
                </p>
              </CardContent>
            </Card>

          
          </div>
        </div>
      </div>
    </div>
  )
}
