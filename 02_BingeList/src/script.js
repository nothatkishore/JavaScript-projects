import { push, set, ref, get } from "firebase/database";
import { database } from "./firebase.config.js";


const readData = async(path, key) =>
{
    try {
        
        const dataPath = ref(database, `${path}/${key}`);
        const data = await get(dataPath);

        if(data.exists())
        {
            const Data = data.val();
            console.log(Data);
        }

    } catch (error) {
        console.log(error);
    }
}

const writeData = async(path, data) =>
{
    try {
        
        const dataPath = ref(database, path);
        const key = await push(dataPath, data);
        console.log("Data written sucessfully!");
        return key.key;

    } catch (error) {
        console.log(error);
    }
}

const deleteData = async(path, key) =>
{
    try {
        
        const dataPath = ref(database, `${path}/${key}`);
        await set(dataPath, null);
        console.log("Data deleted!");
    } catch (error) {
        console.log(error);
    }
}

const editData = async(path, key, newData) =>
{
    try {
        
        const dataPath = ref(database, `${path}/${key}`);
        await set(dataPath, newData);
        console.log("Data edited!");

    } catch (error) {
        console.log("Error!");
    }
}

(async () => 
{
    try {
        
        const key = await writeData("/name", "Kishore");
        await readData("/name", key);
        await editData("/name", key, "Ramya");
        await deleteData("/name", key);

    } catch (error) {
        console.log(error);
    }
})();


