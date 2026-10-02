"use client";
import React from 'react'
import { useState } from 'react'
import { usePathname } from 'next/navigation';

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [preferredUrl, setPreferredUrl] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const pathname = usePathname();

  const handleGenerate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "shortUrl": preferredUrl,
      "longUrl": url
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.success){
          setGeneratedLink(process.env.NEXT_PUBLIC_HOST + "/" + preferredUrl);
          setUrl("");
          setPreferredUrl("");
        }
        alert(result.message);
      })
      .catch((error) => console.error(error));

  }

  return (
    <div className="flex flex-col bg-blue-50 p-4 rounded-md max-w-2xl gap-6 container my-8 mx-auto">
      <h1 className="text-2xl font-bold text-center">Generate Short Links</h1>
      <div className="flex flex-col gap-4 items-center">
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter a URL [https://...]" className="border border-gray-300 rounded-md p-2 w-full max-w-xl focus:outline-blue-200" />
        <input type="text" value={preferredUrl} onChange={(e) => setPreferredUrl(e.target.value)} placeholder="Enter preferred URL [text...]" className="border border-gray-300 rounded-md p-2 w-full max-w-xl focus:outline-blue-200" />
        <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 cursor-pointer" onClick={handleGenerate}>Generate</button>
      </div>
      {
        generatedLink && (
          <div className="flex flex-col gap-2 items-center">
            <p className="text-lg font-semibold">Generated Link:</p>
            <a href={generatedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {generatedLink}
            </a>
            <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 cursor-pointer" onClick={() => navigator.clipboard.writeText(generatedLink)}>
              Copy
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Shorten
