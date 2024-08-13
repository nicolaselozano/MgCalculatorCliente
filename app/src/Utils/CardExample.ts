export namespace CardsJson {
    export interface BoundingPolygon {
        x: number;
        y: number;
    }

    export interface Word {
        text: string;
        boundingPolygon: BoundingPolygon[];
        confidence: number;
    }

    export interface Line {
        text: string;
        boundingPolygon: BoundingPolygon[];
        words: Word[];
    }

    export interface TextDocument {
        lines: Line[];
    }
}

export const exampleTextDocument: CardsJson.TextDocument = {
    lines: [
        {
            text: "Sample text",
            boundingPolygon: [
                { x: 10, y: 20 },
                { x: 110, y: 20 },
                { x: 110, y: 40 },
                { x: 10, y: 40 }
            ],
            words: [
                {
                    text: "Sample",
                    boundingPolygon: [
                        { x: 10, y: 20 },
                        { x: 60, y: 20 },
                        { x: 60, y: 40 },
                        { x: 10, y: 40 }
                    ],
                    confidence: 0.95
                },
                {
                    text: "text",
                    boundingPolygon: [
                        { x: 70, y: 20 },
                        { x: 110, y: 20 },
                        { x: 110, y: 40 },
                        { x: 70, y: 40 }
                    ],
                    confidence: 0.90
                }
            ]
        }
    ]
};

console.log(exampleTextDocument);
