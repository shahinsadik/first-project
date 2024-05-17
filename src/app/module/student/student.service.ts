import { StudentModel } from "../student.model"
import { Student } from "./student.interface"




const createStudentDB = async (student: Student) =>{
const result = await StudentModel.create(student)
return result
}
const getAllStudentsDB = async () =>{
    const result = await StudentModel.find()
    return result
}
const getSingleStudentsDB = async (id: string) =>{
    const result = await StudentModel.findOne({id})
    return result
}

export const studentService = {
    createStudentDB, getAllStudentsDB, getSingleStudentsDB

} 