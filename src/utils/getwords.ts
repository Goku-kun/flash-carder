import { db } from "./firebase";
import { getDocs, collection } from "firebase/firestore";

export interface word {
  word: string,
  meaning: string[],
  pos: string,
  synonyms: string[],
  antonyms: string[],
  examples: string,
  origin?: string
}


export async function getWords(): Promise<any>{
  var querySnapshot = await getDocs(collection(db, "words"));
  var docs: word[] = [];
  querySnapshot.forEach(function (doc) {
    var wordValue = doc.data() as word;
    docs.push(wordValue);
  })
  return docs;
}
