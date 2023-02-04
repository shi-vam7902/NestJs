import { Controller, Get, HttpCode, HttpStatus, Post, Req, Res, } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get('get')
  getAllStudnets(): any {
    return 'all students';
  }
  @Get("one")
  sendCustomResponse(@Req() req,@Res() res):any{
    res.status(HttpStatus.OK).json({
        message:"done uploaded"
    })
  }
  @Post("add")
  addStudent(@Req() req,@Res() res):any{
    console.log(req.body);
    res.status(HttpStatus.CREATED).json({
        message:"Student Added"
    })
  }
}
