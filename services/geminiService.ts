import { GoogleGenAI } from "@google/genai";
import { content } from '../data';
import { Language } from '../types';

// Initialize Gemini Client
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const getSimpleExplanation = async (term: string, lang: Language): Promise<string> => {
  const t = content[lang];
  
  if (!apiKey) {
    // Fallback for demo if no key is present in environment
    return new Promise(resolve => {
        setTimeout(() => {
            const msg = lang === 'es' 
              ? `No puedo conectarme a mi cerebro ahora (Falta API Key), ¡pero normalmente explicaría "${term}" en términos muy simples!`
              : `I can't connect to my brain right now (Missing API Key), but normally I would explain "${term}" in very simple terms!`;
            resolve(msg);
        }, 1000);
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: t.meta.geminiPrompt(term),
    });
    
    const fallback = lang === 'es' 
      ? "No se me ocurrió una explicación en este momento. ¿Intenta de nuevo?"
      : "I couldn't come up with an explanation right now. Try again?";

    return response.text || fallback;
  } catch (error) {
    console.error("Gemini API Error:", error);
    const errorMsg = lang === 'es'
      ? "Algo salió mal al preguntar a la IA. Por favor intenta más tarde."
      : "Something went wrong while asking the AI. Please try again later.";
    return errorMsg;
  }
};
