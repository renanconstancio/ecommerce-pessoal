export enum IEnumSalesStatus {
  ORDER_MADE = 'ORDER_MADE',
  AWAITING_PAYMENT = 'AWAITING_PAYMENT',
  PAYMENT_UNDER_REVIEW = 'PAYMENT_UNDER_REVIEW',
  PAYMENT_ACCEPT = 'PAYMENT_ACCEPT',
  PAYMENT_NOT_APPROVED = 'PAYMENT_NOT_APPROVED',
  PAYMENT_NOT_MADE = 'PAYMENT_NOT_MADE',
  ORDER_IN_PRODUCTION = 'ORDER_IN_PRODUCTION',
  ORDER_IN_STOCK_PICKING = 'ORDER_IN_STOCK_PICKING',
  ORDER_IN_TRANSPORT = 'ORDER_IN_TRANSPORT',
  AWAITING_WITHDRAWAL = 'AWAITING_WITHDRAWAL',
  ORDER_DELIVERED = 'ORDER_DELIVERED',
  ORDER_CANCELED = 'ORDER_CANCELED',
}