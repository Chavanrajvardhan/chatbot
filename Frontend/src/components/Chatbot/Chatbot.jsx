import { useState } from "react";
import ReactMarkdown from "react-markdown";



// this is chatbot functionality
function Chatbot() {

    //react hook used to get data as a question and reflect it on UI State
    const [question, setQuestion] = useState("");

    //react hook used to store post data that are comming from post reqest 
    const [answer, setAnswer] = useState("");

    //this hook used for to genrate answer
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    async function generateAnswer(e) {
        setGeneratingAnswer(true);
        e.preventDefault();
        setAnswer("Loading your answer... \n It might take upto 10 seconds");
        try {
            //we fetch the data from googlAPI 
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: question }] }],
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // fetch data convert into json formate  and store in data vairable
            const data = await response.json();
            
            //
            if (data && data.candidates && data.candidates.length > 0) {

                // in data object at a 0th postion we got our ans
                const generatedContent = data.candidates[0].content.parts[0].text;
                setAnswer(generatedContent);
            } else {
                throw new Error("Invalid response format!");
            }
        } catch (error) {
            console.error(error);
            setAnswer("Sorry - Something went wrong. Please try again!");
        }

        setGeneratingAnswer(false);
    }

////return Chatbot component main.jsx file for routing 
    return (
        <>

            <div className="bg-slate-900 p-3 border my-1 text-white">
                <div className="w-full md:w-2/3 m-auto text-left rounded bg-slate-900 border my-1">
                    <ReactMarkdown className="p-3 ">{answer}</ReactMarkdown>
                </div>
                <form
                    onSubmit={generateAnswer}
                    className=" w-full md:w-2/3 m-auto text-center rounded bg-slate-900 py-2"
                >
                    <textarea
                        required
                        className="border rounded w-11/12 my-2 min-h-fit p-3 bg-slate-900"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Ask anything"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-white p-3 rounded-md hover:bg-slate-600  text-black transition-all duration-300"
                        disabled={generatingAnswer}
                    >
                        Generate answer
                    </button>
                </form>

            </div>
        </>
    );

}
export default Chatbot;
