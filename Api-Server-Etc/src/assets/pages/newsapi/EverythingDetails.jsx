import { useLocation, Link } from "react-router"
import { formatDistanceToNow } from "date-fns"
import { da } from "date-fns/locale"



const EverythingDetails = () => {

    const location = useLocation()
    
    // Check if state exists to prevent crashes
    if (!location.state || !location.state.everythingdetails) {
        return (
            <div className="p-6">
                <h1>No news details available</h1>
                <Link to="/nyheder" className="text-blue-500 hover:underline">Tilbage til oversigten</Link>
            </div>
        )
    }
    
    const { everythingdetails } = location.state


  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{everythingdetails.title}</h1>
      
      {everythingdetails.urlToImage && (
        <img
          src={everythingdetails.urlToImage} 
          alt={everythingdetails.title}
          className="w-full mb-4 rounded"
        />
      )}
      
      <p className="text-lg mb-4 text-gray-500 italic">{everythingdetails.description}</p>
      <p className="mb-6 text-2xl">{everythingdetails.content}</p>
      
      <div className="text-sm text-gray-600 mb-6">
        <p><strong>Author:</strong> {everythingdetails.author || "Unknown"}</p>
        <p><strong>Published:</strong> {formatDistanceToNow(new Date(everythingdetails.publishedAt), { addSuffix: true, locale: da })}</p>
        {everythingdetails.url && (
          <a href={everythingdetails.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Read full article
          </a>
        )}
      </div>

      <Link to="/nyheder" className=" text-white px-4 py-2 rounded hover:bg-blue-600">
        Tilbage til oversigten
      </Link>
    </div>

  )
}

export default EverythingDetails
