import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-black">
              Pixaify
            </Link>
            <nav className="flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
              <Link href="/blog" className="text-black font-medium">Blog</Link>
              <Link href="/login" className="text-gray-600 hover:text-black">Get Started</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            How to Get Perfect AI Headshots: Complete Guide
          </h1>
          <div className="text-gray-500 mb-6">
            January 15, 2025 • By Pixaify Team • 5 min read
          </div>
          <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
            <Image 
              src="/headshots/human1.jpeg" 
              alt="AI Headshot Example" 
              fill 
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Creating professional headshots with AI has revolutionized how we approach professional photography. Here's everything you need to know.
          </p>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">Why AI Headshots Are Game-Changing</h2>
          
          <p className="mb-6">
            Traditional photo shoots can be expensive, time-consuming, and stressful. AI headshots offer several key advantages:
          </p>

          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Cost-effective:</strong> Fraction of the cost of professional photography</li>
            <li><strong>Convenient:</strong> Create multiple looks from home</li>
            <li><strong>Consistent:</strong> Professional quality every time</li>
            <li><strong>Quick:</strong> Get results in minutes, not days</li>
          </ul>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">Best Practices for Perfect Results</h2>

          <h3 className="text-xl font-semibold text-black mt-6 mb-3">1. Upload Quality Training Photos</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Use 4-10 high-resolution photos</li>
            <li>Ensure good lighting and focus</li>
            <li>Include variety in angles and expressions</li>
            <li>Keep backgrounds simple</li>
          </ul>

          <h3 className="text-xl font-semibold text-black mt-6 mb-3">2. Follow the Guidelines</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>One person per photo</li>
            <li>Face clearly visible</li>
            <li>No sunglasses or hats</li>
            <li>Square aspect ratio works best</li>
          </ul>

          <h3 className="text-xl font-semibold text-black mt-6 mb-3">3. Choose the Right Style</h3>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li><strong>Business:</strong> Conservative, professional attire</li>
            <li><strong>Creative:</strong> More personality, modern styling</li>
            <li><strong>Executive:</strong> Authoritative, premium look</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">💡 Pro Tip</h3>
            <p className="text-blue-800">
              The quality of your training photos directly impacts your results. Spend time selecting the best images - garbage in, garbage out!
            </p>
          </div>

          <h2 className="text-2xl font-bold text-black mt-8 mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            With Pixaify's cutting-edge AI technology, you can create multiple professional headshots that perfectly capture your best self.
          </p>

          <div className="text-center bg-gray-50 rounded-lg p-8 my-8">
            <h3 className="text-xl font-bold mb-4">Transform Your Professional Image Today</h3>
            <Link 
              href="/login" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Create Your AI Headshots Now
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
