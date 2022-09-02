export interface ChildProps{
    onName: (name: string) => void
    onCardNumber: (cardNumber: string) => void
    onExpireDate: (expireDate: string) => void
    onCvc: (cvc: string) => void
}