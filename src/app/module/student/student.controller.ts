import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const {student : studentData} = req.body;

    //will call service function to send this data
    const result = await studentService.createStudentDB(studentData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req:Request, res: Response) => {
try{
const result = await studentService.getAllStudentsDB()
res.status(200).json({
  success: true,
  message: 'Student are get successfully',
  data: result,
});
}catch (err) {
  console.log(err);
  
}
}

const getSingleStudent = async (req:Request, res: Response) => {
try{
  const {studentId} = req.params;
const result = await studentService.getSingleStudentsDB(studentId)
res.status(200).json({
  success: true,
  message: 'Student is get successfully',
  data: result,
});
}catch(err){
  console.log(err);
  
}
}

export const StudentController = {
  createStudent,getAllStudents, getSingleStudent, 
};
