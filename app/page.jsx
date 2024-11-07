import Link from "next/link";

const MainPage = () => {
    return (
        <div>
            <h1 className="text-3xl">Home Page</h1>
            <Link href='/properties' className="font-semibold text-green-900">
                Go to Properties
            </Link>
        </div>
    )
}

export default MainPage;