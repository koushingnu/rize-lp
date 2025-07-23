import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

interface MessagePopupProps {
  isOpen: boolean;
  onClose: () => void;
  memberData: {
    id: number;
    name: string;
    nameEn: string;
    social: {
      twitter: string;
      instagram: string;
      tiktok: string;
    };
  };
}

const MessagePopup: React.FC<MessagePopupProps> = ({
  isOpen,
  onClose,
  memberData,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-4xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Image
              src={`/images_new/message/square/${memberData.id}.jpg`}
              alt={`Message from ${memberData.name}`}
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-serif">{memberData.name}</h3>
                <p className="text-gray-600">{memberData.nameEn}</p>
              </div>
              <div className="h-8 w-px bg-gray-200 mx-4"></div>
              <div className="flex gap-3">
                <a
                  href={memberData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href={memberData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-500"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href={memberData.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black"
                >
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <Image
                src={`/images_new/message/write/${memberData.id}.PNG`}
                alt={`Handwritten message from ${memberData.name}`}
                width={400}
                height={300}
                className="w-full h-auto mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePopup;
