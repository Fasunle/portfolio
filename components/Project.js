import Image from 'next/image';
const Project = () => {
    return (
        <article className="p-4">
            <h2 className=" text-5xl text-center font-serif"><a href={`#`}>Project Title</a></h2>
            <h5 className=" prose-sm text-center font-serif">A very short description</h5>
            <p className=" prose-2xl">
                <figure className="">
                    <Image src="/images/laptop.jpeg" width={400} height={200}/>
                </figure>
                This is a  blog application but we need to host it on vercel.
                This project took a short time to finish but the developer was doing some family work
                that make it take a longer time. The project is a awesome one 😁 as I look carefully to
                select needed packages and they are streamlined for optimization because a large file size 
                impedes performance.

                Let me handle your project and I promise that you will recommend me to your friends and
                colleages for similar or different jobs.
            </p>
            <span className="text-red-400">Comment on the work on LinkedIn</span>
        </article>
    )
}


export default Project;