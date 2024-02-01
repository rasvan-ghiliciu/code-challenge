// import fs from 'fs';
import { promises as fs } from 'fs';

export const readData = async ()=> {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        const jsonData = JSON.parse(data);
        return jsonData
      } catch (err) {
        console.error("Error:", err);
      }
}


export const writeData = (dataToWrite)=> {
    fs.writeFile('data.json', JSON.stringify(dataToWrite, null, 2), 'utf8', (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Successfully wrote to file");
    });
}

