import { setCORS } from "google-translate-api-browser";


// setting up cors-anywhere server address
const translate = setCORS("http://cors-anywhere.herokuapp.com/");
/*
// or
import translate, { setCORS } from "google-translate-api-browser";
setCORS("http://cors-anywhere.herokuapp.com/");
*/
export default async function tr(word: string) {
    try {
        const res: any = await translate(word, { to: "lt" });
        return res.text.toString() || "";
    } catch (e) {
        console.error({ text: e });
        return {text: ''};
    }
}

