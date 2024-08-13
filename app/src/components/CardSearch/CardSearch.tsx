import {exampleTextDocument,CardsJson} from "../../Utils/CardExample";

const CardSearch = () => {

    return (
        <div>
            <h1>CardSearch</h1>
            {exampleTextDocument.lines.map((t:CardsJson.Line,index:number) => (
                <div key={index}>
                    <h1>{t.text}</h1>
                    {t.words.map((w:CardsJson.Word,index:number) => (
                        <h2 key={index}>{w.text}</h2>
                    ))}
                </div>
            ))}
        </div>
    )

}

export default CardSearch;