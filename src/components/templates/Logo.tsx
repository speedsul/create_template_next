export default function Logo() {
    return (
        <div
            className={` flex flex-col bg-white h-12 w-12 rounded-full justify-center items-center`}>
                 <div className="h-3 w-3 rounded-full bg-red-600 mb-0.5" />
            <div className="flex">
                <div className="h-3 w-3 rounded-full bg-yellow-300 mr-0.5" />
                <div className="h-3 w-3 rounded-full bg-green-500 ml-0.5" />
            </div>
        </div>
    );
}
