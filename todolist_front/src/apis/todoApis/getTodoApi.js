import { instance } from "../utils/instance";

export async function getTodoAllApi() {
    let response = null;
    try {
        response = await instance.get("/todolist");
    } catch (error) {
        console.error(error)
        response = error.response;
    }
    return response;
}

export async function getTodoCountsApi() {
    let response = null;
    try {
        response = await instance.get("/todo/counts");
    } catch (error) {
        console.error(error)
        response = error.response;
    }
    return response;
}