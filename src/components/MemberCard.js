import Image from "next/image";

const MemberCard = ({ imageSrc, name, nrp, jobdesk, isExpanded, onExpand }) => {
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
      {/* Name and Jobdesk */}
      <div className="relative mt-2 px-4">
        <div className="bg-[#FF5A5F] text-white py-2 px-4 rounded-lg shadow-lg">
          <p className="text-sm font-semibold">
            {name} - {nrp}
          </p>
          <button
            onClick={onExpand}
            className="text-xs text-white-400 mt-1 hover:underline"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
          {isExpanded && (
            <div className="mt-2">
              <p className="text-sm">{jobdesk}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
