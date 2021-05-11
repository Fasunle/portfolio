import Image from 'next/image';
const ProjectOverview = () => {
    return (
        <article className="relative bg-gray-50 h-full">
            <Image
                height={100}
                width={100}
                layout="responsive"
                className="absolute rounded-md"
                src="/images/pepper.jpg"
                alt="The image is currently not available" />
            <div className="absolute z-10 top-0 space-y-4 text-green-400 h-full w-full">
                <h3 className="text-center text-3xl  md:pt-24 pt-5 ">Blog title</h3>
                <h4 className="text-center text-base">Blog sub-title</h4>
                <div className="absolute -right-0 bottom-0 p-2 w-auto  text-lg">Posted by Author</div>
            </div>
        </article>
    )
}

export default ProjectOverview;