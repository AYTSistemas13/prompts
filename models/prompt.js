import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    prompt : {
        type : String,
        required : [true, 'El prompt es obligatorio.']
    },
    plataforma : {
        type : String,
        required : [true, 'Es obligatorio especificar la plataforma del Prompt.']
    },
    tag : {
        type : String,
        required : [true, 'La categoría es obligatoria.']
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;