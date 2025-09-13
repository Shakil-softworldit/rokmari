import { Search, User, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NavBer() {
  return (
    <div className="w-full bg-white border-b">
      {/* Top utility bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span>বিনামূল্যে ডেলিভারি</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>আমার অ্যাকাউন্ট</span>
              <span>অর্ডার ট্র্যাক</span>
              <span>কাস্টমার সার্ভিস</span>
              <span>হেল্প সেন্টার</span>
              <span>বই পড়ুন</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-orange-600">রকমারি</div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search by electronics (Room Heaters, Smart Watch, Auto Volt Sta..."
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Button
                size="sm"
                className="absolute right-1 inset-y-0 bg-white text-gray-700  flex items-center justify-center hover:bg-gray-100"
              >
                <Search className="h-2 w-2" />
              </Button>
            </div>
          </div>




          {/* Right side - Sign in and Cart */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <User className="h-5 w-5" />
              <span>Sign in</span>
            </div>
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <div className=" border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 py-3 text-sm">
            <span className="text-gray-700 hover:text-orange-600 cursor-pointer">হোম</span>
            <span className="text-gray-700 hover:text-orange-600 cursor-pointer">বই</span>
            <span className="text-gray-700 hover:text-orange-600 cursor-pointer">ইলেকট্রনিক্স</span>
            <span className="text-gray-700 hover:text-orange-600 cursor-pointer">স্মার্ট ডিভাইস</span>
            <span className="text-gray-700 hover:text-orange-600 cursor-pointer">লাইফ স্টাইল</span>
            <span className="text-gray-700 hover:text-orange-600 cursor-pointer">কম্পিউটার ও ল্যাপটপ, ১৮</span>
            <span className="text-gray-700 hover:text-orange-600 cursor-pointer">প্রাতিষ্ঠানিক অর্ডার</span>
            <span className="text-gray-700 hover:text-orange-600 cursor-pointer">আজকের অফার !</span>
          </div>
        </div>
      </div>

    </div>
  )
}
