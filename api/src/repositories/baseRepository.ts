import { Model, Document } from "mongoose";
import { mapResultToDto } from "./_dtoMapWrapper";

class BaseRepository<TModel extends Model<Document>, TEntity> {
    private _model: TModel;
    private _mapToDto: (model: any) => TEntity;

    constructor(model: TModel, mapToDto: (model: any) => TEntity) {
        this._model = model;
        this._mapToDto = mapToDto;
    }

    protected async getAllFromParent(
        entityId: number,
        parentIdFieldName: string
    ): Promise<TEntity[]> {
        return mapResultToDto<TModel, TEntity>(
            await this._model
                .where(parentIdFieldName)
                .equals(entityId)
                .lean()
                .exec(),
            this._mapToDto
        );
    }

    async getAll(): Promise<TEntity[]> {
        return mapResultToDto<TModel, TEntity>(
            await this._model
                .find()
                .lean()
                .exec(),
            this._mapToDto
        );
    }

    async add(input: TEntity): Promise<TEntity> {
        return this._mapToDto(await this._model.create(input));
    }

    async getById(id: string): Promise<TEntity> {
        return this._mapToDto(await this._model.findById(id));
    }
}

export default BaseRepository;
