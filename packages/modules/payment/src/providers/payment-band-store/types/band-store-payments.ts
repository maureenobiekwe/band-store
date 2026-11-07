import stripe from "stripe"

export interface CreatePaymentRequest extends stripe.PaymentIntentCreateParams {
  account_holder_id?: string
  idempotency_key?: string
}

export interface BandStorePayment extends stripe.PaymentIntent {
  account_holder_id?: string
}

export interface RefundPaymentRequest extends stripe.RefundCreateParams {
  idempotency_key?: string
}

export interface BandStoreRefund extends stripe.Refund {}

export interface CreateAccountHolderRequest
  extends stripe.CustomerCreateParams {}

export interface UpdateAccountHolderRequest
  extends stripe.CustomerUpdateParams {}

export interface BandStoreAccountHolder extends stripe.Customer {}

export interface BandStorePaymentMethod extends stripe.PaymentMethod {
  account_holder_id?: string
}

export interface BandStorePaymentMethodSession extends stripe.SetupIntent {}
