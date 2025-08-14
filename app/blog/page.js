import Link from 'next/link';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - matches your site */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-black">
              Pixaify
            </Link>
            <nav className="flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-black">
                Home
              </Link>
              <Link href="/blog" className="text-black font-medium">
                Blog
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-black">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            AI Headshots <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Tips, guides, and insights for creating perfect professional headshots with AI
          </p>
          
          <div className="bg-gray-50 rounded-xl p-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon!</h2>
            <p className="text-gray-600 mb-6">
              We're working on exciting content about AI headshots, professional photography tips, and career advice.
            </p>
            <Link 
              href="/login" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Your Headshots Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
