import { HfInference } from '@huggingface/inference'

const SystemPrompt = `You are a cooking assistant that determines the recipe from a list of ingredients given by the user. The recipe you give must use only the ingredients given, it doesnt have to use all of the ingredients if it isnt necessary. If it is absolutely necessary you can include additional ingredients that werent mentioned on the ingredients list. Format your response in markdown to make it easier to render to a webpage, so for example add the ingredients into a list, make the titles of the sections <h2> and such`



const hf = new HfInference("aRandomlyGeneratedAPIKeyThatIsTotallyReal")

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SystemPrompt },
                { role: "user", content: `I have the following ingredients ${ingredientsString}. Please give me a tasty recipe I can make with them!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
