import TryCatch from "../middlewares/tryCatch.js";
import { Courses } from "../models/Courses.js";
import { Lecture } from "../models/Lecture.js";


export const createCourse=TryCatch(async(req,res)=>{
    const {title,description,category,createBy,duration,price}=req.body;

    const image=read.file;

    await Courses.create({
        tilte,
        description,
        category,
        createBy,
        image:image?.Path,
        duration,
        price,
    });

    res.status(201).json({
        message:"Course Created Successfully",
    });

});

export const addLecture= TryCatch(async(req,res)=>{
    const course=await Courses.findById(req.params.id);

    if(!course)
        return res.status(404).json({
            message:"No course with this id",
    });

    const {tilte,description}=req.body;

    const file= req.file;

    const lecture= await Lecture.create({
        title,
        description,
        video:file?.Path,
        course: course.id,
    });

    res.status(201).json({
        message:"Lecture Added",
        lecture,
    });

});