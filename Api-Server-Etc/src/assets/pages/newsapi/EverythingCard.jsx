import { Link } from "react-router"

const EverythingCard = ({n}) => {
  return (
    <div className="bg-[#003eaa] rounded-2xl">
                        <ul>
                            <li>
                                {n.urlToImage && (
                                    <img
                                    src={n.urlToImage}
                                    alt={n.title}
                                    className="w-full rounded-t-2xl"
                                    />
                                )}
                            </li>
                            <h1 className="p-4">{n.title}</h1>
                            <li className="text-2xl text-amber-300 italic p-4">{n.description}</li>
                
                            <div className="p-4">
                                <li className="text-fuchsia-500">Author: {n.author}</li>
                                <li>Published {new Date(n.publishedAt).toLocaleString("da-dk",
                                  {year: "numeric",
                                  month: "long",
                                  day: "numeric"
                                })}</li>

                            </div>
                            <Link 
                                to="/everythingdetails"
                                state={ { everythingdetails: n} }>
                                <button>View Details</button>
                            </Link>
                        </ul>
                    </div>
  )
}

export default EverythingCard
