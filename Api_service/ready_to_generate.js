import { query } from "./call_api";
export async function generating(data) {
    let data1 = [data,data ,data ,data ,data ,data ,data ,data ,data ,data   ];
 const promises = data1.map(async (input) => {
    return query({ inputs: input });
  });
const results = await Promise.all(promises);
// console.log(results);
  return results;
}