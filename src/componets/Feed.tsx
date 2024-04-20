import React from 'react';

interface Item {
    id: number;
    photoUrl: string;
    title: string;
    description: string;
    vacancy:{from:string,to:string};
    price: string;
}

const Feed: React.FC = () => {
    const items: Item[] =[];
    // Sample data for demonstration
    for(let i=1;i<11;i++){
        items.push(
            {
                id:i,
                photoUrl: 'https://a0.muscache.com/im/pictures/89565da2-41b0-443f-84a6-62930398d3cd.jpg?im_w=720',
                title: 'Item 1',
                description: 'Description of Item 1',
                vacancy:{
                    from:'12 apr',
                    to:'13 apr'
                },
                price: '$20'
            }
        )
    }
   
    return (
        <div className="container px-4 py-8 w-screen justify-center flex">
            <div className="grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                {items.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-2  min-w-60 pd-0 hover:p-1 cursor-pointer">
                        <div>
                            <img src={item.photoUrl} alt={item.title} className="w-full h-1/2 object-cover mb-4 rounded-lg" />

                        </div>
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-gray-500 mb-2 text-sm" >{item.description}</p>
                        <p className="text-gray-600 mb-2 text-xs">{item.vacancy.from} to {item.vacancy.to}</p>
                        <p className=""><span className="font-bold">{item.price}</span> night</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
