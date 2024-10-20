import Image from 'next/image';
import img from "../app/images/machine learning.webp";
import cloud_computing from "../app/images/cloud computing.webp"
import threed from "../app/images/3d.webp"
import ai from "../app/images/ai.webp"
import cybersecurity from "../app/images/cybersecurity.webp"
import web3 from "../app/images/What-is-Web-3.webp"

export default function Home(){
  return(
   
      <div className='body'>
         <div className="heading">
              Blog Hub
         </div>
         <div className="all_blogs slide-in-top"> 
             <div className="blog">
              
                <Image className='blog_img' src={img} alt="python Image" />
                <h1 className="blog_heading">Machine Learning: The Driving Force Behind Intelligent</h1>
                <p>Machine learning (ML) is a subset of artificial intelligence that enables computers to learn from data and improve their performance over time without being explicitly programmed.  ML algorithms are already being used across various industries, from healthcare</p>
                <a href = "/blog-1"> <button className='readmore'>Read More</button>
               </a>
             </div>
             <div className="blog">
                <Image className='blog_img' src={cloud_computing} alt="/" />
                <h1 className="blog_heading">Cloud Computing: The Backbone of Modern IT Infrastructure</h1>
                <p>Cloud computing is no longer a futuristic technology—it’s an essential part of modern IT infrastructure. It allows businesses to store and access data and applications over the internet, rather than relying on physical hardware or local servers.</p>
                <a href = "/blog-2"> <button className='readmore'>Read More</button>
               </a>
             </div>
             <div className="blog">
               
                <Image className='blog_img' src={threed} alt="/" />
                <h1 className="blog_heading">The Metaverse: A Virtual World of Infinite Possibilities</h1>
                <p>The Metaverse is a fully immersive, shared virtual space where users can interact with a digital environment and other people in real-time. It’s a vision of a more interconnected, virtual world that combines elements of augmented reality (AR), virtual reality (VR), and the internet.</p>
                <a href = "/blog-3"> <button className='readmore'>Read More</button></a>
             </div>
             <div className="blog">
               <Image className='blog_img' src={ai} alt="/" />
                <h1 className="blog_heading">AI-Powered Automation: The Future of Business Operations</h1>
                <p>Artificial intelligence (AI) is driving the automation of business processes, helping companies to operate more efficiently, reduce costs, and improve customer experiences. AI-powered automation is already being used to perform repetitive tasks, allowing employees to focus on more strategic work.</p>
                <a href = "/blog-4"> <button className='readmore'>Read More</button></a>
             </div>
             <div className="blog">
               <Image className='blog_img' src={cybersecurity} alt="/" />
                <h1 className="blog_heading">Cybersecurity: Safeguarding Your Digital World</h1>
                <p>In an increasingly digital world, cybersecurity is more important than ever. As businesses and individuals rely on connected devices, online services, and cloud computing, the risk of cyber threats rises. Cybercriminals use tactics like ransomware, phishing, and malware to exploit vulnerabilities, </p>
                <a href = "/blog-5"> <button className='readmore'>Read More</button></a>
             </div>
             <div className="blog">
              <Image className='blog_img' src={web3} alt="/" />
                <h1 className="blog_heading">Web 3.0: The Decentralized Future of the Internet</h1>
                <p>Web 3.0 represents the next evolution of the internet, shifting from a centralized structure to a decentralized, user-centric ecosystem. Built on blockchain technology, Web 3.0 aims to give individuals more control over their data and online interactions, reducing reliance on large corporations.
                </p>
                <a href = "/blog-6"> <button className='readmore'>Read More</button></a>
             </div>
         </div>
      </div>

    
  )
}
