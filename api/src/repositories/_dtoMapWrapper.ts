export function mapResultToDto<TModelType, TDtoType>(
    result: TModelType[],
    mapper: (model: TModelType) => TDtoType
) {
    return result.map(model => mapper(model));
}
