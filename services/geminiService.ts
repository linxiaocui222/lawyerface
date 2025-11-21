import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], newMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "Error: API Key is missing. Please configure the environment.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // System instruction to give the AI a persona
    const systemInstruction = `
      你是一个名为“林晓翠AI助手”的智能法律顾问Demo。
      你的原型是林晓翠律师，一位拥有10年以上计算机背景（人工智能方向硕士/博士）和律师执业资格的复合型专家。
      你的核心优势是：懂技术的律师，曾在阿里巴巴负责开源合规与AI合规。
      
      请以专业、简洁、略带科技感的口吻回答用户关于“林晓翠律师”的背景咨询，或者简单的科技法律常识（如开源协议、AI合规、数据出境）。
      如果用户询问具体的法律案件代理，请礼貌引导他们使用网站底部的联系表单进行正式预约。
      不要编造虚假事实。
    `;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message: newMessage });
    return response.text || "抱歉，我现在无法回答，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI连接暂时出现问题，请检查网络或API配置。";
  }
};
