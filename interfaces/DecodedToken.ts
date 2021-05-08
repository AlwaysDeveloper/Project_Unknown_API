interface DecodeToken {
    header: string|undefined,
    payload: object,
    signature: string|undefined
}

export default DecodeToken;