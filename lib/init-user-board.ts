import {Board,Column} from"./models"
import ConnectDB from "./db";
import jobApplication from "./models/job-application";
import board from "./models/board";


const default_columns = [
    
    {name:"Whish List",order:0},
    {name:"Applied",order:1},
    {name:"Interviewing",order:2},
    {name:"Offer",order:3},
    {name:"Rejected",order:4},

]


export async function initialazeUserBoard(userId:string) {

    try {
        await ConnectDB()

       const existingBoard = await Board.findOne({userId, name:"Applications"})

       if(existingBoard){
        return existingBoard
       }

       const board = await Board.create({name:"Applications", userId, columns: []})

       const columns = await Promise.all(default_columns.map((col)=>Column.create({name:col.name, order:col.order, boardId: board._id,jobApplication:[]})))

       board.columns = columns.map((col) => col._id);
        await board.save();

        return board
        
    } catch (error) {
        throw error;
        
    }
    
}