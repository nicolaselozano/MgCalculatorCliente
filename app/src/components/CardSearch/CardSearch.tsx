import {exampleTextDocument,CardsJson} from "../../Utils/CardExample";
import 'bootstrap/dist/css/bootstrap.min.css';

const CardSearch = () => {

    return (
        <div className="bg-gray-900 p-4 min-h-screen">
            <h1 className="text-white text-3xl mb-4">CardSearch</h1>
            {exampleTextDocument.lines.map((t: CardsJson.Line, index: number) => (
                <div key={index} className="bg-gray-800 text-white rounded-lg shadow-lg p-4 mb-4">
                    <div className="relative">
                        <img 
                            src="/path/to/image.jpg" 
                            alt="Card image" 
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs rounded-lg">
                            Image
                        </div>
                    </div>
                    <div className="mt-4">
                        <h5 className="text-xl font-semibold mb-2">Card Data</h5>
                        <p className="text-gray-300 mb-2">{t.text}</p>
                        {t.words.map((w: CardsJson.Word, wordIndex: number) => (
                            <p key={wordIndex} className="text-gray-400">{w.text}</p>
                        ))}
                        <a 
                            href="#" 
                            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Ok
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default CardSearch;