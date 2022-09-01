export interface ChildProps{
    onName: (name: string) => void
    onCardNumber: (cardNumber: string) => void
    onExpireDate: (expireDate: string) => void
    onCvc: (cvc: string) => void
}

export interface ChildPropsState {
    name: string
    cardNumber: string
    expireDate: string
    cvc: string
}
