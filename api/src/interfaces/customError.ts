import { ErrorCode } from "@errors/_errorCodes";

export interface ICustomError extends Error {
    readonly code: ErrorCode;
}
