
const CitiesScrollFeed=()=>{
    return (
        <div className="max-w-screen-lg mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">Scroll Feed</h2>
          <div className="overflow-y-auto h-96">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src={`https://picsum.photos/seed/${index}/400/300`}
                    alt={`Image ${index}`}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Card {index + 1}</h3>
                    <p className="text-sm text-gray-600">
                      city of nature
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
export default CitiesScrollFeed;




