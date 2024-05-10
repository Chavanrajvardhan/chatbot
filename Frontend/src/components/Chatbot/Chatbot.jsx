import { useState } from "react";
import ReactMarkdown from "react-markdown";

function Chatbot() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [generatingAnswer, setGeneratingAnswer] = useState(false);

    async function generateAnswer(e) {
        setGeneratingAnswer(true);
        e.preventDefault();
        setAnswer("Loading your answer... \n It might take upto 10 seconds");
        try {
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

            const data = await response.json();

            if (data && data.candidates && data.candidates.length > 0) {
                const generatedContent =
                    data.candidates[0].content.parts[0].text;
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
