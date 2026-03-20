import { errors } from '@vinejs/vine'
import {
    FieldContext,
    ErrorReporterContract
} from '@vinejs/vine/types'

export class cusrtomErrorReporter implements ErrorReporterContract {
    /**
     * A flag to know if one or more errors have been
     * reported
     */
    hasErrors: boolean = false

    /**
     * A collection of errors. Feel free to give accurate types
     * to this property
     */
    errors: Record<string, string> = {}

    report(
        message: string,
        rule: string,
        field: FieldContext,
        meta?: Record<string, unknown>
    ) {
        this.hasErrors = true

        /**
         * Collecting errors as per the JSONAPI spec
         */
        // this.errors.push({
        //   code: rule,
        //   detail: message,
        //   source: {
        //     pointer: field.wildCardPath
        //   },
        //   ...(meta ? { meta } : {})
        // })

        this.errors[field.wildCardPath] = message
    }

    /**
     * Creates and returns an instance of the
     * ValidationError class
     */
    createError() {
        return new errors.E_VALIDATION_ERROR(this.errors)
    }
}
