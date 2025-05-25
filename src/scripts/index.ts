import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';

// Corrected: Use the environment variable name as defined in your .env file
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Add a check to ensure the API key is loaded
if (!apiKey) {
    console.error("Error: VITE_GEMINI_API_KEY is not defined in your environment variables. Please check your .env file.");
    // Optionally, throw an error to prevent further execution if the key is critical
    throw new Error("Gemini API key is missing.");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash-preview-05-20' // Ensure this model name is correct and available
});

const generationConfig = {
    // Corrected typo: 'temparature' should be 'temperature'
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain', // Note: For structured JSON, you'd typically set responseMimeType to 'application/json' and define a responseSchema.
}

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    // You might want to initialize history here if you're maintaining a conversation state
    // history: [],
});
