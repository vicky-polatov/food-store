export interface UserMsg {
    type: 'error' | 'success' | 'info'
    msg: string
}
