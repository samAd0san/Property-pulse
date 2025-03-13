import Link from 'next/link';

const InfoBox = ({
    heading,
    backgroundColor = 'bg-gray-100',
    textColor = 'text-gray-800',
    buttonInfo,
    children, 
    // children are for the main text of the info box
}) => {
    return (
        <div className={`${backgroundColor} bg-gray-100 p-6 rounded-lg shadow-md`}>
            <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
            <p className={`${textColor} mt-2 mb-4`}>{children}</p>
            <a
                href={buttonInfo.Link}
                className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
            >
                {buttonInfo.text}
            </a>
        </div>
    )
}

export default InfoBox;