import React from 'react'
import { Link } from 'react-router-dom';


//return Login component main.jsx file for routing 

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2  my-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center  sm:ml-auto">
                        <h2 className='text-5xl font-bold sm:text-5xl'>
                        Mental Health Support
                        </h2>
                        <h3 className='text-4xl font-bold sm:text-4xl'>
                        "There is hope, even when your brain tells you there isn't"
                        </h3>
                        <Link

                            className="inline-flex text-black items-center px-6 py-3 font-medium  bg-white hover:bg-slate-800 rounded-lg hover:opacity-75"
                            to="/chatbot"
                        >
                            &nbsp; Start Now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 rounded-xl my-10 "src='https://cdn.pixabay.com/photo/2022/07/15/18/27/mental-health-7323725_640.png' alt="image1" />
                </div>
            </aside>

            <div className="grid gap-4 m-3 place-items-center  sm:grid-cols-3">
                <div className="grid justify-items-center gap-3">
                    <span className="text-white  m-2 text-2xl font-bold ">Health</span>
                    <img className="w-64 h-64 mx-10 rounded-xl" src="https://img.freepik.com/free-vector/healthcare-ai-online-consulting-service-with-chatbot_88138-1374.jpg?t=st=1715325326~exp=1715328926~hmac=2046e86a47d8632eb484574cc9acb8ec983975f2ca28d33cfbbdce574362e458&w=996" alt="Health" />
                    <span className='text-white text-l'>Nurturing Wellness: Caring for Your Mind and Body</span>
                </div>
                <div className="grid justify-items-center gap-2">
                    <span className="text-white text-2xl font-bold">Education</span>
                    <img className="w-64 h-64 mx-10 rounded-xl" src="https://img.freepik.com/free-vector/programmers-with-charts-make-chatbot-learn-data-from-past-results-chatbot-self-learning-virtual-assistants-learning-ai-machine-learning-concept-bright-vibrant-violet-isolated-illustration_335657-433.jpg?t=st=1714759417~exp=1714763017~hmac=f145fa4f4a6c089608f332d59226c978acec13dfca6ea2e5bfe4a4cfc1267b44&w=996" alt="Education" />
                    <span className='text-white text-l'>Managing Stress for Successful Learning</span>
                </div>
                <div className="grid justify-items-center gap-2">
                    <span className="text-white font-bold text-2xl">Family</span>
                    <img className="w-64 h-64 mx-10 rounded-xl" src="https://img.freepik.com/free-vector/hand-drawn-young-people-using-technological-devices-background_23-2148125448.jpg?t=st=1715174871~exp=1715178471~hmac=ed885b642bd27287b65bcdd7e67cc8e6e5e0627533efcc189d93cf90453ae1d1&w=740" alt="Family" />
                    <span className='text-white text-l'>Family Harmony: Strengthening Bonds and Support</span>
                </div>
                <div className="grid justify-items-center gap-2">
                    <span className="text-white font-bold text-2xl">Career</span>
                    <img className="w-64 h-64 mx-10 rounded-xl" src="https://img.freepik.com/free-vector/ai-financial-management-people-use-artificial-intelligence-effective-use-money-online-robotic-with-innovative-technologies-help-financiers-automate-banking-payments-deposits-transfers_88138-1410.jpg?t=st=1714763639~exp=1714767239~hmac=012b19a61692c5e9889a746caf0a6dae4034f9995f886d5b5f212bb5ca31dfa1&w=1380" alt="Career" />
                    <span className='text-white text-l'>Career Confidence: Overcoming Mental Health Challenges for Professional Success</span>
                </div>
                <div className="grid justify-items-center gap-2">
                    <span className="text-white font-bold text-2xl">Relationship</span>
                    <img className="w-64 h-64 mx-10 rounded-xl" src="https://img.freepik.com/free-vector/virtual-influencer-abstract-concept-illustration-influencer-marketing-digital-agency-service-virtual-character-computer-generated-person-social-media-brand-avatar_335657-1080.jpg?t=st=1714763823~exp=1714767423~hmac=721d48d76cef8e6dfb11d717664fb77532f47f4f6d744c9668df6ea9fa95ddf9&w=740" alt="Relationship" />
                    <span className='text-white text-l'>Building Strong Connections: Fostering Healthy Relationships</span>
                </div>
                <div className="grid justify-items-center gap-2">
                    <span className="text-white font-bold text-2xl">Economic</span>
                    <img className="w-64 h-64 mx-10 rounded-xl" src="https://img.freepik.com/free-vector/hand-drawn-ai-investing-illustration_23-2151180678.jpg?t=st=1714763929~exp=1714767529~hmac=3ce16adc880218346e1703764354de6f31df1006ca6bbdfdaeb116ba8a10ebbe&w=740" alt="Economic" />
                    <span className='text-white text-l'>Financial Empowerment: Securing Your Future</span>
                </div>
            </div>

            <h1 className="text-pink-300 text-center text-2xl sm:text-5xl py-10 font-medium">"Taking Care of Your Mental Health Is Our Responsibility"</h1>
        </div>
    );
}

