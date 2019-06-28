export function mapResultToDto<TModelType, TDtoType>(
    result: TModelType[],
    mapper: (model: TModelType) => TDtoType
) {
    return result.map(model => mapper(model));
}

// export function emptyToDto<TModelType>(model: TModelType) {
//     return model ?  
// }
