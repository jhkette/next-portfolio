import { project } from "@/types/main";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaVideo } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { motion, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Dialog from "@radix-ui/react-dialog";
import { PROJECT_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Project = ({
  projectName,
  projectImage,
  techstack,
  link,
}: PROJECT_QUERYResult[number] & HTMLMotionProps<"div">) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <motion.div
          //@ts-ignore
          className="flex flex-col gap-2 bg-white dark:bg-gray-800 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:animate-[subtle-bounce_0.5s_ease-in-out] "
          ref={ref}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="relative group rounded-lg bg-blue-50">
            <Image
              alt={projectName as string}
              width={1000}
              height={1000}
              className="max-w-full h-48 max-h-full object-cover object-top rounded-lg"
              src={urlFor(projectImage?.asset?._ref as string).url()}
            />
            {link?.visit && (
              <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
                {link?.visit && (
                  <Link
                    href={link?.visit.trim() as string}
                    target="_blank"
                    className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
                  >
                    <BiLinkExternal size={20} />
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="my-2 flex flex-col gap-3">
            <h3 className="text-xl font-medium">{projectName}</h3>
            <p className="text-sm text-gray-400">
              {" "}
              <span className="font-medium">Tech Stack:</span> {techstack}
            </p>
          </div>
        </motion.div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-grey-800 rounded-lg p-6 w-[650px] h-fit">
          <Dialog.Title className="text-xl font-medium">
            {projectName}
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-400">
            <span className="font-medium">Tech Stack:</span> {techstack}
          </Dialog.Description>
          <div className="relative group rounded-lg bg-blue-50 mt-4">
            <Image
              alt={projectImage?.alt as string}
              width={1000}
              height={1000}
              className="max-w-full h-fit max-h-full object-cover object-top rounded-lg"
              src={urlFor(projectImage?.asset?._ref as string).url()}
            />
            {link && (
              <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
                {link.visit && (
                  <Link
                    href={link.visit}
                    target="_blank"
                    className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
                  >
                    <BiLinkExternal size={20} />
                  </Link>
                )}

                {link.code && (
                  <Link
                    href={link.code}
                    target="_blank"
                    className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
                  >
                    <FaGithub size={20} />
                  </Link>
                )}
              </div>
            )}
          </div>
          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <span className="sr-only">Close</span>
              &times;
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Project;
