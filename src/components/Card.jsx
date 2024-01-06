export default function Card({title, dek, hero_image}) {
    return (
        <div className="w-10/12 p-10">
        <a href="#" className="flex flex-col flex-shrink-0 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
            <img src={hero_image} alt={title} className="object-cover rounded-t-lg sm:w-full sm:h-2/5 md:h-full md:w-2/5 md:rounded-none md:rounded-s-lg" />
            <div className="flex flex-col justify-between p-12 leading-normal">
                <h5 className="m-2 text-3xl font-bold tracking-tight text-gray-900">{title}</h5>
                <div className="m-3 font-normal text-lg text-justify text-gray-700">{dek}</div>
            </div>
        </a>
        </div>
    )
}