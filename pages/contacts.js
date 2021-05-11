import React, { useState } from 'react';

const Contacts = () => {
    // using react hooks to manage state info

    const [client_name, setClientName] = useState('');
    const [client_email, setClientEmail] = useState('');
    const [job_title, setJobTitle] = useState('');
    const [job_description, setJobDescription] = useState('');
    const [attachment, setAttachment] = useState('');

    const onFormSubmit = ( e ) => {
        e.preventDefault();
        const messageBody = (
            <div>
                <h2>{client_name}</h2><span>{client_email}</span>
                {
                    job_description
                }
                The attached file can be downloaded from this link: {attachment}
            </div>
        )
        window.open(`mailto:${client_email}?subject=${job_title}&body=${messageBody}`)
        }

    return (
        <section className="container mx-auto mb-4 prose-xl font-dancing">
            <form method="POST" encType="multipart/form-data" onSubmit={(e) => onFormSubmit(e)} className="space-y-2 grid grid-cols-1">
                <div>
                    <label htmlFor="client_name">Name:<input type="text" value={client_name} onChange={(e) => setClientName(e.target.value)} required autoFocus id="client_name" name="client_name" placeholder="John McCarty" className="w-full border-solid border-0 border-b-2 border-gray-700 rounded-lg shadow-2xl" /></label>
                </div>
                <div>
                    <label htmlFor="client_email">Email:<input type="email" value={client_email} onChange={(e) => setClientEmail(e.target.value)} required id="client_email" name="client_email" placeholder="john123@gmail.com" className="w-full border-solid border-0 border-b-2 border-gray-700 rounded-lg shadow-2xl" /></label>
                </div>
                <div>
                    <label htmlFor="job_title">Job Title:<input type="text" value={job_title} onChange={(e) => setJobTitle(e.target.value)} required id="job_title" name="job_title" className="w-full border-solid border-0 border-b-2 border-gray-700 rounded-lg shadow-2xl" /></label>
                </div>
                <div className=" py-7">
                    <label htmlFor="job_desc">Job Description:<textarea rows={7} id="job_desc" value={job_description} onChange={(e) => setJobDescription(e.target.value)} name="job_desc" className="w-full border-solid border-0 border-b-2 border-gray-700 rounded-lg shadow-2xl"></textarea></label>
                </div>
                <div className="">
                    <label htmlFor="attached_file">Attachment file <input type="file" id="attached_file" name="attached_file" className="border-solid border-0 border-b-2 border-gray-700 rounded-lg shadow-2xl p-2 focus:outline-none" /></label>
                </div>
                <button className="w-full py-2 bg-gray-700 text-gray-50 text-2xl font-extralight">Submit</button>
            </form>
        </section>
    )
}

export default Contacts;