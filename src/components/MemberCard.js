import Image from "next/image";

const MemberCard = ({ imageSrc, name, nrp }) => {
    return (
        <div className="max-w-sm bg-[--background] rounded-lg hover:shadow-lg duration-500 overflow-hidden">
            {/* Image */}
            <div className="relative h-64 w-full object-cover">
                <Image
                    src={imageSrc}
                    alt={name}
                    layout="fill"
                    objectFit="contain"
                    className="grayscale hover:grayscale-0 duration-500"
                />
            </div>
            {/* Name and Phone */}
            <div className="relative mt-2 mb-4 px-4">
                <div className="bg-[#FF5A5F] text-white py-2 px-4 rounded-lg inline-block shadow-lg">
                    <p className="text-sm font-semibold">
                        {name} - {nrp}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MemberCard;