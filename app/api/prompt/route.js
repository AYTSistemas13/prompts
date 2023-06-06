import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), { status : 200 });
    } catch (error) {
        return new Response("Falló la búsqueda de todos los prompts", { status : 500 });
    }
}