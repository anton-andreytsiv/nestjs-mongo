import { Body, Controller, HttpCode, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ListService } from './list.service';
import { IList } from './schemas/list.schema';

@Controller('list')
export class ListController {

    constructor (private listService: ListService){}

    @Get()
    @HttpCode(200)
    async getList(): Promise <IList[]>{
        return await this.listService.getList();
    }
    
    @Get(':id')
    @HttpCode(200)
    async getQuestionsByListId(@Param() params: { id: string}): Promise<IList>{
        return await this.listService.getById(params.id)
    }

    @Post('addQuestionList') 
    @HttpCode(200)
    async addQuestionList(@Body() data: IList): Promise<IList> {
    return await this.listService.insertListOfQuestions(data)
    }

    @Put()
    @HttpCode(200)
    async updateList( @Body() data): Promise<IList>{
      return await this.listService.updateListById(data)
    }

    @Delete(':id')
    @HttpCode(200)
    async deleteById(@Param() params): Promise<IList>{
        return await this.listService.deleteById( params.id )
    }

}
